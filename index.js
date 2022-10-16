var start=false

function flash(gclass){
    $("."+gclass).addClass("pressed")
    setTimeout(() => {
        $("."+gclass).removeClass("pressed")
    }, 100); 
}

function fade(gclass){
    $("."+gclass).addClass("fade")
    setTimeout(() => {
        $("."+gclass).removeClass("fade")
    }, 100); 
}

$(".st").click(function () { 
    let gclass1= this.className[0]
    flash(gclass1)  
    var useq=useq+gclass1
    check()
});


$(document).keypress(function () { 
    if(start==false){
        nextsequence()
        start=true
    }
});

function nextsequence(){
    let x=Math.floor(Math.random()*4)
    let y=$(".st")[x].className[0]
    fade(y)
    var seq=seq+y
}

function check(){
    if(seq!=useq){
        $("h1").text("Game Over!!!")
        Over()
    }
    else{
        nextsequence()
    }
}

function over(){
    useq=""
    seq=""
    start=false

}