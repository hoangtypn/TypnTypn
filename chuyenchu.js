/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
type="text/javascript"
window.onload = function(){
             setInterval(moveLeft,1000,5);
            }
            function moveLeft(n){
                var s=document.getElementById("inputText").innerHTML;
                var s1=s.substring(s.length-n,s.length)+s.substring(0,s.length-n);
                document.getElementById("inputText").innerHTML=s1;
            }
