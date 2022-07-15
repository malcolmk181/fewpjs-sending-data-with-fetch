// Add your code here
function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };
    
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    
    return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json() )
    .then( data => {
        const par = document.createElement('p');
        par.innerHTML = data.id;
        document.body.appendChild(par);
    } )
    .catch(error => {
        const par = document.createElement('p');
        par.innerHTML = error.message;
        document.body.appendChild(par);
    });
}