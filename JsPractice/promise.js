function disp(result){
    console.log(result)
}

const promi=new Promise(function(promiseRes,promiseReject){
let x=0;
if(x<0){
    promiseRes('OK');
}
else{
    promiseReject('Bad')
}
});

promi.then(
    function(value){disp(value)},
    function(error){disp(error)}
);

//Advance 

