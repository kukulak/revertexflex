import {API_ENDPOINT} from '.'

export const getPersonalRays = async() => {
    const response = await fetch(`${API_ENDPOINT}/rays`)
    const ray = await response.json()
    return ray
}


export const createPersonalRay = async(newName, newLastName, newAka, newBirthday, color1, color2, color3) => {
    const response = await fetch(`${API_ENDPOINT}/rays`, {
        method: 'POST',
        body: JSON.stringify({
            name: newName,
            lastName: newLastName, 
            aka: newAka,
            birthday: newBirthday,
            color1: color1,
            color2: color2,
            color3: color3,
        }),
        headers:{
            "Content-Type": "application/json",
        },
    })
    const newRay = await response.json()
    return newRay
}

export const deletePersonalRays = async (id) => {
    const response = await fetch(`${API_ENDPOINT}/rays/${id}`, {method: 'DELETE'})
    return response.status
    }

    
export const updatePersonalRays = async(id, newName, newLastName, newAka, newBirthday, color1, color2, color3) => {
    const response = await fetch(`${API_ENDPOINT}/rays/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            newName,
            newLastName, 
            newAka,
            newBirthday,
            color1,
            color2,
            color3,
        }),
        headers:{
            'Content-Type': 'application/json'
        },
    })
    return response.status
}