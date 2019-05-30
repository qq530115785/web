object = JSON.parse(sessionStorage.getItem("death"));
die = JSON.parse(sessionStorage.getItem("die"));
// console.log(time);
sss();
$(".min1").click(function () {
    $("#murder-box").toggle();//点击隐藏显示下面的4个按钮
});
var day = die.length;//第一天
sessionStorage.setItem("qqq", JSON.stringify(day));//存值qqq为1，用来判断第一次点击杀人
$(".murder").eq(-1).click(function () {//点击第一个“杀手杀人”
    if (day = die.length) {//判断当day=1的时候。让day=1.1。然后存入浏览器中，名字为qqq
        day = die.length + 0.1;//改变day为1.1
        sessionStorage.setItem("qqq", JSON.stringify(day));//存值qqq=1.1
        window.location = "task06.html";//跳转
    }
});
eee = JSON.parse(sessionStorage.getItem("www"));//取出下一个页面存的www=1.1=eee用来判断下面的点击顺序
console.log(die.length);
console.log(eee);
if (eee == die.length + 0.1) {
    // for (i = 0; i < object.length; i++) {
    //     if (object[i].class == "die") {
    //         console.log(object[die.length].number);
    //         let max2 = (`<div>${object[i].number}号被杀手杀死，真实身份是平民</div>`);
    //         $(".text").eq(-1).append(max2);
    //         console.log(max2);
    //     }
    // }
    eee = die.length + 0.2;//改变eee的值为1.2
    $("#box").not($(".box").eq(-1)).css("opacity", "0.5");//透明度
    $(".murder").css("opacity", "0.5");//透明度
    $(".murder").off("click");//禁点
}
if (die.length+0.2 === eee){
    let max2 = (`<div>${die[die.length-1][die.length-die.length].number}号被杀手杀死，真实身份是${die[die.length-1][die.length-die.length].name}</div>`);
    $('.text').eq(-1).append(max2);
}
console.log(eee);
$(".murder1").eq(-1).click(function () {
    if (eee == die.length + 0.2) {
        eee = die.length + 0.3;//改变eee的值为1.3
        $("#box1").not($(".box1").eq(-1)).css("opacity", "0.5");//透明度
        $(".murder1").css("opacity", "0.5");//透明度
        $(".murder1").off("click");//禁点
        alert("我死的好惨！！")
    } else {
        alert("傻逼吧，按顺序点击行么- -");
    }
    console.log(eee);
});
$(".murder2").eq(-1).click(function () {
    if (eee == die.length + 0.3) {
        eee = die.length + 0.4;//改变eee的值为1.4
        $("#box2").not($(".box2").eq(-1)).css("opacity", "0.5");//透明度
        $(".murder2").css("opacity", "0.5");//透明度
        $(".murder2").off("click");//禁点
        alert("死的好")
    } else {
        alert("按顺序点击啊！！");
    }
    console.log(eee);
});
$(".murder3").eq(-1).click(function () {
    if (eee == die.length + 0.4) {
        eee = die.length + 0.5;//改变eee的值为1.5
        $("#box3").not($(".bo3").eq(-1)).css("opacity", "0.5");//透明度
        $("#murder3").not($("#murder3")).eq(-1).css("opacity","0.5");
        sessionStorage.setItem("rrr", JSON.stringify(die.length + 0.5));//存值rrr=1.5
        window.location.href = "../html/task06.html";//跳转
    }
    console.log(eee);
});
uuu = JSON.parse(sessionStorage.getItem("yyy"));//获取下一个页面存的值yyy=1.5=uuu
if (uuu+0.5 == die.length ) {//判断当uuu的值为1.5的时候。4个按钮全部改变透明度同时设置禁点
    console.log(die.length);
    $(".box").not($(".box").eq(-1)).css("opacity", "0.5");//透明度
    $("#box1").not($("#box1")).eq(-1).css("opacity", "0.5");//透明度
    $("#box2").not($("#box2").eq(-1)).css("opacity", "0.5");//透明度
    $("#box3").not($("#box3")).eq(-1).css("opacity", "0.5");//透明度
    $(".murder").not($(".murder").eq(-1)).css("opacity", "0.5");
    // $(".murder").off("click");
    $(".murder1").not($(".murder1").eq(-1)).css("opacity", "0.5");
    // $(".murder1").off("click");
    $(".murder2").not($(".murder2").eq(-1)).css("opacity", "0.5");
    // $(".murder2").off("click");
    $(".murder3").not($(".murder3").eq(-1)).css("opacity", "0.5");
    // $(".murder3").off("click");

    sessionStorage.setItem("die", JSON.stringify(die));
        $(".murder-box").not($(".murder-box").eq(-1)).hide();

    for (i=1;i<die.length;i++){
        let max3 = (`<div>${die[i-1][0].number}号被杀手杀死，真实身份是${die[i-1][0].name}</div>`);
        $('.text').eq(i-1).append(max3);
        let max2 = (`<div>${die[i-1][1].number}号被投票投死，真实身份是${die[i-1][1].name}</div>`);
        $('.text1').eq(i-1).append(max2);
    }
}

