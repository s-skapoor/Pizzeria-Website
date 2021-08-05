var menu = ["Chicken Tandoori Pizza ", "Deluxe Veggie Pizza ", "Paneer Tikka Pizza ", "Veg Extravaganza Pizza ", "Veg Margherita Pizza ", "Veg Supreme Pizza "];
function viewmenu(){
    document.getElementById("p").innerHTML = menu;
}
var suggest = document.getElementById("input1").value;
function pizza(){
    document.getElementById("fg").innerHTML = menu;
}
function suggestion(){
    menu.unshift(document.getElementById("input1").value);
    document.getElementById("fg").innerHTML = menu;
    console.log(menu);
}