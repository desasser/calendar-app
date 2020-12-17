//Declare array variable to store present time events in local storage
var scheduleArr = JSON.parse(localStorage.getItem("schedInput")) || [];
var scheduleObj = [];

//Declare variables for local storage
var thisHour = '';
var newValue = '';

//Upon loading page, grab anything in local storage and display it to the textarea corresponding to the timeOfDay value in the schedule object

//Fetch current day of the week and date from moment.js
var now = moment().format('dddd, MMMM Do YYYY');

//Append current day to p-tag of currentDay in HTML
$('#currentDay').append(now);

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
        for (let k = 0; k < i; k++) {
            $(`[data-time = ${k}]`).prev().addClass('past');
        }
    }
}

//When the save button is clicked, save the text from the present time into local storage
$(".saveBtn").on("click", function() {
    
    thisHour = $(this).attr("data-time");
    newValue = $("#textEleven").val();
    
    localStorage.setItem(thisHour, newValue);
})

//Take the schedule from 4am and add it to the text area from 4 am
//TODO: Come back to this, its not properly updating the screen
$("#textEleven").val(thisHour, newValue);
console.log(thisHour, newValue);