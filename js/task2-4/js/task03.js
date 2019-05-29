var a=JSON.parse(sessionStorage.getItem("xxx"));
console.log(a);
$("#imgtwo").hide();
var num=1;
var qq=1;
$("#click").click(function () {
    num++;
    qq++;
    var www=num/2;
    if (num%2 ===0){//点击次数为偶数
        $("#click").text("隐藏身份并传递给"+qq+"号");
        $("#imgone").hide();
        $("#imgtwo").show();
        $("#killer").text(a[www]);
    }
    else {
        qq--;
        $("#click").text("查看"+qq+"号身份");
        $("#imgone").show();
        $("#imgtwo").hide();
    }
    if (qq===a.length+1){
        qq=a.length;
        $("#click").text("法官查看");
        $("#imgone").hide();
        $("#imgtwo").show();
    }
    if (num===a.length*2+1){
        var death=[];
        for (var i=0; i<a.length; i++){
            death.push({name:a[i],number:i+1,state:0,class:"activity"});
            console.log(death);
        }
        var die=[[]];
        sessionStorage.setItem("death",JSON.stringify(death));
        sessionStorage.setItem("die",JSON.stringify(die));
        window.location.href="../html/task04.html";
    }
    $("#number").text(""+qq+"");
});
