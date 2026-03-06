const API_URL = "http://localhost:3000/peoples";

async function createPeople(person) {
    return await fetch(API_URL, {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(person),
    })
}

async function editPeople(id, person) {
    return await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(person)
    })
}

async function deletePeople(id) {
    return await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    }) 
}

export default {createPeople, editPeople, deletePeople};