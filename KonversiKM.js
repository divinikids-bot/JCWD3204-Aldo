let centimeters = 15000;
let kilometers = 0; 

for (let i = 0; i < centimeters; i += 100000) {
  kilometers++;
}

console.log(centimeters + " cm is equal to " + kilometers + " km");