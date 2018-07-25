function sub(){
  document.getElementById("result").value= document.getElementById("inp1").value - 				   
  document.getElementById("inp2").value;
}
function add(){
  var input1 = parseInt(document.getElementById("inp1").value);
  var input2 = parseInt(document.getElementById("inp2").value);
  document.getElementById("result").value = input1 + input2;              
  }
function mult(){
  let num1=document.getElementById("inp1").value;
  let num2=document.getElementById("inp2").value;
  let result=num1*num2;
  document.getElementById("result").value=result;
}
function div(){
  let n1=document.getElementById("inp1").value;
  let n2=document.getElementById("inp2").value;
  if(n2==0){
    alert("Cannot divide number by 0");
  }
  else{
    var ans= n1/n2;
  }
  document.getElementById("result").value=ans;
}
