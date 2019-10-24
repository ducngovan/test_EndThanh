function printFibonacci() {
    let n=parseInt(prompt("Nhập vào số n"));
    let num1=1;
    let num2=0;
    let num3;
    for (let i=0;i<n;i++){
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        if(num3<n){
            document.write(" " + num3);
        }
    }
}
printFibonacci();
