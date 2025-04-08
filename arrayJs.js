let marks_s = [97,58,41,52,63];
console.log(marks_s); 

let heroes = ["Thor","Dr.Strange","Loki","Dr.Doom"]
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}

// for-of
for(let hero of heroes){
    console.log(hero);
}

let cities = ["Noida","Greater Noida","Faridabad","Madhubani","Delhi"];
for(let city of cities){
    console.log(city.toUpperCase());
    console.log(city.toLowerCase());
}

// Practice Question
let marks = [85,97,44,37,76,60];
let sum = 0;
for(let val of marks){
    sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of student is : ${avg}` );


// Practice Question
let items = [250,645,300,900,50];
console.log(items);

for (let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
}
console.log(items);

// Array Methods
let foodItems = ["Litiii Chokkha","Dal baatii","Pijjooo","Buirrgirrr"];
console.log(foodItems);
foodItems.push("Alooo Tikkiiii");
console.log(foodItems);
foodItems.pop("Alooo Tikkiiii");
console.log(foodItems);
console.log(foodItems.toString());

let jfoodItems = ["Pijjooo","Buirrgirrr"];
let ghfoodItems = ["Rajma Chawal","Chhole chawal ","Kadhi Chawal","Daal Bhaat Bhujiya"];
console.log(jfoodItems);
console.log(ghfoodItems);
// concatenation --> a+b  (Jo pehle likhna ho use pehle likhna hai)
let khanaPeena = jfoodItems.concat(ghfoodItems);
console.log(khanaPeena);
// shift & unshift
let superHeroes = ["loki", "Iron Man","Dr. Strange"];
let oneMore = superHeroes.unshift("Thor");
let delone = superHeroes.shift();
// slice
let avengers = ["Iron Man","Captain America","Hulk","Thor","Natsha","Hawkye",];
console.log(avengers);
console.log(avengers.slice(0,2)); // last item non incl
// splice
let splVal = [1,2,3,4,5,6,7];
splVal.splice(2,1,44);


// Practice question
let companies = ['Bloomberg',"Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon");





