


let apiURL = 'http://localhost:8000'
if (!window.location.hostname.includes("localhost")) {
    apiURL = 'http://myfpm.10.130.1.130.nip.io:80'
}

export {apiURL}