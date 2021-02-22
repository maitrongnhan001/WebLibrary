/*---------------Event hover menu---------------*/
$(".li1").hover(function () {
        // over
        $(".li1").css({
            'background' : '#009933'
        });
    }, function () {
        // out
        $(".li1").css({
            'background' : '#336633'
        });
    }
);

$(".li2").hover(function () {
    // over
    $(".li2").css({
        'background' : '#009933'
    });
}, function () {
    // out
    $(".li2").css({
        'background' : '#336633'
    });
}
);

$(".li3").hover(function () {
    // over
    $(".li3").css({
        'background' : '#009933'
    });
}, function () {
    // out
    $(".li3").css({
        'background' : '#336633'
    });
}
);

/*----------------------------------------------*/



/*---------------Click button get---------------*/
$(".main .btn").click(function (e) {
    //get id
    $(".menu").css({"display" : "none"});
    $(".header").css({"display" : "none"});
    $(".main").css({"display" : "none"});
    $(".end").css({"display" : "none"});
    $("body").addClass("getBody");
    $(".formGetBook").css({"display" : "block"});
});
//push data to input in form borrowed
$("#1").click(function (e) { 
    e.preventDefault();
    $("#CodeInFormBorrowed").val($("#1").val());
});
$("#2").click(function (e) { 
    e.preventDefault();
    $("#CodeInFormBorrowed").val($("#2").val());
});
$("#3").click(function (e) { 
    e.preventDefault();
    $("#CodeInFormBorrowed").val($("#3").val());
});
$("#4").click(function (e) { 
    e.preventDefault();
    $("#CodeInFormBorrowed").val($("#4").val());
});
$("#5").click(function (e) { 
    e.preventDefault();
    $("#CodeInFormBorrowed").val($("#5").val());
});
$("#6").click(function (e) { 
    e.preventDefault();
    $("#CodeInFormBorrowed").val($("#6").val());
});
$("#7").click(function (e) { 
    e.preventDefault();
    $("#CodeInFormBorrowed").val($("#7").val());
});
$("#8").click(function (e) { 
    e.preventDefault();
    $("#CodeInFormBorrowed").val($("#8").val());
});
$("#9").click(function (e) { 
    e.preventDefault();
    $("#CodeInFormBorrowed").val($("#9").val());
});


function btnGetClick(i){
    $(".menu").css({"display" : "none"});
    $(".header").css({"display" : "none"});
    $(".main").css({"display" : "none"});
    $(".end").css({"display" : "none"});
    $("body").addClass("getBody");
    $(".formGetBook").css({"display" : "block"});
    $("#" + i).click(function (e) { 
            e.preventDefault();
            document.getElementById("CodeInFormBorrowed").value = i;
        });
}

$(".cancel").click(function (e) { 
    e.preventDefault();
    $(".menu").css({"display" : "block"});
    $(".header").css({"display" : "block"});
    $(".main").css({"display" : "block"});
    $(".end").css({"display" : "flex"});
    $("body").removeClass("getBody");
    $(".formGetBook").css({"display" : "none"});
    $(".formReturnBook").css({"display" : "none"});
});
/*----------------------------------------------*/

/*-------------------Click menu-----------------*/
$(".li1").click(function (e) { 
    e.preventDefault();
    $(".menu").css({"display" : "none"});
    $(".header").css({"display" : "none"});
    $(".main").css({"display" : "none"});
    $(".end").css({"display" : "none"});
    $("body").addClass("getBody");
    $(".formGetBook").css({"display" : "block"});
});

$(".li2").click(function (e) { 
    e.preventDefault();
    $(".menu").css({"display" : "none"});
    $(".header").css({"display" : "none"});
    $(".main").css({"display" : "none"});
    $(".end").css({"display" : "none"});
    $("body").addClass("getBody");
    $(".formReturnBook").css({"display" : "block"});
});
/*----------------------------------------------*/

