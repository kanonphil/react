import React, { useState } from 'react'
import Child from './Child'
import Child2 from './Child2'

// props를 이용해 컴포넌트간 데이터를 전달하는 거은
// 부모 컴포넌트에서 자식 컴포넌트로만 가능
const Parent = () => {
  const num = 10

  const [products, setProducts] = useState([
    {
      id: 1,
      name: '사과',
      price: 2000
    },
    {
      id: 2,
      name: '바나나',
      price: 1500
    },
    {
      id: 3,
      name: '오렌지',
      price: 3000
    }
  ])

  return (
    <>
      <h2>Parent Component</h2>
      <Child 
        myData={num} 
        age={20}
        addr={'울산시'}
      />



      {products.map((product) => (
        <Child2 
          key={product.id} 
          name={product.name} 
          price={product.price}
        />
      ))}
      
    </>
  )
}

export default Parent