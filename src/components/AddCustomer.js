import axios from "axios"
import { Link,useNavigate } from "react-router-dom";

export default function AddCustomer({customer,setCustomer})
{
    let navigate = useNavigate()
    function add(e)
    {
        e.preventDefault()
        let tempObj={
            "fName":e.target.fnm.value,
            "lName":e.target.lnm.value,
            "email":e.target.email.value
        }
        if(window.confirm('Do you want to add new customer?'))
        {
            axios.post('http://localhost:3005/customer',tempObj)
            .then((response)=>{
                setCustomer((temp)=>[...temp,tempObj])
                alert('Customer Added!!!')
                e.target.fnm.value=''
                e.target.lnm.value=''
                e.target.email.value=''
                navigate('/list')
            })
            .catch((error)=>{
                alert('Error occured during adding new record...')
            })
        }
        else
        {
            navigate('/')
        }
    }   
    return(<>
        <form onSubmit={add}>
            First Name: <input type="text" name="fnm" /><br></br><br></br>
            Last Name:<input type="text" name="lnm" /><br></br><br></br>
            Email Id:<input type="text" name="email" /><br></br><br></br>
            <input type="submit" value="ADD NEW CUSTOMER" />
        </form>
        <h3>
            <Link to="/">Home</Link>
        </h3>
    </>)
}