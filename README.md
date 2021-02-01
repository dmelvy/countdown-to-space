# Project Overview

## Countdown to Space

https://dmelvy.github.io/countdown-to-space/

## Project Description

With this simple app, users will be able to conveniently see SpaceX data and updates all in one place, including a countdown to when the next SpaceX launch will take place. No more combing through news articles and lengthy text!

## API and Data Sample

I am using the SpaceX API: https://github.com/r-spacex/SpaceX-API 
``` "crew": [],
        "ships": [],
        "capsules": [],
        "payloads": [
            "5fbfedc654ceb10a5664c814"
        ],
        "launchpad": "5e9e4502f509094188566f88",
        "auto_update": true,
        "launch_library_id": "dfd4f0e0-0ab4-494d-bd88-1b93b934b269",
        "failures": [],
        "flight_number": 116,
        "name": "Starlink-17 (v1.0)",
        "date_utc": "2021-01-29T13:00:00.000Z",
        "date_unix": 1611925200,
        "date_local": "2021-01-29T08:00:00-05:00",
        "date_precision": "hour",
        "upcoming": true,
        "cores": [ 
```
## Wireframes

![Wireframe](https://user-images.githubusercontent.com/75932113/105767250-bc893e00-5f52-11eb-9bd5-6b65bdab487b.png)

### MVP/PostMVP

#### MVP 

- Implement SpaceX API data of upcoming launches
- Implement SpaceX API data of previous launches
- Render data in 2 separate sections

#### PostMVP  

- Display SpaceX stats of total launches + satellites
- Display crew member information
- Add countdown for next launch date
- Add stylized animation of rocket

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 25-26| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 26| Project Approval | Complete
|Jan 27| Connect API and render data in HTML containers | Complete
|Jan 28| Create HTML architecture, including navigation | Complete
|Jan 29| Finalize MVP with basic CSS styling | Complete
|Feb 1| Presentations/Project Submission | Complete

## Priority Matrix

![ActionPriorityMatrix](https://user-images.githubusercontent.com/75932113/105766008-1ee13f00-5f51-11eb-9edb-0475b832ea1a.jpg)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Set up basic app HTML structure | H | 4hrs| 4hrs | 4hrs |
| Creating first HTML container | H | 3hrs| 2hrs | 2hrs |
| Creating second HTML container | H | 3hrs| 6.5hrs | 6.5hrs |
| Setting up JS for upcoming launch data | H | 5hrs| 2hrs | 2hrs |
| Setting up JS for previous launch data | H | 5hrs| 4hrs | 4hrs |
| Creating sticky header navigation | H | 3hrs| 1.5hrs | 1.5hrs |
| Creating buttons to navigate to other sections | H | 3hrs| 3hrs | 3hrs |
| Add basic CSS styling (font styles, element styling, colors) | H | 6hrs| 2hrs | 4hrs |
| Add advanced CSS styling (animations, gradients, etc.) | H | 8hrs| 4hrs | 10hrs |
| Total | H | 40hrs| 37hrs | 37hrs |

## Code Snippet

During this project, I ran into the problem of having too many results for "SpaceX past missions" which the API did not allow for easy pagination. Since I wanted to optimize my project for mobile, I needed a user-friendly solution that worked for smaller devices. 

Besides splicing the results, below is the code that I learned to implement for a mobile gallery view. 

```
const carouselSlide = document.querySelector('.old-launches')
const carouselItems = document.querySelectorAll('div')

const previous = document.querySelector('#previous')
const next = document.querySelector('#next')

let counter = 0;
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
```

## Change Log

None