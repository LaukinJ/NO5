$(function () {
    // $('#toplist-1 li').hover(function () {
    //     $('#toplist-1 li').removeClass('hover');
    //     $(this).addClass('hover')
    // });
    // $('#toplist-2 li').hover(function () {
    //     $('#toplist-2 li').removeClass('hover');
    //     $(this).addClass('hover')
    // });
    // $('#toplist-3 li').hover(function () {
    //     $('#toplist-3 li').removeClass('hover');
    //     $(this).addClass('hover')
    // });
    // $('#toplist-4 li').hover(function () {
    //     $('#toplist-4 li').removeClass('hover');
    //     $(this).addClass('hover')
    // });
    // hufuleft
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/hufuleft.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <div class="hufu-banner">
                    <a href="#">
                        <img width="268" height="480" title="" alt=""
                            src="${data[0].src}">
                    </a>
                </div>
                <div class="hufu-list">
                    <dl class="hufu-item firstdl">
                        <dt>
                            <a href="#">
                                <img width="180" height="180" title="肌初赋活原生液150ml" alt="肌初赋活原生液150ml"
                                    src="${data[1].src}">
                            </a>
                        </dt>
                        <dd class="good-name">
                            <a href="#" class="">${data[1].name}</a><br>
                            <a href="#" class="">${data[1].tittle}</a>
                        </dd>
                        <dd class="good-exce">
                            <a href="#" class="">${data[1].text}</a>
                        </dd>
                        <dd class="good-price">￥<span class="good-price-cur">${data[1].price}.<span
                                    style="font-size:18px;">00</span></span><span class="zhekou">${data[1].zk}</span>
                        </dd>
                    </dl>
                    <dl class="hufu-item">
                        <dt>
                            <a href="#">
                                <img width="180" height="180" title="蚕丝蜗牛胶原蛋白面膜10片/盒" alt="蚕丝蜗牛胶原蛋白面膜10片/盒"
                                    src="${data[2].src}">
                            </a>
                        </dt>
                        <dd class="good-name">
                            <a href="#" class="">${data[2].name}</a><br>
                            <a href="#" class="">${data[2].tittle}</a>
                        </dd>
                        <dd class="good-exce">
                            <a href="#" class="">${data[2].text}</a>
                        </dd>
                        <dd class="good-price">￥<span class="good-price-cur">${data[2].price}.<span style="font-size:18px;">00</span>
                            </span>
                            <span class="zhekou">${data[2].zk}</span>
                        </dd>
                    </dl>
                    <dl class="hufu-item-d">
                        <dd class="good-name">
                            <a href="#" class="">${data[3].name}</a>
                        </dd>
                        <dd class="good-exce">
                            <a href="#" class="">${data[3].tittle}</a>
                        </dd>
                        <dd class="good-price">￥<span class="good-price-cur">${data[3].price}.<span
                                    style="font-size:18px;">00</span></span><span class="zhekou">${data[3].zk}</span></dd>
                        <dt>
                            <a href="#">
                                <img width="180" height="180" title="雅诗兰黛特润修护精华眼霜15ml" alt="雅诗兰黛特润修护精华眼霜15ml"
                                    src="${data[3].src}">
                            </a>
                        </dt>
                    </dl>
                    <dl class="hufu-item-d">
                        <dd class="good-name">
                            <a href="#" class="">${data[4].name}</a>
                        </dd>
                        <dd class="good-exce">
                            <a href="#" class="">${data[4].tittle}</a>
                        </dd>
                        <dd class="good-price">
                            ￥<span class="good-price-cur">${data[4].price}.<span style="font-size:18px;">00</span></span><span
                                class="zhekou">${data[4].zk}</span>
                        </dd>
                        <dt>
                            <a href="#"><img width="180" height="180" title="Clarins 娇韵诗清透防晒乳30ml"
                                    alt="Clarins 娇韵诗清透防晒乳30ml"
                                    src="${data[4].src}">
                            </a>
                        </dt>
                    </dl>
                    <dl class="hufu-item-d lastdl">
                        <dd class="good-name">
                            <a href="#" class="">${data[5].name}</a>
                        </dd>
                        <dd class="good-exce">
                            <a href="#" class="">${data[5].tittle}</a>
                        </dd>
                        <dd class="good-price">￥<span class="good-price-cur">${data[5].price}.<span
                                    style="font-size:18px;">00</span></span><span class="zhekou">${data[5].zk}</span>
                        </dd>
                        <dt>
                            <a href="#">
                                <img width="180" height="180" title="韩国JMsolution珍珠水晶防晒喷雾180ml"
                                    alt="韩国JMsolution珍珠水晶防晒喷雾180ml"
                                    src="${data[5].src}">
                            </a>
                        </dt>
                    </dl>
                </div>
                `
            $("#hufu-left").html(html);
        }
    });
    // hefuright
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/hufuright.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <li>
                <span class="toplist"><span class="num">${ele.id}</span>${ele.tittle}</span>
                <div>
                    <dl>
                        <dt>
                            <a href="#">
                                <img width="160" height="160" title="${ele.tittle}" alt="${ele.tittle}"
                                    src="${ele.src}">
                            </a>
                        </dt>
                        <dd class="top-name">
                            <a href="#" class="">${ele.name}</a>
                        </dd>
                        <dd class="top-price">${ele.price}</dd>
                    </dl>
                </div>
            </li>
                    `
            }).join("");
            $("#toplist-0").html(html);
            $("#toplist-0").children("li").first().addClass("hover");
            $('#toplist-0 li').hover(function () {
                $('#toplist-0 li').removeClass('hover');
                $(this).addClass('hover')
            });
        }
    });
    // hufubottom
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/hufubottom.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <a href="#">
                <img width="75" height="36" title="${ele.name}" alt="${ele.name}"
                    src="${ele.src}">
                 </a>
                    `
            }).join("");
            $(".hufubottom").html(html);
        }

    });

})