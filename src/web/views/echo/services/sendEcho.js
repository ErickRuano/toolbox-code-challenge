const sendEcho = (text) => {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    window.fetch(`http://localhost:3000/api/iecho?text=${text}`, requestOptions)
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error))
  })
}

export default sendEcho
