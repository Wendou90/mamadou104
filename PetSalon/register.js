let petSalon ={
    name:"The nice pets",
    address:"514 lib ave",
    pets:[]
}
for(let i=0;i<petSalon.pets.length;i++){
    console.log(petSalon.pets[i].name)
}
function displayInfo(){
    document.getElementById("info").innerHTML=`Welcome to the ${petSalon.name}family.`;
}
     
function displayNumberOfPets(){
    document.getElementById("number").innerHTML=`There are ${petSalon.pets.length} pets`;
}
displayInfo();
displayNumberOfPets();