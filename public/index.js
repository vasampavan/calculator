
var noOfButtons=document.querySelectorAll("button").length;
window.onload = function() {
    document.getElementById('input').focus();
};
if(document.addEventListener("keypress",function(event){
    buttonClicked(event.key);
}));
else{
for(var i=0;i<noOfButtons;i++){
var buttons=document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonName=this.innerHTML;
    buttonClicked(buttonName);
});
}
}

function buttonClicked(buttonName){
if(buttonName==1 || buttonName==2 || buttonName==3 || buttonName==4 || buttonName==5 || buttonName==6 ||buttonName==7 || buttonName==8 || buttonName==9 || buttonName==0 || buttonName==="*" || buttonName==="/" || buttonName==="." || buttonName==="-" || buttonName==="+"|| buttonName==="(" || buttonName===")"){
    var pastInput=document.querySelector("input").value;
    
    document.querySelector("input").value=pastInput+buttonName;
}
else if(buttonName==="C" || buttonName==="c"){
    document.querySelector("input").value="";
}
else if(buttonName==="del"){
    document.querySelector("input").value=document.querySelector("input").value.slice(0,-1);
}
else if(buttonName==="1/x"){
    document.querySelector("input").value=1/(document.querySelector("input").value);
}
else if(buttonName==="x²"){
    document.querySelector("input").value=(document.querySelector("input").value)**2;
}
else if(buttonName==="√"){
    document.querySelector("input").value=(document.querySelector("input").value)**0.5;
}
else if(buttonName==="+/-"){
    document.querySelector("input").value=(document.querySelector("input").value)*-1;
}
else if(buttonName==="="){
    try{
        document.querySelector("input").value=eval(document.querySelector("input").value);
    }
    catch{
        document.querySelector("input").value="Invalid";
        window.location.reload();
    }
}
else{
    invalid();
}
}
function invalid(){
    alert("Invalid Input");
    
}