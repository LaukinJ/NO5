$(function () {
    let currentType = 0;
    new Promise(function (resolve, reject) {
        $.ajax({
            type: "get",
            url: "./server/getPageCount.php",
            dataType: "json",
            success: function (response) {
                let pageCount = response.data;
                for (let i = 0; i < pageCount; i++) {
                    let oPage = $(`<a href="javascript:;">${i+1}</a>`);
                    $("#page").append(oPage);
                }
                $("#page").children("a").first().addClass("active");
                resolve();
            }
        });
    }).then(function () {
        getDatWithPage(currentType, 0);
    })
    $("#page").on("click", "a", function (e) {
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        /* 先获取当前是第几页 */
        let index = $(this).index();
        // console.log(index);
        getDatWithPage(currentType, index);
    })
    let getDatWithPage = (type, page) => {
        $.ajax({
            type: "get",
            url: "./server/getProductData.php",
            data: `type=${type}&page=${page}`,
            dataType: "json",
            success: function (response) {
                let data = response.data;
                let html = data.map(function(ele){
                    return`
                    <li class="plist">
                    <img src="${ele.src}"
                        alt="">
                    <dd class="pro-name">
                        <a href="#">${ele.text}</a>
                    </dd>
                    <dd class="pro-price">
                        <span>
                            ￥${ele.price}
                        </span>
                        <span class="zhekou">${ele.yh}</span>
                    </dd>
                    <dd class="buybtn">
                        <a href="#" class="add" >加入购物车</a>
                        <a href="#" class="shouc" >收藏</a>
                    </dd>
                </li>  
                    `
                }).join("");
                $("#list").html(html);
            }
        });
    }

    $(".typeBtn").click(function() {
        console.log( $(".typeBtn").index());
        let index = $(this).index();
        currentType = index;
        getDatWithPage(currentType, 0);
        $("#page").children("a").first().addClass("active").siblings().removeClass("active");
    })
})