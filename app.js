let thursday = document.querySelector('.Thursday');
let friday = document.querySelector('.Friday');
let saturday = document.querySelector('.Saturday');
let nav = document.querySelectorAll('.nav');
let thursdayEvent = document.getElementById('thursday');
let fridayEvent = document.getElementById('friday');
let saturdayEvent = document.getElementById('saturday');




nav.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
        let target = e.target;
        thursday.style = "background-color: rgba(65, 71, 88, 0.3);"
        friday.style = "background-color: rgba(65, 71, 88, 0.3);"
        saturday.style = "background-color: rgba(65, 71, 88, 0.3);"
        console.log(e.target);
        target.style = "background-color: #B91C1C";

        if (target.classList.contains('Thursday')) {
            thursdayEvent.style = "height: auto;";
            fridayEvent.style = "height: 0px;";
            saturdayEvent.style = "height: 0px;";
        } else if (target.classList.contains('Friday')) {
            thursdayEvent.style = "height: 0px;";
            fridayEvent.style = "height: auto;";
            saturdayEvent.style = "height: 0px;";
        } else if (target.classList.contains('Saturday')) {
            thursdayEvent.style = "height: 0px;";
            fridayEvent.style = "height: 0px;";
            saturdayEvent.style = "height: auto;";
        }
    })
})