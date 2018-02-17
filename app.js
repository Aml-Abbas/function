
    var y;
    var x= document.getElementById("a");

switch (x) {
    case "Blue": 
        y = "You are blue";
    break;
    case "Red":
     y = "You are red";
    break;
    case  "Black":
       y = "You are black";
    break;
    case "White":    
      y = "You are white";
 break;
 default:
 y = "Plz, write a color";

}
function check (){
    document.getElementById("demo") .innerHTML= y;
}