import GoogleLogin from "react-google-login";
import { useDispatch } from 'react-redux'
import { setUser } from '@/app/redux/store'

const clientId = '278106079939-h26348ohv17i03hkj7e2mcvsrp6h6851.apps.googleusercontent.com'

const Login = () => {
    
    const dispatch = useDispatch()

    const onSuccess = (res) => {
        const user = res.profileObj
        dispatch(setUser(user))
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res)
    }

    return(
    <div>
        <GoogleLogin 
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          />
    </div>)
}

export default Login