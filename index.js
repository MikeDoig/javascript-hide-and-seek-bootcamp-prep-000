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
    let child = rank[i].child;

    for (let x = 0; x < child.length; x++) {
      child[x].innerHTML = parseInt(child[x].innerHTML) + n;
    }
  }
}
 
 
 
 
 
 
 
 
 
 function deepestChild() {
   
 }