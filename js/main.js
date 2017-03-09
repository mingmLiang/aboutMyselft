var me=document.getElementById("me");
var position=document.getElementById("position");
var frhide=document.getElementsByClassName("frhide");
var tips_text=document.getElementById("tips_text");
var webLink=document.getElementById("webLink");
var sechide=document.getElementsByClassName("sechide");
var  content =document.getElementsByClassName("content");
var  box =document.getElementsByClassName("box");
var closeBt=document.getElementById("closeBt");
var box_flag=["关于我","首页","前端环境搭建"];
for(var i=0;i<box.length;i++)
{
    box[i].num=i;
}

for (var i=0;i<box.length;i++)
{
    if(i!=1)
    {
        box[i].onclick=function () {
            me.style.cssText="float:right;margin-right:23%;";
            content[0].style.cssText=" margin-right:0px;width:405px;";
            tips_text.style.cssText="display:none";
            this.style.cssText="display:none";
            for(var j=0;j<box.length;j++)
            {
                if(j!=this.num)
                {
                    box[j].style.cssText="display:block";
                }
            }
            position.innerHTML=box_flag[this.num];
            if(this.num==2)
            {
                frhide[0].style.cssText="display:block";
                sechide[0].style.cssText="display:none";
                webLink.style.cssText="display:block;left:80%; bottom:-70%";
                box[1].style.cssText="float:right;";


            }
            if(this.num==0)
            {
                frhide[0].style.cssText="display:none";
                sechide[0].style.cssText="display:block";
                webLink.style.cssText="display:none;";
                box[1].style.cssText="float:right;";
            }
        }
    }
}
closeBt.onclick=function () {
    tips_text.style.cssText="display:none;";
}




