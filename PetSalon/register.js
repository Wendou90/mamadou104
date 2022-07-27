let petSalon ={
    name:"The nice pets",
    address:"514 lib ave",
    pets:[
        {
            name:"bobby",
            age:2,
            breed: "love",
            gender: "male",
            service:"Grooming",
            ownerName:"momo",
            contactPhone:"77777887",
        },
        {
            name:"job",
            age:3,
            breed:"shiwawa",
            gender:"female",
            service:"vaccination",
            ownerName:"jaques",
            contactPhone:"666778856",
        },
        {
            name:"vandamme",
            age:4,
            breed:"german",
            gender:"male",
            service:"shot",
            ownerName:"Bret",
            contactPhone:"667778854",

        },
    ]

}
function Pets(name,age,breed,gender,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.breed=breed;
    this.gender=gender;
    this.service=service;
    this.owner=ownerName;
    this.contact=contactPhone;
}
let baabi = new Pets("baabi",10,"french","male","grooming","charles",776655777);
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