$(document).ready(function () { //其他功能的下拉列表
    $(".other_functions,#Group_Functions,\
    #Superuser_Functions,#jump_tomain,#jump_reward,\
    #jump_ranking,#jump_banlist,#longout,#Personal_info").mouseenter(function () {
        $(this).css({ //鼠标移动到按钮上时
            "cursor": "pointer",
            "color": "orange"
        })
    })

    $(".other_functions,#Group_Functions,\
    #Superuser_Functions,#jump_tomain,#jump_reward,\
    #jump_ranking,#jump_banlist,#longout,#Personal_info").mouseleave(function () {
        $(this).css({ //鼠标离开按钮时
            "color": "black"
        })
    })

    $(".DownPanal").mouseenter(function () { 
        $(".panal").fadeIn("fast")
    })

    $(".DownPanal").mouseleave(function () { 
        $(".panal").fadeOut("fast")
    })

    //以下为各个地方的请求（GET和POST）
    $("#jump_tomain").click(function () {
        $(window).attr("location", "/index")
    })
    $("#jump_reward").click(function () {
        $(window).attr("location", "/Reward_list")
    })
    $("#jump_ranking").click(function () {
        $(window).attr("location", "/ranking_list?item=宝石")
    })
    $("#jump_banlist").click(function () {
        $(window).attr("location", "/ban_list")
    })
    $("#longout").click(function () {
        $(window).attr("location", "/longout")
    })

    $("#Personal_info").click(function () {
        $("form[name='jump_to_Userinfo']").submit()
    })

})


