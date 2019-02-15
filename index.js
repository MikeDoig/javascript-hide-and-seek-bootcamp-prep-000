function getFirstSelector(selector) {
  return document.querySelector(selector);
}
 function nestedTarget() {
   return document.querySelector('#nested .target');
 }
// function increaseRankBy(n) {
//   let rank = document.querySelector('.rank');
//   for (i=0; i<rank.length; i++) {
//     for (let a=0; a<document.querySelector('.rank').length){
//   }
// }
 function increaseRankBy(n) {
  let rank = document.querySelectorAll('.rank');

  for (let i=0; i < rank.length; i++) {
    let children = rank[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
 
 
 
 
 
 
 
 
 
 function deepestChild() {
   
 }