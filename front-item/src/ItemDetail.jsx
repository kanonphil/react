import axios from 'axios'
import React, { useState } from 'react'

const ItemDetail = () => {
  const [data, setData] = useState({
    itemNum: '',
    itemName: '',
    itemPrice: '',
    regDate: '',
    itemIntro: ''
  })

  const [itemByNum, setItemByNum] = useState(null)

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  
  const getItemByNum = () => {
    if (!data.itemNum) {
      return
    }
    axios.get(`http://localhost:8080/items/${data.itemNum}`)
      .then(response => {
        console.log(response.data)

        if (!response.data || response.data === null) {
          alert('해당 번호로 등록된 상품이 없습니다.')
          setItemByNum(null)
          return
        }

        setItemByNum(response.data)
      })
      .catch(e => {
        console.log(e)
      })
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
      {/* 입력한 상품번호를 가진 상품 정보 조회 */}
      <div style={{ 
        display: 'flex', 
        marginTop: '10px'
      }}>
        <label style={{
          width: '80px',
          textAlign: 'right',
          marginRight: '10px',
          marginTop: '5px'
        }}>상품번호</label>
        <input 
          type="text" 
          name="itemNum"
          value={data.itemNum}
          onChange={handleChange}
        />
        <button type="button" onClick={getItemByNum} style={{marginLeft: '10px'}}>조회</button>
      </div>
      {itemByNum && (
        <div style={{
          backgroundColor: 'lightgray',
          width: '300px',
          padding: '12px',
          borderRadius: '10px',
          marginTop: '10px'
        }}>
          <p>조회한 상품정보입니다.</p>
          <p>상품번호 : {itemByNum.itemNum}</p>
          <p>상품명 : {itemByNum.itemName}</p>
          <p>가격 : {itemByNum.itemPrice}</p>
          <p>등록일 : {itemByNum.regDate}</p>
          <p>상품소개 : {itemByNum.itemIntro}</p>
        </div>
      )}
    </div>
  )
}

export default ItemDetail