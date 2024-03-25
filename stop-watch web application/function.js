let [sec,min,hr]=[0,0,0];
let time=document.querySelector("#time");
let timer=null;
let button=document.querySelectorAll(".mg")
function stop(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hr++;
        }
    }
    let h=hr<10?"0"+hr:hr;
    let m=min<10?"0"+min:min;
    let s=sec<10?"0"+sec:sec;
    time.innerHTML=h+ ":" + m+ ":" + s;
}
button[1].addEventListener("click",function(){
    watchStart();
})
button[0].addEventListener("click",function(){
    watchSet();
})
button[2].addEventListener("click",function(){
    watchStop();
})
function watchStart(){
    if(timer!=null){
        clearInterval(timer)
    }
  timer=setInterval(stop,1000);
}
function watchStop(){
    clearInterval(timer);

}
function watchSet(){
    clearInterval(timer);
    [sec,min,hr]=[0,0,0];
    time.innerHTML="00:00:00"
}