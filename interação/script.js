
function calcular(){
    let altura = parseFloat(document.getElementById('altura').value)
    let peso = parseFloat(document.getElementById('peso').value)
    let res = document.getElementById('resultado')
    let imc = peso / (altura * altura)
    res.innerHTML = `<p>Sua altura é ${altura}m e seu peso é ${peso}kg.</p>`
    res.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)}</p>`

    if(imc<18.5){
        
        res.innerHTML += 'Está abaixo do peso.'
    } else if (imc>=18.5 && imc<25){
        res.innerHTML += 'Está no peso ideal.'
    } else if(imc>=25 && imc<30){
        res.innerHTML += 'Está um pouco acima do peso. Sobrepeso.'
    } else if(imc>=30 && imc<35){
        res.innerHTML += 'Está com obesidade grau I.'
    } else if(imc>=35 && imc<40){
        res.innerHTML += 'Está com obedisade grau II.'
    } else if(imc>=40){
        res.innerHTML += 'Está com obesidade grau III.'
    }
    
}