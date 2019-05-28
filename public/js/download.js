/**
 * Created by xyp on 2017/7/17.
 */
    window.onload=function(){
        var checkbox=document.getElementsByTagName("input")[0];
        var btndownload=document.getElementById("download");
        var ischecked=checkbox.checked=false;
        var i=document.getElementsByTagName("i")[2];
        i.style.display="none";
        checkbox.style.left="0";
        btndownload.style.backgroundColor="#b2b2b2";
        btndownload.style.color="#fff";
        //选择同意后，下载按钮才可以使用
        checkbox.onclick=function(){
            ischecked=!ischecked;
            if(ischecked==true){
                //console.log(0);
                btndownload.removeAttribute("disabled");
                btndownload.style.backgroundColor="#2c70b9";
                btndownload.style.color="#fff";
                i.style.display="block";
                checkbox.style.left="-9999px";
            }
            else{
                btndownload.setAttribute("disabled","disabled");
                btndownload.style.backgroundColor="#b2b2b2";
                btndownload.style.color="#fff";
                i.style.display="none";
                checkbox.style.left="0";
            }
        };
        //点击章程打开pdf文件
        var view=document.getElementById("view");
        view.onclick=function(e){
            //e.stopPropagation();
            window.open("http://58.87.68.206/public/file/中国前列腺治疗康复技术创新联盟章程.pdf");
        }
    };
