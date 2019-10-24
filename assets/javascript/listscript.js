

// assigning respective category divisions their colors 
var txt = document.getElementsByClassName("category_div");
console.log("JAVASCRIPT HAS BEEN LOADED FOR THIS PROJECT");
var cat;
for (cat = 0; cat < txt.length; cat++) {

    var ar = txt[cat].textContent;
    var a = ar.trim();
    
    switch (a) {

        case "personal":
            
            txt[cat].style.backgroundColor = "darkmagenta";
            break;
        case "work":
            
            txt[cat].style.backgroundColor = "lightseagreen";
            break;
        case "cleaning":
            
            txt[cat].style.backgroundColor = "#5435f3";
            break;
        case "school":
            
            txt[cat].style.backgroundColor = "#00008b";
            break;
        case "other":
           
            txt[cat].style.backgroundColor = "magenta";
            break;
        default:
            txt[cat].style.backgroundColor = "white";
            break;

    }
    
};


//checking which checkbox is checked and deleting that task when 'delete task button is pressed'

function delfun() {
var deltemp = document.getElementsByClassName("task_done");

var i;
 
    console.log(deltemp.length);

for (i = 0; i < (deltemp.length); i++) {
    if (deltemp[i].checked == true) {
        
        window.location.href=("/delete-task/?id=" + deltemp[i].id);
    }
    } 


}