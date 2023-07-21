console.log(__dirname);
setInterval(()=>{
    console.log('hello world')},
    1000)


setTimeout( function(){
    console.log(1)
}, 0)  //Invoking setTimeout with a callback, and zero as the second argument will schedule the callback to be run asynchronously, after the shortest possible delay - which will be around 10ms 
for (var i=2;i<3;i++){
    console.log(i)
}