$(document).ready(function () {
    $("#OpenList").mouseenter(function () {
        $(".blackback").show();
        $(".MainFunctionList").animate({
            left: "0px"
        }, "fast");
    });
    $(".MainFunctionList").mouseleave(function () {
        if ($(".SelectDialog").css("display") == "none") {
            $(".blackback").hide();
        }
        $(".MainFunctionList").animate({
            left: "-300px"
        }, "fast");
    });

    $(".blackback").click(function () {
        if ($(".SelectDialog").css("display") != "none") {
            $(this).hide();
            $(".SelectDialog").fadeOut("fast");
        }
    });

    $(".SingleFunction,.Selecter").mouseenter(function () {
        $(this).css(
            {
                "cursor": "pointer",
                "filter": "brightness(0.9)"
            });
    });

    $(".SingleFunction,.Selecter").mouseleave(function () {
        $(this).css(
            {
                "filter": "brightness(1)"
            });
    });

    //跳转大功能界面
    $("#SetItemCount").click(function () {
        $("form[name='TurnToChangePage']").submit();
    });
    $("#SetDailySetup").click(function () {
        $("form[name='TurnToSignup']").submit();
    });
    $("#UploadReward").click(function () {
        $("form[name='TurnToRewarder']").submit();
    });
    $("#UploadGamingHelp").click(function () {
        $("form[name='TurnToGamingHelp']").submit();
    });
    $("#WebsiteInfoChange").click(function () {
        $("form[name='TurnToWebsiteChange']").submit();
    });

    //网页界面相关信息修改界面进入
    $("#WebsiteInfoChange").click(function () {
        $(".SelectDialog").fadeIn("fast");
    });
    $("#ChangeUpdatedTimePage").click(function () {
        $("form[name='ChangeUpdatedTimeForm']").submit();

    });
    $("#ChangeAboutUsPage").click(function () {
        $("form[name='ChangeAboutUsPageForm']").submit();
    });
})