const path = "https://demo.exultcybersolution.com/poultryfarm/api"

export const login = (data)=>{
    fetch(path, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
}