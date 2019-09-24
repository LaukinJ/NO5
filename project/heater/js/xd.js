$(function(){
        window.onload = function () {
            var nav = document.getElementById("min-nav"); //获取页面nav元素
            var navTop = nav.offsetTop; //获取nav距离顶部的距离
            //滚动条滚动时执行函数
            window.onscroll = function () {
                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body
                    .scrollTop; //获取滚动条距离顶部的距离，后面两条时为了兼容浏览器
                if (scrollTop > navTop) {
                    nav.style.position = "fixed";
                    nav.style.top = "0";
                    nav.style.left = "0";

                } else if (scrollTop = navTop) {
                    nav.style.position = ""; //我做的时滚动条在中部的，在加个判断
                } else {
                    nav.style.position = " ";
                }
            }
        }
})