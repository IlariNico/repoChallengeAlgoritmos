//Descripción: Dado un array de números enteros, escribe una función en JavaScript que encuentre la subsecuencia creciente más larga 
//(es decir, una secuencia de números que estén en orden creciente, pero no necesariamente de forma contigua) en el array.

const numbers=[27,2,8,12,14,45,16,21,24,28,29,33,37,39,41,46,47,52,60,48]; //i assumme that a secuence is made up of a series of numbers in which every number is greater than the previous one by one ex 1,2,3

var solution=[];
var actualSolution=[];


function isSolution(solution,actualSolution){
    
    let sol=true;
    
    if((actualSolution.length>solution.length)||(solution.length===0)){//needs to be larger
        let ultimo=null;
        for(let n of actualSolution){//verify that every number in thee array is a secuence
            if(ultimo!=null){
                if((ultimo+1)==n){

                }
                else{
                    sol=false;
                }
            }
        ultimo=n;
        }
    }
    else{
        sol=false;
    }
    if(sol==true)
        console.log(actualSolution)
    return sol;
}

function saveElements(solution,actualSolution){
    for(let n of actualSolution){
        solution.push(n);
    }
}

function clearElements(solution){
    while(!solution.length==0){
        solution.pop();
    }
}

function secuenceBackTracking(index,solution,actualSolution){
    if((index+1)>numbers.length){
        if(isSolution(solution,actualSolution)){
            clearElements(solution);
            saveElements(solution,actualSolution);
        }
    }
    else{
        actualSolution.push(numbers[index]);
        secuenceBackTracking(index+1,solution,actualSolution);
        actualSolution.pop();
        secuenceBackTracking(index+1,solution,actualSolution);
    }
}

secuenceBackTracking(0,solution,actualSolution);



console.log(`The solution is ${solution}`)
