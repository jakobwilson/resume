let firstName = "Jakob";
let lastName = "Wilson";
let fullName = firstName +" "+ lastName;
let fullNameCaps = fullName.toUpperCase(); 


displayDescription(fullNameCaps, "Future Software Engineer", "I like sports");


function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
}


console.log("My Interests: ");

displayInterests("Kentucky Athletics"); 
displayInterests("The Gym"); 
displayInterests("Video Games"); 

function displayInterests(myInterest) {
    console.log("*  " + myInterest); 
}

console.log("My Previous Experiences: ");

displayPosition("Repair Technician", "Innerlast", "Automotive interior repair work");

displayPosition("Outside Services", "Greystone Country Club", "Cleaned equipment, maintain the golf shop, and helped members");

displayPosition("Construction Worker", "BuildTech LLC", "Built Houses, and restoration");


function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("*  " + companyName + ", " + jobTitle + " - " + jobDescription + ". ");
};

console.log("My Skills: ");

displaySkill("Photoshop", true);
displaySkill("Call of Duty Phenom", true); 
displaySkill("Basketball", true);
displaySkill("German", true); 
displaySkill("Photography/Videograohy", true); 


function displaySkill(mySkill, bamBam) {
    if(bamBam == true) { 
        console.log("*  BAM: " + mySkill);
    } else if(bamBam == false) {
        console.log("*  " + mySkill); 
    };
}