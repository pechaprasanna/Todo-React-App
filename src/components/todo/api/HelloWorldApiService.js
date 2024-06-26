const url = 'http://localhost:8080'

export const getTodosApi = (username) => fetch(url+`/users/${username}/todos`)

export const deleteTodoApi = (username, id) => fetch(url+`/users/${username}/todos/${id}`, {method:"DELETE"})

export const retrieveTodoApi = (username, id) => fetch(url+`/users/${username}/todos/${id}`)

export const updateTodoApi = (username, id, todo) => fetch(url+`/users/${username}/todos/${id}`, {
    method:"PUT",
    body: JSON.stringify(todo),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    }
})

export const saveTodoApi = (username, todo) => fetch(url+`/users/${username}/todos`, {
    method:"POST",
    body: JSON.stringify(todo),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    }
})
