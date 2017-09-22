(function () {


    /**
     * Created by jsr on 6/12/17.
     */



    $("#toppic1").mouseenter(function () {
        $("#aboutBlessie").show();
    });

    $("#toppic1").mouseleave(function () {
        $("#aboutBlessie").hide();
    });

    $("#toppic2").mouseenter(function () {
        $("#contact").show();
    });

    $("#toppic2").mouseleave(function () {
        $("#contact").hide();
    });


    $("#toppic3").mouseenter(function () {
        $("#testimony").show();
    });

    $("#toppic3").mouseleave(function () {
        $("#testimony").hide();
    });

    $("#toppic4").mouseenter(function () {
        $("#worthy").show();
    });

    $("#toppic4").mouseleave(function () {
        $("#worthy").hide();
    });

    $("#toppic5").mouseenter(function () {
        $("#blog").show();
    });

    $("#toppic5").mouseleave(function () {
        $("#blog").hide();
    });

    $("#toppic6").mouseenter(function () {
        $("#books").show();
    });

    $("#toppic6").mouseleave(function () {
        $("#books").hide();
    });


//        JS for switching to pages from home


    $("#toppic1").click(function(){
        $("#homepage").hide();
        $("#aboutmecontainer").show();
    });

    $("#toppic2").click(function () {
        $("#homepage").hide();
        $("#contactinfocontainer").show();
    });

    $("#toppic3").click(function () {
        $("#homepage").hide();
        $("#testimonycontainer").show();
    });

    $("#toppic4").click(function () {
        $("#homepage").hide();
        $("#wwmcontainer").show();

    });

    // $("#toppic5").click(function () {
    //     $("#homepage").hide();
    //     $("#testimonycontainer").show();
    // });



    $("#toppic6").click(function () {
        $("#homepage").hide();
        $("#booksauthoredcontainer").show();
    });

$("#menutab").click(function(){
    $("#hometab").fadeToggle();
    $("#abouttab").fadeToggle();
    $("#Bblog").fadeToggle();
    $("#speakingtab").fadeToggle();
    $("#bookstab").fadeToggle();
    $("#wwmtab").fadeToggle();
    $("#contacttab").fadeToggle();
});


    $("#hometab").click(function () {
        $("#homepage").fadeIn();
        $("#aboutmecontainer").hide();
        $("#contactinfocontainer").hide();
        $("#wwmcontainer").hide();
        $("#testimonycontainer").hide();
        $("#booksauthoredcontainer").hide();
        $("#hometab").fadeToggle();
        $("#abouttab").fadeToggle();
        $("#Bblog").fadeToggle();
        $("#speakingtab").fadeToggle();
        $("#bookstab").fadeToggle();
        $("#wwmtab").fadeToggle();
        $("#contacttab").fadeToggle();
    });

    $("#contacttab").click(function () {
        $("#homepage").hide();
        $("#aboutmecontainer").hide();
        $("#contactinfocontainer").fadeIn();
        $("#wwmcontainer").hide();
        $("#testimonycontainer").hide();
        $("#booksauthoredcontainer").hide();
        $("#hometab").fadeToggle();
        $("#abouttab").fadeToggle();
        $("#Bblog").fadeToggle();
        $("#speakingtab").fadeToggle();
        $("#bookstab").fadeToggle();
        $("#wwmtab").fadeToggle();
        $("#contacttab").fadeToggle();
    });

    $("#bookstab").click(function () {
        $("#homepage").hide();
        $("#aboutmecontainer").hide();
        $("#contactinfocontainer").hide();
        $("#wwmcontainer").hide();
        $("#testimonycontainer").hide();
        $("#booksauthoredcontainer").fadeIn();
        $("#hometab").fadeToggle();
        $("#abouttab").fadeToggle();
        $("#Bblog").fadeToggle();
        $("#speakingtab").fadeToggle();
        $("#bookstab").fadeToggle();
        $("#wwmtab").fadeToggle();
        $("#contacttab").fadeToggle();
    });



    $("#speakingtab").click(function () {
        $("#homepage").hide();
        $("#aboutmecontainer").hide();
        $("#contactinfocontainer").hide();
        $("#wwmcontainer").hide();
        $("#testimonycontainer").fadeIn();
        $("#booksauthoredcontainer").hide();
        $("#hometab").fadeToggle();
        $("#abouttab").fadeToggle();
        $("#Bblog").fadeToggle();
        $("#speakingtab").fadeToggle();
        $("#bookstab").fadeToggle();
        $("#wwmtab").fadeToggle();
        $("#contacttab").fadeToggle();
    });


    $("#abouttab").click(function () {
        $("#homepage").hide();
        $("#aboutmecontainer").fadeIn();
        $("#contactinfocontainer").hide();
        $("#wwmcontainer").hide();
        $("#testimonycontainer").hide();
        $("#booksauthoredcontainer").hide();
        $("#hometab").fadeToggle();
        $("#abouttab").fadeToggle();
        $("#Bblog").fadeToggle();
        $("#speakingtab").fadeToggle();
        $("#bookstab").fadeToggle();
        $("#wwmtab").fadeToggle();
        $("#contacttab").fadeToggle();
    });


    $("#wwmtab").click(function () {
        $("#homepage").hide();
        $("#aboutmecontainer").hide();
        $("#contactinfocontainer").hide();
        $("#wwmcontainer").fadeIn();
        $("#testimonycontainer").hide();
        $("#booksauthoredcontainer").hide();
        $("#hometab").fadeToggle();
        $("#abouttab").fadeToggle();
        $("#Bblog").fadeToggle();
        $("#speakingtab").fadeToggle();
        $("#bookstab").fadeToggle();
        $("#wwmtab").fadeToggle();
        $("#contacttab").fadeToggle();
    });






})();