var typingBool = false;
var typingIdx=0;
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

typingTxt=typingTxt.split("");

if(typingBool==false){
    typingBool=true;
    var tyInt = setInterval(typing,50);
}

function typing(){
    $(".typing ul li").removeClass("on");
    $(".typing ul li").eq(liIndex).addClass("on");


    if(typingIdx<typingTxt.length){
        $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
        typingIdx++;
    } else{
        if(liIndex<liLength-1){
        liIndex++;
        typingIdx=0;
        typingBool = false;
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

        clearInterval(tyInt);

        setTimeout(function(){
            tyInt = setInterval(typing,50);
        },2000);

        } else if(liIndex==liLength-1){

            clearInterval(tyInt);

            setTimeout(function(){
                typingBool = false;
                liIndex=0;
                typingIdx=-0;

                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
                $(".typing ul li").html("")

                tyInt = setInterval(typing,50);
            }, 2000);
        }
    }
}