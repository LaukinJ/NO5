$(function () {
    // salebox1
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/salebox/server/getProductData.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <dl>
                <dt>
                    <a href="#">
                        <img width="230" height="230" title="烈艳蓝金唇膏金属光999# (传奇红唇) 3.5g"
                            alt="烈艳蓝金唇膏金属光999# (传奇红唇) 3.5g"
                            src="${data[0].src}">
                    </a>
                </dt>
                <dd class="good-name">
                    <a href="#" target="_blank" class="">${data[0].name}</a><br>
                    <a href="#" target="_blank"
                        class="">${data[0].tittle}</a>
                </dd>
                <dd class="good-exce">
                    <a href="#" target="_blank" class="">热卖色999限量抢</a></dd>
                <dd class="good-price">￥<span class="good-price-cur">${data[0].price}<span
                            style="font-size:18px;">.00</span></span><span class="zhekou">${data[0].zk}</span>
                </dd>
            </dl>
                `
            $("#con_two_1 .salebox-1").html(html);
        }
    });
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/salebox/server/getProductData.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <dl>
                    <dt>
                        <a href="#" target="_blank">
                            <img width="150" height="150" title="安娜苏筑梦天马淡香水30ml" alt="安娜苏筑梦天马淡香水30ml"
                            src="${data[1].src}">
                        </a>
                    </dt>
                        <dd class="good-name oneline">
                        <a href="#" target="_blank" class="">${data[1].name}</a>
                            </dd>
                        <dd class="good-price">￥<span class="good-price-cur">${data[1].price}<span
                                style="font-size:18px;">.00</span></span><span
                            class="zhekou">${data[1].zk}</span></dd>
                 </dl>
                `
            $("#con_two_1 .salebox-2-l").html(html);
        }
    });
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/salebox/server/getProductData.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <dl>
                    <dd class="good-name oneline" style="margin-top:10px;">
                    <a href="#" target="_blank"
                        class="">${data[2].name}</a></dd>
                    <dd class="good-price">￥<span class="good-price-cur">${data[2].price}<span
                        style="font-size:18px;">.00</span></span><span
                        class="zhekou">${data[2].zk}</span></dd>
                    <dt><a href="#" target="_blank">
                    <img width="150" height="150" title="日本Cheryl阿古屋珍珠素颜霜50g"
                        alt="日本Cheryl阿古屋珍珠素颜霜50g"
                        src="${data[2].src}"></a>
                    </dt>
                </dl>
                `
            $("#con_two_1 .salebox-2-r").html(html);
        }
    });
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/salebox/server/getProductData.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <dl>
                     <dt style="width:220px;">
                         <a href="#" target="_blank">
                             <img width="180" height="180" title="光透妆前乳SPF24 PA++(清爽型) 30ml" alt="光透妆前乳SPF24 PA++(清爽型) 30ml"
                                 src="${data[3].src}">
                         </a>
                     </dt>
                     <dd class="good-name">
                         <a href="#"  class="">${data[3].name}</a><br>
                         <a href="#"  class="">${data[3].tittle}</a></dd>
                     <dd class="good-exce">
                         <a href="#"  class="">迅速提升肌肤明亮度与透明度</a></dd>
                     <dd class="good-price">￥<span class="good-price-cur">${data[3].price}.<span style="font-size:18px;">00</span></span>
                         <span class="zhekou">${data[3].zk}</span>
                     </dd>
                </dl>
                `
            $("#con_two_1 .salebox-2-d").html(html);
        }
    });
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/salebox/server/getProductData.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <dl>
                    <dd class="good-name">
                        <a href="#" class="">${data[4].name}</a><br>
                        <a href="#" class="">${data[4].tittle}</a></dd>
                    <dd class="good-exce">
                        <a href="#" class="">控油止汗，收细毛孔</a></dd>
                    <dd class="good-price">￥<span class="good-price-cur">${data[4].price}.<span
                                style="font-size:18px;">00</span></span><span class="zhekou">${data[4].zk}</span>
                    </dd>
                    <dt><a href="#"><img width="230"
                                height="230" title="男士净肤细致爽肤水200ml" alt="男士净肤细致爽肤水200ml"
                                src="${data[4].src}"></a>
                    </dt>
                </dl>
                `
            $("#con_two_1 .salebox-3").html(html);
        }
    });
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/salebox/server/getProductData.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <dl class="s-4-t">
                                <dt>
                                    <a href="#">
                                        <img width="150" height="150" title="科颜氏1号护唇膏15ml" alt="科颜氏1号护唇膏15ml"
                                            src="${data[5].src}"></a>
                                </dt>
                                <dd class="good-name oneline">
                                    <a href="#" class="">${data[5].name}</a></dd>
                                <dd class="good-price">￥<span class="good-price-cur">${data[5].price}.
                                        <span style="font-size:18px;">00</span></span><span class="zhekou">${data[5].name}</span>
                                </dd>
                            </dl>
                            <dl>
                                <dt><a href="#">
                                        <img width="150" height="150" title="It°S SKIN伊思晶钻美肤蜗牛保湿水"
                                            alt="It°S SKIN伊思晶钻美肤蜗牛保湿水"
                                            src="${data[6].src}"></a>
                                </dt>
                                <dd class="good-name oneline">
                                    <a href="#" class="">${data[6].name}</a></dd>
                                <dd class="good-price">￥<span class="good-price-cur">${data[6].price}.<span
                                            style="font-size:18px;">00</span></span><span class="zhekou">${data[6].zk}</span>
                                </dd>
                </dl>
                `
            $("#con_two_1 .salebox-4").html(html);
        }
    });
    // salebox3
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/salebox/server/salebox3.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <div class="salebox-1">
                <dl>
                    <dt>
                        <a href="#"><img width="230" height="230" title="呼吸花园水乳两件套装" alt="呼吸花园水乳两件套装"
                                src="${data[0].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[0].name}</a><br>
                        <a href="#" class="">${data[0].tittle}</a></dd>
                    <dd class="good-exce">
                        <a href="#" class="">超值套装 送礼必备</a></dd>
                    <dd class="good-price">￥<span class="good-price-cur">${data[0].price}<span
                                style="font-size:18px;">00</span></span><span class="zhekou">${data[0].zk}</span>
                    </dd>
                </dl>
            </div>
            <div class="salebox-2">
                <div class="salebox-2-l">
                    <dl>
                        <dt><a href="#">
                                <img width="150" height="150" title="VIDIVICI女神隔离霜40ml"
                                    alt="VIDIVICI女神隔离霜40ml"
                                    src="${data[1].src}"></a>
                        </dt>
                        <dd class="good-name oneline">
                            <a href="#" class="">${data[1].name}</a></dd>
                        <dd class="good-price">￥<span class="good-price-cur">${data[1].price}<span
                                    style="font-size:18px;">00</span></span><span
                                class="zhekou">${data[1].zk}</span></dd>
                    </dl>
                </div>
                <div class="salebox-2-r">
                    <dl>
                        <dd class="good-name oneline" style="margin-top:10px;">
                            <a href="#" class="">${data[2].name}</a></dd>
                        <dd class="good-price">￥<span class="good-price-cur">${data[2].price}<span
                                    style="font-size:18px;">00</span></span><span class="zhekou">${data[2].zk}</span>
                        </dd>
                        <dt>
                            <a href="#">
                                <img width="150" height="150" title="法国菲洛嘉十全大补滋润面膜50ml"
                                    alt="法国菲洛嘉十全大补滋润面膜50ml"
                                    src="${data[2].src}">
                            </a>
                        </dt>
                    </dl>
                </div>
                <div class="salebox-2-d">
                    <dl>
                        <dt style="width:220px;">
                            <a href="#">
                                <img width="180" height="180" title="去角质泡沫慕斯80ml" alt="去角质泡沫慕斯80ml"
                                    src="${data[3].src}">
                            </a>
                        </dt>
                        <dd class="good-name">
                            <a href="#" class="">${data[3].name}</a><br>
                            <a href="#" class="">${data[3].tittle}</a></dd>
                        <dd class="good-exce">
                            <a href="#" class="">去除顽固黑头 紧致毛孔</a></dd>
                        <dd class="good-price">￥<span class="good-price-cur">${data[3].price}<span
                                    style="font-size:18px;">00</span></span><span
                                class="zhekou">${data[3].zk}</span></dd>
                    </dl>
                </div>
                </div>
                <div class="salebox-3">
                <dl>
                    <dd class="good-name">
                        <a href="#" class="">${data[4].name}</a><br>
                        <a href="#" class="">${data[4].tittle}</a>
                    </dd>
                    <dd class="good-exce">
                        <a href="#" class="">清爽无油 林允同款</a></dd>
                    <dd class="good-price">￥<span class="good-price-cur">${data[4].price}<span
                                style="font-size:18px;">00</span></span><span class="zhekou">${data[4].zk}</span>
                    </dd>
                    <dt>
                        <a href="#">
                            <img width="230" height="230" title="植物精华防晒隔离乳霜50ml" alt="植物精华防晒隔离乳霜50ml"
                                src="${data[4].src}">
                        </a>
                    </dt>
                </dl>
            </div>
            <div class="salebox-4">
                <dl class="s-4-t">
                    <dt><a href="#">
                            <img width="150" height="150" title="韩国unny悠宜卸妆500ml" alt="韩国unny悠宜卸妆500ml"
                                src="${data[5].src}">
                        </a>
                    </dt>
                    <dd class="good-name oneline">
                        <a href="#" class="">${data[5].name}</a></dd>
                    <dd class="good-price">￥<span class="good-price-cur">${data[5].price}<span
                                style="font-size:18px;">00</span></span><span class="zhekou">${data[5].zk}</span>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <a href="#">
                            <img width="150" height="150" title="Tom Ford汤姆福特幻魅四色眼影盘"
                                alt="Tom Ford汤姆福特幻魅四色眼影盘"
                                src="${data[6].src}">
                        </a>
                    </dt>
                    <dd class="good-name oneline">
                        <a href="#" class="">${data[6].name}</a></dd>
                    <dd class="good-price">￥<span class="good-price-cur">${data[6].price}<span
                                style="font-size:18px;">00</span></span><span class="zhekou">${data[6].zk}</span>
                    </dd>
                </dl>
            </div>
                `
            $("#con_two_3").html(html);
        }
    });
    // salebox2
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/salebox/server/salebox2.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <dl>
                <dt>
                    <a href="#">
                        <img width="228" height="300"
                            src="${ele.src}">
                    </a>
                </dt>
                <dd class="pro-name">
                    <a href="#" class="">${ele.tittle}</a>
                </dd>
                <dd class="whotui">
                    <a href="#" class="">${ele.writer}</a>
                </dd>
                <dd class="neir">
                    <a href="#" class="">${ele.text} </a>
                    <a href="#">[更多&gt;&gt;]</a>
                </dd>
            </dl>
                    `
            }).join("");
            $("#con_two_2").html(html);
        }

    });
    // salebox4
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/salebox/server/salebox4.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html = data.map((ele) => {
                return `
                <dl>
                    <dt><a href="#">
                            <img width="180" height="180" title="JAYJUN 三部曲水光面膜10片" alt="JAYJUN 三部曲水光面膜10片"
                                src="${ele.src}">
                        </a>
                    </dt>
                    <dd class="pro-name">
                        <a href="#" class="">${ele.tittle}</a>
                    </dd>
                    <dd class="neir firstneir">
                        <span>${ele.w1}</span>${ele.t1}</dd>
                    <dd class="neir"><span>${ele.w2}</span>${ele.t2}</dd>
                    <dd class="neir"><span>${ele.w3}</span>${ele.t3}</dd>
                </dl>
                    `
            }).join("");
            $("#con_two_4").html(html);
        }

    });
    // salebox5
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/salebox/server/salebox5.php",
        dataType: "json",
        success: function (response) {
            let data = response.data;
            let html =
                `
                <div class="salebox-1">
                <dl>
                    <dt>
                        <a href="#">
                            <img width="230" height="230" title="专研紧塑精华素" alt="专研紧塑精华素"
                                src="${data[0].src}">
                        </a>
                    </dt>
                    <dd class="good-name">
                        <a href="#" class="">${data[0].name}</a><br>
                        <a href="#" class="">${data[0].tittle}</a></dd>
                    <dd class="good-exce">
                        <a href="#" class="">提拉紧致 线雕精华素</a></dd>
                    <dd class="good-price">￥<span class="good-price-cur">${data[0].price}.<span
                                style="font-size:18px;">00</span></span><span class="zhekou">${data[0].zkx}</span>
                    </dd>
                </dl>
            </div>
            <div class="salebox-2">
                <div class="salebox-2-l">
                    <dl>
                        <dt>
                            <a href="#">
                                <img width="150" height="150" title="雅诗兰黛多效智妍精华霜15ml" alt="雅诗兰黛多效智妍精华霜15ml"
                                    src="${data[1].src}">
                            </a>
                        </dt>
                        <dd class="good-name oneline">
                            <a href="#" class="">${data[1].name}</a></dd>
                        <dd class="good-price">￥<span class="good-price-cur">${data[1].price}.<span
                                    style="font-size:18px;">00</span></span><span
                                class="zhekou">${data[1].zk}</span></dd>
                    </dl>
                </div>
                <div class="salebox-2-r">
                    <dl>
                        <dd class="good-name oneline" style="margin-top:10px;">
                            <a href="#" class="">${data[2].name}</a></dd>
                        <dd class="good-price">￥<span class="good-price-cur">${data[2].price}.<span
                                    style="font-size:18px;">00</span></span><span
                                class="zhekou">${data[2].zk}</span></dd>
                        <dt>
                            <a href="#">
                                <img width="150" height="150" title="碧欧泉男士净肤细致爽肤水 30ml*2"
                                    alt="碧欧泉男士净肤细致爽肤水 30ml*2"
                                    src="${data[2].src}">
                            </a>
                        </dt>
                    </dl>
                </div>
                <div class="salebox-2-d">
                    <dl>
                        <dt style="width:220px;">
                            <a href="#">
                                <img width="180" height="180" title="花漾倾慕唇膏/口红(420#豆沙色)2.8g"
                                    alt="花漾倾慕唇膏/口红(420#豆沙色)2.8g"
                                    src="${data[3].src}">
                            </a>
                        </dt>
                        <dd class="good-name">
                            <a href="#" class="">${data[3].name}</a><br>
                            <a href="#" class="">${data[3].tittle}</a></dd>
                        <dd class="good-exce">
                            <a href="#" class="">立体光感显色科技，打造浓郁饱满色调</a></dd>
                        <dd class="good-price">￥<span class="good-price-cur">${data[3].price}.<span
                                    style="font-size:18px;">00</span></span><span
                                class="zhekou">${data[3].zk}</span>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="salebox-3">
                <dl>
                    <dd class="good-name">
                        <a href="#" class="">${data[4].name}</a><br>
                        <a href="#" class="">${data[4].tittle}</a></dd>
                    <dd class="good-exce">
                        <a href="#" class="">超值小样全新升级配方</a>
                    </dd>
                    <dd class="good-price">￥<span class="good-price-cur">${data[4].price}.<span
                                style="font-size:18px;">00</span></span><span class="zhekou">${data[4].zk}</span>
                    </dd>
                    <dt><a href="#">
                            <img width="230" height="230" title="小黑瓶旅行小样三件套装" alt="小黑瓶旅行小样三件套装"
                                src="${data[4].src}">
                        </a>
                    </dt>
                </dl>
            </div>
            <div class="salebox-4">
                <dl class="s-4-t">
                    <dt><a href="#">
                            <img width="150" height="150" title="雅诗兰黛肌透修护精萃蜜 7ml" alt="雅诗兰黛肌透修护精萃蜜 7ml"
                                src="${data[5].src}">
                        </a>
                    </dt>
                    <dd class="good-name oneline">
                        <a href="#" class="">${data[5].name}</a>
                    </dd>
                    <dd class="good-price">￥<span class="good-price-cur">${data[5].price}.<span
                                style="font-size:18px;">00</span></span><span class="zhekou">${data[5].zk}</span>
                    </dd>
                </dl>
                <dl>
                    <dt><a href="#">
                            <img width="150" height="150" title="资生堂红妍肌活精华露/红腰子10ml*3"
                                alt="资生堂红妍肌活精华露/红腰子10ml*3"
                                src="${data[6].src}">
                        </a>
                    </dt>
                    <dd class="good-name oneline">
                        <a href="#" class="">${data[6].name}</a>
                    </dd>
                    <dd class="good-price">￥<span class="good-price-cur">${data[6].price}.<span
                                style="font-size:18px;">00</span></span><span class="zhekou">${data[6].zk}</span>
                    </dd>
                </dl>
            </div>
                `
            $("#con_two_5").html(html);
        }
    });

    $(".saletabs ul li").mouseenter(function(){
        $(this).addClass("dis").siblings().removeClass("dis");
        let index = $(this).index();
        $(".num").eq(index).addClass("active").siblings().removeClass("active");
    })
})