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

// ***** COUNTDOWN CODE GOES HERE ****** // 
  let countDownDate = new Date(`${upcomingData.date_utc}`).getTime();

  let timer = setInterval(() => {
    
    let today = new Date().getTime();
    let timeleft = countDownDate - today;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft %  (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / (1000));
    

    document.getElementById("days").innerHTML = days + " days"
    document.getElementById("hours").innerHTML = hours + " hours"
    document.getElementById("minutes").innerHTML = minutes + " minutes"
    document.getElementById("seconds").innerHTML = seconds + " seconds"

    if (timeleft < 0) {
      clearInterval(timer);
      document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = ""
    document.getElementById("minutes").innerHTML = ""
    document.getElementById("seconds").innerHTML = "NOW!"
    }
  
});

  // ***** NEXT LAUNCH DATA HERE ******* // 
  
    const newLaunchInfo = `
    <img src = ${upcomingData.links.patch.small}/>
    <h2>Name: ${upcomingData.name}</h2>
    <details>Launch Details: ${upcomingData.details}</details>
    ` 
    let upcomingContainer = document.querySelector('.new-launch')
    upcomingContainer.insertAdjacentHTML('beforeend', newLaunchInfo)

  return newLaunchInfo 
  
}



// ****** RENDER PREVIOUS LAUNCH DATA ******* //

async function showPastData() {
  
  try {
    let pastData = await axios.get(`https://api.spacexdata.com/v4/launches/past`);
    
    // console.log(pastData)

    let results = pastData.data.splice(0, 5)
        
        results.forEach(rocket => {

          const oldLaunchInfo = document.createElement('div')
        oldLaunchInfo.classList.add('old-rocket')
        oldLaunchInfo.innerHTML = `
        <h2>Name: ${rocket.name}</h2>
        <h3>Launch Date: ${rocket.date_utc}</h3> 
        <img src = ${rocket.links.patch.small}>
        <details>Mission Details: ${rocket.details}</details>
        `
          let pastContainer = document.querySelector('.old-launches')
        pastContainer.append(oldLaunchInfo)  
          
      })
    
        //  return oldLaunchInfo 
  
  
  } catch (error) {
    console.log(error)
  }

}

showPastData();

// ****** CREATING CAROUSEL FOR PAST MISSIONS ****** //

const carouselSlide = document.querySelector('.old-launches')
const carouselItems = document.querySelectorAll('div')

const previous = document.querySelector('#previous')
const next = document.querySelector('#next')

let counter = 0;
// const size = carouselItems[0].clientWidth + (carouselItems[0].clientWidth * .10)
const size = carouselSlide.clientWidth



next.addEventListener('click', (() => {
  carouselSlide.style.transition = "transform 0.4s ease-in-out"
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}))

carouselSlide.addEventListener('transitionend', (() => {
  if (counter === 4) {
    carouselSlide.style.transition = "none";
    counter = carouselItems.length - 3;
  }
}))

// figured out transition code with the help of Dev Ed on YT

// ***** ADDING COLLAPSIBLE TOGGLE FOR LAUNCH DETAILS ***** //

let details = document.querySelectorAll('details')
  
details.addEventListener("toggle", (() => {
  if (details.open) {
  } else {
  }
}))

