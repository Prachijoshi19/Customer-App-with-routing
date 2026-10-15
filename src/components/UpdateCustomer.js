import {Link,useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UpdateCustomer({customer,setCustomer})
{
    let cid = useParams()
    console.log('Current customer id:'+cid.id)
    let [currCustomer,setCurrCustomer] =useState({
        id:'',
        fName:'',
        lName:'',
        email:''
    })
    useEffect(()=>{
        axios.get(`http://localhost:3005/customer/${cid.id}`)
        .then((response)=>{
            setCurrCustomer(response.data)
        })
        .catch((err)=>{
            console.log('no record found.....')
        })
    },[])

    function handleChange(e)
    {
        setCurrCustomer({...currCustomer,[e.target.name]:e.target.value})
    }
    function updateCust(e)
    {
        e.preventDefault()
        let tempCust ={
            id:currCustomer.id,
            fName:currCustomer.fName,
            lName:currCustomer.lName,
            email:currCustomer.email
        }
        console.log('Customer to be update--'+tempCust.id+'   '+tempCust.email)
        axios.put('http://localhost:3005/customer/'+currCustomer.id,tempCust)
        .then((response)=>{
            //update state of component setCustomer()
        })
    }
    return(<>
           <form onSubmit={updateCust}>
            First Name: <input type="text" name="fName" value={currCustomer.fName} onChange={handleChange} /><br></br><br></br>
            Last Name:<input type="text" name="lName" value={currCustomer.lName} onChange={handleChange} /><br></br><br></br>
            Email Id:<input type="text" name="email" value={currCustomer.email} onChange={handleChange} disabled /><br></br><br></br>
            <input type="submit" value="UPDATE CUSTOMER" />
        </form>
        <h3>
            <Link to="/">Home</Link>
        </h3>
    </>)
}