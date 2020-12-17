//Declare array variable to store present time events in local storage
var scheduleArr = JSON.parse(localStorage.getItem("presentData")) || [];
var scheduleObj = [];

//When the save button is clicked, save the text from the present time into local storage
$(".saveBtn").on("click", function() {
    console.log( $(".present").val());
    localStorage.setItem("presentData", JSON.stringify($(".present").val()));
    var dataTime = $(this).attr("id")
    console.log("This is the ID of the button pressed " + dataTime);
    //Store calendar input from this item into object with the time and the content
    // schdeuleObj = {
    //     inputTime: inputData
    // }
    //If the input event is blank but the button is clicked, return early doing nothing
    // if (inputData === '') {
    //     return;
    // }

})

