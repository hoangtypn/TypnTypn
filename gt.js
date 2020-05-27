 type="text/javascript"
    function shuffle(a) {
                var i, j, temp;
                for (i = 0; i <a.length; i++) {
                    j = Math.floor(Math.random() * 6);
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
  var current = -1;
  var num_image = 5;
  var n1=100000;
      var s=0;
  function switch_Image(){
         shuffle(tenanh);
      current++;
      document.images['anhnen1'].src ='image/mtt' + tenanh[current] + '.jpg';
     if(current <= num_image){
       setTimeout("switch_Image()", 1500);
       s=s+(tenanh[current].charCodeAt(0)-48)*n1;
       n1=n1/10;
     }else if(current>num_image){
   document.images['anhnen1'].src ='image/photo-1496715976403-7e36dc43f17b.jpg';
       clearTimeout("switch_Image()", 1500);
     }
   
 }
 function check(){
     
      n = document.getElementById("inputN").value;
      if(s==n)
      {
          window.alert("you win");
   
      }
      else {
          window.alert("you lose");
          window.alert(s);
      }

 }
     tenanh=["1","2","3","4","5","6"];
