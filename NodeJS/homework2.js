var arr1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var arr2 =[];
console.log(arr1); 

for(let i = 0 ; i < arr1.length;i++){
    if (i%2===0 ){
        arr2[i+1]=arr1[i]
    }else{
        arr2[i-1]=arr1[i]
    }
    

}
console.log(arr2);