
/*SideBar*/
$(".openNav").click(function () {
    $("#leftMenu").animate({ width: '250px' }, 50)
    $("#home-content").animate({ marginLeft: '250px' }, 50)
})

$(".closebtn").click(function () {
    $("#leftMenu").animate({ width: '0px' }, 50)
    $("#home-content").animate({ marginLeft: '0px' }, 50)
})
/*AccordionEffect*/
$('#sliderDown .toggle').click(function () {
    // to get every inner class exept the one that iam clicking 
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});
/*CoolDown*/
window.onload = function () {
    countDownToTime("10 july 2022 9:56:00");
}
function countDownToTime(countDownDate) {
    // The getTime() method returns the number of milliseconds since the ECMAScript epoch.
    let coolDownDate = new Date(countDownDate);
    coolDownDate = (coolDownDate.getTime() / 1000);
    let now = new Date();
    now = (now.getTime() / 1000);
    timeDifference = (coolDownDate - now);
    // to convert th number of milliseconds to days and hours mins and secs 
    // 1 hour = 60 minutes = 60 × 60 seconds = 3600 seconds = 3600 × 1000 milliseconds = 3,600,000 ms.
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    // (timeDifference - (days * (24 * 60 * 60))) to get the remaining millisecs in the last day and convert it to hours.
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60)))/3600);
    // (timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) to get the remaining millisecs in the last hour and convert it to mins.
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    // to get the remaining seconeds in the mins 
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))
    // to display the converted vals
    $(".days").html(`${days} D`);

    $(".hours").html(`${hours} h`);

    $(".minutes").html(`${mins} m`);

    $('.seconds').html(`${secs} s`)
    setInterval(function () { countDownToTime(countDownDate); }, 1000);
}



/*textarea*/

var maxLength = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("your available character finished");
    }
    else {

        $("#chars").text(AmountLeft);
    }
});



