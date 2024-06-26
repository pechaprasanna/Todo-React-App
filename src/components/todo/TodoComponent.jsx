import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { retrieveTodoApi, updateTodoApi, saveTodoApi } from "./api/HelloWorldApiService"

export function TodoComponent() {

    const {id} = useParams()
    const authContext = useAuth()
    const [description, setDescription] = useState(null)
    const [targetDate, setTargetDate] = useState(null)
    const username = authContext.username
    const todo = {
        description:description,
        targetDate:targetDate
    }
    const navigate = useNavigate()

    useEffect(() => {
        function retrieveTodos() {
            if (id > 0) {
                retrieveTodoApi(username, id)
                    .then(response => response.json())
                    .then(json => {
                        setDescription(json.description)
                        setTargetDate(json.targetDate)
                    })
                    .catch(error => console.error())
            }
        }
        retrieveTodos()
    }, [username, id])
    

    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }
    
    function handleTargetDateChange(event) {
        setTargetDate(event.target.value)
    }

    function handleUpdate() {
        updateTodoApi(username, id, todo)
        .then(response => navigate(`/todos`))
        .catch(error => console.error(error))
    }

    function handleSave() {
        saveTodoApi(username, todo)
        .then(response => navigate(`/todos`))
        .catch(error => console.error(error))
    }

    

    return (
        <div className='Todo'>
        <div className="Todoform">
            <h1> Todo </h1>
            <div className="form-group d-flex justify-content-center m-3">
                <label>Description:</label>
                <input type="text" className="form-control input-field w-50" name="description" value={description} onChange={handleDescriptionChange} />
            </div>
            <div className="form-group d-flex justify-content-center m-3">
                <label>Target Date:</label>
                <input type="date" className="form-control input-field w-50" name="targetDate" value={targetDate} onChange={handleTargetDateChange} />
            </div>
            { id>0 && <button className="btn btn-dark m-5" type="submit" onClick={handleUpdate}>Update</button>}
            { id<0 && <button className="btn btn-dark m-5" type="submit" onClick={handleSave}>Save</button>}
            
        </div>
    </div>
    )
}