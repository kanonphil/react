import axios from 'axios'
import React, { useState } from 'react'

const UpdateForm = ({onItemAdded}) => {
  const [data, setData] = useState({
    itemNum: '',
    itemName: '',
    itemPrice: '',
    regDate: '',
    itemIntro: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const updateItemByNum = () => {
    if (!data.itemNum) {
      return
    }
    axios.put(`http://localhost:8080/items/${data.itemNum}`, data)
      .then(res => {
        console.log(res.data)
        setData({
          itemNum: '',
          itemName: '',
          itemPrice: ''
        })
        if (onItemAdded) {
          onItemAdded()
        }
      })
      .catch(e => console.log(e))
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingTop: '40px',
      paddingLeft: '40px',
    }}>
      {/* 수정 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <label style={{
          width: '80px',
          textAlign: 'right',
          marginRight: '10px'
        }}>상품번호</label>
        <input 
          type="text" 
          name="itemNum"
          value={data.itemNum}
          onChange={handleChange}
          style={{ width: '200px' }}
        />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <label style={{
          width: '80px',
          textAlign: 'right',
          marginRight: '10px'
        }}>상품명</label>
        <input 
          type="text" 
          name="itemName"
          value={data.itemName}
          onChange={handleChange}
          style={{ width: '200px' }}
        />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <label style={{
          width: '80px',
          textAlign: 'right',
          marginRight: '10px'
        }}>가격</label>
        <input 
          type="text" 
          name="itemPrice"
          value={data.itemPrice}
          onChange={handleChange}
          style={{ width: '200px' }}
        />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '90px',
        width: '200px'
      }}>
        <button 
          type="button" 
          onClick={updateItemByNum}
          style={{
            padding: '5px 20px',
            backgroundColor: '#87CEEB',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            cursor: 'pointer',
            marginBottom: '10px'
          }}
        >수정</button>
      </div>
    </div>
  )
}

export default UpdateForm