document.getElementById("rot").innerHTML="ROT-0";
function rot(){
  var myKey=document.getElementById("this").value*1;
  document.getElementById("rot").innerHTML="ROT"+"-"+myKey;
  var data=document.getElementById("field").value.toUpperCase();
  var alpha=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var arr=[];
  for(let i=0; i<data.length; i++){
    console.log(/\w/.test(data[i]));
    var dex=alpha.indexOf(data[i]);
    if(/[0-9]/.test(data[i])==true){
      arr.push(data[i]);
    }
    else if(/\w/.test(data[i])==true){
      var decoded;
      if(dex+myKey>26){
        decoded=alpha[dex+myKey-26];
      }else if(dex+myKey<26){
        decoded=alpha[dex+myKey];
      }else if(dex+myKey==26){
        decoded=alpha[0];
      };
      arr.push(decoded);
    }else{
      arr.push(data[i]);
    }
  }
  var result=arr.join("")
  document.getElementById("info").innerHTML=result;
  }

function func1() {
 var x=document.getElementById("subset1");
 if(x.style.display==="none"){
   x.style.display="block";
 }else{
   x.style.display="none";
 }
};

function func2() {
 var y=document.getElementById("subset2");
 if(y.style.display==="none"){
   y.style.display="block";
 }else{
   y.style.display="none";
 }
};

function func3() {
 var z=document.getElementById("subset3");
 if(z.style.display==="none"){
   z.style.display="block";
 }else{
   z.style.display="none";
 }
};

function func4() {
 var a=document.getElementById("subset4");
 if(a.style.display==="none"){
   a.style.display="block";
 }else{
   a.style.display="none";
 }
};

function func5() {
 var b=document.getElementById("subset5");
 if(b.style.display==="none"){
   b.style.display="block";
 }else{
   b.style.display="none";
 }
};
