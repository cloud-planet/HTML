//  alert("你好");
//  弹窗

//  document.write("测试文本输出");
//  输出文本

/*
    var now=new Date();
    var hour=now.getHours();
    var minu=now.getMinutes();
    alert("time is "+hour+":"+minu+"\r欢迎");
*/
//  获取当前时间弹窗显示

/*
    var age=18;
    var agestatus;
    agestatus=(age>=18)?"成年":"未成年";
    alert(agestatus);
*/
//  判断语句

/*
    var a=2;
    var b=2;
    if(a>b)
    {
        alert("a大于b");
    }
    else if(a==b)
    {
        alert("a等于b");
    }
    else
    {
        alert("a小于b");
    }
*/
//  if语句

/*
    var now=new Date();
    var day=now.getDay();
    var week;
    switch(day)
    {
        case 1:
        week="星期一";
            break;
        case 2:
        week="星期二";
            break;
        case 3:
        week="星期三";
            break;
        case 4:
        week="星期四";
            break;
        case 5:
        week="星期五";
            break;
        case 6:
        week="星期六";
            break;
        case 0:
        week="星期天";
            break;
        default:
        week="星期天"
            break;
    }
    document.write("今天是"+week);
    document.write("getday="+day);
*/
//  switch语句
//  getday获取的为1 2 3 4 5 6 0 对应星期一到星期天

/*
    function test()
    {
        alert("hello world");
    }
*/
//  定义函数，在html中调用

/*
    var i,j;
    for(i=1;i<=5;i++)
    {
        document.write(i+"\n");
        for(j=1;j<=3;j++)
        {      
            if(j==2)
                break;
            document.write(j);
        }
        document.write("<br>");
    }
*/
//  循环

/*
    function table(row,col)
    {
        var show = ""
        show = "<table align = 'center' border = '1' width = '600'>"
        var bgcolor;
        for(i=1;i<=row;i++)
        {
            if(i%2 != 0)
            //如果是奇数行
            {
                bgcolor = "#FFFFFF";
            }
            else
            {
                bgcolor = "#DDDDFF";
            }
            show += "<tr bgcolor='"+bgcolor+"'>";
            for(j=1;j<=col;j++)
            {
                show += "<td height='30'>第"+i+"行，第"+j+"列</td>";
            }
            show += "</tr>";
        }
        show += "</table>";
        return show;
    }

    var result = table(5,6);
    document.write(result);
*/
//  表格

/*
    var student =
    {
        name:"旺财",
        sex:"男",
        age:"23"
    }
    document.write("姓名:"+student.name+"<br>");
    document.write("性别:"+student.sex+"<br>");
    document.write("年龄:"+student.age+"<br>");
*/
//  直接创建自定义对象

/*
    function player(name,height,team)
    {
        this.name=name;
        this.height=height;
        this.team=team;
    }
    var player1=new player("二狗","2.99","洛杉矶");
    document.write("球员姓名:"+player1.name+"<br>");
    document.write("球员身高:"+player1.height+"<br>");
    document.write("球员所属:"+player1.team+"<br>");
*/
//  通过构造函数来创建对象

/*
    var book =new Object();
    book.getBookInfo=getBookInfo;
    function getBookInfo(name,type,price)
    {
        document.write("书名:"+name+"<br>类型:"+type+"<br>价格"+price);
    }
    book.getBookInfo("Use the JS","JS","80");
*/
//  通过Object对象创建自定义对象

/*
    function Table(row,col,width,height)
    {
        this.row=row;
        this.col=col;
        this.width=width;
        this.height=height;
    }
    Table.prototype.border=1;
    //border是边框宽度
    Table.prototype.createtable=function(){
    var show = ""
    show = "<table align = 'center' border = '+this.border+' width = '+this.width+'>"
    var bgcolor;
    for(i=1;i<=this.row;i++)
    {
        if(i%2 != 0)
        {
            bgcolor = "#FFFFFF";
        }
        else
        {
            bgcolor = "#DDDDFF";
        }
        show += "<tr bgcolor='"+bgcolor+"'>";
        for(j=1;j<=this.col;j++)
        {
            show += "<td height='this.height'>第"+i+"行，第"+j+"列</td>";
        }
        show += "</tr>";
    }
    show += "</table>";
    return show;
    }
    var table1=new Table(5,3,600,20);
    document.write(table1.createtable());
*/
//  表格，其中几处引号未打，一些符号错位

