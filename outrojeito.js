// COM INSPIRAÇÃO DO WILL
// validos GERALMENTE 33 44 55 66
function calculadorCPF(cpf){
    let total = 0;
    { 

    for (i=0;i<9;i++){ 
    total = total + ((10-i)*cpf[i]);
    }
}


let resto = total % 11;

primeiroDigito = 11 - resto;

total=0;
for (i=0;i<10;i++){ 
total = total + ((11-i)*cpf[i]);
}

resto = total % 11;

segundoDigito = 11 - resto;


let valido = (String(cpf[9]) + String(cpf[10])) == String(primeiroDigito) + String(segundoDigito);

return valido;
}

// tentando fazer um calculo de validação de cpf
$('#btnresultado').click(
    function(){
     
        let cpfDigitado = document.getElementById('btnCpf').value;
        if 
            (calculadorCPF(cpfDigitado)) { 
        console.log("CPF valido");
        alert("CPF Válido")
    }

        else { 
        console.log("CPF inválido")
        alert("CPF Inválido")
        }
        
    }
)