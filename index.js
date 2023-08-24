var final=0;
var firstno=0;
var secondno=0;
var no=0;
var sno=0;
var istrue=false;
var add=false;
var subtract=false;
var divide=false;
var multiply=false;
// var add=false;


function handleclick(event){
    
    console.log(event);
    if(event==='+'||event==='='||event==='/'||event==='*'||event==='-'){
        istrue=true;
    switch (event) {
        case '+':
            console.log("its a add");
            
            add=true;

            break;
            case '-':
            console.log("its a sub");
            
            subtract=true;

            break;
            case '*':
            console.log("its a multiply");
            
            multiply=true;

            break;
            case '/':
            console.log("its a divide");
            
            divide=true;

            break;
            case '=':
                console.log("equal");
                if(add){
                    final=firstno+secondno;
                    console.log(final);
                    document.querySelector(".screen").innerHTML=final;
                }
                else  if(subtract){
                    final=firstno-secondno;
                    console.log(final);
                    document.querySelector(".screen").innerHTML=final;
                }
                else  if(multiply){
                    final=firstno*secondno;
                    console.log(final);
                    document.querySelector(".screen").innerHTML=final;
                }
                else  if(divide){
                    final=firstno/secondno;
                    console.log(final);
                    document.querySelector(".screen").innerHTML=final;
                }
    
        // default:
        //     console.log("error");
        //     break;
    }}
    else if(event=='RS'){
        console.log("its here");
        document.querySelector(".screen").innerHTML="00";
         final=0;
 firstno=0;
 secondno=0;
 no=0;
 sno=0;
 istrue=false;
 add=false;
 subtract=false;
 divide=false;
 multiply=false;
    }
    else{
        console.log("its a no");
        if(istrue){
            sno=10*sno;
            secondno=sno+event;
            sno=secondno;
            document.querySelector(".screen").innerHTML=secondno;
            console.log(secondno);
        }else{
            no=10*no;
            firstno=no+event;
            no=firstno;
            console.log(firstno);
            document.querySelector(".screen").innerHTML=firstno;
        }
    }
}