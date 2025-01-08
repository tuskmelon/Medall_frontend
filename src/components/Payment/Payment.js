import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../../api'
import axios from 'axios'
import { Dna } from 'react-loader-spinner'

import '../../styles/Payment/Payment.scss'

// import { CartContext } from '../../context/Cart'
// import { PaymentStatusContext } from '../../context/PaymentStatus'
import { CartContext } from '../../context/Cart'

const Payment = () => {
    let navigate = useNavigate();

    const [showLoader, setShowLoader] = useState(false);

    // const paymentStatusContext = useContext(PaymentStatusContext)
    const cartContext = useContext(CartContext);

    const MedallAPIToken = "TWVkYWxsOlRXVmtZV3hzUURNeE1USjI=";
    // RazorPay initiating payment integration Start

    const initPayment = (data) => {
        // console.log(data, "DATA from Init payment")
        setShowLoader(true);

        const options = {
            key: "rzp_live_oWoKTQsg6AIk1Q",
            amount: data.amount,
            currency: data.currency,
            notes: {
                website: "website"
            },
            handler: async (response) => {
                // console.log(response, "Handler Response");

                window.sessionStorage.setItem("razorpaymentID", JSON.stringify(response.razorpay_payment_id))

                // Capture Payment code Start 
                await API.post('/api/payment/capture-payment', { paymentId: response.razorpay_payment_id, amount: data.amount })
                    .then(res => console.log(res, "Success!, Payment capture response"))
                    .catch(err => console.log(err, "Error Capturing Payment"))
                // Capture Payment code END

                // console.log(data.amount / 100, "Amount Sent to CRM Dashboard");
                let place = cartContext.cartState.appointmentDetails.place

                //   Fetching orderID for sending to CRM dashboard
                const OrderID = window.sessionStorage.getItem('orderID');
                const razorPaymentID = JSON.parse(window.sessionStorage.getItem("razorpaymentID"));
                const paymentDetails = {
                    sourceid: "10019405",
                    APIKEY: "ABBDD79AEEC8224AB406",
                    OnlinePaymentStaus: "PAID",
                    OnlinePaymentAmount: data.amount / 100,
                    PaymentTransId: razorPaymentID ? razorPaymentID : "",
                    PaymentType: "PAID",
                    Bookingid: OrderID,
                    IsPromocodeused: "0",
                    Promocode: "",
                    Objtestnew: "",
                    Objtestold: "",
                    Homecollection: +place,
                    amount: data.amount / 100,
                    SumOfDisAmt: "",
                    SumOfPayAmt: data.amount / 100,
                    SumOfTotalAmt: data.amount / 100,
                    DiscountType: "",
                    DiscountAmount: ""
                }
                // console.log(data.amount / 100, "Amount Sent to CRM Dashboard");

                const userInfo = JSON.parse(window.localStorage.getItem("medallUserInfo"));
                const cartItems = JSON.parse(window.sessionStorage.getItem("cartItems"))

                // Using flatMap and map to create a single array with product names and prices
                const productNameAndPriceArray = Object.values(cartItems).flatMap(packArray =>
                    packArray.map(pack => ({ name: pack.healthPackageName || pack.testName, price: pack.healthPackagePrice || pack.testPrice }))
                );

                let recursiveCallCount = 0;
                async function sendPaymentDetailsTOCRM() {
                    //Sending Payment Details to CRM
                    await axios.post('https://medinfra.medallcorp.in/MedallTPIntegrationAPI/api/updatepayment', paymentDetails, {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': `Basic ${MedallAPIToken}`,
                            'Content-Type': 'application/json',
                        },
                    }).then(async (response) => {
                        console.log(paymentDetails, "Payment Details");
                        console.log(response, "response of sending payment details to CRM");

                        // If payment details is successfully sent to CRM, then sending the transaction details to MongoDB
                        if (response.data === "Success") {
                            await API.post('/api/transactions-history', {
                                name: userInfo.name, mobileNumber: userInfo.mobileNumber, paymentStatus: true, products: productNameAndPriceArray, orderId: OrderID, amount: data.amount / 100, responseLog: JSON.stringify({ note: "success" })
                            })
                                .then(res => {
                                    if (res.data.status === "success") {
                                        const razorPaymentId = JSON.parse(window.sessionStorage.getItem("razorpaymentID"));

                                        window.sessionStorage.setItem("paymentDetails", JSON.stringify({ bookingId: OrderID, paymentId: razorPaymentId, date: new Date().toISOString().split('T')[0], time: new Date().toLocaleTimeString() }));

                                        // send payment details to LeadSquare API as well 
                                        sendPaymentDetailsToLeadSquare();
                                    }
                                    console.log(res, "success!, transaction details sent to DB")
                                }
                                )
                                .catch(err => {
                                    window.sessionStorage.removeItem("cartItems");
                                    console.log(err, "Error!, Transaction details not sent to server")
                                }
                                )

                        } else {
                            await API.post('/api/transactions-history', {
                                name: userInfo.name, mobileNumber: userInfo.mobileNumber, paymentStatus: true, products: productNameAndPriceArray, orderId: OrderID, amount: data.amount / 100, responseLog: JSON.stringify({ ...paymentDetails, APIResponse: response.data, note: "Payment details failed to sent to CRM" })
                            })
                                .then(res => {
                                    if (recursiveCallCount <= 2) {
                                        recursiveCallCount = recursiveCallCount + 1;
                                        sendPaymentDetailsTOCRM();
                                    } else {
                                        setShowLoader(false);
                                        //Ask what to do if API continues to fails instead of redirecting to Thanks page
                                        //Redirect to home page
                                        // navigate("/thanks");
                                    }
                                    console.log("Error! sending payment details to CRM")
                                })
                                .catch(err => console.log("Error! sending payment details to CRM"))
                        }

                    }).catch(async (error) => {
                        console.error(error, "Error! sending payment details to CRM");

                        await API.post('/api/transactions-history', {
                            name: userInfo.name, mobileNumber: userInfo.mobileNumber, paymentStatus: true, products: productNameAndPriceArray, orderId: OrderID, amount: data.amount / 100, responseLog: JSON.stringify({ ...paymentDetails, APIResponse: error, note: "Payment details failed to send to CRM (inside catch)" })
                        })
                            .then(res => console.log("Error! sending payment details to CRM (inside catch)"))
                            .catch(err => console.log("Error! sending payment details to CRM (inside catch)"))
                    });
                }

                sendPaymentDetailsTOCRM();

                async function sendPaymentDetailsToLeadSquare() {
                    const lsqID = JSON.parse(window.sessionStorage.getItem("lsqID"));
                    const paymentInfo = JSON.parse(window.sessionStorage.getItem("paymentDetails"));
                    function getCurrentUTCDateTime() {
                        const now = new Date();
                        const year = now.getUTCFullYear();
                        const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
                        const day = String(now.getUTCDate()).padStart(2, '0');
                        const hours = String(now.getUTCHours()).padStart(2, '0');
                        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
                        const seconds = String(now.getUTCSeconds()).padStart(2, '0');

                        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                    }
                    const paymentDetails = {
                        "RelatedProspectId": lsqID.relatedProspectId,
                        "RelatedOpportunityId": lsqID.createdOpportunityId,
                        "ActivityEvent": 209,
                        "ActivityNote": "Your Activity Note",
                        "ActivityDateTime": getCurrentUTCDateTime(),
                        "Fields": [
                            {
                                "SchemaName": "mx_Custom_1", //API Key
                                "Value": "ABBDD79AEEC8224AB406"
                            },
                            {
                                "SchemaName": "mx_Custom_2",//source ID
                                "Value": "10019405"
                            },
                            {
                                "SchemaName": "mx_Custom_3",//Online payment status
                                "Value": "PAID"
                            },
                            {
                                "SchemaName": "mx_Custom_4",//online payment amount
                                "Value": data.amount / 100
                            },
                            {
                                "SchemaName": "mx_Custom_5",//Payment transactionID
                                "Value": paymentInfo.paymentId
                            },
                            {
                                "SchemaName": "mx_Custom_6",//Payment Type
                                "Value": "PAID"
                            },
                            {
                                "SchemaName": "mx_Custom_7", //Booking ID
                                "Value": paymentInfo.bookingId
                            },
                            {
                                "SchemaName": "mx_Custom_8", //Ispromocodeused
                                "Value": "0"
                            },
                            {
                                "SchemaName": "mx_Custom_9",//Promocode
                                "Value": ""
                            },
                            {
                                "SchemaName": "mx_Custom_10",//Objtestnew
                                "Value": "null"
                            },
                            {
                                "SchemaName": "mx_Custom_11",//Objtestold
                                "Value": "null"
                            },
                            {
                                "SchemaName": "mx_Custom_12",//Home collection
                                "Value": +place
                            },
                            {
                                "SchemaName": "mx_Custom_13",//amount
                                "Value": data.amount / 100
                            },
                            {
                                "SchemaName": "mx_Custom_14",//sum of dis amt
                                "Value": ""
                            },
                            {
                                "SchemaName": "mx_Custom_15",//sum of pay amt
                                "Value": data.amount / 100
                            },
                            {
                                "SchemaName": "mx_Custom_16",//Sum of total amt
                                "Value": data.amount / 100
                            },
                            {
                                "SchemaName": "mx_Custom_17",//discount type 
                                "Value": ""
                            },
                            {
                                "SchemaName": "mx_Custom_18", //discount amount
                                "Value": ""
                            },
                            {
                                "SchemaName": "mx_Custom_19",// source name
                                "Value": "test"
                            }
                        ]
                    }

                    await axios.post("https://api-in21.leadsquared.com/v2/ProspectActivity.svc/Create?accessKey=u$rcbd813924f16d9009588e1cf5f302960&secretKey=382cc483428967d41fb0abe2c43c046366ca6813", paymentDetails, {
                        headers: {
                            'Content-Type': 'application/json',
                        },

                    })
                        .then(res => {
                            if (res.data.Status === "Success") {
                                emptyCart();
                            }
                            console.log(res, " Post Activity on Opportunity Response");
                        })
                        .catch(err => console.log(err, "Error inPost Activity on Opportunity Response (LeadSquare) API"))
                }

                function emptyCart() {
                    if (response.razorpay_payment_id !== "") {
                        // paymentStatusContext.paymentStatusDispatch({ type: 'showThankYouPage' });
                        setShowLoader(false);
                        setTimeout(() => {
                            // paymentStatusContext.paymentStatusDispatch({ type: 'closeThankYouPage' });

                            // Empty Cart 
                            cartContext.cartDispatch({ type: 'removeLabTests' });
                            cartContext.cartDispatch({ type: 'removeHealthPackages' });

                            //Redirect to home page
                            navigate("/thanks");
                        }, 1000)
                    }
                }
            },
            "modal": {
                "ondismiss": function () {
                    console.log('Checkout form closed');
                    setShowLoader(false);
                }
            },
            theme: {
                color: "3399cc",
            },
        }

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }
    // RazorPay initiating payment integration End

    let amountToBePaidByUser = 0;
    const handlePayment = async (e) => {
        amountToBePaidByUser = 0
        e.preventDefault();
        const orderURL = "/api/payment/create-order"

        // Fetching Amount from database
        // NOTE: Amount will be sent by fecthing user cart items price 
        const userInfo = JSON.parse(window.localStorage.getItem('medallUserInfo'));
        // console.log(userInfo.cart);
        await API.get(`/api/cart/${userInfo.cart}`)
            .then(res => {
                console.log(res, "Fetched Cart Success");
                const cartData = res.data.cart;

                cartData.healthPackages.map(cartItem => {
                    amountToBePaidByUser += (+cartItem.healthPackagePrice)
                });

                cartData.tests.map(cartItem => amountToBePaidByUser += (+cartItem.testPrice));

                window.sessionStorage.setItem("cartItems", JSON.stringify({ healthPack: res.data.cart.healthPackages, tests: res.data.cart.tests }))
            })
            .catch(err => console.log(err, 'Error fecthing Cart'))

        // RazorPay integration Start
        const FINAL_AMOUNT = amountToBePaidByUser * 100;

        // Payable amount goes to below "amount" key
        await API.post(orderURL, { amount: FINAL_AMOUNT })
            .then(res => {
                // console.log(res.data);
                console.log('Response from razorPay (ORDER CREATED)');
                // Initiating Payment (as per razorpay Documentation)
                initPayment(res.data);

            })
            .catch(async (err) => {
                //   Fetching orderID for sending to CRM dashboard
                const OrderID = window.sessionStorage.getItem('orderID');
                const cartItems = JSON.parse(window.sessionStorage.getItem("cartItems"))

                // Using flatMap and map to create a single array with product names and prices
                const productNameAndPriceArray = Object.values(cartItems).flatMap(packArray =>
                    packArray.map(pack => ({ name: pack.healthPackageName || pack.testName, price: pack.healthPackagePrice || pack.testPrice }))
                );

                //Sending response to "Transaction History API" if Razorpay API fails
                await API.post('/api/transactions-history', {
                    name: userInfo.name, mobileNumber: userInfo.mobileNumber, paymentStatus: false, products: productNameAndPriceArray, orderId: OrderID, amount: FINAL_AMOUNT / 100, responseLog: "error in razorpay"
                })
                    .then(res => console.log("Error! sending payment details to CRM"))
                    .catch(err => console.log("Error! sending payment details to CRM"))

                console.log(err, "Error from razorpay")
            })
        // RazorPay integration END
    }

    useEffect(() => {
        const loadRazorpayScript = async () => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.head.appendChild(script);
        };

        loadRazorpayScript();
    }, [])


    return (
        <>
            {
                showLoader && <div className='payment-loader'>
                    <Dna
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                    Please Wait...
                </div>
            }

            <div className="payment">
                <h2 className='payment__title'>Payment</h2>
                <div className="payment__payment-btn-container">
                    <button className='payment__complete-order-btn' onClick={(e) => handlePayment(e)}>PAY NOW</button>
                </div>
            </div>
        </>
    )
}

export default Payment