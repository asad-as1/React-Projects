let generate = (n) => {
    let ran = 0;
    for(let i=0; i<n; i++) {
        ran =  (ran *10) + (Math.floor(Math.random()*9)+1);
    }
    return ran;
}

let sum = (ran) => {
    let num = 0;
    while (ran > 0) {
        num += (ran % 10);
        ran /= 10;
    }
    return (Math.floor(num) - 1);
}


export { generate, sum };