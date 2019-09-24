$(function () {
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
})