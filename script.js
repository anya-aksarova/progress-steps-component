//FETCHED DOM ELEMENTS
const progress = document.getElementById('progress'); //progress line
const prev = document.getElementById('prev'); //prev button
const next = document.getElementById('next'); //next button
const circles = document.querySelectorAll('.circle'); //nodelist of all circles

//counter from 1 ro 4 (4 progress steps)
//will be changing so its not a const
let currentActive = 1;

//EVENT LISTENERS
//event listener click on button next
next.addEventListener('click', () => { //function
    currentActive++; //increment progress steps

    //if next button is pressed more than 4 times
    if (currentActive > circles.length) {
        //make counter stay at value 4
        currentActive = circles.length;
    }

    //function to update the DOM on each event listener 
    update();
} )

//event listener click on button prev
prev.addEventListener('click', () => { //function
    currentActive--; //decrement progress steps

    if (currentActive < 1) {
        //if the counter is less than 1 
        //let counter be 1.
        currentActive = 1;
    }

    //function to update the DOM on each event listener 
    update();
} )

//FUNCTION WHICH UPDATES THE DOM
function update() {
    //loop through circles bnodelist 
    //with a forEach method.
    circles.forEach((circle, idx) => { //takes an arrow function
        //for each circle check if its index 
        //is less than the current active.
        if(idx < currentActive) { 
            //add class active if true 
            //each circles index will get
            //compared to number of clicks
            //1 - 4 circles index and 
            //1 - 4 index counter
            //circle idx 1 < 3 clicks 
            //add class active to it
            circle.classList.add('active')
        } else {
            //circle idx 2 > 1 click
            //remove class from it
            circle.classList.remove('active')
        }
    }) 

    //get a nodelist of all active circles 
    const actives = document.querySelectorAll('.active');

    //moving the progress bar with each click
    //getting the % of the progress width

    //get the fetched id progress div.
    //set method .style on it on the .width 
    //devide the n of all active circles with n of circles
    //multiply by 100% to get the percentage
    //subtract 1 from each parameter to get lower percentage (33, 33, 33, 33)
    //concatemnate the % sign for the DOM manipulation to take effect
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    //PREV AND NEXT BUTTON ENABLE
    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}


