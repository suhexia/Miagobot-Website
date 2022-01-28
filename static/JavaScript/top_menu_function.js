$(document).ready(function () {
    console.log("（鬼鬼祟祟）竟然能被你找到这里？\n你也是个不得了的人呢\n对机器人和网页的开发感兴趣吗？欢迎联系我们！\n我们十分欢迎技术合作！")

    $("#jump_main,#jump_update,\
    #about_us,#jump_login").mouseenter(function () {
        $(this).css({ //鼠标移动到按钮上时
            "cursor": "pointer",
            "color": "orange"
        })
    })

    $("#jump_main,#jump_update,\
      #about_us,#jump_login").mouseleave(function () {
        $(this).css({ //鼠标离开按钮时
            "color": "black"
        })
    })
})

function jump_to(url) {
    window.location.replace(url);
}

function post_url(form_name) {
    document.forms[form_name].submit();
}

