var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
// it describe the clock is start or stop
var timer = false;

function start() {
    timer = true;
    stopwatch();

}
function stop() {
 timer=false;
}
function reset() {
    timer=false;
    document.getElementById("count").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
 hr=0;
 sec=0;
 min=0;
 count=0;
}
function stopwatch(){
    if (timer == true) {
     count=count+1;
     if(count==100){
        sec=sec+1;
        count=0;
     }
     if(sec==60){
        min=min+1;
        sec=0;
     }
     if(min==60){
        hr=hr+1;
        min=0;
        sec=0;
     }
     var hrstr=hr;
     var minstr=min;
     var secstr=sec;
     var countstr=count;

          if(hr<10){
            hrstr="0"+hrstr;
          }
          if(min<10){
            minstr="0"+minstr;
          }
          if(sec<10){
            secstr="0"+secstr;
          }
          if(count<10){
            countstr="0"+countstr;
          }



   document.getElementById("count").innerHTML=countstr;
   document.getElementById("sec").innerHTML=secstr;
   document.getElementById("min").innerHTML=minstr;
   document.getElementById("hr").innerHTML=hrstr;

        setTimeout("stopwatch()",10)
    }
}