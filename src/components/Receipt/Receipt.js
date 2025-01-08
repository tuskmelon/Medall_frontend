import React, { useState, useEffect } from 'react'
import { Page, Text, View, Image, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

import Logo from "../../assets/logos/medall.png"
import "../../styles/Receipt/Receipt.scss"

// Create styles
const styles = StyleSheet.create({
    pdfContainer: {
        padding: 10,
    },
    logo: {
        width: 150,
        height: 'auto'
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20
    },
    customerDetailTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#004980',
        marginBottom: 5
    },
    infoSection: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    customerInfo: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: 500,
    },
    section: {
        flexGrow: 1,
        marginTop: 10
    },
    table: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        marginBottom: 10,
    },
    tableRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
        flexDirection: 'row',
        borderBottom: 1,
        borderColor: '#bfbfbf',
    },
    tableCell: {
        margin: 5,
        fontSize: 12,
    },
    tableHeader: {
        backgroundColor: '#f2f2f2',
    },
    headerCell: {
        fontWeight: 'bold',
        color: '#004980'

    },
    totalPrice: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 4,
        textAlign: 'right'
    },
    paymentInsight: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: 500
    }
});



const Doc = () => {
    const paymentDetails = JSON.parse(window.sessionStorage.getItem('paymentDetails'));
    const customerInfo = JSON.parse(window.localStorage.getItem('medallUserInfo'));

    const purchasedProduct = JSON.parse(window.sessionStorage.getItem("cartItems")) ? JSON.parse(window.sessionStorage.getItem("cartItems")) : { healthPack: [{ healthPackageName: "NA", healthPackagePrice: 0 }], tests: [{ testName: "NA", testPrice: 0 }] }

    // Using flatMap and map to create a single array with product names and prices
    const productNameAndPriceArray = Object.values(purchasedProduct).flatMap(packArray =>
        packArray.map(pack => ({ name: pack.healthPackageName || pack.testName, price: pack.healthPackagePrice || pack.testPrice }))
    );

    return (
        <Document >
            <Page size="A4" >
                <View style={styles.pdfContainer}>
                    <View style={styles.logoContainer} >
                        <Image
                            src={Logo}
                            style={styles.logo}
                        >
                        </Image>
                    </View >
                    <View >
                        <Text style={styles.customerDetailTitle}>Customer Details:</Text>
                        <View style={styles.infoSection}>
                            <View >
                                <Text style={styles.customerInfo}>Name: {customerInfo.name}</Text>
                                <Text style={styles.customerInfo}>Contact: {customerInfo.mobileNumber}</Text>
                            </View>
                            <View>
                                <Text style={styles.paymentInsight}>Payment ID: {paymentDetails.paymentId}</Text>
                                <Text style={styles.paymentInsight}>Booking ID: {paymentDetails.bookingId}</Text>
                                <Text style={styles.paymentInsight}>Date: {paymentDetails.date}</Text>
                                <Text style={styles.paymentInsight}>Time: {paymentDetails.time}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.table}>
                            <View style={[styles.tableRow, styles.tableHeader]}>
                                <Text style={[styles.tableCell, styles.headerCell]}>Product</Text>
                                <Text style={[styles.tableCell, styles.headerCell]}>Price</Text>
                            </View>
                            {productNameAndPriceArray.map((row) => (
                                <View key={row.id} style={styles.tableRow}>
                                    <Text style={styles.tableCell}>{row.name}</Text>
                                    <Text style={styles.tableCell}>{row.price}</Text>
                                </View>
                            ))}
                            <View>
                                <Text style={styles.totalPrice}>Total: {productNameAndPriceArray.reduce((total, item) => total + item.price, 0)}</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </Page>
        </Document >
    )
}

const Receipt = () => {
    return (
        <div className='receipt'>
            <PDFViewer className='receipt__pdf-viewer'>
                {<Doc />}
            </PDFViewer>
        </div>
    )
}

export default Receipt