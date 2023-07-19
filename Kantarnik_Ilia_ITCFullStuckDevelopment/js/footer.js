const codingLanguages = ["HTML", "CSS", "JavaScript"];

if (codingLanguages.length === 1) {
  let out_arr = document.getElementById('out_arr');
  out_arr.innerHTML = codingLanguages[0];
  console.log("Choose only one language:", codingLanguages[0]);
} else {
  let out_arr = document.getElementById('out_arr');
  out_arr.innerHTML = codingLanguages.slice(0, codingLanguages.length - 1).join(", ") + " and " + codingLanguages[codingLanguages.length - 1];
  console.log("Choose this languages:", codingLanguages.join(", "));
}