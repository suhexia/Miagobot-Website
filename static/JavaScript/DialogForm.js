$(document).ready(function () {
    $("#Superuser_Functions").click(function () {
        $(".SuperCheckDialog").fadeIn()
        $(".blackback").show()
    })

    $(".blackback").click(function(){
        $(".SuperCheckDialog,.GroupFunctionDialog").fadeOut()
        $(".blackback").hide()
    })

    $("#Superusers_Submit").click(function () {
        var check_input = $("input[name='super_pass']").val()
        if (check_input == "") {
            $("#block_text").show()
        }
        else {
            $.post("/superusers/SuperMenu",{
                super_pass:check_input
            },function(data){
                if (data["status"] == "error"){
                    $("#block_text").text(data["description"]);
                    $("#block_text").show()
                }
                else{
                    $("form[name='jump_to_SuperFunction']").submit()
                }
            })
        }
    })

    $("#Group_Functions").click(function () {
        $(".GroupFunctionDialog").fadeIn()
        $(".blackback").show()
    })


    $("#GroupFunction_Submit").click(function () {
        var GroupPassword = $("input[name='Group_password']").val();
        var GroupAcceptCode = $("input[name='Accept_code']").val();
        if (GroupPassword == "" || GroupAcceptCode == "") {
            $("#FunctionBlockText").show()
        }
        else {
            $.post("/group_functions",{
                Group_password:GroupPassword,
                Accept_code:GroupAcceptCode
            },function(data){
                if (data["status"] == "error"){
                    $("#FunctionBlockText").text(data["description"])
                    $("#FunctionBlockText").show()
                }
                else{
                    $("form[name='jump_to_FunctionManage']").submit()
                }
            })
            
        }
    })
})