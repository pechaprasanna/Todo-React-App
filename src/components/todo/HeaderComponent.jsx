import { Link } from 'react-router-dom'
import { useAuth } from './security/AuthContext'


function HeaderComponent() {

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout() {
        authContext.logout()
    }

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2 bg-dark bg-gradient text-light">
            <div className="container">
            <div className="row">
                    <nav className="navbar navbar-expand-lg">
                    { isAuthenticated && <Link className="logo nav-link" to="/welcome/Prasanna">TodoApp</Link> }
                    { !isAuthenticated && <div className='logo'>TodoApp</div>}
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                { isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link text-light" to="/welcome/Prasanna">Home</Link></li> }
                                { isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link text-light" to="/todos">Todos</Link></li> } 
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            { !isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link text-light" to="/login">Login</Link></li> }
                            { isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link text-light" to="/logout" onClick={logout}>Logout</Link></li> }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}


export default HeaderComponent