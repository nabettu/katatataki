// forked from nabettu's "右クリック左クリック判定のやつ" http://jsdo.it/nabettu/O0g4
$(function(){

    boombox.setup();
    var options = {
        src: [
                {
                    media: 'audio/mp4',
                    path: 'taiko01.mp3'
                }
            ]
    };
    boombox.load('sound1', options);
    options = {
        src: [
                {
                    media: 'audio/mp4',
                    path: 'taiko04.mp3'
                }
            ]
    };
    boombox.load('sound2', options);

    $("body").on("click",function(){
        console.log("左");
        boombox.get('sound1').play();
        $("#left").css("background-color","#ccf").delay(100).queue(function(){
            $(this).css("background-color","").dequeue();
        });
   })

    $("body").on("contextmenu",function(){
        console.log("右");
        boombox.get('sound2').play();
        $("#right").css("background-color","#fcc").delay(100).queue(function(){
            $(this).css("background-color","").dequeue();
        });
        return false;
    })

})
