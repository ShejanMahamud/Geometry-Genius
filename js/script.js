document.getElementById("btn-triangle").addEventListener('click',function(){
    const triangleB = document.getElementById("triangle-b");
    const triangleBValue = parseFloat(triangleB.value);
    const triangleH = document.getElementById("triangle-h");
    const triangleHValue = parseFloat(triangleH.value);
    
    const calcOfTriangleIs = 0.5 * triangleBValue * triangleHValue;
    document.getElementById("result-1").style.fontWeight = 700;
    document.getElementById("result-1").innerText = `Triangle area = ${calcOfTriangleIs}cm`;


});
