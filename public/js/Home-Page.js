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
    e.preventDefault();
    $(".menu").css({"display" : "none"});
    $(".header").css({"display" : "none"});
    $(".main").css({"display" : "none"});
    $(".end").css({"display" : "none"});
    $("body").addClass("getBody");
    $(".formGetBook").css({"display" : "block"});
});

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