const poem_api = async () => { 
  const response = await fetch('https://poetrydb.org/random,linecount/1;15/lines')
  return response.json().then(res => {
    const ret = res[0].lines
    let combined = ''
    ret.forEach(line => combined += (line + "\n"))
    return combined
  })
}

export default poem_api

