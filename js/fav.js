function openNav() {

  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

 function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginLeft= "0";
 }

 //fav
 var button1=document.getElementById("btn");
var button2=document.getElementById("bt");


var arr = new Array () ;

function adddata ()

{
   
   
    getData ();
    arr.push
   
    ({   
        ProductDetails:"Productname",
       Price:"LE***",
        Priceaftheroffer:"LE***",
        

    

    })
    localStorage.setItem("local Data",JSON.stringify(arr) );
}



function getData () 
{
    var str = localStorage.getItem("localData");
    
    
    if(str!= null) 
    {
        arr = JSON.parse(str);
       
         
        
    }

}
button2.addEventListener('click', adddata);



function delet(){
  var tBody = document.getElementById("fav-content");
  document.getElementById("fav-content").deleteRow(2);
 
}
button1.addEventListener('click', delet);
