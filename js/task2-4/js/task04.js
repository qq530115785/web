var arr =JSON.parse(sessionStorage.getItem("xxx"));
var object  =JSON.parse(sessionStorage.getItem("death"));
console.log(object);
function sb() {
    for (var i=0;i<arr.length;i++){
        let html=(`<div class="max1">
<div class="role">
            <p class="min1">${arr[i]}</p>
                <p class="min2">${i+1}号</p>
             <img src="../inm/js4-dao.png" height="30" width="30"/>
             </div>
        </div>`);
        $("main").append(html);//在main中添加html，append是添加的意思
    }
}
console.log(sb);
sb();
$("#start").click(function () {
    window.location.href="../html/task05.html"
});
// $(".role").click(function(){
//     // $(".min1").addClass("blue");
//     $(".min1").removeClass("index");//选中
//     $(this).children(".min1").addClass("index");
//
//     $("img").removeClass("abc");//隐藏显示小刀
//     $(this).children("img").addClass("abc");
// });
// $("#start").click(function () {
//     var subscript = $(".min1").index($(".index"));
//     // var subscript = $(".min1").index($(".inedx"));
//     console.log(subscript);
//     object[subscript].state=1;//改变生死状态
//     sessionStorage.setItem("death",JSON.stringify(object));//存值
//     window.location.href="../html/task05.html";//跳转
//     if (object[subscript].name="杀手"){
//         alert("不可以自杀")
//     }else {
//
//     }
// });
