// *****  PULLING STARLINK DATA ******* //

const getStarlink = async () => {
  const url = `https://api.spacexdata.com/v4/starlink`

  try {
    const response = await axios.get(url);
    console.log(response.data.length)
    let numberSats = response.data.length
    
    const starlinkInfo = document.createElement('div')
    starlinkInfo.innerHTML = `
    <h2>Satellites in orbit: ${numberSats}</h2>
    `
    let starlinkContainer = document.querySelector('.starlink')
    starlinkContainer.append(starlinkInfo)

  return response

   } catch (error) {
    console.log(error)
  }
}
getStarlink()

// *****  PULLING LAUNCHPAD DATA ******* //

const getLaunchpads = async () => {
  const url = `https://api.spacexdata.com/v4/launchpads`

  try {
    const res = await axios.get(url);
    // console.log(res.data.length)
    let numberPads = res.data.splice(0, 4)

    // <h2>Number of Launchpads: ${pads.length}</h2>

    numberPads.forEach(pads => {
    
    const launchpadInfo = document.createElement('div')
    launchpadInfo.innerHTML = `
    <h4>${pads.locality}, ${pads.region}</h4>
    `
    let launchpadContainer = document.querySelector('.launchpad')
    launchpadContainer.append(launchpadInfo)

      return res
    })

   } catch (error) {
    console.log(error)
  }
}
getLaunchpads()



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
