import axios from "axios"
import { useEffect, useState } from "react";


function App() {
  const [Data, setData] = useState([])
  const getData = () => {
    const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTI4MmEyOGY4MjVmMTdhODc5OTE4MDgiLCJpYXQiOjE3NjQ2NTE1MDV9.WpLZob-Lw_J-yizHX1Ix0i1d_zhazDYsXNKWu03l8IY';
    axios.get('http://localhost:8001/getData',{
      headers:{
        Authorization :`Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
        console.log(Data);
      })
      .catch((err) => { console.log(err) });
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <table border={2} style={{justifyContent:"center",}}>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>Profile</th>
        </tr>
        {Data.map((v, i) => (
          <tr>
            <td>{v._id}</td>
            <td>{v.name}</td>
            <td>{v.email}</td>
            <td><img src={`http://localhost:8001${v.profile}`} height={100} /></td>
          </tr>

        )
        )}
      </table>
      {/* <p>Data: {JSON.stringify(data)}</p> */}
    </>
  )
}

export default App
