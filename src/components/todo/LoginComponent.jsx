import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function LoginComponent() {

    const [username, setUsername] = useState('Prasanna')
    const [password, setPassword] = useState('')
    const [showErrorMesssage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate()

    const authContext = useAuth()

    function  handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if(authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    return(
        <div className='Login'>
            <div className="LoginForm">
                <h1> Login </h1>
                <div>
                   {showErrorMesssage && <div>Authentication Failed. Try with Correct Credentials</div>}
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button className="m-5 btn btn-dark" type="submit" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}


export default LoginComponent