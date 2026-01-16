import React, { useState } from 'react'

const Test2 = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    grade: '1학년',
    gender: '남',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <div>
      <div>
        <div>
          <label>이름</label>
          <input 
            type="text" 
            name='name' 
            value={form.name} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>나이</label>
          <input 
            type="text" 
            name='age' 
            value={form.age} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <label>학년</label>
          <select name="grade" value={form.grade} onChange={handleChange}>
            <option value="1학년">1학년</option>
            <option value="2학년">2학년</option>
            <option value="3학년">3학년</option>
          </select>
        </div>
        <div>
          <label>성별</label>
          <label>
            <input 
              type="radio" 
              name='gender' 
              value='남' 
              checked={form.gender === '남'}
              onChange={handleChange} 
            />남
          </label>
          <label>
            <input 
              type="radio" 
              name='gender' 
              value='여' 
              checked={form.gender === '여'}
              onChange={handleChange} 
            />여
          </label>
        </div>
        <div>
          <label>소개말</label>
          <textarea 
            name='description' 
            value={form.description} 
            onChange={handleChange} 
          />
        </div>
      </div>
    </div>
  )
}

export default Test2