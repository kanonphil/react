import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios2 = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get('http://localhost:8080/emps/1')
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      })
      .catch((error) => {})
  }, [])  

  return (
    <div>
      Axios2 <br />
      {data && data.name} <br />
    </div>
  )
}

export default Axios2