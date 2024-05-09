let count = 0;


const plus3  = () => {
  count++;
  document.getElementById("result").innerHTML = count;
};

const  minus3 = () => {
  count--;
  document.getElementById("result").innerHTML = count;
};



const startSpin = () => {
  const icon = document.querySelector("#btn3 i");
  icon.classList.add("spin-animation");
  setTimeout(() => {
    icon.classList.remove("spin-animation");
  }, 400);
};

const clean = () => {
  count = 0;
  document.getElementById("result").innerHTML = count;
};


// Анимации кнопок (ислам бери не стесняйся)

// const addFireAnimation = () => {
//   document.getElementById("btn2").classList.add("fire");
//   setTimeout(() => {
//     document.getElementById("btn2").classList.remove("fire");
//   }, 500);
// };

// const addColdAnimation = () => {
//   document.getElementById("btn1").classList.add("cold");
//   setTimeout(() => {
//     document.getElementById("btn1").classList.remove("cold");
//   }, 500);
// };

// const startSpinAnimation = () => {
//   const icon = document.querySelector("#btn3 i");
//   icon.classList.add("spin-animation");
//   setTimeout(() => {
//     icon.classList.remove("spin-animation");
//   }, 400);
// };
