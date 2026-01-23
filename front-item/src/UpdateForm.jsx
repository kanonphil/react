import axios from 'axios'
import React, { useState } from 'react'

const UpdateForm = () => {
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
        flexDirection: 'column',
        marginTop: '10px'
      }}>
        <div>
          <label>상품번호</label>
          <input 
            type="text" 
            name="itemNum"
            value={data.itemNum}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>상품명</label>
          <input 
            type="text" 
            name="itemName"
            value={data.itemName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>가격</label>
          <input 
            type="text" 
            name="itemPrice"
            value={data.itemPrice}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="button" onClick={updateItemByNum}>수정</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateForm