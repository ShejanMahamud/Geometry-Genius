document.getElementById("btn-triangle").addEventListener('click',function(){
    const calcOfTriangleIs = 0.5 * elementById("triangle-b","triangle-h")
    document.getElementById("result-one").style.display = "inline-block"
    document.getElementById("result-1").innerText = `${calcOfTriangleIs}`;
});

document.getElementById("btn-rectangle").addEventListener('click',function(){
    const calcOfRectangleIs = elementById("rectangle-w","rectangle-l");
    document.getElementById("result-two").style.display = "inline-block";
    document.getElementById("result-2").innerText = `${calcOfRectangleIs}`;
});

document.getElementById("btn-parallelogram").addEventListener('click',function(){
    const calcOfRectangleIs = elementById("parallelogram-b","parallelogram-h");
    document.getElementById("result-three").style.display = "inline-block";
    document.getElementById("result-3").innerText = `${calcOfRectangleIs}`;
});

function elementById(element1, element2){
    if(isNaN(document.getElementById(element1).value) || isNaN(document.getElementById(element2).value)){
        let error = document.createElement("p");
        error.innerText = "Input should be number!"
        document.getElementById("result-sec").appendChild(error);
        return error;
     }
    const firstValue = parseFloat(document.getElementById(element1).value);
    const scndValue = parseFloat(document.getElementById(element2).value);
    document.getElementById(element1).value = "";
    document.getElementById(element2).value = "";
    return firstValue * scndValue;

}