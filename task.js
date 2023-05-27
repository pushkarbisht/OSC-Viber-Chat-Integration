

var i=0;
var intervalID =setInterval(()=>{
   
    console.log(i=i+1);
    if(i == 25){
        clearInterval(intervalID);
    }
},1000)


