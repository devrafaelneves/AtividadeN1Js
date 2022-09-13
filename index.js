//JEITO MAIS BASICO DE FAZER 
function basicoCPF(cpf){


//segundoPasso
let n1 = parseInt(cpf[0])*10;
let n2 = parseInt(cpf[1])*9;
let n3 = parseInt(cpf[2])*8;
let n4 = parseInt(cpf[3])*7;
let n5 = parseInt(cpf[4])*6;
let n6 = parseInt(cpf[5])*5;
let n7 = parseInt(cpf[6])*4;
let n8 = parseInt(cpf[7])*3;
let n9 = parseInt(cpf[8])*2;

//terceiroPasso
let valor = n1+n2+n3+n4+n5+n6+n7+n8+n9

//quartoPasso
resto = valor % 11;

//quintoPasso
primeiroDigito = 11 - resto;

return primeiroDigito;

//USANDO O FOR JÁ
}
function comFor(cpf){ 
    let total = 0;

    for(i=0;i<10;i++){
        total = total + ((11-i)*cpf[i]);
    }
    resto = total % 11;
    segundoDigito = 11 - resto;

        if (segundoDigito>9){
            segundoDigito = 0;
        }
        
        
    return segundoDigito;
    //subtrair 11 - resto e obter o 
    //primeiro dígito verificador do CPF. Se 11 - resto for maior que 9, usa-se o 0 como dígito verificador.

}

$('#btnresultado').click( 
    function(){
        let primeiroDigito = basicoCPF(document.getElementById('btnCpf').value)
        let segundoDigito = comFor(document.getElementById('btnCpf').value)
        let cpf = document.getElementById('btnCpf').value
        

        if (primeiroDigito==cpf[9] && segundoDigito==cpf[10]){
            console.log("válido")
            alert("válido")
        }
        else{
            console.log("inválido")
            alert("inválido")
        } 
    }    
)










