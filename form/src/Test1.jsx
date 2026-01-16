import React, { useState } from 'react'

const Test1 = () => {
  const [data, setData] = useState({
    name: '',
    korScore: 0,
    engScore: 0
  })

  const handleData = (e) => {
    const {name, value} = e.target
    const newValue = name.includes('Score') ? Number(value) : value
    setData({
      ...data,
      [name] : newValue
    })
  }

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '300px',
      margin: '20px auto',
      border: '1px solid #ddd',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      fontFamily: 'sans-serif'
    },
    inputGroup: {
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    label: {
      fontWeight: 'bold',
      marginRight: '10px',
      color: '#333',
    },
    input: {
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      width: '60%'
    },
    resultBox: {
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: '2px dashed #eee'
    },
    resultText: {
      fontSize: '1.1rem',
      margin: '8px 0',
      color: '#444'
    },
    total: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#007bff' // 총점 강조 컬러
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>성적 입력란</h2>
      
      <div style={styles.inputGroup}>
        <span style={styles.label}>이름</span>
        <input 
          style={styles.input}
          type="text" 
          name='name' 
          value={data.name}
          onChange={handleData} 
        />
      </div>
      
      <div style={styles.inputGroup}>
        <span style={styles.label}>국어 점수</span>
        <input 
          style={styles.input}
          type="number" 
          name='korScore'
          value={data.korScore}
          onChange={handleData}
        />
      </div>
      
      <div style={styles.inputGroup}>
        <span style={styles.label}>영어 점수</span>
        <input 
          style={styles.input}
          type="number" 
          name='engScore'
          value={data.engScore}
          onChange={handleData}
        />
      </div>

      <div style={styles.resultBox}>
        <h3 style={{ fontSize: '1rem', color: '#888' }}>입력한 학생 정보입니다.</h3>
        <p style={styles.resultText}>이름 : <strong>{data.name}</strong></p>
        <p style={styles.resultText}>국어점수 : {data.korScore}점</p>
        <p style={styles.resultText}>영어점수 : {data.engScore}점</p>
        <p style={{ ...styles.resultText, ...styles.total }}>
          총점 : {data.korScore + data.engScore}점
        </p>
      </div>
    </div>
  );
}

export default Test1