let btn=document.getElementById("btn");
let st=document.getElementById("st");
let bf=document.getElementById("bf");
let ctn=document.getElementById("ctn");
let img=document.getElementById("img");
let n,i;
let arr=[];
function startit(){
    n=prompt("How many friends you have");
    for(i=0;i<n;i++){
        arr[i]=prompt("Write their names:")
    }
    for(i=0;i<arr.length;i++){
        var h3=document.createElement("h3");
        h3.innerHTML=arr[i];
        ctn.appendChild(h3);
        h3.style.color="white";
        h3.style.textAlign="center";
    }
    st.style.visibility="hidden";
    btn.style.visibility="visible";
}
function show(){
    bf.innerHTML="Your Best Friend Is:" +arr[Math.floor(Math.random()*arr.length)];
    bf.style.fontSize="40px";
    bf.style.color="white";
    btn.style.visibility="hidden";
    img.style.visibility="visible";
}