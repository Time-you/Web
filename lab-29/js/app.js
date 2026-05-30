
document.querySelector('#calcBtn').addEventListener('click',()=>{
 let a=parseFloat(document.querySelector('#a').value);
 let b=parseFloat(document.querySelector('#b').value);
 if(isNaN(a)||isNaN(b)) return alert('Введіть числа');
 let op=document.querySelector('#op').value,res;
 if(op==='+')res=a+b; if(op==='-')res=a-b; if(op==='*')res=a*b; if(op==='/')res=a/b;
 document.querySelector('#calcRes').innerHTML=res;
});

document.querySelector('#eqBtn').addEventListener('click',()=>{
 let a=+qa.value,b=+qb.value,c=+qc.value;
 let d=b*b-4*a*c;
 document.querySelector('#eqRes').innerHTML=d<0?'Коренів немає':
 `x1=${(-b+Math.sqrt(d))/(2*a)} x2=${(-b-Math.sqrt(d))/(2*a)}`;
});

document.querySelector('#txtBtn').addEventListener('click',()=>{
 let words=txt.value.trim()?txt.value.trim().split(/\s+/).length:0;
 txtRes.innerHTML=`Слів: ${words}`;
});
