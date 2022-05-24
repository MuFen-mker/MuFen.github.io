window.onload = function(){
    var two = document.getElementById('ZDD');
    document.onscroll = function(){
        var temp = document.documentElement.scrollTop;
        var shikou = document.documentElement.clientWidth; 
        var xiahuapx = 0;
        var xiahuapxto = 0;
        //根据视口宽度调整下滑多少像素出现置顶按钮
        if (shikou>960) {
            xiahuapx = 200;
            xiahuapxto = 400;
        } else {
            xiahuapx = 20;
            xiahuapxto = 40;
        //下滑判定
        }
        if(temp>=xiahuapx){
            two.style['animation-name']='ani1';
        }else{
            two.style['animation-name']='ani2';
        }

        if(temp>=xiahuapxto){
            three.style['animation-name']='ani1';

        }else{
            three.style['animation-name']='ani2';
        }
        
    }
}