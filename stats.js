// *****  PULLING STARLINK DATA ******* //

const getStarlink = async () => {
  const url = `https://api.spacexdata.com/v4/starlink`

  try {
    const response = await axios.get(url);
    let numberSats = response.data.length
    
    const starlinkInfo = document.createElement('div')
    starlinkInfo.innerHTML = `
    <h2>Satellites in orbit:</h2> <h1>${numberSats}</h1>
    `
    let starlinkContainer = document.querySelector('.starlink')
    starlinkContainer.append(starlinkInfo)

  return response

   } catch (error) {
    console.log(error)
  }
}
getStarlink()


// ****** GET CREW MEMBER INFO ****** // 

const getCrew = async () => {
  const url = `https://api.spacexdata.com/v4/crew`

  try {
    const resp = await axios.get(url);
    let crewMembers = resp.data

    crewMembers.forEach(crew => {
    
    const crewInfo = document.createElement('div')
    crewInfo.innerHTML = `
    <h4>${crew.name}</h4>
    <img src="${crew.image}">
    `
    let crewContainer = document.querySelector('.crew')
    crewContainer.append(crewInfo)

      return resp
    })

   } catch (error) {
    console.log(error)
  }
}
getCrew()

