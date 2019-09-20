var oLIS = $(".cplist").children("dl");
var data = [];
// $(".cplist").children("dl").children("dt").children("a").children("img").attr("src");
oLIS.each(function(index){
    let o = {};
    o.src = this.getElementsByTagName("img")[0].src;
    o.text = this.getElementsByClassName("pro-name")[0].innerText;
    o.price = this.getElementsByClassName("pro-price")[0].getElementsByTagName("span")[0].innerText;
    o.yh = this.getElementsByClassName("zhekou")[0].innerText;
    data.push(o);
})
console.log(JSON.stringify(data));