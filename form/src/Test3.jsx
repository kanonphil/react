import React, { useState } from 'react'

const Test3 = () => {
  const [form, setForm] = useState({
    chicken: '후라이드 치킨',
    count: '',
    date: '',
    order: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <div>
      <div>
        <p>치킨 종류와 상관 없이 무조건 만원!</p>
        <div>
          <label>
            <input 
              type="radio" 
              name="chicken" 
              value="후라이드 치킨" 
              checked={form.chicken === '후라이드 치킨'} 
              onChange={handleChange} 
            />후라이드 치킨
          </label>
          <label>
            <input 
              type="radio" 
              name="chicken" 
              value="양념 치킨" 
              checked={form.chicken === '양념 치킨'}
              onChange={handleChange}
            />양념 치킨
          </label>
          <label>
            <input 
              type="radio" 
              name="chicken" 
              value="간장 치킨" 
              checked={form.chicken === '간장 치킨'}
              onChange={handleChange}
            />간장 치킨
          </label>
        </div>
        <div>
          <label>
            <input 
              type="radio" 
              name="chicken" 
              value="고추바사삭" 
              checked={form.chicken === '고추바사삭'}
              onChange={handleChange}
            />고추바사삭
          </label>
          <label>
            <input 
              type="radio" 
              name="chicken" 
              value="뿌링클" 
              checked={form.chicken === '뿌링클'}
              onChange={handleChange}
            />뿌링클
          </label>
          <label>
            <input 
              type="radio" 
              name="chicken" 
              value="매운핫치킨" 
              checked={form.chicken === '매운핫치킨'}
              onChange={handleChange}
            />매운핫치킨
          </label>
        </div>
      </div>
      <div>
        <p>
          몇마리
          <input 
            type="number" 
            name="count" 
            value={form.count} 
            onChange={handleChange} 
          />
        </p>
        <p>
          주문일
          <input 
            type="date" 
            name="date" 
            value={form.date} 
            onChange={handleChange} 
          />
        </p>
      </div>
      <div>
        <span>요청사항</span>
        <textarea 
          name="order" 
          value={form.order}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  )
}

export default Test3