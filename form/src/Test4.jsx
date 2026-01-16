import React, { useState } from 'react'

const Test4 = () => {
  const [form, setForm] = useState({
    education: '대졸',
    school_name: '학교명',
    applyType: '신입',
    certName: '',
    certDate: '',
    certOrg: '',
    companyName: '',
    responsibilities: '',
    durationYears: '',
    durationMonths: '',
    placeholder: ''
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
        <div>학력</div>
        <div>
          <select name="education" value={form.education} onChange={handleChange}>
            <option value="대졸">대졸</option>
            <option value="대학졸업예정">대학졸업예정</option>
            <option value="전문대졸">전문대졸</option>
            <option value="고졸">고졸</option>
          </select>
          <input 
            type="text" 
            name="school_name" 
            value={form.school_name} 
            onChange={handleChange} 
          />
        </div>
      </div>
      <div>
        <label>지원 구분</label>
        <label>
          <input 
            type="radio" 
            name="applyType" 
            value='신입' 
            checked={form.applyType === '신입'}
            onChange={handleChange} 
          />신입
        </label>
        <label>
          <input 
            type="radio" 
            name="applyType" 
            value='경력' 
            checked={form.applyType === '경력'}
            onChange={handleChange} 
          />경력
        </label>
      </div>
      <div>
        <div>자격정보</div>
        <table>
          <thead>
            <tr>
              <td>자격증명</td>
              <td>취득일자</td>
              <td>발행기관</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input 
                  type="text" 
                  name="certName" 
                  value={form.certName} 
                  onChange={handleChange}
                />
              </td>
              <td>
                <input 
                  type="date" 
                  name="certDate" 
                  value={form.certDate}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input 
                  type="text" 
                  name="certOrg" 
                  value={form.certOrg}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div>경력정보</div>
        <table>
          <thead>
            <tr>
              <td>회사명</td>
              <td>담당업무</td>
              <td>경력기간</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input 
                  type="text" 
                  name="companyName" 
                  value={form.companyName} 
                  onChange={handleChange}
                />
              </td>
              <td>
                <input 
                  type="text" 
                  name="responsibilities" 
                  value={form.responsibilities}
                  onChange={handleChange}
                />
              </td>
              <td>
                <label>
                  <input 
                    type="text" 
                    name="durationYears" 
                    value={form.durationYears}
                    onChange={handleChange}
                  />년
                  <input 
                    type="text" 
                    name="durationMonths" 
                    value={form.durationMonths}
                    onChange={handleChange}
                  />개월
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div>자기소개</div>
        <div>
          <textarea 
            name="placeholder" 
            value={form.placeholder} 
            onChange={handleChange}
            cols={50}
            rows={5}
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default Test4