/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

type="text/javascript"
  window.onload = function(){
    setTimeout("switch_Image2()", 600);
  }
  var current = -1;
  var num_image = 5;
  function switch_Image2(){
      current++;
      document.all.mau.style.color=tenmau[current];
     if(current < num_image){
       setTimeout("switch_Image2()", 600);
     }else if(current == num_image){
       current = 0;
       setTimeout("switch_Image2()", 600);
     }
 }
  tenmau=["blue","green","yellow","pink","orange","purple "];
