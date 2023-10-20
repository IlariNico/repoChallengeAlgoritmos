//Descripción: Dado un array de números enteros y un valor objetivo, escribe una función en JavaScript 
//que encuentre un subconjunto de números del array cuya suma sea igual al valor objetivo.

var numbers=[2, 4, 6, 8, 9, 3, 1, 5, 7]

var result=10;

var found=[];

function getSum(sum){
    
    let sumatory=0;
    for(let n of sum){
        sumatory+=n;
    }
    return sumatory;
}

function saveElements(found,numbersCounted){
    for(let n of numbersCounted){
        found.push(n);
    }
}

function getSumBackTrack(numbersCounted,result,index,found){
    if((found.length===0)){
        if(((getSum(numbersCounted))===result)||(index>=numbers.length)){//this backtracking  stops when find a solution, it only need 1 solution
            if(((getSum(numbersCounted))===result)&&(numbersCounted.length>1)) { //must be a sumatory cannot be one number
                saveElements(found,numbersCounted)
            }
        }
        else{
            numbersCounted.push(numbers[index]);
            getSumBackTrack(numbersCounted,result,index+1,found);
            numbersCounted.pop(); 
            getSumBackTrack(numbersCounted,result,index+1,found);
        }
    }
}
getSumBackTrack([],result,0,found)
console.log(found)