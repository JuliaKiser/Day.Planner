
var time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
$("#currentDay").text(time);


function update() {
    $('#currentDay').html(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update,1000)


