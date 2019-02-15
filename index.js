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
// function increaseRankBy(n) {
//   const rank = document.querySelectorAll('.rank');

//   for (let i=0; i < rank.length; i++) {
//     let children = rank[i].children;

//     for (let x = 0; x < children.length; x++) {
//       children[x].innerHTML = parseInt(children[x].innerHTML) + n;
//     }
//   }
// }
 
function increaseRankBy(n) {
  const rank = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rank.length; i < l; i++) {
    let child = rank[i].children;

    for (let j = 0, k = child.length; j < k; j++) {
      child[j].innerHTML = parseInt(child[j].innerHTML) + n;
    }
  }
}
 
 
 
 
 
 
 
 
 function deepestChild() {
   
 }