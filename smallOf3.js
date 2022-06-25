// function smallestOf3(n1,n2,n3){
//     let c = 0;
//     while(n1 && n2 && n3){
//         n1--;
//         n2--;
//         n3--;
//         c++;
//     }
//     return c;
// }
//console.log(smallest(12,32,21));

function smallest(x,y,z){
    return Math.min(x,Math.min(y,z));
}
console.log(smallest(12,32,21));