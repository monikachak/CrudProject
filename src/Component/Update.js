import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
export const Update=()=>{

    const [id,setId] = useState(0)
    const[username,setUsername] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

      const navigate= useNavigate()
    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setUsername(localStorage.getItem("username"))
        setEmail(localStorage.getItem("email"))
        setPassword(localStorage.getItem("password"))
    },[])
     
      const handleUpdate=()=>{
        console.log(id)
        axios.put(`http://localhost:400/empdata/${id}`,{ //put Update krne ke liye use hota h
            username:username,
            email:email,
            password:password

        }).then(()=>{
            navigate("/read")
        })
      }
    return(
        <div>
          <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <Form className='mb-2 mt-2' onSubmit={handleUpdate} >
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="text" name="username" 
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password"
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Button className="btn btn-success" type='update'>Update Record</Button>
                    </Form>

                </div>
                <div className='col-md-3'></div>

            </div>

        </div>
    )
}