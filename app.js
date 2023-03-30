var x = document.getElementById("x");
var y = document.getElementById("y");
var result = document.getElementById("result");
var cl = document.getElementById("myForm");

cl.addEventListener("submit", function(event){
    if(!x.value || !y.value){
        alert("Please enter full fields to completing.");
    }else{
        let xval = parseFloat(x.value);
        let yval = parseFloat(y.value); 
        
        let ret = xval/yval * 100;
        
        result.innerText = "Result: "+ret+"%.";
        event.preventDefault();
    }
    
    
    
    
});