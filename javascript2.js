var arr = [12,6,3,7,21,5,7];
document.getElementById('array').innerHTML = 'Các phần tử của mảng '+arr;
function tryRemoveFromArray(){
    let element = Number(document.getElementById('inElement').value);
    let index ;
    for(let i=0 ; i<arr.length; i++){
        if(element == arr[i]){
            arr.splice(i,1);
        }
    }
    document.getElementById('result').innerHTML = 'Các phần tử của mảng mới là  '+arr;
}