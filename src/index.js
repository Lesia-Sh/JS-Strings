let country = "Guinea Bissau";
country = country.replace(" ", "-");
console.log(country);

let city = " Sydney   ";
console.log(city);
console.log(city.trim());

city.toString();

let attraction = "Opera House";
console.log("From", attraction);
attraction = attraction.toLowerCase();
console.log("To", attraction);

let place = "School";
console.log("From", place);
place = place.toUpperCase();
console.log("To", place);

let city2 = "Denver";
console.log(`I went to visit the Opera House in ${city2}, right next to my school.
      Now, I'm getting ready for my trip to Guinea Bissau!`);
