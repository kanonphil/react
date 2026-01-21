import React from 'react'

const ForEach4 = () => {
  const stuList = [
    {
      stuNum: 1,
      name: 'kim',
      score: 80
    }, 
    {
      stuNum: 2,
      name: 'Lee',
      score: 90
    }, 
    {
      stuNum: 3,
      name: 'Park',
      score: 100
    }
  ];

  const thStyle = {
    textAlign: 'center',
    padding: '10px 40px',
    backgroundColor: 'aquamarine',
    border: '1px solid white',
    color: 'white',
  }

  const tdStyle = {
    textAlign: 'center',
    padding: '10px 40px',
    // backgroundColor: 'skyblue',
    border: '1px solid white',
  }

  return (
    <>
      <table style={{borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={thStyle}>학번</th>
            <th style={thStyle}>이름</th>
            <th style={thStyle}>점수</th>
          </tr>
        </thead>
        <tbody>
          {stuList.map((stu, index) => (
            <tr 
              key={stu.stuNum}
              style={{
                backgroundColor: index % 2 === 0 ? 'skyblue' : 'yellow'
              }}
            >
              <td style={tdStyle}>{stu.stuNum}</td>
              <td style={tdStyle}>{stu.name}</td>
              <td style={tdStyle}>{stu.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ForEach4