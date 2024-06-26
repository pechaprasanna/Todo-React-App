import { Link, useParams } from 'react-router-dom'

function WelcomeComponent() {

    const {username} = useParams()

    return(
        <div className='WelcomeComponent'>
            <h1>
                Welcome {username} !!
            </h1>
            <Link className="btn btn-dark btn-lg" to='/todos'>Go to your Todos</Link>
        </div>
    )
}

export default WelcomeComponent

