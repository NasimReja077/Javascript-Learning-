function DigitalTime(){
     let date = new Date();
     let H = date.getHours();
     let M = date.getMinutes();
     let S = date.getSeconds();
     let Section = "AM";

     // if(H>12){
     //      H = H - 12;
     // }

     // if(H>=12){
     //      Section = "PM"
     // }

     if(H >= 12){
          Section = "PM";
          if (H > 12){
               H -= 12;
          }
     }
     H = H < 10? "0" + H : H;
     M = M < 10? "0" + M : M;
     S = S < 10? "0" + S : S;

     let Time = H + ":" + M + ":" + S + " " + Section;
     document.getElementsByTagName('h2')[0].innerText = Time;
     setTimeout(DigitalTime,1000);
     
}