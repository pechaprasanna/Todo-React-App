import { Link } from 'react-router-dom'


function LogoutComponent() {
    return (
        <div className='LogoutComponent'>
            <div>
                Logged Out!!
            </div>
            <Link to='/login'>Login</Link> Again.
        </div>
    )
}

export default LogoutComponent