const imageDiv = document.getElementById('container2');
const lftBtn = document.getElementById('lft-btn');
const rgtBtn = document.getElementById('rgt-btn');
const imageImg = document.getElementById('imageImg');
var counter = 0;

var pictures = [
  "carImage-1",
  "carImage-2",
  "carImage-3",
  "carImage-4",
  "carImage-5",
  "carImage-6"
];

lftBtn.addEventListener('click', () => {
  if (counter < 5){
    counter += 1;
    imageImg.style.backgroundImage = `url('./img-background/${pictures[counter]}.jpg')`;
  } else {
    counter = 0;
    imageImg.style.backgroundImage = `url('./img-background/${pictures[counter]}.jpg')`;
  }
});


rgtBtn.addEventListener('click', () => {
  if (counter > 0){
    counter -= 1;
    imageImg.style.backgroundImage = `url('./img-background/${pictures[counter]}.jpg')`;
  } else {
    counter = 5;
    imageImg.style.backgroundImage = `url('./img-background/${pictures[counter]}.jpg')`;
  }
});
