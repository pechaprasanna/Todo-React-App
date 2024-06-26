import { Link } from 'react-router-dom'

function ErrorPageComponent() {
    return (
        <div className='ErrorPageComponent'>
            Sorry. We coundn't find that page. <Link to='/'>Go to home</Link>
        </div>
    )
}

export default ErrorPageComponent