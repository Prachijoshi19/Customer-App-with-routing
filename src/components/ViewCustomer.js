import UpdateCustomer from "./UpdateCustomer"
import { useNavigate } from "react-router-dom"
export default function ViewCustomer({rec,customer,setCustomer})
{
    let navigate = useNavigate()
    function editCust(id)
    {
        alert(id)
        navigate('/edit/'+id)
    }
    return(<>
        <p>
            First Name:{rec.fName}<br></br>
            Last Name:{rec.lName}<br></br>
            Email Id:{rec.email}<br></br>
            <button onClick={()=>editCust(rec.id)}>UPDATE</button>
            <button>DELETE</button>
        </p>
    </>)
}