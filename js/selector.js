
// hiệu ứng icon nghe nhạc
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
icon.onclick = function(){
    $('.name b span').addClass('animate');
    if(mySong.paused){ 
        document.getElementById('text').innerHTML = "Dừng";
        mySong.play();
        icon.src = "media/pause.png";
        $('.name b span').css("animation-play-state", "running");
    }
    else{
        document.getElementById('text').innerHTML = "Nghe nhạc";
        mySong.pause();
        icon.src = "media/play.png";
        $('.name b span').css("animation-play-state", "paused");
    }
}

// ấn space để nghe nhạc
$(function(){
    $(document).keyup(function(e){
        if(e.keyCode=='32'){
            $('.name b span').addClass('animate');
            if(mySong.paused){
                document.getElementById('text').innerHTML = "Dừng";
                mySong.play();
                icon.src = "media/pause.png";
                $('.name b span').css("animation-play-state", "running");
            }else{
                document.getElementById('text').innerHTML = "Nghe nhạc";
                mySong.pause();
                icon.src = "media/play.png";
                $('.name b span').css("animation-play-state", "paused");
            }
        }    
    })
})


/// chuyển nhạc và hiệu ứng tab list
let arrayMusic =[
    {
        link: "TinhYeuKhungLong-FAY-6247040.mp3",
        name: "Tình yêu khủng long",
        symbol: "g"
    },
    {
        link: "Cổ Điển - Classic Love - Tofu x VoVanDuc. (Official Audio).mp3",
        name: "Cổ điển",
        symbol: "p"
    },
    {
        link: "GHÉ QUA - OFFICIAL MV - Dick x PC x Tofu.mp3",
        name: "Ghé qua",
        symbol: "d"
    },
    {
        link: "Lạ Lùng.mp3",
        name: "Lạ lùng",
        symbol: "n"
    }
];

var songs  = document.getElementById("tab");
for (var i = 0, len = songs.children.length; i < len; i++)
{

    (function(index){
        songs.children[i].onclick = function(){     
            document.getElementById('text').innerHTML = "Dừng";
            icon.src = "media/pause.png";  
            $('.name b span').addClass('animate');
            $('.name b span').css("animation-play-state", "running");
            $('#tab li').removeClass('list-item-effect');
            $(`#tab li:nth-child(${index+1})`).addClass('list-item-effect');
            $(`.name b span:nth-child(${2})`).html(arrayMusic[index].name);
            $(`.symbol`).html(arrayMusic[index].symbol); 
            $(`.symbol`).css("margin-right","0");
            mySong.src = "mp3/" + arrayMusic[index].link;   
            mySong.play();  
        }    
    })(i);

}
