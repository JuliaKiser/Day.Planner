
//variable to create clock display
var time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
// variable that will help to link to each hour variable
var hours = moment().hours();

$('#currentDay').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
// creates live clock on page
function update() {
    $('#currentDay').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update,1000);

$(".time-block").each(function(){
    var currentTime = parseInt($(this).attr("id").split("-")[1]);
    console.log(currentTime);

    if(currentTime === hours){
        console.log("Equal");
        $(this).children(".description").addClass("current-time");
    }else if(currentTime < hours){
        $(this).children(".description").addClass("past-time");
    }else{
        $(this).children(".description").addClass("future-time");
    }
})

//Save Button Event Listener and Function
$(document).on('click',".saveBtn", function(event) {
    event.preventDefault();
    var note = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,note);
})

//create ability to store locally and still be able to refresh and keep the information
$('#hours-8 .description').val(localStorage.getItem("hours-8"))
$('#hours-9 .description').val(localStorage.getItem("hours-9"))
$('#hours-10 .description').val(localStorage.getItem("hours-10"))
$('#hours-11 .description').val(localStorage.getItem("hours-11"))
$('#hours-12 .description').val(localStorage.getItem("hours-12"))
$('#hours-13 .description').val(localStorage.getItem("hours-1"))
$('#hours-14 .description').val(localStorage.getItem("hours-2"))
$('#hours-15 .description').val(localStorage.getItem("hours-3"))
$('#hours-16 .description').val(localStorage.getItem("hours-4"))
$('#hours-17 .description').val(localStorage.getItem("hours-5"))
$('#hours-18 .description').val(localStorage.getItem("hours-6"))
$('#hours-19 .description').val(localStorage.getItem("hours-7"))
$('#hours-20 .description').val(localStorage.getItem("hours-8pm"))