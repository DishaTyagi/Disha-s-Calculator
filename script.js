window.onload=function(){

    let textbox= document.getElementById('textbox')

    display=function(val){
        textbox.value+=val;

    }

    clr=function(){
        textbox.value=''
    }

    res=function(){
        let x=textbox.value;
        let y=eval(x);
        textbox.value=y;
    }

    backspace= function(){
    // var lastchar= textbox.value[textbox.value.length - 1];
    // textbox.value-= lastchar;        
    textbox.value= textbox.value.slice(0, textbox.value.length - 1);
    }

}