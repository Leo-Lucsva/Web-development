function fibonacci (){
    var n = 1;
    var anterior = 0;
    var temp = 0;
    for (let s = 1; s <= 5; s++) {
        temp = n;
        console.log(n);
            n = n + anterior;
            anterior = temp;
    }
}
fibonacci();