// console.log(die[1][0].name);

function sss() {
    for (i = 0; i < die.length; i++) {
        if (day = die.length) {
            let one = (` <div class="one">
    <div class="min1">
        <p>
            第${i+1}天
            <img  src="../inm/js4-jiantou.png" height="17" width="30"/></p>
    </div>
    <div class="min2">
        <div class="murder-box" id="murder-box">
            <div class="max1">
                <span></span>
                <div class="night">
                    <img src="../inm/js4-yueliang.png" height="26" width="20"/>
                </div>
                <span></span>
        </div>
        <div class="max2">
            <div class="box" id="box"></div>
            <div class="murder" id="killer">
                杀手杀人
            </div>
        </div>
            <div class="text"></div>
        <div class="max1">
            <span></span>
            <div class="night">
                <img src="../inm/js4-yueliang.png" height="26" width="20"/>
            </div>
            <span></span>
        </div>
        <div class="max2">
            <div class="box" id="box1"></div>
            <div class="murder1" id="killer1">
                亡灵发表遗言
            </div>
        </div>
        <div class="max1">
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div class="max2">
            <div class="box" id="box2"></div>
            <div class="murder2" id="killer2">
                玩家依次发言
            </div>
        </div>
        <div class="max1">
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div class="max2">
            <div class="box" id="box3"></div>
            <div class="murder3" id="killer3">
                投票
            </div>
        </div>
            <div class="text1"></div>
        </div>
    </div>
    </div>`);
            $("main").append(one);
        }
    }
}

$('.murder').not($('.murder').eq(-1)).off("click");
$('.murder1').not($('.murder1').eq(-1)).off("click");
$('.murder2').not($('.murder2').eq(-1)).off("click");
$('.murder3').not($('.murder3').eq(-1)).off("click");

$('.finish').click(function () {//返回到第二个页面
    alert('确定要返回吗？ ');
    sessionStorage.clear();//清除所有浏览器存值
    window.location.href = '../html/task13.html';//第二个页面
});
result();
function result() {
    var killer = 0;
    var civilians = 0;
    for (n = 0; n < object.length; n++) {//判断活着的人
        if (object[n].class === "activity" && object[n].name === "杀手") {//活着为杀手，则杀手数目+1
            killer++;
        }
        if (object[n].class === "activity" && object[n].name === "平民") {//活着为平民，则平民数目+1
            civilians++;
        }
    }
    sessionStorage.setItem("killer", JSON.stringify(killer));
    sessionStorage.setItem("civilians", JSON.stringify(civilians));
    killer=JSON.parse(sessionStorage.getItem("killer"));
    civilians=JSON.parse(sessionStorage.getItem("civilians"));
    if (killer==civilians){
        alert("杀手胜利");
        window.location.href ="../html/task13-3.html"
    }
    if (killer==0){
        alert("平民胜利");
        window.location.href ="../html/task13-3.html"
    }
}