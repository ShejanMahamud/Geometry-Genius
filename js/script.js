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
    const calcOfParallelogramIs = elementById("parallelogram-b","parallelogram-h");
    document.getElementById("result-three").style.display = "inline-block";
    document.getElementById("result-3").innerText = `${calcOfParallelogramIs}`;
});

document.getElementById("btn-rhombus").addEventListener('click',function(){
    const calcOfRhombusIs = elementById("rhombus-d1","rhombus-d2");
    document.getElementById("result-four").style.display = "inline-block";
    document.getElementById("result-4").innerText = `${calcOfRhombusIs}`;
});

document.getElementById("btn-pentagon").addEventListener('click',function(){
    const calcOfPentagonIs = elementById("pentagon-p","pentagon-b");
    document.getElementById("result-five").style.display = "inline-block";
    document.getElementById("result-5").innerText = `${calcOfPentagonIs}`;
});

document.getElementById("btn-ellipse").addEventListener('click',function(){
    const calcOfEllipseIs = Math.round(Math.PI * elementById("ellipse-a","ellipse-b"));
    document.getElementById("result-six").style.display = "inline-block";
    document.getElementById("result-6").innerText = `${calcOfEllipseIs}`;
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