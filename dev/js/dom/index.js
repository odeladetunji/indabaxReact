var count = 0;
var count1 = 0;

function animateBackGroundImage(keyframe){
    // document.getElementsByClassName('carousel')[0].style.animate(keyframe, 1000);
}

// export default () => {
//
// }
setInterval(function(){
  console.log('vina');
  if(count > 7){
    count = count + 1;
    count1 = count1 + 100;
  }

  if (count < 7) {
     count = count + 1;
     count1 = count1 - 100;
  }

  if (count == 16) {
     count = 0;
  }

  const keyframe = [
      {
        marginLeft: count1
      }
  ]

  animateBackGroundImage(keyframe, 1000);

}, 1100);
