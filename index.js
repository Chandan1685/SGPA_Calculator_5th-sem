$(".gradebox").one("click",function(evt){
   console.log(evt.target);
   let cbtn=evt.target;
   let subName=cbtn.classList[0];
   let score= creditsForSubject(subName);
   console.log(score);
   let gradeObtained=cbtn.innerHTML;
   console.log(gradeObtained);
   let credits= gradesToCredits(gradeObtained);
   credits=credits*score;
   creditsObtained+=credits; 
   cbtn.classList.add("clicked");
   cbtn.classList.remove("subname");
   console.log(evt.currentTarget); 
   let index= indexForSubject(subName)+"";
   let k="."+index;
   $(k).hide();
   evt.currentTarget.classList.remove(index);

});
$(".button-32").on("click",calCGPA);
function gradesToCredits(grade){
    switch(grade){
        case("A+"):{
            return 10;
        }
        case("A"):{
            return 9;
        }
        case("B+"):{
            return 8;
        }
        case("B"):{
            return 7;
        }
        case("C+"):{
            return 6;
        }
        case("C"):{
            return 5;
        }case("D+"):{
            return 4;
        }
        case("D"):{
            return 3;
        }
        case("E+"):{
            return 2;
        }case("E"):{
            return 1;
        }
    }
}
function creditsForSubject(subName){
    switch(subName){
        case("DS") :{
            return 5;
        }
        case("DBMS") :{
            return 4;
        }
        case("OOPS"):{
            return 3;
        }
        case("ST"): {
            return 2;
        }
        case("DM"):{
            return 3;
        }case("GP"):{
            return 1;
        }case ("APTI"):{
            return 2;
        }case ("ESHIP"):{
            return 1;
        }
    }
}
function indexForSubject(subName){
    switch(subName){
        case("DS") :{
            return 0;
        }
        case("DBMS") :{
            return 1;
        }
        case("OOPS"):{
            return 2;
        }
        case("ST"): {
            return 3;
        }
        case("DM"):{
            return 4;
        }case("GP"):{
            return 5;
        }case ("APTI"):{
            return 6;
        }case ("ESHIP"):{
            return 7;
        }
    }
}
let creditsObtained=0;
let credits=[5,4,3,2,3,1,2,1];
let cgpa=[];
let flag=false
let grades=$(".gradebox");
console.log(grades);
function calCGPA(){
    let cgpa= (creditsObtained+9)/22;
    $("h2").text("Your SGPA for this semester is "+cgpa);
}