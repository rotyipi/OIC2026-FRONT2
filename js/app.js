const text='{items:[{"name":"cat","dog","age":3},{"name":"dog","age":4}]}';

let res=null;
try{
    res=JSON.parse(text);
}catch(e){
}

console.log(res);