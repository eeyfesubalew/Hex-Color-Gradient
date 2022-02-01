const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
//Method One
// btn.addEventListener("click", function () {
//   console.log("Clicked");
//   let color1 = Math.ceil(Math.random() * 255);
//   let color2 = Math.ceil(Math.random() * 255);
//   let color3 = Math.ceil(Math.random() * 255);
//     container.style.backgroundImage = `linear-gradient(to bottom left, rgba(${color1},${color2},${color3}),rgba(${color3},${color1},${color2}))`;
// });

//Methond Two
const colors = [
  "#15aabf",
  "#38d9a9",
  "#69db7c",
  "#a9e34b",
  "#e67700",
  "#ffa94d",
  "#d9480f",
];
btn.addEventListener("click", function () {
  console.log("Clicked");
  let color1 = Math.ceil(Math.random() * colors.length);
  let color2 = Math.ceil(Math.random() * colors.length);
  console.log(color1, color2);
  container.style.backgroundImage = `linear-gradient(to bottom left, ${colors[color1]}, ${colors[color2]})`;
});
