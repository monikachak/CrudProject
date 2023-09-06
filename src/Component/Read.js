import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Table } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export const Read = () => {

  let [data, setdata] = useState([])

  let[darktheme,setDarktheme] =useState("")  //switch krne ki state

  function getdata() {
    axios.get(`http://localhost:400/empdata`)
      .then((res) => {
        setdata(res.data)
      })
    // console.log(data)
  }

  useEffect(() => {
    getdata()
  }, [])

  const handledelete = (id) => {
    console.log("id is : ", id)
    axios.delete(`http://localhost:400/empdata/${id}`)
      .then(() => {
        getdata()
      })
    toast.success("deta deleted successfully")
  }

  const toLocalStorage = (id, username, email, password) => {
    localStorage.setItem("id", id)
    localStorage.setItem("username", username)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)

  }
  return (

    <div>
      <div style={{
         display:'flex',
         justifyContent:"space-between",
         margin:"5px 0px"
      }}>
      <div class="form-check form-switch">  {/* create switch button */}
        <input class="form-check-input" type="checkbox" 

        onClick={()=>{                // switch krne k part
          if(darktheme==="table-dark")
            setDarktheme("")
            else
            setDarktheme("table-dark")
        }}/>
        <label htmlFor="">Dark Mode</label>
       
      </div>
      <Link to="/create"><button className=' btn btn-primary'>Add New Record</button></Link>
      
      </div>
      <div className='scroll'>
      <Table className={`${darktheme} `}> {/* variable n yha pr use krege jo uper create kiya h */}
    
        <thead>
          <tr>
            <th>Srno</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
      
        <tbody className='scroll'>
          {
            data.map((element, index) => {
              return (<>

                <tr>
                  <td>{index + 1}</td>
                  <td>{element.username}</td>
                  <td>{element.email}</td>
                  <td>{element.password}</td>

                  {/* handledelete(element.id) */}
                  <td><i class="fa-sharp fa-solid fa-trash"
                    onClick={() => {
                      if (window.confirm("are you sure to delete!!!!"))
                        handledelete(element.id)
                    }
                    }></i></td>
           

                  <td>
                    {/* toLocalStorage(element.id, element.username, element.password, element.email) */}
                    <Link to="/update" onClick={() => {
                      if (window.confirm("are you sure to update!!!"))
                        toLocalStorage(element.id, element.username, element.email, element.password)
                    }}>
                      <i class="fa-shrp fa-solid fa-file-pen"></i>
                    </Link>

                  </td>
              
                </tr>
             
              </>)
            })
          }
       
        </tbody>
    
   
      </Table>
      </div>
      <ToastContainer />
    </div>
    
  )
  
}