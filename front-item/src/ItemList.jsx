import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ItemList = () => {
  const [itemList, setItemList] = useState([])

  const getAllItems = () => {
    axios.get('http://localhost:8080/items')
      .then(response => {
        console.log('성공:', response.data)
        setItemList(response.data)
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
      {/* 삭제 */}
      <div>
        <table style={{
          borderCollapse: 'collapse',
          width: '400px',
        }}>
          <thead>
            <tr>
              <th style={{border: '1px solid black'}}>상품번호</th>
              <th style={{border: '1px solid black'}}>상품명</th>
              <th style={{border: '1px solid black'}}>가격</th>
              <th style={{border: '1px solid black'}}>등록일</th>
              <th style={{border: '1px solid black'}}>삭제</th>
            </tr>
          </thead>
          <tbody>
            {itemList.length > 0 ? (itemList.map((item, index) => (
              <tr key={index}>
                <td style={{
                  border: '1px solid black', 
                  textAlign: 'center'
                }}>{item.itemNum}</td>
                <td style={{
                  border: '1px solid black',
                  textAlign: 'center'
                }}>{item.itemName}</td>
                <td style={{
                  border: '1px solid black',
                  textAlign: 'right'
                }}>{item.itemPrice}원</td>
                <td style={{
                  border: '1px solid black',
                  textAlign: 'center'
                }}>{item.regDate}</td>
                <td style={{
                  border: '1px solid black',
                  textAlign: 'center'
                }}><button type="button" onClick={() => deleteItem(item.itemNum)}>삭제</button></td>
              </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{
                  border: '1px solid black',
                  textAlign: 'center',
                  padding: '20px'
                }}>
                  등록된 상품이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ItemList