// ***** UPCOMING LAUNCHES GO FIRST ******* //

const getNextLaunch = async () => {
  const url = `https://api.spacexdata.com/v4/launches/upcoming`

  try {
    const response = await axios.get(url);
    
    upcomingData = response.data[0]
    // console.log(upcoming)
    showLaunchData(upcomingData)
  
  return response

   } catch (error) {
    console.log(error)
  }
}
getNextLaunch()

// ***** RENDERING UPCOMING LAUNCH DATA HERE ******** // 

const showLaunchData = (upcomingData) => {

    const newLaunchInfo = `
    <h1>${upcomingData.date_utc}</h1> 
    <img src = ${upcomingData.links.patch.small}/>
    <h2>Name: ${upcomingData.name}</h2>
    <p>Launch Details: ${upcomingData.details}</p>
    ` 
  let upcomingContainer = document.querySelector('.new-launch')
  upcomingContainer.insertAdjacentHTML('beforeend', newLaunchInfo)

  return newLaunchInfo 
  
}

// ********* PAST LAUNCH DATA GOES BELOW HERE ********** // 

// ****** RENDER PREVIOUS LAUNCH DATA ******* //

async function showPastData() {
  
  try {
    let pastData = await axios.get(`https://api.spacexdata.com/v4/launches/past`);

    // console.log(pastData)
     
    pastData.data.forEach(rocket => {

        const oldLaunchInfo = `
        <h2>Name: ${rocket.name}</h2>
        <h3>Launch Date: ${rocket.date_utc}</h3> 
        <img src = ${rocket.links.patch.small}>
        <p>Launch Details: ${rocket.details}</p>
        ` 
      let pastContainer = document.querySelector('.old-launch')
      pastContainer.insertAdjacentHTML('beforeend', oldLaunchInfo)

      return oldLaunchInfo 
      

      
    })
  
  
  } catch (error) {
    console.log(error)
  }

}

showPastData();
