// JavaScript Document
//inixio script fonte
$(document).ready(function(){
    var fonte = 13;
    $('#aumenta').click(function(){
        if(fonte<17){
            fonte=fonte+1;
            $('body').css({'font-size': fonte+'pt'});
        }
    });
    $('#diminui').click(function(){
        if(fonte>12){
            fonte = fonte-1;
            $('body').css({'font-size': fonte+'pt'});
        }
        
    });
    
});

//fim
