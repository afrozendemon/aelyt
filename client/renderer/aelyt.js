//Main frontend executor.

let applicationUI = null;
let api = null;

$(document).ready(function(){
    applicationUI = new UI();
    api = new API();    
});