/*
    var r = 5;
    var zhouchang = 2*Math.PI*r;
    var area = Math.PI*r*r;
    document.write("半径="+r+"<br>");
    document.write("周长="+zhouchang+"<br>");
    document.write("面积="+area);
*/
//  计算圆的周长和面积

/*
    function ran(num)
    {
        var result="";
        for(i=0;i<num;i++)
        {
            result=result+(Math.floor(Math.random()*10));
        }
        alert(result);
    }
*/
//  生成指定位数的随机数

/*
    var num = new Number(10000);
    document.write(num.toPrecision(4)+"<br>");
    document.write(num.toPrecision(10));
*/
//  num中的数字位数小于toPrecision(num1)中的数字则会使用科学计数法，否则定点计数法

/*
    var arr = [333,444];
    var area = arr[Math.round(Math.random()*(arr.length-1))];
    function tianjia(tuzhi)
    {
        arr.splice(arr.length / 2,0,tuzhi); 
    }
    function choujiang()
    {
        alert(area);
        area = arr[Math.round(Math.random()*(arr.length-1))];
    }
    document.write(arr);
*/
//  抽奖

/*
    function back()
    {
        history.go(-1);
    }
*/
//  后退一页（就是浏览器中的后退），0是刷新，+1是前进

/*
    function re()
    {
        document.location.reload();
    }
*/
//  重新加载


/*
    function  convert(num)
    {
        var result=0;
        var dec="";
        if(isNaN(num))
        {
            result="请输入数字";
        }
        else
        {
            if(num.length<4)
            {
                result=num;
            }
            else
            {
                pos=num.indexOf(".",1);
                if(pos>0)
                {
                    dec=num.substr(pos);
                    res=num.substr(0,pos);
                }
                else
                {
                    res=num;
                }
                var tempResult="";
                for(i=res.length;i>0;i-=3)
                {
                    if(i-3>0)
                    {
                        tempResult=","+res.substr(i-3,3)+tempResult;
                    }
                    else
                    {
                        tempResult=res.substr(0,i)+tempResult;
                    }
                }
                result=tempResult+dec;
            }
        }
        return result;
    }

    function deal()
    {
        result.innerHTML="&nbsp;转换结果:"+convert(form1.number.value);
    }
*/
//  数字格式转换

/*
    document.write('<table width="300" border="0" cellpadding="0" cellspacing="0">');
    var xuhao=1;
    var nameArr=new Array ("终结者","飓风营救","我是传奇","一线生机","罗马假日","史密斯夫妇","午夜邂逅");
    var dnumArr=new Array ("施瓦辛格","角色2","角色3","角色4","角色5","角色6","角色7");
    for(var i=0;i<nameArr.length;i++)
    {
        document.write('<tr height="43">');
        document.write('<td width="26" align="center" class="f_td">'+(xuhao++)+'</td>');
        document.write('<td width="75" align="left" class="f_td"><a href="#">'+nameArr[i]+'</td>');
        document.write('<td width="90" align="right" class="f_td">'+dnumArr[i]+'</td></tr>');
    }
    document.write('</table>');
*/
//  排行榜

/*
    function Myenter(str)
    {
        if (event.keyCode==13)
        {
            str.focus();
        }
    }
*/
//  自动切换焦点

/*
    document.vlinkColor="#00CCFF";
    document.linkColor="blue";
    document.alinkColor="#000000";
*/
//  改变超链接的颜色，分别是点击过，未点击，被点击时的颜色

/*
    function addInput()
    {
        var txt=document.createElement("input");
        txt.type="text";
        txt.name="txt";
        txt.value="动态加的";
        document.form1.appendChild(txt);    //把文本框作为子节点追加到表单中
    }
*/
//  动态添加标签（文本框）

/*
    function chg()
    {
        var t=document.getElementById("txt");
        t.value="修改后的";
    }
*/
//  根据ID修改文本内容（value值）

