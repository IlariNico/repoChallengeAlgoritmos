
var nodeD={name:"nodeD",adyacents:[]}

var nodeB={
    name:"nodeB",
    adyacents:[{node:nodeD,dist:2}]
}

var nodeC={
    name:"nodeC",
    adyacents:[
        {node:nodeB,dist:1},{
        node:nodeD,dist:2}
    ]
}

var nodeA={
    name:"nodeA",
    adyacents:[
        {
        node:nodeB,dist:3},{
        node:nodeC,dist:1},{
        node:nodeD,dist:5}
            ]
    }

var graph=[nodeA,nodeB,nodeC,nodeD]

function containsAll(graph,res){
    
    let containsAll=false;
    
    for(let n of graph){
        if(includeNode(res,n))
            containsAll=true;
        else{
            containsAll=false;
            break;
        }
    }
    
    return containsAll;
}

function includeNode(res,node){
    for(let n of res){
        if (n.node===node)
            return true
    }
    return false;
}

function getMinDistance(auxList,res){
    let min=Infinity;
    for(let n of auxList){
        if(!res.includes(n)){
            if((n.distance<min.distance)||(min===Infinity))
                min=n;
        }
    }
    return min;
}

function dijkstra(graph,nodeOrigin){
    let auxList=[];
    for(let n of graph){
        auxList.push({node:n,distance:Infinity,father:null});
    }
    let n=auxList.find((r)=>r.node===nodeOrigin);
    n.distance=0;
    let sol=[];
    console.log(containsAll(graph,sol))
    while(!containsAll(graph,sol)){
        
        let min=getMinDistance(auxList,sol);
        sol.push(min);
        
        
        for(let v of min.node.adyacents){
            if(!sol.includes(v)){
                let findNode=auxList.find((e)=>e.node===v.node);
                
                let result=(min.distance+v.dist);
                if(result<findNode.distance){
                    findNode.distance=result;
                    findNode.father=min.node.name;
                    
                }
            }
        }
        
        
    }
    return auxList;
}


console.log(dijkstra(graph,nodeA))