import axios from 'axios'
import React, { useState } from 'react'

const ItemForm = ({onItemAdded}) => {
  const [data, setData] = useState({
    itemNum: '',
    itemName: '',
    itemPrice: '',
    regDate: '',
    itemIntro: ''
  })

  const [isPressed, setIsPressed] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const postItem = () => {
    // 유효성 검사
    if (!data.itemName) {
      alert('상품명을 입력해주세요.')
      return
    }
    
    if (!data.itemPrice) {
      alert('가격을 입력해주세요.')
      return
    }

    axios.post('http://localhost:8080/items', data)
      .then(response => {
        console.log('성공:', response)
        alert('상품을 등록하였습니다.')
        setData({
          itemName: '',
          itemPrice: '',
          itemIntro: ''
        })
        if (onItemAdded) {
          onItemAdded()
        }
      })
      .catch(error => console.log('실패:', error))
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
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <label style={{
          width: '80px',
          textAlign: 'right',
          marginRight: '10px'
        }}>
          상품명
        </label>
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
        }}>
          가격
        </label>
        <input 
          type="number" 
          name="itemPrice"
          value={data.itemPrice}
          onChange={handleChange}
          style={{ width: '200px' }}
        />
      </div>
     
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '10px'
      }}>
        <label style={{
          width: '80px',
          textAlign: 'right',
          marginRight: '10px',
          marginTop: '5px'
        }}>
          상품소개
        </label>
        <textarea 
          name="itemIntro" 
          value={data.itemIntro}
          onChange={handleChange}
          style={{ 
            width: '200px',
            height: '50px'
          }}
        >

        </textarea>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '90px',
        width: '200px'
      }}>
        <button 
          type="button" 
          onClick={postItem}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          style={{
            padding: '5px 20px',
            backgroundColor: isPressed ? '#65ACC8' : '#87CEEB',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            cursor: 'pointer',
            marginBottom: '10px'
          }}
        >
          등록
        </button>
      </div>
    </div>
  )
}

export default ItemForm