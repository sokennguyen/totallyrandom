const dogFact_api = async () => { 
  const response = await fetch('https://dogapi.dog/api/facts')
  return response.json().then(res => res.facts[0])
}

export default dogFact_api

