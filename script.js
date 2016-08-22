var output="0";
var exp="";
var firstInputFlag=true;

window.onload=function(){
	
	clearAll();
	
	document.getElementById("zero").onmouseover=mOver;
	document.getElementById("one").onmouseover=mOver;
	document.getElementById("two").onmouseover=mOver;
	document.getElementById("three").onmouseover=mOver;
	document.getElementById("four").onmouseover=mOver;
	document.getElementById("five").onmouseover=mOver;
	document.getElementById("six").onmouseover=mOver;
	document.getElementById("seven").onmouseover=mOver;
	document.getElementById("eight").onmouseover=mOver;
	document.getElementById("nine").onmouseover=mOver;
	document.getElementById("eq").onmouseover=mOver;
	document.getElementById("add").onmouseover=mOver;
	document.getElementById("minus").onmouseover=mOver;
	document.getElementById("mul").onmouseover=mOver;
	document.getElementById("divide").onmouseover=mOver;
	document.getElementById("clAl").onmouseover=mOver;
	document.getElementById("c").onmouseover=mOver;
	document.getElementById("dot").onmouseover=mOver;
	
	document.getElementById("zero").onmouseout=mExit;
	document.getElementById("one").onmouseout=mExit;
	document.getElementById("two").onmouseout=mExit;
	document.getElementById("three").onmouseout=mExit;
	document.getElementById("four").onmouseout=mExit;
	document.getElementById("five").onmouseout=mExit;
	document.getElementById("six").onmouseout=mExit;
	document.getElementById("seven").onmouseout=mExit;
	document.getElementById("eight").onmouseout=mExit;
	document.getElementById("nine").onmouseout=mExit;
	document.getElementById("eq").onmouseout=mExit;
	document.getElementById("add").onmouseout=mExit;
	document.getElementById("minus").onmouseout=mExit;
	document.getElementById("mul").onmouseout=mExit;
	document.getElementById("divide").onmouseout=mExit;
	document.getElementById("clAl").onmouseout=mExit;
	document.getElementById("c").onmouseout=mExit;
	document.getElementById("dot").onmouseout=mExit;
	
	document.getElementById("zero").onclick=mClick;
	document.getElementById("one").onclick=mClick;
	document.getElementById("two").onclick=mClick;
	document.getElementById("three").onclick=mClick;
	document.getElementById("four").onclick=mClick;
	document.getElementById("five").onclick=mClick;
	document.getElementById("six").onclick=mClick;
	document.getElementById("seven").onclick=mClick;
	document.getElementById("eight").onclick=mClick;
	document.getElementById("nine").onclick=mClick;
	document.getElementById("eq").onclick=mClick;
	document.getElementById("add").onclick=mClick;
	document.getElementById("minus").onclick=mClick;
	document.getElementById("mul").onclick=mClick;
	document.getElementById("divide").onclick=mClick;
	document.getElementById("clAl").onclick=mClick;
	document.getElementById("c").onclick=mClick;
	document.getElementById("dot").onclick=mClick;
	
	
}

function mOver(){
	document.getElementById(this.id).style.background="yellow";
	document.getElementById(this.id).style.color="black";
}

function mExit(){
	document.getElementById(this.id).style.background="black";
	document.getElementById(this.id).style.color="white";
}

function mClick(){
	var x=document.getElementById(this.id).innerHTML;
	if(x!=='='&&x!=='+'&&x!=='-'&&x!=='x'&&x!=='/'&&x!=='CE'&&x!=='C')
		{
			if(firstInputFlag)
				{
					exp="0";
					output="0";
					firstInputFlag=false;
				}
			if(exp==="0"&&x!==".")
				{
					exp=x;
					output=x;
				}
			else if(output==="0"&&x!==".")
				{
					exp+=x;
					output=x;
				}
			else
				{
					exp+=x;
					output+=x;
				}
			document.getElementById("display").innerHTML=output;
		}
	else if(x==="C")
	{
		clear();
	}
	else if(x==="CE")
		{
			clearAll();
			firstInputFlag=true;
		}
	else
		{
			evaluateExpression();
			document.getElementById("display").innerHTML=exp;
			if(x!=='=')
				exp+=x;
			else
				firstInputFlag=true;
			output="0";
		}
	
}

function evaluateExpression(){
	if(exp.indexOf('+')>0)
		{
			var operands=exp.split("+");
				if(operands.length>1)
					{
						var a=(parseFloat(operands[0])+parseFloat(operands[1]));
						exp=""+a;
					}
			
		}
	if(exp.indexOf('/')>0)
	{
		var operands=exp.split("/");
			if(operands.length>1)
				{
					if(parseFloat(operands[1])!==0)
						{
							var a=(parseFloat(operands[0])/parseFloat(operands[1]));
							exp=""+a;
						}
					else
						{
							clearAll();
							exp="ERROR!! Divide by Zero. Press CE.";
						}
				}
		
	}
	if(exp.indexOf('-')>0)
	{
		var operands=exp.split("-");
			if(operands.length>1)
				{
					var a=(parseFloat(operands[0])-parseFloat(operands[1]));
					exp=""+a;
				}
		
	}
	if(exp.indexOf('x')>0)
	{
		var operands=exp.split("x");
			if(operands.length>1)
				{
					var a=(parseFloat(operands[0])*parseFloat(operands[1]));//123;
					exp=""+a;
				}
		
	}
}

function clear(){
	output=output.length;
	exp=exp.substring(0,exp.length-output);
	output="0";
	document.getElementById("display").innerHTML=output;
}

function clearAll(){
	output="0";
	exp="";
	firstInputFlag=true;
	document.getElementById("display").innerHTML=output;
	}
