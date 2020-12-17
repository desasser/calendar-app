//Declare array variable to store present time events in local storage
var scheduleArr = JSON.parse(localStorage.getItem("schedInput")) || [];
var scheduleObj = [];

//Upon loading page, grab anything in local storage and display it to the textarea corresponding to the timeOfDay value in the schedule object

//Fetch current day of the week and date from moment.js
var now = moment().format('dddd, MMMM Do YYYY');
//Append current day to p-tag of currentDay in HTML
$('#currentDay').append(now);
// console.log(now);

//Fetch current time from moment.js
var currentTime = moment().format('HH')


//Run loop to check which block current time fits in and assign class (past, future, present)
for (i = 0; i < 24; i++) {
    // console.log(i);
    if (parseInt(currentTime) === i) {
        //grab the thing with data-time = i and set the class attribute to present
        $(`[data-time = ${i}]`).prev().addClass('present');
        //for all data-time > i, set the class attribute to future
        for (let j = i+1; j < 24; j++) {
            $(`[data-time = ${j}]`).prev().addClass('future');
        }
        //for all data-time < i, set the class attribute to future
        for (let k = 0; k < i-1; k++) {
            $(`[data-time = ${k}]`).prev().addClass('past');
        }
    } 
    
}

// console.log(currentTime);

//When the save button is clicked, save the text from the present time into local storage
$(".saveBtn").on("click", function() {
    
    var dataTime = $(this).attr("data-time")
    
    //Store calendar input from this item into object with the time and the content
    //TODO: Use this object to maintain the text in the proper cells
    scheduleObj = {
        timeOfDay : dataTime,
        schedInput : $(".present").val()
    }
    console.log(scheduleObj.timeOfDay);
    
    //Push schedule object into an array of objects
    // scheduleArr.push(scheduleObj);
    
    //Set the data from users input into local storage for later use, stringified
    // localStorage.setItem("schedInput", JSON.stringify($(".present").val()));
    
    //If the input event is blank but the button is clicked, return early doing nothing
    if ($(".present").val() === '') {
        return;
    }
    
})

//Take the schedule from 4am and add it to the text area from 4 am
//TODO: Come back to this, its not properly updating the screen
// $("#textOne").text(scheduleObj.timeOfDay);
// console.log(scheduleObj.timeOfDay);
