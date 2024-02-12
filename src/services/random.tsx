const randomFact_api = async () => { 
  const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
  return response.json().then(res => res.text)
}

export default randomFact_api

