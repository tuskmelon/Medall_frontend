import React, { useState, useEffect } from 'react'
import { Table, Input, Button } from 'antd'
import { Excel } from 'antd-table-saveas-excel'
import { CSVLink } from 'react-csv'
import API from '../api'

import '../styles/Transactions.scss'

const { Search } = Input

const Transactions = () => {
  const [transactions, setTransactions] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([])
  const [responseArray, setResponseArray] = useState([])
  const [isDisplayPopUp, setIsDisplayPopUp] = useState(false)

  function showResponse (responseData) {
    window.scrollTo(0, 100)
    let data = JSON.parse(responseData)
    console.log(data)
    let responseInArray = []

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        responseInArray.push({ property: key, value: data[key] })
      }
    }

    setResponseArray(responseInArray)
    setIsDisplayPopUp(true)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'Name'
    },
    {
      title: 'Mobile',
      dataIndex: 'mobileNumber',
      key: 'Mobile'
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      key: 'PaymentStatus',
      render: text => {
        if (text === true) {
          return 'Paid'
        } else {
          return 'Not Paid'
        }
      }
    },
    {
      title: 'Products',
      dataIndex: 'products',
      key: 'Products',
      render: record =>
        record.map(product => (
          <table className='transactions-product-table' key={product.name}>
            <tbody>
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            </tbody>
          </table>
        ))
    },
    {
      title: 'Booking Id',
      dataIndex: 'orderId',
      key: 'BookingId'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'Amount'
    },
    {
      title: 'Date, Time',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (text, record) => {
        const dateTime = new Date(text)
        return dateTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      }
    },
    {
      title: 'Reponse',
      dataIndex: 'responseLog',
      key: 'Reponse',
      render: (text, record) => (
        <span>
          <Button
            type='primary'
            onClick={() => showResponse(record.responseLog)}
          >
            View Details
          </Button>
        </span>
      )
    }
  ]

  useEffect(() => {
    const credentials = JSON.parse(window.sessionStorage.getItem('adminData'))
    API.post('/api/transactions-history/fetch-transactions', {
      emailAddress: credentials.adminEmail,
      password: credentials.password
    })
      .then(res => {
        console.log(res)
        setTransactions(res.data.transactions)
        setFilteredTransactions(res.data.transactions.reverse())
      })
      .catch(err => console.log(err))
  }, [])

  const handleSearch = searchText => {
    const filtered = transactions.filter(item =>
      item.mobileNumber.includes(searchText)
    )
    setFilteredTransactions(filtered)
  }

  const handleClose = () => {
    setResponseArray([])
    setIsDisplayPopUp(false)
  }

  return (
    <>
      {isDisplayPopUp && (
        <>
          {responseArray.length != 0 && (
            <div className='transactions-response'>
              <div
                className='transactions-response__container'
                id='transactions-response__container'
              >
                <button
                  className='transactions-response__close-btn'
                  onClick={handleClose}
                >
                  X
                </button>
                {responseArray.map(data => (
                  <p>
                    {data.property}:{' '}
                    <span style={{ fontWeight: '500' }}>{data.value}</span>
                  </p>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <div className='transactions'>
        <h2>Transaction History</h2>
        <div
          className='text-center'
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '-10px 0 20px 0'
          }}
        >
          {/* <Button type="primary"  >
                        Export
                    </Button> */}
          <CSVLink
            data={filteredTransactions}
            filename={`Medall-Transaction-History-${new Date()
              .toISOString()
              .slice(0, 10)}.csv`}
          >
            <Button type='primary'>Export</Button>
          </CSVLink>
        </div>
        {/* <Table dataSource={transactions} columns={columns} /> */}
        <Search
          placeholder='Search By Mobile'
          onSearch={handleSearch}
          style={{ marginBottom: 16 }}
        />
        <Table dataSource={filteredTransactions} columns={columns} />
      </div>
    </>
  )
}

export default Transactions
