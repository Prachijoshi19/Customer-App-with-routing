import {useNavigate} from 'react-router-dom';

export default function Login()
{
    let navigate = useNavigate()
    function checkLogin(e)
    {
        e.preventDefault()
        let email = e.target.unm.value
        let pass = e.target.pass.value
        if(email === 'prachi1912@gmail.com' && pass === 'prachi123')
        {
            localStorage.setItem('isLogin',true)
            navigate('/Home')
        }
        else
        {
            alert('Invalid username / password')
            navigate('/')
        }
    }
    return(<>
        <form onSubmit={checkLogin}>
            Email Id / Username:<input type="text" name='unm' /><br></br><br></br>
            Password:<input type="password" name='pass' /><br></br><br></br>
            <input type="submit" value="LOGIN" />
        </form>
    </>)
}