export function login(type, userData) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", "admin@admin.com");
    urlencoded.append("password", "admin1");
    
    var requestOptions = {
      method: 'POST',
      credentials: 'include',
      mode: 'cors', 
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    let baseUrl = `http://localhost:8000/api/login`;

    return new Promise((resolve, reject) => {
        fetch("/api/login", requestOptions)
        .then(response => response.json())
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
}