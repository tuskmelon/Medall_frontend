import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Dna } from 'react-loader-spinner'

import '../../styles/Address/Address.scss'

// import Edit from '../../assets/icons/edit.svg'

import API from '../../api'

import { AddressContext } from '../../context/Address'
import { UserContext } from '../../context/User'
import { CartContext } from '../../context/Cart'


const Address = ({ showPaymentSlide }) => {
    const addressContext = useContext(AddressContext);
    const userContext = useContext(UserContext);
    console.log(UserContext,"UserContext")
    const cartContext = useContext(CartContext);
    const userInformation = JSON.parse(window.localStorage.getItem('medallUserInfo'));

    const [activePermanentAddressForm, setActivePermanentAddressForm] = useState('active');
    const [activeOfficeAddressForm, setActiveOfficeAddressForm] = useState('');
    const [activeOtherAddressForm, setActiveOtherAddressForm] = useState('');
    const [showEmptyInputFieldError, setShowEmptyInputFieldError] = useState('');
    const [isDisplayLoader, setIsDisplayLoader] = useState(false);
    const [isDisableFormSubmitButton, setIsDisableFormSubmitButton] = useState(false);

    const notifySomethingWrong = () => toast("❌ Try again!, Something Went Wrong", { draggable: true });
    const notifyDateError = () => toast("⚠️ Choose Date", { draggable: true });
    const notifyTimeError = () => toast("⚠️ Choose Time", { draggable: true });

    const [address, setAddress] = useState({
        permanentAddress: {
            houseOrFlatNum: '',
            area: '',
            landmark: '',
            pincode: '',
            contactPerson: '',
            secondaryContactPerson: ''
        },
        officeAddress: {
            houseOrFlatNum: '',
            area: '',
            landmark: '',
            pincode: '',
            contactPerson: '',
            secondaryContactPerson: ''
        },
        otherAddress: {
            houseOrFlatNum: '',
            area: '',
            landmark: '',
            pincode: '',
            contactPerson: '',
            secondaryContactPerson: ''
        },
    });


    // console.log(address, 'This is final address');

    const handlePermanentAddress = () => {
        setActivePermanentAddressForm('active');
        setActiveOfficeAddressForm('');
        setActiveOtherAddressForm('');

        if (activePermanentAddressForm === 'active') {
            setAddress({
                ...address, officeAddress: {
                    houseOrFlatNum: '',
                    area: '',
                    landmark: '',
                    pincode: '',
                    contactPerson: '',
                    secondaryContactPerson: ''
                },
                otherAddress: {
                    houseOrFlatNum: '',
                    area: '',
                    landmark: '',
                    pincode: '',
                    contactPerson: '',
                    secondaryContactPerson: ''
                },
            })
        }
    }

    const handleOfficeAddress = () => {
        setActiveOfficeAddressForm('active');
        setActivePermanentAddressForm('');
        setActiveOtherAddressForm('');

        if (activeOfficeAddressForm === 'active') {
            setAddress({
                ...address, permanentAddress: {
                    houseOrFlatNum: '',
                    area: '',
                    landmark: '',
                    pincode: '',
                    contactPerson: '',
                    secondaryContactPerson: ''
                },
                otherAddress: {
                    houseOrFlatNum: '',
                    area: '',
                    landmark: '',
                    pincode: '',
                    contactPerson: '',
                    secondaryContactPerson: ''
                },
            })
        }
    }

    const handleOtherAddress = () => {
        setActiveOtherAddressForm('active');
        setActivePermanentAddressForm('');
        setActiveOfficeAddressForm('');

        if (activeOtherAddressForm === 'active') {
            setAddress({
                ...address, permanentAddress: {
                    houseOrFlatNum: '',
                    area: '',
                    landmark: '',
                    pincode: '',
                    contactPerson: '',
                    secondaryContactPerson: ''
                },
                officeAddress: {
                    houseOrFlatNum: '',
                    area: '',
                    landmark: '',
                    pincode: '',
                    contactPerson: '',
                    secondaryContactPerson: ''
                },
            })
        }
    }

    useEffect(() => {
        // Finally set Address
        addressContext.addressDispatch({ type: 'submitAddress', payload: address });
    }, [address])

    // Disable Scroll when loader is dispalyed 
    useEffect(() => {
        if (isDisplayLoader) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Cleanup on component unmount
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isDisplayLoader]);


    // If any of the input of form is changed, enable form submit buttton 
    useEffect(() => {
        setIsDisableFormSubmitButton(false);
    }, [address, cartContext.cartState.appointmentDetails.date, cartContext.cartState.appointmentDetails.time])



    // SUBMIT Adderss only if all the fields of form is fiiled
    const submitAddress = async (addressType) => {
        setIsDisableFormSubmitButton(true);

        // If manadtory fields are empty show warning toast else proceed 
        if (address.permanentAddress.houseOrFlatNum === "" || address.permanentAddress.pincode === "" || address.permanentAddress.contactPerson === "") {
            setShowEmptyInputFieldError('Please enter mandatory* fields');
        }
        else if (cartContext.cartState.appointmentDetails.date === "" || undefined) {
            notifyDateError();
        }
        else if (cartContext.cartState.appointmentDetails.time === "" || undefined) {
            notifyTimeError();
        }
        else {

            const addressData = {
                permanentAddress: addressContext.addressState.permanentAddress,
                officeAddress: addressContext.addressState.officeAddress,
                otherAddress: addressContext.addressState.otherAddress,
                medallId: userContext.userState.userMedallId,
            }

            // Sending Data to CRM dashboard 
            // setting address to send at CRM also to MongoDB (but not written logic to send to mongodb)
            let finalAddressInfo;
            if (addressType === "submitPermanentAddress") {
                finalAddressInfo = addressData.permanentAddress
            } else if (addressType === "submitOfficeAddress") {
                finalAddressInfo = addressData.officeAddress
            } else if (addressType === "submitOtherAddress") {
                finalAddressInfo = addressData.otherAddress
            }

            const userInfo = JSON.parse(window.localStorage.getItem('medallUserInfo'));
            let testDetailsFinal = []
            let setTestCorpIDAndPrice = ""
            let setHealthPackagesCorpId = ""

            // Sending Address details To MongoDB 
            console.log(addressData);
            await API.post('/api/address/', addressData)
                .then(res => {
                    console.log(res, "Address Submit Response", "Data:", addressData)
                    if (res.data.status === "success") {
                        window.scrollTo(0, 0);
                        fetchCart();
                        console.log(res, 'successfully sent Address details to DB');
                    } else {
                        notifySomethingWrong();
                        setIsDisableFormSubmitButton(false);
                    }
                })
                .catch(err => {
                    notifySomethingWrong();
                    setIsDisableFormSubmitButton(false);
                    console.log(err, 'Error! submitting Address form at checkout')
                })


            // Fetch Cart data To send at CRM Dashbaord
            async function fetchCart() {
                await API.get(`/api/cart/${userInfo.cart}`)
                    .then(res => {
                        console.log(res, "Fetched Cart Success at Address");
                        const cartData = res.data.cart;

                        // Setting Corp id for tests
                        if (cartData.tests.length !== 0) {
                            // cartData.tests.map(cartItem => setTestCorpIDAndPrice += (cartItem.corpId + "|" + cartItem.testPrice.toString() + ","));
                            // testDetailsFinal.push(setTestCorpIDAndPrice);
                            cartData.tests.map(cartItem => testDetailsFinal.push(cartItem.corpId + "|" + cartItem.testPrice.toString()))
                        }

                        // Setting Corp id for packages
                        if (cartData.healthPackages.length !== 0) {
                            // cartData.healthPackages.map(cartItem => setHealthPackagesCorpId += (cartItem.corpId + "|" + cartItem.healthPackagePrice.toString()) + ",");
                            // testDetailsFinal.push(setHealthPackagesCorpId);
                            cartData.healthPackages.map(cartItem => testDetailsFinal.push(cartItem.corpId + "|" + cartItem.healthPackagePrice.toString()))
                        }

                        if (res.data.status === "success") {
                            updateCart();
                        } else {
                            notifySomethingWrong();
                            setIsDisableFormSubmitButton(false);
                        }

                    }
                    ).catch(err => {
                        notifySomethingWrong();
                        setIsDisableFormSubmitButton(false);
                        console.log(err, 'Error fecthing Cart at Address');
                    }
                    )

                console.log(setTestCorpIDAndPrice, setHealthPackagesCorpId, testDetailsFinal, "CropID and Prices set");
            }
            // console.log(finalAddressInfo, 'submit this addresss')

            // Setting Data to send at API
            const appointmentDate = cartContext.cartState.appointmentDetails.date
            // setting Appointment Time
            const appointmentTime = cartContext.cartState.appointmentDetails.time
            let finalArea;
            let finalPincode;

            if (addressType === "submitPermanentAddress") {
                finalArea = address.permanentAddress.area
                finalPincode = address.permanentAddress.pincode

            } else if (addressType === "submitOfficeAddress") {
                finalArea = address.officeAddress.area
                finalPincode = address.officeAddress.pincode

            } else if (addressType === "submitOtherAddress") {
                finalArea = address.otherAddress.area
                finalPincode = address.otherAddress.pincode
            }

            const mobileNumber = userContext.userState.mobile
            const salutation = userContext.userState.salutation.trim().replace(/\s+/g, ' ')
            const email = userContext.userState.email
            // Looping through cart members and concatinating each member names 
            // let patientName = userContext.userState.cartMembers.reduce((patientNames, patient) => patientNames + patient.name + ', ', "")
            let patientName = userContext.userState.cartMembers.length === 0 ? userContext.userState.name : userContext.userState.cartMembers.reduce((patientNames, patient) => patientNames + patient.name + ', ', "")

            // Setting AGE 
            // let patientAge = userContext.userState.cartMembers.reduce((patientAge, patient) => patientAge + (Math.floor((new Date() - new Date(patient.dateOfBirth).getTime()) / 3.15576e+10)).toString() + ", ", "")

            // Setting Date of birth
            // let patientDateOfBirth = userContext.userState.cartMembers.reduce((patientDOB, patient) => patientDOB + patient.dateOfBirth + ', ', "")

            // Setting Place to take test 
            let place = cartContext.cartState.appointmentDetails.place

            // Setting full Address 
            let fullAddress = finalAddressInfo.houseOrFlatNum + " " + finalAddressInfo.area + " " + finalAddressInfo.landmark + " " + finalAddressInfo.pincode

            // Cart Details 
            const cartProducts = [cartContext.cartState.healthPackages, cartContext.cartState.tests]
            console.log(patientName, 'patientName');



            const MedallAPIToken = "TWVkYWxsOlRXVmtZV3hzUURNeE1USjI=";
            const userMedallIdFromContext = userContext.userState.userMedallId

            // Updated Cart with new OrderId
            // Doing this because if user submitted Address form and navigated to Payment, then again he/she came back to address form or members form then again new" Order ID" will be generated.
            const generateUniqueOrderId = (Math.floor(Math.random() * 9000 + 1000)).toString() + (Math.floor(Math.random() * 9000 + 1000)).toString() + userMedallIdFromContext

            window.sessionStorage.setItem("orderID", generateUniqueOrderId);
            const uniqueOrderId = window.sessionStorage.getItem('orderID');

            const cartData = {
                bookingId: uniqueOrderId,
                tests: cartContext.cartState.tests,
                healthPackages: cartContext.cartState.healthPackages,
                medallId: userContext.userState.userMedallId
            }

            const userDetail = JSON.parse(window.localStorage.getItem('medallUserInfo'));
            // Updating Cart
            async function updateCart() {
                await API.put(`/api/cart/${userDetail.cart}`, cartData)
                    .then(res => {
                        console.log(res, 'Cart Items Updated');

                        if (res.data.status === "success") {
                            sentDetailsToCRM();
                        } else {
                            notifySomethingWrong();
                            setIsDisableFormSubmitButton(false);
                            setIsDisableFormSubmitButton(false);
                        }
                    })
                    .catch(err => {
                        notifySomethingWrong();
                        setIsDisableFormSubmitButton(false);
                        console.log(err, 'Error sending cart data to server after submitting address form');
                    })
            }

            setIsDisplayLoader(true);

            const patientData = JSON.parse(window.sessionStorage.getItem("patientData"));
            const orderData = {
                OrderID: uniqueOrderId,
                Patientid: "New",
                Centerid: "18",
                AppointmentDate: appointmentDate,
                AreaID: "1",
                AreaName: finalArea,
                Pincode: finalPincode,
                MobileNo: mobileNumber,
                Salutation: userDetail.namePrefix,
                PatientName: patientName.substring(0, 45),
                Age: +patientData.age <= 0 ? "1" : patientData.age,
                DateOfBirth: patientData.dob,
                Gender: patientData.gender,
                Address: fullAddress,
                EmailID: email,
                Testdetails: testDetailsFinal,
                HomeCollection: +place,
                relationid: "0",
                FullArea: finalArea,
                SourceName: "Medall Shop Ecommerce",
                Campaign: "",
                LeadID: "",
                AppointmentTime: appointmentTime === undefined ? "" : appointmentTime,
                PaymentType: "",
                sourceid: "10019405",
                APIKEY: "ABBDD79AEEC8224AB406"
            }

            console.log(orderData, 'Final Order Data')

            async function sentDetailsToCRM() {
                await axios.post("https://medinfra.medallcorp.in/MedallTPIntegrationAPI/api/orderRequest", orderData, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Basic ${MedallAPIToken}`,
                        'Content-Type': 'application/json',
                    },

                }).then(async (response) => {
                    console.log(response, "Order Submitted Successfully");

                    const responseFromCRM = response.data.responseFromMedallStatus;
                    console.log(responseFromCRM, "responseFromCRM order request api");

                    let amountToBePaidByUser = 0;

                    //   Fetching cart items to set at session storage
                    await API.get(`/api/cart/${userInfo.cart}`)
                        .then(res => {

                            if (res.data.status === "success") {
                                amountToBePaidByUser = 0;
                                console.log(res, "Fetched Cart Success under CRM API");
                                const cartData = res.data.cart;

                                cartData.healthPackages.map(cartItem => {
                                    amountToBePaidByUser += (+cartItem.healthPackagePrice)
                                });

                                cartData.tests.map(cartItem => amountToBePaidByUser += (+cartItem.testPrice));

                                window.sessionStorage.setItem("cartItems", JSON.stringify({ healthPack: res.data.cart.healthPackages, tests: res.data.cart.tests }))

                                sendBookingDetailsToPortal();
                            } else {
                                notifySomethingWrong();
                                setIsDisplayLoader(false);
                                setIsDisableFormSubmitButton(false);
                                console.log(res, "failed to fetch cart details");
                            }
                        })
                        .catch(err => {
                            notifySomethingWrong();
                            setIsDisplayLoader(false);
                            setIsDisableFormSubmitButton(false);
                            console.log(err, 'Error fecthing Cart')
                        }
                        )

                    async function sendBookingDetailsToPortal() {
                        const cartItems = JSON.parse(window.sessionStorage.getItem("cartItems"));
                        // Using flatMap and map to create a single array with product names and prices
                        const productNameAndPriceArray = Object.values(cartItems).flatMap(packArray =>
                            packArray.map(pack => ({ name: pack.healthPackageName || pack.testName, price: pack.healthPackagePrice || pack.testPrice }))
                        );

                        if (responseFromCRM === "Success") {

                            let totalPrice = 0;
                            cartItems.healthPack.forEach(healthPackage => {
                                totalPrice += parseFloat(healthPackage.healthPackagePrice) || 0;
                            });

                            // Calculate test prices
                            cartItems.tests.forEach(test => {
                                totalPrice += parseFloat(test.testPrice) || 0;
                            });

                            const bookingData = JSON.stringify({ ...orderData, note: 'Order Placed Successfully' });

                            await API.post('/api/transactions-history', {
                                name: patientName,
                                mobileNumber: mobileNumber,
                                paymentStatus: false,
                                products: productNameAndPriceArray,
                                orderId: uniqueOrderId,
                                amount: totalPrice,
                                responseLog: bookingData
                            })
                                .then(res => {
                                    if (res.data.status === "success") {
                                        console.log(bookingData, "Order Data");
                                        console.log(res, "Sent Order details to Portal");

                                        // After sending Order Details to CRM and Portal send the detail to Lead Square as well
                                        sendOrderDetailToLeadSquare();
                                    } else {
                                        notifySomethingWrong();
                                        setIsDisplayLoader(false);
                                        setIsDisableFormSubmitButton(false);
                                    }
                                })
                                .catch(err => {
                                    notifySomethingWrong();
                                    setIsDisableFormSubmitButton(false);
                                    setIsDisplayLoader(false);
                                    console.log(err, "Error! sending Order details to Portal")
                                })

                        } else {
                            let totalPrice = 0;
                            cartItems.healthPack.forEach(healthPackage => {
                                totalPrice += parseFloat(healthPackage.healthPackagePrice) || 0;
                            });

                            // Calculate test prices
                            cartItems.tests.forEach(test => {
                                totalPrice += parseFloat(test.testPrice) || 0;
                            });

                            await API.post('/api/transactions-history', {
                                name: patientName, mobileNumber: mobileNumber, paymentStatus: false, products: productNameAndPriceArray, orderId: uniqueOrderId, amount: totalPrice, responseLog: JSON.stringify({ ...orderData, APIResponse: responseFromCRM, note: "Order API Failed" })
                            })
                                .then(res => {
                                    notifySomethingWrong();
                                    setIsDisableFormSubmitButton(false);
                                    setIsDisplayLoader(false);

                                    console.log(res, {
                                        name: patientName, mobileNumber: mobileNumber, paymentStatus: false, products: productNameAndPriceArray, orderId: uniqueOrderId, amount: totalPrice, responseLog: JSON.stringify({ note: "Order Failed" })
                                    }, "Error! Sending Order details to CRM")
                                })
                                .catch(err => {
                                    notifySomethingWrong();
                                    setIsDisplayLoader(false);
                                    setIsDisableFormSubmitButton(false);
                                    console.log(err, "Error! Sending Booking details to CRM")
                                })
                        }
                    }

                    async function sendOrderDetailToLeadSquare() {
                        const customerInfo = JSON.parse(window.localStorage.getItem("medallUserInfo"));
                        console.log(appointmentTime, "Appointment time inside LSQ");

                        function getUTCTime() {
                            // Input time in IST format (14:06)
                            const istTime = appointmentTime === (undefined || "") ? "15:44:56" : appointmentTime;

                            console.log(istTime, "IST time inside lsq");
                            // Split the input time into hours and minutes
                            const [hours, minutes] = istTime.split(":").map(Number);

                            // Create a new Date object and set the time to IST
                            const istDate = new Date();
                            istDate.setUTCHours(hours - 5);
                            istDate.setUTCMinutes(minutes - 30);

                            // Format the UTC time with hours, minutes, seconds and return it
                            return istDate.toISOString().slice(11, 19);
                        }

                        const orderData = {
                            "LeadDetails": [
                                {
                                    "Attribute": "FirstName",
                                    "Value": customerInfo.name
                                },
                                {
                                    "Attribute": "EmailAddress",
                                    "Value": customerInfo.email
                                },
                                {
                                    "Attribute": "Phone",
                                    "Value": customerInfo.mobileNumber
                                },
                                {
                                    "Attribute": "Source", //hard code
                                    "Value": "Online"
                                },
                                {
                                    "Attribute": "mx_Sub_Source", //hard code
                                    "Value": "Brand Website"
                                },
                                {
                                    "Attribute": "SearchBy",
                                    "Value": "Phone"
                                }
                            ],
                            "Opportunity": {
                                "OpportunityEventCode": 12000,
                                "OpportunityNote": "Opportunity capture from Website",
                                "Fields": [
                                    {
                                        "SchemaName": "mx_Custom_1", //Name of opportunity pass as (Name of patient) - Appointment
                                        "Value": `${customerInfo.name}-Appointment`
                                    },
                                    {
                                        "SchemaName": "mx_Custom_2", // hard code value as prospecting
                                        "Value": "Prospecting"
                                    },
                                    {
                                        "SchemaName": "mx_Custom_16", //hard code value as Website
                                        "Value": "Website"
                                    },

                                    {
                                        "SchemaName": "mx_Custom_4", // please send in this format and in GMT (IST -5h 30m)
                                        // "Value": getCurrentUTCDateTime()
                                        "Value": appointmentDate + " " + getUTCTime()
                                    },
                                    {
                                        "SchemaName": "mx_Custom_17", // Web payment type
                                        "Value": "Payment type"
                                    },
                                    {
                                        "SchemaName": "mx_Custom_14", // pin code
                                        "Value": finalPincode
                                    },
                                    {
                                        "SchemaName": "mx_Custom_12", // if home collection send “Home Collection” if lab visit pass “Lab Visit”
                                        "Value": +place === 0 ? "Lab Visit" : "Home Collection"
                                    },
                                    {
                                        "SchemaName": "Status", //hard code
                                        "Value": "Open"
                                    }
                                ]
                            }
                        }
                        console.log(orderData, "Data sent to LSQ");
                        await axios.post("https://api-in21.leadsquared.com/v2/OpportunityManagement.svc/Capture?accessKey=u$rcbd813924f16d9009588e1cf5f302960&secretKey=382cc483428967d41fb0abe2c43c046366ca6813", orderData, {
                            headers: {
                                'Content-Type': 'application/json',
                            },

                        }).then(res => {
                            console.log(res, "LeadSquare Capture opportunities API response");
                            if (res.data.Status === 0) {
                                window.sessionStorage.setItem("lsqID", JSON.stringify({
                                    relatedProspectId: res.data.RelatedProspectId,
                                    createdOpportunityId: res.data.CreatedOpportunityId
                                }));
                                sendTestDetailToLeadSquare();

                            } else {
                                notifySomethingWrong();
                                setIsDisplayLoader(false);
                                setIsDisableFormSubmitButton(false);
                            }
                        }).catch(err => {
                            notifySomethingWrong();
                            setIsDisableFormSubmitButton(false);
                            setIsDisplayLoader(false);
                            console.log(err, "Error!, LeadSquare Capture opportunities API Failed");
                        })
                    }

                    async function sendTestDetailToLeadSquare() {
                        const productsInCart = JSON.parse(window.sessionStorage.getItem("cartItems"));
                        const lsqID = JSON.parse(window.sessionStorage.getItem("lsqID"));
                        console.log(productsInCart, "product in cart");
                        const productArray = [...productsInCart.healthPack, ...productsInCart.tests];
                        console.log(productArray);
                        let schemaNumber = 18

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

                        function getUTCTime() {
                            // Input time in IST format (14:06)
                            const istTime = appointmentTime === (undefined || "") ? "15:44:56" : appointmentTime;

                            // Split the input time into hours and minutes
                            const [hours, minutes] = istTime.split(":").map(Number);

                            // Create a new Date object and set the time to IST
                            const istDate = new Date();
                            istDate.setUTCHours(hours - 5);
                            istDate.setUTCMinutes(minutes - 30);

                            // Format the UTC time with hours, minutes, seconds and return it
                            return istDate.toISOString().slice(11, 19);
                        }

                        function setSchemaNumber(schemaNo, indexNo) {
                            if (schemaNo + indexNo === 32) {
                                schemaNumber = schemaNumber + 1
                                return 33
                            } else {
                                return schemaNo + indexNo
                            }
                        }

                        const productDetailToSend = []
                        console.log(productArray, "Product Array in Addressss");
                        productArray.map((product, index) => productDetailToSend.push({
                            "SchemaName": `mx_Custom_${setSchemaNumber(schemaNumber, index)}`,
                            "Value": "",
                            "Fields": [
                                {
                                    "SchemaName": "mx_CustomObject_1",
                                    "Value": product.healthPackageName ? product.healthPackageName : product.testName
                                },
                                {
                                    "SchemaName": "mx_CustomObject_2",
                                    "Value": product.corpId
                                },
                                {
                                    "SchemaName": "mx_CustomObject_3",
                                    "Value": product.healthPackagePrice ? product.healthPackagePrice : product.testPrice
                                },
                            ]

                        }));

                        const orderData = {
                            "RelatedProspectId": lsqID.relatedProspectId,
                            "RelatedOpportunityId": lsqID.createdOpportunityId,
                            "ActivityEvent": "208",
                            "ActivityNote": "Your Activity Note",
                            "ActivityDateTime": getCurrentUTCDateTime(),
                            "Fields": [
                                {
                                    "SchemaName": "mx_Custom_60",
                                    "Value": "10019405"
                                },
                                ...productDetailToSend,
                                {
                                    "SchemaName": "mx_Custom_56",
                                    "Value": "Medall Shop Ecommerce"
                                },
                                {
                                    "SchemaName": "mx_Custom_61",
                                    "Value": "Relation ID"
                                },
                                {
                                    "SchemaName": "mx_Custom_62",
                                    "Value": "Relation Name"
                                },
                                {
                                    "SchemaName": "mx_Custom_55",
                                    "Value": finalArea
                                },
                                {
                                    "SchemaName": "mx_Custom_57",
                                    "Value": ""
                                },
                                {
                                    "SchemaName": "mx_Custom_58",
                                    "Value": ""
                                },
                                {
                                    "SchemaName": "mx_Custom_1",
                                    "Value": uniqueOrderId
                                },
                                {
                                    "SchemaName": "mx_Custom_2",
                                    "Value": "ABBDD79AEEC8224AB406"
                                },
                                {
                                    "SchemaName": "mx_Custom_3",
                                    "Value": "New"
                                },
                                {
                                    "SchemaName": "mx_Custom_4",
                                    "Value": "18"
                                },
                                {
                                    "SchemaName": "mx_Custom_7",
                                    "Value": "1"
                                },
                                {
                                    "SchemaName": "mx_Custom_8",
                                    "Value": "Area name"
                                },
                                {
                                    "SchemaName": "mx_Custom_5",
                                    "Value": "Center Name"
                                },
                                {
                                    "SchemaName": "mx_Custom_6",
                                    "Value": appointmentDate + " " + getUTCTime()
                                },
                                {
                                    "SchemaName": "mx_Custom_9",
                                    "Value": finalPincode
                                },
                                {
                                    "SchemaName": "mx_Custom_11",
                                    "Value": salutation
                                },
                                {
                                    "SchemaName": "mx_Custom_12",
                                    "Value": patientName

                                },
                                {
                                    "SchemaName": "mx_Custom_13",
                                    "Value": +patientData.age <= 0 ? "1" : patientData.age
                                },
                                {
                                    "SchemaName": "mx_Custom_14",
                                    "Value": patientData.dob
                                },
                                {
                                    "SchemaName": "mx_Custom_15",
                                    "Value": patientData.gender
                                },
                                {
                                    "SchemaName": "mx_Custom_16",
                                    "Value": fullAddress
                                },
                                {
                                    "SchemaName": "mx_Custom_17",
                                    "Value": email
                                },
                                {
                                    "SchemaName": "mx_Custom_63",
                                    "Value": mobileNumber
                                }
                            ]
                        }
                        console.log(orderData, "send to LSQ");

                        await axios.post("https://api-in21.leadsquared.com/v2/ProspectActivity.svc/Create?accessKey=u$rcbd813924f16d9009588e1cf5f302960&secretKey=382cc483428967d41fb0abe2c43c046366ca6813", orderData, {
                            headers: {
                                'Content-Type': 'application/json',
                            },

                        }).then(res => {
                            console.log(res, "Post Activity on Opportunity API response");
                            if (res.data.Status === "Success") {
                                // If all the API's give Success response, then show payment page 
                                showPaymentSlide();
                                setIsDisableFormSubmitButton(false);
                                setIsDisplayLoader(false);
                            } else {
                                notifySomethingWrong();
                                setIsDisableFormSubmitButton(false);
                                setIsDisplayLoader(false);
                            }
                        }).catch(err => {
                            notifySomethingWrong();
                            setIsDisplayLoader(false);
                            setIsDisableFormSubmitButton(false);
                            console.log(err, "Error! in Post Activity on Opportunity API");
                        })
                    }
                }).catch(error => {
                    notifySomethingWrong();
                    setIsDisableFormSubmitButton(false);
                    setIsDisplayLoader(false);
                    setIsDisableFormSubmitButton(false);
                    console.error(error, "Error! Sending Booking details to CRM (inside catch)");
                });
            }
        }
    }

    return (
        <>
            {
                isDisplayLoader && <div className='address-loader'>
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

            <div className='address'>
                <h2 className='address__header'>Home Collection Details</h2>
                <div className="address__main-container">
                    <div className={`address__inner-container address__form-${activePermanentAddressForm}`}>
                        <input type="radio" id='address__permanent-address' className='address__title-radio' value="permanent-address" name="address" defaultChecked />
                        <form action="" className={`address__form-${activePermanentAddressForm}`} onClick={() => handlePermanentAddress()}>
                            <label htmlFor="address__permanent-address">
                                <div className="address__form-header">
                                    <h2>Permanent Address</h2>

                                    {/* <button><span>Edit</span><img src={Edit} alt="edit" /></button> */}
                                </div>

                                <input className='address__detail' type="text" placeholder='Flat House no, Building No,Company Appartment*' value={address.permanentAddress.houseOrFlatNum} onChange={(e) => { setAddress({ ...address, permanentAddress: { ...(address.permanentAddress), houseOrFlatNum: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                                <input className='address__detail' type="text" placeholder='Area, Street, Sector, Village' value={address.permanentAddress.area} onChange={(e) => { setAddress({ ...address, permanentAddress: { ...(address.permanentAddress), area: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                                <div className='address__input-group'>
                                    <input className='address__detail-half-width' type="text" placeholder='Landmark' value={address.permanentAddress.landmark} onChange={(e) => { setAddress({ ...address, permanentAddress: { ...(address.permanentAddress), landmark: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                                    <input className='address__detail-half-width' type="number" placeholder='Pincode*' value={address.permanentAddress.pincode} onChange={(e) => { setAddress({ ...address, permanentAddress: { ...(address.permanentAddress), pincode: e.target.value } }); setShowEmptyInputFieldError(''); }} />
                                </div>

                                <div className='address__input-group'>
                                    <input className='address__detail-half-width' type="text" placeholder='Contact person*' value={address.permanentAddress.contactPerson} onChange={(e) => { setAddress({ ...address, permanentAddress: { ...(address.permanentAddress), contactPerson: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                                    <input className='address__detail-half-width' type="text" placeholder='Secondary contact number' value={address.permanentAddress.secondaryContactPerson} onChange={(e) => { setAddress({ ...address, permanentAddress: { ...(address.permanentAddress), secondaryContactPerson: e.target.value } }); setShowEmptyInputFieldError(''); }} />
                                </div>
                                {/* Empty Field error message  */}
                                {
                                    showEmptyInputFieldError !== '' && <span className='address__empty-field-msg'>{showEmptyInputFieldError}</span>
                                }
                            </label>
                        </form>
                    </div>
                </div>
                {
                    activePermanentAddressForm && <div className="address__form-submit-button">
                        <button onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            submitAddress('submitPermanentAddress')
                        }} disabled={isDisableFormSubmitButton ? true : false}>Next</button>
                    </div>
                }

                {/* Second Form  */}
                {/* <div className="address__main-container">
                <div className="address__inner-container">
                    <input type="radio" id='address__office-address' className='address__title-radio' value="office-address" name="address" />
                    <form action="" className={`address__form-${activeOfficeAddressForm}`} onClick={() => handleOfficeAddress()}>
                        <label htmlFor="address__office-address">
                            <div className="address__form-header">
                                <h2>Office Address</h2>
                                <button><span>Edit</span><img src={Edit} alt="edit" /></button>
                            </div>

                            <input className='address__detail' type="text" placeholder='Flat House no, Building No,Company Appartment' value={address.officeAddress.houseOrFlatNum} onChange={(e) => { setAddress({ ...address, officeAddress: { ...(address.officeAddress), houseOrFlatNum: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                            <input className='address__detail' type="text" placeholder='Area, Street, Sector, Village' value={address.officeAddress.area} onChange={(e) => { setAddress({ ...address, officeAddress: { ...(address.officeAddress), area: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                            <div className='address__input-group'>

                                <input className='address__detail-half-width' type="text" placeholder='Landmark' value={address.officeAddress.landmark} onChange={(e) => { setAddress({ ...address, officeAddress: { ...(address.officeAddress), landmark: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                                <input className='address__detail-half-width' type="text" placeholder='Pincode' value={address.officeAddress.pincode} onChange={(e) => { setAddress({ ...address, officeAddress: { ...(address.officeAddress), pincode: e.target.value } }); setShowEmptyInputFieldError(''); }} />
                            </div>

                            <div className='address__input-group'>
                                <input className='address__detail-half-width' type="text" placeholder='Contact person' value={address.officeAddress.contactPerson} onChange={(e) => { setAddress({ ...address, officeAddress: { ...(address.officeAddress), contactPerson: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                                <input className='address__detail-half-width' type="text" placeholder='Secondary contact number' value={address.officeAddress.secondaryContactPerson} onChange={(e) => { setAddress({ ...address, officeAddress: { ...(address.officeAddress), secondaryContactPerson: e.target.value } }); setShowEmptyInputFieldError(''); }} />
                            </div>

                            {
                                showEmptyInputFieldError !== '' && <span className='address__empty-field-msg'>{showEmptyInputFieldError}</span>
                            }
                        </label>
                    </form>
                </div>
            </div> */}
                {
                    activeOfficeAddressForm && <div className="address__form-submit-button">
                        <button onClick={() => { submitAddress('submitOfficeAddress') }}>Next</button>
                    </div>
                }

                {/* Third Form  */}
                {/* <div className="address__main-container">
                <div className="address__inner-container">
                    <input type="radio" id='address__other-address' className='address__title-radio' value="other-address" name="address" />
                    <form action="" className={`address__form-${activeOtherAddressForm}`} onClick={() => handleOtherAddress()}>
                        <label htmlFor="address__other-address">
                            <div className="address__form-header">
                                <h2>Other Address</h2>
                                <button><span>Edit</span><img src={Edit} alt="edit" /></button>
                            </div>
                            <input className='address__detail' type="text" placeholder='Flat House no, Building No,Company Appartment' value={address.otherAddress.houseOrFlatNum} onChange={(e) => { setAddress({ ...address, otherAddress: { ...(address.otherAddress), houseOrFlatNum: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                            <input className='address__detail' type="text" placeholder='Area, Street, Sector, Village' value={address.otherAddress.area} onChange={(e) => { setAddress({ ...address, otherAddress: { ...(address.otherAddress), area: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                            <div className='address__input-group'>
                                <input className='address__detail-half-width' type="text" placeholder='Landmark' value={address.otherAddress.landmark} onChange={(e) => { setAddress({ ...address, otherAddress: { ...(address.otherAddress), landmark: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                                <input className='address__detail-half-width' type="text" placeholder='Pincode' value={address.otherAddress.pincode} onChange={(e) => { setAddress({ ...address, otherAddress: { ...(address.otherAddress), pincode: e.target.value } }); setShowEmptyInputFieldError(''); }} />
                            </div>

                            <div className='address__input-group'>
                                <input className='address__detail-half-width' type="text" placeholder='Contact person' value={address.otherAddress.contactPerson} onChange={(e) => { setAddress({ ...address, otherAddress: { ...(address.otherAddress), contactPerson: e.target.value } }); setShowEmptyInputFieldError(''); }} />

                                <input className='address__detail-half-width' type="text" placeholder='Secondary contact number' value={address.otherAddress.secondaryContactPerson} onChange={(e) => { setAddress({ ...address, otherAddress: { ...(address.otherAddress), secondaryContactPerson: e.target.value } }); setShowEmptyInputFieldError(''); }} />
                            </div>
                      
                            {
                                showEmptyInputFieldError !== '' && <span className='address__empty-field-msg'>{showEmptyInputFieldError}</span>
                            }
                        </label>
                    </form>
                </div>
            </div> */}

                {
                    activeOtherAddressForm && <div className="address__form-submit-button">
                        <button onClick={() => { submitAddress('submitOtherAddress') }}>Next</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Address