async function request(path, method, body){
    const response = await fetch(path, {
        method,
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(body)
    })
    return await response.json()
}

