$(function () {
    let imageInput = $("#left-yzm");
    let wserInput = $("#left-user");
    let passwordInput = $("#left-password")
    let imageCodeVal = "";

    (new Captcha({
        lineNum: 10,
        dotNum: 20,
        length: 6,
        fontSize: 30
    })).draw(document.querySelector('#left-captcha'), r => {

        imageCodeVal = r;
    });

    imageInput.blur(function () {
        console.log("++++");
        let val = $(this).val().trim();

        if (val.length == 0) {
            $(this).addClass("mistake");
            $(this).next().css("color", "red");
            $(this).next().text("验证码不能为空");
        } else {
            if (imageCodeVal != val) {
                $(this).addClass("mistake");
                $(this).next().css("color", "red");
                $(this).next().text("验证码错误");
            } else {
                $(this).next().css("color", "green");
                $(this).next().text("验证码正确！");
                $(this).removeClass("mistake");
            }
        }

    })

    let btn = $("#btnLogin");
    btn.click(function (event) {
        event.preventDefault();
        let imgCodeText = imageInput.val();
        let usernameText = wserInput.val();
        let passwordText = passwordInput.val();
        let isSuccess = $(".mistake").length == 0 && imgCodeText;
        console.log(isSuccess);
        if (!isSuccess) {
            alert("请完善信息");
            return;
        } else {
            $.ajax({
                type: "post",
                url: "./server/api/login.php",
                data: `username=${usernameText}&password=${passwordText}`,
                dataType: "json",
                success: function (response) {
                    if (response.status == "success") {
                        alert(response.data.msg);
                        // window.location.href = "./home.html";
                    } else {
                        alert(response.data.msg);
                    }

                }
            });
        }
    })
})