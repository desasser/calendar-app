//Declare variables for local storage
var thisHour = '';
var newValue = '';

//Upon loading page, grab anything in local storage and display it to the textarea corresponding to the timeOfDay value in the schedule object

//Fetch current day of the week and date from moment.js
var now = moment().format('dddd, MMMM Do YYYY');

//Append current day to p-tag of currentDay in HTML
$('#currentDay').text(now);

//Fetch current time from moment.js
var currentTime = moment().format('HH')

//Outputs a time in military time as a number
console.log(moment().hour());

//Run loop to check which block current time fits in and assign class (past, future, present)
//Could be a 'for each' method instead to loop over only existing elements instead of 0-24
for (i = 0; i < 24; i++) {
    // console.log(i);
    if (parseInt(currentTime) === i) {
        //grab the thing with data-time = i and set the class attribute to present
        $(`[data-time = ${i}]`).prev().addClass('present');
        //for all data-time > i, set the class attribute to future
        for (let j = i + 1; j < 24; j++) {
            $(`[data-time = ${j}]`).prev().addClass('future');
        }
        //for all data-time < i, set the class attribute to future
        for (let k = 0; k < i; k++) {
            $(`[data-time = ${k}]`).prev().addClass('past');
        }
    }
}

//When the save button is clicked, save the text from the present time into local storage
$(".saveBtn").on("click", function () {

    thisHour = $(this).attr("data-time");
    newValue = $(this).siblings("textarea").val();

    localStorage.setItem(thisHour, newValue);
})

//Take the schedule from textareas and add it to the appropriate text areas
$("#textOne").val(localStorage.getItem('4'));
$("#textTwo").val(localStorage.getItem('5'));
$("#textThree").val(localStorage.getItem('6'));
$("#textFour").val(localStorage.getItem('7'));
$("#textFive").val(localStorage.getItem('8'));
$("#textSix").val(localStorage.getItem('9'));
$("#textSeven").val(localStorage.getItem('10'));
$("#textEight").val(localStorage.getItem('11'));
$("#textNine").val(localStorage.getItem('12'));
$("#textTen").val(localStorage.getItem('13'));
$("#textEleven").val(localStorage.getItem('14'));
$("#textTwelve").val(localStorage.getItem('15'));
$("#textThirteen").val(localStorage.getItem('16'));
$("#textFourteen").val(localStorage.getItem('17'));
$("#textFifteen").val(localStorage.getItem('18'));
$("#textSixteen").val(localStorage.getItem('19'));
$("#textSeventeen").val(localStorage.getItem('20'));
$("#textEighteen").val(localStorage.getItem('21'));
$("#textNineteen").val(localStorage.getItem('22'));
$("#textTwenty").val(localStorage.getItem('23'));
