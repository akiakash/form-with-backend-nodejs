import axios from 'axios';
import React, { useState } from 'react';
import {Form} from 'react-bootstrap';


function Forms() {

    const[email,setEmail] = useState();
    const[textarea,setTextarea] = useState();

    function onSubmit(){
        axios.post("http://localhost:3001/forms",{
                email:email,
                textarea:textarea,
        }).then((res)=>{
            console.log("success");
            console.log("res :", res)
        }).catch((err)=>{
            console.log("error message")
            console.log("res :", err)
        }       
        )
        console.log("akash");
            console.log("email :",email );
            console.log("textarea :",textarea );
    }
  return (
    
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e)=>setTextarea(e.target.value)}/>
            </Form.Group>
            {/* <button onClick={onSubmit}> submit     </button> */}
            <input type="button" onClick={onSubmit} value="Submit"/>
      </Form>
  )
}

export default Forms;