import { useEffect, useState } from "react"
import { deleteTodoApi, getTodosApi, } from "./api/HelloWorldApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

function ListTodosComponent() {

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate()

   

    function refreshTodos() {
        getTodosApi(username)
        .then(response => response.json())
        .then(json => setTodos(json))
        .catch(error => console.error(error))
    }
    
    useEffect(() => refreshTodos())

    function deleteTodo(id) {
        deleteTodoApi(username, id)
        .then(() => {
            setMessage(`Deleted Post with id=${id}`)
            refreshTodos()
        })
        .catch(error => console.error(error))
    }

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    function handleAddTodo(){
        navigate(`/todo/-1`)
    }

    return (
        <div className='container'>
            {message && <div className="alert alert-warning">{message}</div>}
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Done?</th>
                        <th>Target Date</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo) => ( 
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate}</td>
                                <td><button className="btn btn-outline-dark" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                <td><button className="btn btn-dark" onClick={() => updateTodo(todo.id)}>Update</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <button className="btn btn-dark" onClick={handleAddTodo}>Add Todo</button>
            </div>
        </div>
    )
}


export default ListTodosComponent