const catFact_api = async () => { 
  const response = await fetch('https://meowfacts.herokuapp.com/')
  return response.json().then(res => res.data[0])
}

export default catFact_api

