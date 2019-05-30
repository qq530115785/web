var arr =JSON.parse(sessionStorage.getItem("xxx"));//获取人数和身份
var object  =JSON.parse(sessionStorage.getItem("death"));//获取对象
var die=JSON.parse(sessionStorage.getItem("die"));
sessionStorage.setItem("www",JSON.stringify(die.length+0.1));//存值www=1.1
var www=JSON.parse(sessionStorage.getItem("www"));
ttt=JSON.parse(sessionStorage.getItem("rrr"));//获取上一个页面存的值rrr=1.5=ttt
function sb() {//模版字符串。根据arr的人数控制这个页面显示的数量并渲染背景颜色
    for (var i=0;i<arr.length;i++){
        let html=(`<div class="max1">
<div class="role">
            <p class="min1 ${object[i].class}">${arr[i]}</p>
                <p class="min2">${i+1}号</p>
             <img src="../inm/js4-dao.png" height="30" width="30"/>
             </div>
        </div>`);
        $("main").append(html);//在main中添加html，append是添加的意思
    }
}
sb();

$(".role").click(function(){
    // $(".min1").addClass("blue");
    $(".min1").removeClass("index");//选中点击杀人
    $(this).children(".min1").addClass("index");//添加一个类，改变背景颜色。index指背景颜色为#565656
    $("img").removeClass("abc");//隐藏显示小刀
    $(this).children("img").addClass("abc");//添加一个类，改变透明度opacity。abc指透明度opacity为1
    document.getElementById("start").disabled = false; //启用开始按钮
});
test();
function test() {
    $(".die").parent().off("click");
    $(".die1").parent().off("click");//.parent（）是一个遍历，用来寻找所匹配元素的父元素。这窜代码的意思就是所有拥有子元素.die的元素全部禁止点击
}
document.getElementById("start").disabled = true;
$("#start").click(function () {
    var subscript = $(".min1").index($(".index"));
    var die=JSON.parse(sessionStorage.getItem("die"));
    if (ttt==die.length+0.5){
        $("#start").click(function () {
            var subscript = $(".min1").index($(".index"));
            object[subscript].class="die1";//改变生死状态
            console.log(object);
            // death.push({name:object[subscript].name,number:object[subscript].number,state:0,class:"die1"});
            sessionStorage.setItem("death",JSON.stringify(object));//把改变之后的生死状态存到浏览器
            console.log(object[subscript]);
            var die=JSON.parse(sessionStorage.getItem("die"));
            die[[die.length-1]].push(object[subscript]);
            die.push([]);
            sessionStorage.setItem("die",JSON.stringify(die));
            window.location.href="../html/task05.html";//跳转/
        });
    }else {
        if (object[subscript].name !== "平民") {//判断当身份不为平民的时候跳出弹窗。
            alert("不可以自杀");
            // sessionStorage.setItem("death", JSON.stringify(object));//把改变之后的生死状态存入浏览器中
        } else {
            // object[subscript].state=1;
            object[subscript].class = "die";//改变生死状态
            console.log(object);
            console.log(object[subscript]);
            sessionStorage.setItem("death", JSON.stringify(object));//把改变之后的生死状态存到浏览器
            var die=JSON.parse(sessionStorage.getItem("die"));//获取对象
            die[[die.length-1]].push(object[subscript]);
            sessionStorage.setItem("die",JSON.stringify(die));
            console.log(die);
            // death.push({name:object[subscript].name,number:object[subscript].number,state:0,class:"die"});
            window.location.href = "../html/task05.html";//跳转
        }
    }
});
if (ttt==die.length+0.5){//判断ttt的值为1.5的时候存yyy的值为1.5
    sessionStorage.setItem("yyy",JSON.stringify(die.length+0.5));//当最后一次点击跳转进来这个页面后同时穿如了ttt=1.5。然后我们判断dangttt=1.5时把yyy=1.5存入浏览器中，然后用来改变上个浏览器中所有按钮的透明度
}