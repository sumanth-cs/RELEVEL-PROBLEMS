function opp(n1,n2){
    if(n1 < 0 && n2 > 0 || n2 < 0 && n1 > 0){
        return true;
    }
    return false;
}
console.log(opp(123,-23));
console.log(opp(-123,-23));
console.log(opp(0,-23));
