export const handleSendEmail = async function (url, data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        redirect: 'follow',
        body: JSON.stringify(data)
    })
    return response.json()
}

export const handleEmailError = (err) => {
    console.log(err)
}

export const handleEmailSuccess = (res) => {
    console.log(res)
}