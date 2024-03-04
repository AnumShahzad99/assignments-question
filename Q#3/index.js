var personName = "Anum Jahan";
//lower case
console.log("Lowercase:", personName.toLowerCase());
//upper case
console.log("Uppercase:", personName.toUpperCase());
// Titlecase
console.log("Titlecase:", personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
