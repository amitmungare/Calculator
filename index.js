
function getHistory(){
    return document.getElementById("history").innerText;
}

function printHistory(num){
    document.getElementById("history").innerText=num;
}

function getresult(){
    return document.getElementById("result").innerText;
}

function printresult(num){
    if(num==""){
        document.getElementById("result").innerText= num;
    }else{
        document.getElementById("result").innerText= getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n =Number(num);
    var value =n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}


var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){

        if(this.id=="c"){
            printresult("");
            printHistory("");
        }
        else if(this.id=="ce"){
            var op = reverseNumberFormat(getresult()).toString();
            if(op){
                op=op.substr(0,op.length-1);
                printresult(op);
            }
        }else{
            var op = getresult();
            var ht = getHistory();

            if(op=="" && ht!=""){
                if(isNaN(ht[ht.length-1])){
                    ht=ht.substr(0,ht.length-1);
                }
            }

            if(op !="" || ht!=""){
                //condtion?true:false;
                op=op==""?op:reverseNumberFormat(op);
                ht+=op;
                if(this.id=="="){
                    var result = eval(ht);
                    printHistory("");
                    printresult(result);                 
                }else{
                    ht+=this.id;
                    printHistory(ht);
                    printresult("");
                }
            }
        }

    });
}

var number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener('click',function(){

        var op = reverseNumberFormat(getresult());
        if(op != NaN){
            op+=this.id;
            printresult(op);
        }

    });
}