/*
    function writeCookie()
    {
        document.cookie=encodeURI("username="+document.form1.username.value);
        document.cookie=encodeURI("password="+document.form1.password.value);
    }
*/
//  创建Cookie

/*
    function readCookie(value23)
    {
        var cookieString=decodeURI(document.cookie);
        var cookieArray=cookieString.split(";");
        for(var i=0;i<cookieArray.length;i++)
        {
            var cookieNum=cookieArray[i].split("=");
            var cookieName=cookieNum[0];
            var cookieValue=cookieNum[1];
            alert("Cookie名称为："+cookieName+"Cookie值为："+cookieValue);
            if(cookieValue==value23)
            {
                return cookieValue;
            }
            return false;
        }
    }
*/
//  读取Cookie

/*
    function deleteCookie(name)
    {
        var date=new Date();
        date.setTime(date.getTime()-1000);
        document.cookie=name+"=删除"+";expires="+date.toGMTString();
    }
*/
//  删除Cookie

/*
    function Mycheck()
    {
        var checkstr="获取内容如下：";
        if(document.form1.文章作者.value != "")
        {
            checkstr+="作者名称："+document.form1.文章作者.value;
        }
        if(document.form1.文章主题.value != "")
        {
            checkstr+="文章主题："+document.form1.文章作者.value;
        }
        if(document.form1.文章内容.value != "")
        {
            checkstr+="文章内容："+document.form1.文章作者.value;
        }
        if(document.form1.隐藏域.value != "")
        {
            checkstr+=document.form1.隐藏域.value;
        }
        if(checkstr != "")
        {
            alert(checkstr);
            return false;
        }
        else 
        return true;
    }
*/
//  获取表单信息

/*
function checkPass(pass)
{
    if(pass=="")
    {
        alert("密码不能为空，请重新输入");
        return 0;
    }
    if(pass.length < 8)
    {
        alert("密码长度小于8位，请重新输入");
        return 0;
    }
    var str = 0;
    if(pass.match(/([a-z])+/))
    {
        str++;
    }
    if(pass.match(/([0-9])+/))
    {
        str++;
    }
    if(pass.match(/([A-Z])+/))
    {
        str++;
    }
    if(pass.match(/[^a-zA-Z0-9]+/))
    {
        str++;
    }
    if(str<3)
    {
        alert("新密码复杂度不够，请重新设置！需至少8位，且包含大小写字母和数字。");
    }
    alert("提交成功");
}
*/
//  检查密码是否合法

/*
    function progressTest(n)
    {
        var prog=document.getElementById('progress');
        prog.firstChild.nodeValue=n+"%";
        prog.style.width=(n*2)+"px";
        n+=20;
        if(n>100)
        {
            n=100;
        }
        setTimeout('progressTest('+n+')',1000);
    }
*/
//  进度条

/*
    var imgs = []; 
		for(var i=0; i<=10; i++){
			imgs[i] = new Image();
			imgs[i].src="img/"+i+".jpg";
		}
        function displayTime(){
			var now = new Date();
			var time = [];
        
            var hrs = now.getHours();
			hrs = (hrs<10?'0':"")+hrs;
			time[0] = hrs.charAt(0);
			time[1] = hrs.charAt(1);
        
            var mins = now.getMinutes();
			mins=(mins<10?'0':"")+mins;
			time[2] = mins.charAt(0);
			time[3] = mins.charAt(1);

			var secs = now.getSeconds();
			secs = (secs<10?'0':"")+secs;
			time[4] = secs.charAt(0);
			time[5] = secs.charAt(1);
        for(var i=0;i<time.length;i++)
        {
            var img=document.getElementById('d'+i);
            img.src=imgs[time[i]].src;
            img.alt=time[i];
        }
    }
*/ 
//  通过改变图片来实现时钟


/*
    function jiazai()
    {
        progressTest(10);
         
        setInterval('displayTime()',1000);
    }
*/
//  Onload加载函数

/*
    function createjiedian()
    {
        var b=document.createElement("b");
        var txt=document.createTextNode("创建新节点");
        b.appendChild(txt);
        document.body.appendChild(b);
    }
*/
//  创建新节点

