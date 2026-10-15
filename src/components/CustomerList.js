import ViewCustomer from "./ViewCustomer";

export default function CustomerList({customer,setCustomer})
{
    return(<>
        {customer.map((rec)=><ViewCustomer rec={rec} customer={customer} setCustomer={setCustomer}></ViewCustomer>)}
    </>)
}