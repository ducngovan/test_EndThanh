let arr1 = [10, 5, 2, 8, -1, 6, 8];
let check = new findMaxScore();
console.log(check.getMax(arr1));
function findMaxScore(arr) {
    this.arr = arr;
    this.getMax = function (arr) {
        let max = arr[0];
        for(let i = 1; i< arr.length; i++){
            if(max < arr[i]){
                max = arr[i];
            }
        } return max;
    }
}


