function triangle(a,b,c){
    if(a + b <= c || a + c <= b || b + c <= a){
        console.log("not triangle");
    }else{
        console.log("triangle");
    }
}
triangle(7,10,5);

