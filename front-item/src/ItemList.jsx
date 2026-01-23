import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ItemList = () => {
  const [allItems, setAllItems] = useState([])

  const getAllItems = () => {
    axios.get('http://localhost:8080/items')
      .then(response => {
        console.log('성공:', response.data)
        setAllItems(response.data)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getAllItems()
  }, [])

  const deleteItem = (itemNum) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) {
      return
    }

    axios.delete(`http://localhost:8080/items/${itemNum}`)
      .then(res => {
        console.log('성공:', res)
        getAllItems()
      })
      .catch(e => console.error(e)
      )
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
      {/* 전체 조회 table */}
      <div>
        <table style={{
          borderCollapse: 'collapse',
          width: '600px',
          marginBottom: '20px'
        }}>
          <thead>
            <tr>
              <th>상품번호</th>
              <th>상품명</th>
              <th>가격</th>
              <th>등록일</th>
              <th>상품소개</th>
            </tr>
          </thead>
          <tbody>
            {allItems.map((item, index) => (
              <tr key={index}>
                <td>{item.itemNum}</td>
                <td>{item.itemName}</td>
                <td>{item.itemPrice}</td>
                <td>{item.regDate}</td>
                <td>{item.itemIntro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* 삭제 */}
      <div>
        <table style={{
          borderCollapse: 'collapse',
          width: '600px'
        }}>
          <thead>
            <tr>
              <th>상품번호</th>
              <th>상품명</th>
              <th>가격</th>
              <th>등록일</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {allItems.map((item, index) => (
              <tr key={index}>
                <td>{item.itemNum}</td>
                <td>{item.itemName}</td>
                <td>{item.itemPrice}</td>
                <td>{item.regDate}</td>
                <td><button type="button" onClick={() => deleteItem(item.itemNum)}>삭제</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ItemList