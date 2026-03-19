function convertToFarenheit (celsius) {
 let ratio = 9/5;
 let celsiusRatioProduct = celsius * ratio;
 let farenheit = celsiusRatioProduct + 32;
 return celsius + " C° is equal to " + 
 farenheit + " F° Farenheit";
}

console.log(convertToFarenheit(40));