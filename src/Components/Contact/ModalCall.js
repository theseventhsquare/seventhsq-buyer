import React from 'react'
import { Button,Modal} from 'react-bootstrap'; 
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form'
import "./modal_call.css"
import axios from "axios";
import { useState, useEffect } from 'react';
function Popup(props) {
  const [subject,setsubject]=useState('')
	const [description,setdescription]=useState('')
	const [name,setname]=useState('')
  const [selectedImage, setSelectedImage] = useState(null);


  const reqchange=(e)=>{
		let name=e.target.name
		let value=e.target.value
		if(name=='subject'){
			setsubject(value)
	
		}
		if(name=='description'){
		   setdescription(value)
	   }
		if(name=='name'){
      setname(value)
	   }
	  
	 }

   const handleresent=(e)=>{
    var date = new Date().toLocaleString()
          e.preventDefault()
          const config = {
            headers: {
            // Authorization: "token " + localStorage.getItem("token"),
            },
          };
      const data={
        Name:name,
        subject: subject,
        description: description,
        date: date
      }
      console.log(data)
      axios.post('https://api.seventhsq.com/enquiry/callback/',data,config).then(
        res=>{
        
        window.alert("message Sent");
        }

      ).catch(
        err=>{
        console.log(err)
        window.alert("Something went wrong");
        }
      )
      }
    return (
        <>
       
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Request Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please fill the details below & we'll reach out to you soon</h4>
          <p>
           {/* We try to fulfill all the requests of users */}
          </p>
        </Modal.Body>
        <Form.Group className='mx-3 my-2' >
             <Form method='POST' onSubmit={handleresent}>
              <Form.Label className='mt-4'>Your Name: </Form.Label>
              <Form.Control type="text"   placeholder="Name"  name='name' onChange={reqchange}/> 
              <Form.Label className='mt-4'>Phone Number: </Form.Label>
              <Form.Control type="text"   placeholder="Phone"  name='subject' onChange={reqchange}/> 
              <Form.Label className='mt-4'>Message: </Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="message" name='description' onChange={reqchange}/>
              {/* <Form.Label>Select File(Optional)</Form.Label>
                <Form.Control type="file" />     */}

               <Button className='mx-4 mt-4 btn btn-secondary' type='submit' >Request call back</Button> 
              </Form>       
          </Form.Group>
        <Modal.Footer>
        
          
        </Modal.Footer>
      </Modal>
      </>
    );
  }
export default Popup