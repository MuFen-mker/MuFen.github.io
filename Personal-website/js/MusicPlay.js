var music = document.getElementById("audio");
var volume = document.getElementById("volume");
var toggleBtn = document.getElementById("toggleBtn");
var title = document.getElementById("title");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
//导入歌曲
var list = new Array("music/Love Story.mp3", "music/Red.mp3", "music/Wildest Dreams.mp3");
//歌曲名
var titleList = new Array("Love Story", "Red", "Wildest Dreams");

var i = 0;
//暂停播放按钮变化
toggleBtn.onclick = function() {
    if (music.paused) {
        music.play();
        toggleBtn.innerHTML = '<img src="img/ZT.png" width="50" height="50"/>';
    } else {
        music.pause();
        toggleBtn.innerHTML = '<img src="img/BF.png" width="50" height="50"/>';
    }
}
//上一首
prevBtn.onclick = function() {
    if (i == 0) {
        i = list.length - 1;
    } else {
        i--;
        music.pause();
        music.src = list[i];
        title.innerHTML = titleList[i];
        music.play();
    }

}
//下一首
nextBtn.onclick = function() {
    if (i == list.length - 1)
        i = 0;
    else
        i++;
    music.pause();
    music.src = list[i];
    title.innerHTML = titleList[i];
    music.play();
}

volume.onchange=function(){
     music.volume = volume.value;
}