
const roles=['Power BI Developer','Data Analyst','Business Intelligence Analyst'];
let i=0,j=0,dir=1;
setInterval(()=>{
document.getElementById('typing').innerText=roles[i].substring(0,j);
j+=dir;
if(j>roles[i].length){dir=-1}
if(j<0){dir=1;i=(i+1)%roles.length;}
},120);
