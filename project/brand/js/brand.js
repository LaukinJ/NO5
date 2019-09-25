$(function () {
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
            $(".hufubottom,.hufu-brand").html(html);
        }

    });
    // czleft
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/czleft.php",
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
                                <img width="180" height="180" title="${data[1].name}" alt="${data[1].name}"
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
                                <img width="180" height="180" title="${data[2].name}" alt="${data[2].name}"
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
                                <img width="180" height="180" title="${data[3].name}" alt="${data[3].name}"
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
                            <a href="#"><img width="180" height="180" title="${data[4].name}"
                                    alt="${data[4].name}"
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
                                <img width="180" height="180" title=">${data[5].name}"
                                    alt=">${data[5].name}"
                                    src="${data[5].src}">
                            </a>
                        </dt>
                    </dl>
                </div>
                `
            $("#cz-left").html(html);
        }
    });
    // czright
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/czright.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <li>
                <span class="toplist"><span class="num">${ele.id}</span>${ele.name}</span>
                <div>
                    <dl>
                        <dt>
                            <a href="#">
                                <img width="160" height="160" title="${ele.name}" alt="${ele.name}"
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
            $("#toplist-1").html(html);
            $("#toplist-1").children("li").first().addClass("hover");
            $('#toplist-1 li').hover(function () {
                $('#toplist-1 li').removeClass('hover');
                $(this).addClass('hover')
            });
        }
    });
    // xsl
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/xsl.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <div class="perfume-img1">
                <a href="#">
                    <img width="326" height="480" title="" alt=""
                        src="${data[0].src}">
                </a>
            </div>
            <div class="perfumegroup">
                <div class="perfume-img2">
                    <a href="#">
                        <img width="355" height="276" title="" alt=""
                            src="${data[1].src}">
                    </a>
                </div>
                <div class="perfume-img3">
                    <a href="#">
                        <img width="177" height="203" title="" alt=""
                            src="${data[2].src}">
                    </a>
                </div>
                <div class="perfume-img4">
                    <a href="">
                        <img width="177" height="203" title="" alt=""
                            src="${data[3].src}">
                    </a>
                </div>
            </div>
            <div class="perfume-img5">
                <a href="#">
                    <img width="275" height="480" title="" alt=""
                        src="${data[4].src}">
                </a>
            </div>
                `
            $("#xsl").html(html);
        }
    });
    // xsr
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/xsr.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <li>
                <span class="toplist"><span class="num">${ele.id}</span>${ele.name}</span>
                <div>
                    <dl>
                        <dt>
                            <a href="#">
                                <img width="160" height="160" title="${ele.name}" alt="${ele.name}"
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
            $("#toplist-2").html(html);
            $("#toplist-2").children("li").first().addClass("hover");
            $('#toplist-2 li').hover(function () {
                $('#toplist-2 li').removeClass('hover');
                $(this).addClass('hover')
            });
        }
    });
    // nsl
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/nsl.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <div class="men-list">
                <dl class="men-item">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="碧欧泉男士水动力保湿乳" alt="碧欧泉男士水动力保湿乳"
                                src="${data[0].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[0].name}</a>
                    </dd>
                    <dd class=" good-price">${data[0].price}<span class="zhekou">${data[0].zk}</span>
                    </dd>
                </dl>
                <dl class="men-item">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="碧欧泉男士滋养紧肤露" alt="碧欧泉男士滋养紧肤露"
                                src="${data[1].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[1].name}</a>
                    </dd>
                    <dd class=" good-price">${data[1].price}<span class="zhekou">${data[1].zk}</span>
                    </dd>
                </dl>
                <dl class="men-item lastdl">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="卡诗头皮系列去屑净化洗发水250ml" alt="卡诗头皮系列去屑净化洗发水250ml"
                                src="${data[2].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[2].name}</a>
                    </dd>
                    <dd class="good-price">${data[2].price}<span class="zhekou">${data[2].zk}</span>
                    </dd>
                </dl>
                <dl class="men-item bottomdl">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="科颜氏男士活力洁面啫喱250ml" alt="科颜氏男士活力洁面啫喱250ml"
                                src="${data[3].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[3].name}</a></dd>
                    <dd class="good-price">${data[3].price}<span class="zhekou">${data[3].zk}</span>
                    </dd>
                </dl>
                <dl class="men-item bottomdl">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="资生堂男士洗面膏125ml" alt="资生堂男士洗面膏125ml"
                                src="${data[4].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[4].name}</a>
                    </dd>
                    <dd class="good-price">${data[4].price}<span class="zhekou">${data[4].zk}</span>
                    </dd>
                </dl>
                <dl class="men-item lastdl bottomdl">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="欧莱雅男士劲能冰酷水份露50ml" alt="欧莱雅男士劲能冰酷水份露50ml"
                                src="${data[5].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[5].name}</a>
                    </dd>
                    <dd class="good-price">${data[5].price}<span class="zhekou">${data[5].zk}</span>
                    </dd>
                </dl>
            </div>
            <div class="men-banner">
                <a href="#"><img width="344" height="480" title="资生堂" alt="资生堂"
                        src="${data[6].src}">
                </a>
            </div>
                `
            $("#nsl").html(html);
        }
    });
    // nsr
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/nsr.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <li>
                <span class="toplist"><span class="num">${ele.id}</span>${ele.name}</span>
                <div>
                    <dl>
                        <dt>
                            <a href="#">
                                <img width="160" height="160" title="${ele.name}" alt="${ele.name}"
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
            $("#toplist-3").html(html);
            $("#toplist-3").children("li").first().addClass("hover");
            $('#toplist-3 li').hover(function () {
                $('#toplist-3 li').removeClass('hover');
                $(this).addClass('hover')
            });
        }
    });
    // mtl
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/mtl.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <div class="men-banner">
                <a href="#">
                    <img width="344" height="480" title="" alt=""
                        src="${data[6].src}">
                </a>
            </div>
            <div class="men-list">
                <dl class="men-item">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="爱茉莉美仙玫瑰橄榄蜂蜜精油" alt="爱茉莉美仙玫瑰橄榄蜂蜜精油"
                                src="${data[0].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[0].name}</a>
                    </dd>
                    <dd class="good-price">${data[0].price}<span class="zhekou">${data[0].zk}</span></dd>
                </dl>
                <dl class="men-item">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="卡诗头皮系列双重功能洗发水" alt="卡诗头皮系列双重功能洗发水"
                                src="${data[1].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[1].name}</a>
                    </dd>
                    <dd class="good-price">${data[1].price}<span class="zhekou">${data[1].zk}</span></dd>
                </dl>
                <dl class="men-item lastdl">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="欧舒丹青春紧实柔肤霜200ml" alt="欧舒丹青春紧实柔肤霜200ml"
                                src="${data[2].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[2].name}</a>
                    </dd>
                    <dd class="good-price">${data[2].price}<span class="zhekou">${data[2].zk}</span></dd>
                </dl>
                <dl class="men-item bottomdl">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="科颜氏氨基椰香洗发啫喱500ml" alt="科颜氏氨基椰香洗发啫喱500ml"
                                src="${data[3].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[3].name}</a>
                    </dd>
                    <dd class="good-price">${data[3].price}<span class="zhekou">${data[3].zk}</span></dd>
                </dl>
                <dl class="men-item bottomdl">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="卡诗头皮系列根源特护洗发水250ml" alt="卡诗头皮系列根源特护洗发水250ml"
                                src="${data[4].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[4].name}</a>
                    </dd>
                    <dd class="good-price">${data[4].price}<span class="zhekou">${data[4].zk}</span></dd>
                </dl>
                <dl class="men-item lastdl bottomdl">
                    <dt>
                        <a href="#">
                            <img width="180" height="180" title="欧舒丹甜蜜樱花沐浴啫喱250ml" alt="欧舒丹甜蜜樱花沐浴啫喱250ml"
                                src="${data[5].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[5].name}</a>
                    </dd>
                    <dd class="good-price">${data[5].price}<span class="zhekou">${data[5].zk}</span></dd>
                </dl>
            </div>
                `
            $("#mtl").html(html);
        }
    });
    // mtr
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/mtr.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <li>
                <span class="toplist"><span class="num">${ele.id}</span>${ele.name}</span>
                <div>
                    <dl>
                        <dt>
                            <a href="#">
                                <img width="160" height="160" title="${ele.name}" alt="${ele.name}"
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
            $("#toplist-4").html(html);
            $("#toplist-4").children("li").first().addClass("hover");
            $('#toplist-4 li').hover(function () {
                $('#toplist-4 li').removeClass('hover');
                $(this).addClass('hover')
            });
        }
    });
    // newsl
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/newsl.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <dl>
                <dt>
                    <a href="#">
                        <img width="250" height="330"
                            src="${data[0].src}">
                    </a>
                </dt>
                <dd class="title">${data[0].tittle}</dd>
                <dd class="neir">${data[0].text}<a href="#">[查看更多]</a>
                </dd>
            </dl>
                `
            $(".info-l").html(html);
        }
    });
    // newsr
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/newsr.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <dl>
                <dt>
                    <a href="#">
                        <img width="154" height="118"
                            src="${ele.src}">
                    </a>
                </dt>
                <dd class="title"><span>${ele.name}</span>${ele.tittle}</dd>
                <dd class="neir">${ele.text}<a
                        href="#">[详细]
                    </a>
                </dd>
            </dl>
                    `
            }).join("");
            $(".info-r").html(html);
        }
    });
    // share
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/brand/server/share.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <dl>
                    <dt>
                        <a href="#">
                            <img width="80" height="80" title="${ele.tittle}"
                                alt="${ele.tittle}"
                                src="${ele.src}">
                        </a>
                    </dt>
                    <dd class="title">
                        <a href="#" class="">${ele.tittle}</a>
                    </dd>
                    <dd class="neir"><a href="http://www.no5.com.cn/product/24476.html"
                            target="_blank"><span>编辑推荐：</span>${ele.text}</a></dd>
                </dl>
                    `
            }).join("");
            $("#share").html(html);
            $("#share").children("dl").first().addClass("firstdl");
        }
    });
})