/*
    function createduojiedian()
    {
        var aText=["NO.1","NO.2","NO.3","NO.4","NO.5"];
        var cdf=document.createDocumentFragment();
        for(var i=0;i<aText.length;i++)
        {
            var ce=document.createElement("b");
            var cb=document.createElement("br");
            var cText=document.createTextNode(aText[i]);
            ce.appendChild(cText);
            cdf.appendChild(ce);
            cdf.appendChild(cb);
        }
        document.body.appendChild(cdf);
    }
*/
//  创建多节点

/*
function crNode(str)
{
    var newP=document.createElement("p");
    var newTxt=document.createTextNode(str);
    newP.appendChild(newTxt);
    return newP;
}
function insetNode(nodeID,str)
{
    var node=document.getElementById(nodeID);
    var newNode=crNode(str);
    if(node.parentNode)
    node.parentNode.insertBefore(newNode,node);
}
*/
//  插入节点

/*
    var arr = [111,222,333,444,555,666,777,888,999,101010];
    area = arr[Math.round(Math.random()*(arr.length-1))];
    area2 = arr[Math.round(Math.random()*(arr.length-1))];
    var result = [];
    function duizhan()
    { 
        var aaa="";
        for (var i = 0; i < 5; i++) 
        {
           
           // var bbb=0;
            aaa+=area;
            //bbb=aaa+bbb;
            result.push(arr[area]);
            area = arr[Math.round(Math.random()*(arr.length-1))];
            area2 = arr[Math.round(Math.random()*(arr.length-1))];
            var center = arr[area];

            arr[area] = arr[arr.length - 1];
            
            arr[arr.length - 1] = center;
            
            arr = arr.slice(0, arr.length - 1);
        }
        alert(aaa);
       // alert(dfg);

        var cdf=document.createDocumentFragment();
        var b=document.createElement("p");
        var txt=document.createTextNode(aaa);
        b.appendChild(txt);
        cdf.appendChild(b);
        document.body.appendChild(cdf);

    }*/

    
/*
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    var result = [ ];

    var ranNum = 5;

    for (var i = 0; i < ranNum; i++) {

    var ran = Math.floor(Math.random() * arr.length);

    var ran2 = Math.floor(Math.random() * arr.length);

    result.push(arr[ran]);
    result.push(arr[ran2]);

    var center = arr[ran];
    var center2 = arr[ran2];

    arr[ran] = arr[arr.length - 1];
    arr[ran2] = arr[arr.length - 1];


    arr[arr.length - 1] = center;

    arr = arr.slice(0, arr.length - 1);

    };
alert(result);
*/


/*
    function add(d,v)
    {
        var option=document.createElement("option");
        option.value=v;
        option.innerText=v+"日";
        d.appendChild(option);
    }
function getday()
{
   var y = form1.year.value;
   var m = form1.month.value;
   var d=document.getElementById("day");
   d.innerHTML="";
   if (m==4 || m==6|| m==9 || m==11)
    {
        for(j=1;j<30;j++)
    {
        add(d,j);
    }
}
    else if(m==2)
    {
        if(y%4==0 || y%400==0 && y%100!=0)
    {
    for(j=1;j<=29;j++)
    {
        add(d,j);
    }
    }
    else 
    {
    for(j=1;j<=28;j++)
    {
    add(d,j);
    }
    }
    }
    else
    {
    for (j=1;j<=31 ;j++ )
    {
        add(d,j);
    }
     
    }
}
*/
//  时间设置

/*
    var flag=0;
    var timeID;
    function beg()
    {
        var i=form1.num.value;
        i++;
        form1.num.value=i;
        timeID=setTimeout("beg()",1000);
    }
    function sta()
    {
        alert("1111");
        if(flag==0)
    {
        beg();
        flag=1;
    }
    }
    function pau()
    {
        clearTimeout(timeID);
        flag=0;
    }
*/
//  计时器

