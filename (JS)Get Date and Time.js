// Provides Date and Time below
// On this sample, OS is assumed to be providing military time.

var today = new Date();
var day = today.getDay();
var hour = ( -1 < today.getHours() && today.getHours() < 12)? (today.getHours()):((today.getHours())-12);
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var m = (today.getHours() > 12)? " PM":" AM";
var dayArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function todayIs(){
console.log('Today is: ' + dayArray[day]);
console.log('Current Time is: ' + hour + ':' + minutes + ':' + seconds + "" + m);
}
