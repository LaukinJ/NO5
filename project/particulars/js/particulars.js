$(function () {
    let tittlenum = location.search.split('=')[1];
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/project/particulars/server/grtdata.php",
        dataType: "json",
        data: `tittlenum=${tittlenum}`,
        success: function (response) {
            let data = response.data;
            let html =
                `
            <div id="img-box">
                <div id="preview" class="spec-preview">
                    <span class="jqzoom">
                        <img jqimg="${data[0].src}"
                            src="${data[0].src}" />
                    </span>
                </div>
            </div>
            <div class="p01_r">
                <div id="text-r">
                    <h2>${data[0].text}</h2>
                    <div class="cppro">
                        <div class="pro_name">商品编号：</div>
                        <div class="n_neir">${data[0].tittlenum}</div>
                        <div class="pro_name">No5&nbsp;&nbsp;&nbsp;价：</div>
                        <div class="n_neir">
                            <span class="" style="margin-left:0px;">￥385.00</span>
                            <span class="prodTxt1">市场价： ￥668.00</span><span id="rebate" class="prodTxt1">折扣： ${data[0].yh}</span>
                        </div>
                        <div id="sPriNM" class="pro_name" style="display: block; color: rgb(209, 16, 16);">
                            特&nbsp;&nbsp;&nbsp;&nbsp;价：</div>
                        <div id="sPriVL" class="n_neir"
                            style="display: block; color: rgb(209, 16, 16); font-size: 16px; font-weight: bold; border: 0px solid rgb(102, 102, 102);">
                            ￥${data[0].price}.00&nbsp;
                            <span style="font-size:12px;">(不返积分)</span>
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="cppro" style="padding-bottom:0px;">
                    <div class="pro_name">所属品牌：</div>
                    <div class="n_neir">
                        <a href="#">Estee Lauder 雅诗兰黛</a> →
                        <a href="#">红石榴鲜活系列</a>
                    </div>
                    <div class="pro_name">所属分类：</div>
                    <div class="n_neir">
                        <a href="#">面部护理</a> →
                        <a href="#">护肤套装</a> →
                        <a href="#">旅行套装</a>
                    </div>
                    <div class="pro_name">用户评分：</div>
                    <div class="n_neir">
                        <div id="sp_xin_box">
                            <div>
                                <div class="sp_xin_line" style="width:0%;"></div>
                            </div>
                            <div class="star_rank"></div>
                        </div>
                        <div class="sp_user_count">
                            <a href="javascript:void(0);" onclick="javascript:jump(0);">已有
                                <span class="magenta">0</span>条评论
                            </a>
                        </div>
                    </div>
                    <div class="pro_name">运费说明：</div>
                    <div class="n_neir">
                        <span class="prodRedTxt" style="margin-right:30px;">购物满80元免费快递</span>
                        <a href="#">查看运费详情</a>
                    </div>
                    <div class="pro_name">消费保障：</div>
                    <div class="n_neir">
                        <span class="prodTxt2" style="margin-left:0px;">
                            <img src="http://www.no5.com.cn/images/ico01.jpg" width="18" height="15">
                        </span>品质承诺
                        <span class="prodTxt2">
                            <img src="http://www.no5.com.cn/images/ico02.jpg" width="23" height="15"></span>货到付款
                        <span class="prodTxt2">
                            <img src="http://www.no5.com.cn/images/ico03.jpg" width="18" height="15"></span>不满意退货
                        <span class="prodTxt2">
                            <img src="http://www.no5.com.cn/images/ico04.jpg" width="15" height="15"></span>可靠包装</div>
                    <div class="pro_name">温馨提示：</div>
                    <div class="n_neir">请正确认识化妆品功效，化妆品不能替代药品，不能治疗皮肤病等疾病</div>
                    <div class="pro_name">服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务：</div>
                    <div class="n_neir">本商品由&nbsp;<span style="color:#4063a7;">No5时尚广场</span>&nbsp;销售</div>
                    <div class="clear"></div>
                </div>
                <div id="boxBuy">
                    <span>我要买：<img src="http://www.no5.com.cn/images/reduce.jpg" width="13" height="13"
                            style="vertical-align: middle;"><input type="text" id="buyAnt" value="1" class="textinput"
                            maxlength="3"><img src="http://www.no5.com.cn/images/add.jpg" width="13" height="13"
                            style="vertical-align: middle;"></span><button id="btnBuy" type="button"
                        class="prodBtn1 btnBuy cd-add-to-cart"  data-price="${data[0].price}"></button>
                    <button type="button" id="btnFav" class="prodBtn1 btnFav"><input type="hidden"></button>
                    <div class="clear"></div>
                </div>
                <span id="favSuc">收藏成功 <a href="/customer/account_item.html?item=fav" target="_blank">[查看收藏夹]</a></span>

                <div class="cuxiao">
                    <p></p>
                </div>
            </div>
            `
            $("#content").html(html);


            $(function () {
                $(".jqzoom").jqueryzoom({
                    xzoom: 400,
                    yzoom: 450
                });
            });
        }
    });
})