/*
    function chkUsername()
    {
        var username=form_register.username.value;
        if(username=='')
        {
            alert('请输入用户名！');
        }
        else
        {
            var xmlObj;
            if(window.ActiveXObject)
            {
                xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
            }
            else if(window.XMLHttpRequest)
            {
                xmlObj = new XMLHttpRequest();
            }
            xmlObj.onreadystatechange = callBackFun;
            xmlObj.open('GET','username.txt',true);
            xmlObj.send(null);
            function callBackFun()
            {
                if(xmlObj.readyState == 4 && xmlObj.status == 200)
                {
                    var nameArr = xmlObj.responseText.split('|');
                    var result = true;
                    for(var i=0;i<nameArr.length;i++)
                    {
                        if(nameArr[i] == username)
                        {
                            result = false;
                            break;
                        }
                    }
                    if(!result)
                    {
                        alert("该用户已被占有");
                    }
                    else
                    {
                        alert("恭喜");
                    }
                }
            }
        }
    }
*/
//  验证用户名是否重复

/* 
    $(document).ready
    (
        function()
        {
            $("tbody tr:even").addClass("odd");
            $("tbody tr:odd").addClass("even");
            $("tbody tr").hover
            (
                function() {$(this).addClass("light");},
                function() {$(this).removeClass("light");}
            );
        }
    ); 
*/
//  鼠标所到的行高亮

/* 
$(function()
{
    $("#checkAll").click(function()
    {
        $('[name = checkbox]:checkbox').attr('checked',true);
    });
    $("#inverse").click(function()
    {
        $('[name = checkbox]:checkbox').each(function()
        {
            if($(this).attr('checked'))
            {
                $(this).attr('checked',false);
            }
            else
            {
                $(this).attr('checked',true);
            }
        }
        );
    }
    );
    $("#checkNo").click(function()
    {
        $('[name = checkbox]:checkbox').attr('checked',false);
    }
    );
}
); 
*/
//  复选框全选全不选反选

/* $(document).ready(function()
{
    $(".tab_content").hide();
    $("ul.tabs li a:first").addClass("active");
    $(".tab_content:first").show();
    $("ul.tabs li a").hover(function()
    {
        $("ul.tabs li a").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        var activeTab=$(this).attr("name");
        $(activeTab).show();
    }
    );
}
); */

/* 
$(document).ready(function()
{
    $("form :input").blur(function()
    {
        $(this).parent().find("span").remove();
        if($(this).is("#name"))
        {
            if(this.value=="")
            {
                var show=$("<span class='error'>用户名不能为空</span>");
                $(this).parent().append(show);
            }
            else if(this.value.length<3)
            {
                var show=$("<span class='error'>用户名小于三位</span>");
                $(this).parent().append(show);
            }
            else
            {
                var show=$("<span class='right'>正确</span>");
                $(this).parent().append(show);
            }
        }
        if($(this).is("#password"))
        {
            if(this.value=="")
            {
                var show=$("<span class='error'>密码不能为空</span>");
                $(this).parent().append(show);
            }
            else if(this.value.length<6)
            {
                var show=$("<span class='error'>密码小于六位</span>");
                $(this).parent().append(show);
            }
            else
            {
                var show=$("<span class='right'>正确</span>");
                $(this).parent().append(show);
            }
        }
        if($(this).is("#passwords"))
        {
            if(this.value=="")
            {
                var show=$("<span class='error'>密码不能为空</span>");
                $(this).parent().append(show);
            }
            else if(this.value!=$("#password").val())
            {
                var show=$("<span class='error'>两次密码不相同</span>");
                $(this).parent().append(show);
            }
            else
            {
                var show=$("<span class='right'>正确</span>");
                $(this).parent().append(show);
            }
        }
    }
    );
    $("#send").click(function()
    {
        $("form :input").trigger("blur");
        if($(".error").length)
        {
            return false;
        }
        else
        {
            alert("success");
        }
    }
    );
    $("#res").click(function()
    {
        $("span").remove();
    }
    );
}
); 
*/
//  验证用户名和密码

/*
$(document).ready(function(){
    var curtainopen=false;
    $(".rope").click(function(){
        $(this).blur();
        if(curtainopen==false)
        {
        $(this).text("关闭幕帘");
        $(".leftcurtain").animate({width:'60px'},2000);
        $(".rightcurtain").animate({width:'60px'},2000);
        curtainopen=true;
        }
        else{
            $(this).text("拉开幕帘");
            $(".leftcurtain").animate({width:'50%'},2000);
        $(".rightcurtain").animate({width:'51%'},2000);
            curtainopen=false;
        }
    });
});
*/