
//variable to create clock display
var time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
// variable that will help to link to each hour variable
var hours = moment().format('kk')


$('#currentDay').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
// creates live clock on page
function update() {
    $('#currentDay').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update,1000)

//variable to link to our hour IDS in our index page
var hoursEight1 = document.getElementById("hours-8am")
var hoursNine = document.getElementById("hours-9")
var hoursTen = document.getElementById("hours-10")
var hoursEleven = document.getElementById("hours-11")
var hoursTwelve = document.getElementById("hours-12")
var hoursOne = document.getElementById("hours-1")
var hoursTwo = document.getElementById("hours-2")
var hoursThree = document.getElementById("hours-3")
var hoursFour = document.getElementById("hours-4")
var hoursFive = document.getElementById("hours-5")
var hoursSix = document.getElementById("hours-6")
var hoursSeven = document.getElementById("hours-7")
var hoursEight2 = document.getElementById("hours-8pm")

//variables that create the format for our hours, recognizing what time of day it is 
//kk is moment format for 01 02...23 24 hourly and allows us to take note of both AM/PM times
var clockEight1 = moment("8","kk").format("kk")
var clockNine = moment("9","kk").format("kk")
var clockTen = moment("10","kk").format("kk")
var clockEleven = moment("11","kk").format("kk")
var clockTwelve = moment("12","kk").format("kk")
var clockOne = moment("13","kk").format("kk")
var clockTwo = moment("14","kk").format("kk")
var clockThree = moment("15","kk").format("kk")
var clockFour = moment("16","kk").format("kk")
var clockFive = moment("17","kk").format("kk")
var clockSix = moment("18","kk").format("kk")
var clockSeven = moment("19","kk").format("kk")
var clockEight2 =moment("20","kk").format("kk")

//compiled arrays of each of our set of variables from our html page and the format we wish to recognize
//from here you will take the arrays to create a for loop to always cycle through these hours/times of day
var arrayClock = [clockEight1,clockNine,clockTen,clockEleven,clockTwelve,clockOne,clockTwo,clockThree,clockFour,clockFive,clockSix,clockSeven,clockEight2]
var arrayHours = [hoursEight1,hoursNine,hoursTen,hoursEleven,hoursTwelve,hoursOne,hoursTwo,hoursThree,hoursFour,hoursFive,hoursSix,hoursSeven,hoursEight2]

//create your for loop using the arrays created
for(i=0; i < arrayClock.length; i++) {
    if(arrayClock[i] === hours){
        arrayHours[i].classList.add("current-time")
    }else if(arrayClock[i] < hours){
        arrayHours[i].classList.add("past-time")
    }else{
        arrayHours[i].classList.add("future-time")
    }
}

//Save Button Event Listener and Function

var saveBtn = document.querySelector(".save");

$(".save").on('click',function(event) {
    event.preventDefault();
    var theTime = $(this).siblings(".event").attr("id");
    var maryPoppins = $(this).siblings(".event").attr(val());
    localStorage.setItem(theTime,maryPoppins);
    console.log(theTime);
    console.log(maryPoppins);
})

//create ability to store locally
$('#hours-8am')
$('#hours-9')
$('#hours-10')
$('#hours-11')
$('#hours-12')
$('#hours-1')
$('#hours-2')
$('#hours-3')
$('#hours-4')
$('#hours-5')
$('#hours-6')
$('#hours-7')
$('#hours-8pm')