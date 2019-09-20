$(function () {
    let usernameInput = $("#txtRegUserName");
    let passwordAInput = $("#txtRegPassword");
    let passwordBInput = $("#txtRePassword");
    let email = $("#txtEmail");
    let imageCodeInput = $("#txtVerifyCode");

    let passwordVal = "";
    let imageCodeVal = "";

    let usernameReg = /^[a-zA-Z0-9_-]{3,30}$/;
    let passwordReg = /^[a-zA-Z0-9]{6,16}$/;
    let oEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

    (new Captcha({
        lineNum: 10,
        dotNum: 20,
        length: 6,
        fontSize: 30
    })).draw(document.querySelector('#captcha'), r => {

        imageCodeVal = r;
    });

    usernameInput.blur(function () {
        let val = $(this).val().trim();
        if (val.length == 0) {
            $(this).addClass("mistake");
            $(this).next().css("color", "red");
            $(this).next().text("用户名的长度应为3～30个字符之间！");
        } else {
            if (!usernameReg.test(val)) {
                $(this).addClass("mistake");
                $(this).next().css("color", "red");
                $(this).next().text("用户名的长度应为3～30个字符之间！");
            } else {
                $(this).next().css("color", "green");
                $(this).next().text("用户名可以使用！");
                $(this).removeClass("mistake");
            }
        }

    })
    passwordAInput.blur(function () {
        console.log("+++");
        let val = $(this).val().trim();
        if (val.length == 0) {
            $(this).addClass("mistake");
            $(this).next().css("color", "red");
            $(this).next().text("密码的长度应为6～30个字符之间！");
        } else {
            if (!passwordReg.test(val)) {
                $(this).addClass("mistake");
                $(this).next().css("color", "red");
                $(this).next().text("密码的长度应为6～30个字符之间！");
            } else {
                $(this).next().css("color", "green");
                $(this).next().text("密码可以使用！");
                $(this).removeClass("mistake");
                passwordVal = val;
            }
        }
    })
    passwordBInput.blur(function () {
        let val = $(this).val().trim();
        if (val.length == 0) {
            $(this).addClass("mistake");
            $(this).next().css("color", "red");
            $(this).next().text("密码不一致！");
        } else {
            if (passwordVal != val) {
                $(this).addClass("mistake");
                $(this).next().css("color", "red");
                $(this).next().text("密码不一致！");
            } else {
                $(this).next().css("color", "green");
                $(this).next().text("密码一致！");
                $(this).removeClass("mistake");
            }
        }
    })

    email.blur(function () {
        let val = $(this).val().trim();
        if (val.length == 0) {
            $(this).addClass("mistake");
            $(this).next().css("color", "red");
            $(this).next().text("邮箱格式有误！");
        } else {
            if (!oEmail.test(val)) {
                $(this).addClass("mistake");
                $(this).next().css("color", "red");
                $(this).next().text("邮箱格式有误！");
            } else {
                $(this).next().css("color", "green");
                $(this).next().text("邮箱格式正确！");
                $(this).removeClass("mistake");
            }
        }
    })
    imageCodeInput.blur(function () {
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


    let btn = $("#btnUserRegSubmit")
    btn.click(function (event) {
        event.preventDefault();
        // console.log("++++");
        let isChecked = $("#reg-proto").is(":checked");
        // console.log(isChecked);
        let usernameText = usernameInput.val();
        // console.log(usernameText);
        let passwordAText = passwordAInput.val();
        // console.log(passwordAText);
        let passwordBText = passwordBInput.val();
        // console.log(passwordBText);
        let emailText = email.val();
        // console.log(emailText);
        let imgCodeText = imageCodeInput.val();
        // console.log(imgCodeText);

        let isSuccess =
            $(".mistake").length == 0 && usernameText && imgCodeText && emailText && passwordAText && passwordBText;
        console.log(isChecked, isSuccess);


        if (!isChecked) {
            alert("请阅读并同意用户协议");
            return;
        } else {
            if (!isSuccess) {
                alert("请完善信息");
                return;
            } else {
                /* 把表单数据提交给服务器，注册操作  */
                console.log("___OK___");
                $.ajax({
                    type: "post",
                    url: "./server/api/register.php",
                    data: `username=${usernameText}&email=${emailText}&password=${passwordAText}`,
                    dataType: "json",
                    success: function(response) {
                        // console.log(response);
                        if (response.status == "success") {
                            alert(response.data.msg);
                            // window.location.href = "./home.html";
                        } else {
                            alert(response.data.msg);
                        }
                    }
                });

            }
        }
    })
    
})