killer=JSON.parse(sessionStorage.getItem("killer"));//活着的杀手人数
civilians=JSON.parse(sessionStorage.getItem("civilians"));//活着的平民人数
death=JSON.parse(sessionStorage.getItem("death"));//总共的人
die=JSON.parse(sessionStorage.getItem("die"));//死掉的人
var adj=killer+civilians;
console.log(die.length);
// $("#adj").append("");
let max3 = (`剩余人数：${adj}`);
$("#adj").append(max3);
let max4 = (`杀&emsp;手：${killer}`);
$("#killernum").append(max4);
let max5 = (`平&emsp;民：${civilians}`);
$("#civiliansnum").append(max5);

// for (i=1;i<die.length;i++){
//     let max3 = (`<div>${die[i-1][0].number}号被杀手杀死，真实身份是${die[i-1][0].name}</div>`);
//     $('main').append(max3);
// }
console.log(die[1].length);
for (i=1;i<=die.length;i++) {
    if (die[i - 1].length == 2) {
        let max3 = (`<div class="max1">
    <span>第${i}天</span>
    <span class="min1">0小时07分钟</span>
<p id="abc2">晚上：${die[i - 1][0].number}号被杀手杀死，${die[i - 1][0].number}号是${die[i - 1][0].name}</p>
<p class="min2">早上 ：${die[i - 1][1].number}号被投票杀死，${die[i - 1][1].number}号是${die[i - 1][1].name}</p>
</div>`);
        $('main').append(max3);
    }
    console.log(die[1].length);
    if (die[i - 1].length === 1) {
        let max3 = (`<div class="max1">
    <span>第${i}天</span>
    <span class="min1">0小时07分钟</span>
<p id="abc2">晚上：${die[i - 1][0].number}号被杀手杀死，${die[i - 1][0].number}号是${die[i - 1][0].name}</p>
</div>`);
        $('main').append(max3);
    }
}





$("#return").click(function () {
    alert(' 确定要返回吗？');
    sessionStorage.clear();//清除所有浏览器存值
    window.location.href = '../html/task13.html';//第二个页面
});