document.querySelector("#sort-asc").onclick = mySort;
document.querySelector("#sort-desc").onclick = mySortt;

function mySort(){
    let catalog = document.querySelector('#Catalog');
    for (let i = 0; i < catalog.children.length; i++){
        for(let j = i; j < catalog.children.length; j++){
            if (+catalog.children[i].getAttribute('data-price') > +catalog.children[j].getAttribute('data-price')){
                replacedNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
                insertAfter(replacedNode, catalog.children[i]);
            }
        }
    }
}

function mySortt(){
    let catalog = document.querySelector('#Catalog');
    for (let i = 0; i < catalog.children.length; i++){
        for(let j = i; j < catalog.children.length; j++){
            if (+catalog.children[i].getAttribute('data-price') < +catalog.children[j].getAttribute('data-price')){
                replacedNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
                insertAfter(replacedNode, catalog.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}


// function mySort(){
//     var numbers = document.querySelector('#Catalog').children;
//         for (var i=0, child; child=numbers[i]; i++) {
//         }
//     numbers.getAttribute("data-price").sort(function(a, b){
//         return a - b;
//     })
// }
// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });