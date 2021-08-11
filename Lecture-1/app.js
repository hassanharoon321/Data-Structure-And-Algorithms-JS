//Big O Notation

//String Traversal

function getNumber(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total
}

function getNumber2(n){
    return n * (n+1) / 2
}

console.log(getNumber2(6))

console.log(getNumber(6))