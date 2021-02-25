
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

//var saveBtn = document.querySelector(".save");

$(document).on('click',".saveBtn", function(event) {
    event.preventDefault();
    var note = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,note);
    console.log(note);
    console.log(time);
})

//create ability to store locally
$('#hours-8am').val(localStorage.getItem("hours-8"))
$('#hours-9').val(localStorage.getItem("hours-9"))
$('#hours-10').val(localStorage.getItem("hours-10"))
$('#hours-11').val(localStorage.getItem("hours-11"))
$('#hours-12').val(localStorage.getItem("hours-12"))
$('#hours-13').val(localStorage.getItem("hours-1"))
$('#hours-14').val(localStorage.getItem("hours-2"))
$('#hours-15').val(localStorage.getItem("hours-3"))
$('#hours-16').val(localStorage.getItem("hours-4"))
$('#hours-17').val(localStorage.getItem("hours-5"))
$('#hours-18').val(localStorage.getItem("hours-6"))
$('#hours-19').val(localStorage.getItem("hours-7"))
$('#hours-20').val(localStorage.getItem("hours-8pm"))

