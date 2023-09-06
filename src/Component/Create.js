import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export const Create = () => {

   const Naviget=useNavigate()  //update ke page pr switch krne ke liye
    const[empdata,setData]=useState(

        {
            username:"",
            email:"",
            password:""
        
        }
    )
   
    const handlechange=(e)=>{
        // console.log(e.target.name, e.target.value)
        setData({...empdata,[e.target.name]:e.target.value})

    }

    const handleSubmit= async(e)=>{
        // {
        //     if(window.confirm("are you sure to create!!!!"))

        // }
        e.preventDefault()
        try{
          if(!empdata.username || !empdata.email || !empdata.password){
            alert("fill all fields are mandatory")
          }  
          else{
            await axios.post(`http://localhost:400/empdata`,{
               username:empdata.username,
               email:empdata.email,
               password:empdata.password
            }).then(()=>{
                if(window.confirm("Do you want to add this record"))
                Naviget("/read")
            })
            // setData(empdata.data)
            alert("Record Added Sucessfully")
          }
             
        }
      catch{
        console.log("somthing is wrong ...........")
      }
      
        console.log(empdata)
    }
    return (
        <>
      
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <Form className='mb-2 mt-2' onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="text" name="username" onChange={handlechange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" onChange={handlechange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" onChange={handlechange}/>
                        </FormGroup>
                        <Button className="btn btn-success" type='submit'>Add Record</Button>
                    </Form>

                </div>
                <div className='col-md-3'></div>

            </div>

        </>
    )
}
