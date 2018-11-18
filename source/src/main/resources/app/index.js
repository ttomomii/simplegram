var $ = require('jquery');
var moment = require('moment');

$(function(){
    var $msg = $("#msg");
    $msg.fadeOut("slow", function(){
        $msg.text("webpack " +
            moment().format("YYYY-MM-DD HH:mm:ss"))
            .css("color", "red")
            .fadeIn("slow");
    });
});