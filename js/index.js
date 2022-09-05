//Creé un simulador interactivo, para calificar notas del 1 al 10, siendo 3 las posibilidades, desaprobado con posibilidad de un recuperatorio, aprobado sin necesidad de recuperar pero se debe rendir final, y promocionado sin necesidad de rendir final.

//Utilizo el ciclo do...while.
do{
    //Creé un prompt para ingresar la calificación y así recibir la devolución sobre la misma.
    let cal = prompt("Ingresa calificación numérica a evaluar");

        //Utilizo el condicional if para establecer que esta condición se cumple si el valor ingresado es igual a un número.
        if (Number(cal) == cal){

            //Condiciono que los valores deben ser mayores que 0 e igules o menores que 10.
            if (cal > 0 && cal <=10){

                //Inicio con los if anidados.
                //Si el valor es menor que 4 e igual o mayor que 1, se debe realizar el recuperatorio para rendir final.
                if(cal < 4 && cal >= 1){
                    alert("Desaprobado, debe recuperar el parcial");
                }

                //Si el valor es mayor o igual que 4 pero menor que 7, el parcial está aprobado pero se va directo a final.
                else if(cal >= 4 && cal < 7){
                    alert("Aprobado, debe rendir final");
                }

                //Si el valor es mayor o igual que 7, el alumno se encuentra en estado de promoción y no debe rendir nada más.
                else if(cal >= 7){
                    alert("Promociona, no debe rendir final")
                }
            }

            //Utilizo el else para establecer que en caso de ingresar un número que no se encuentra dentro del rango del 1 al 10, por ejemplo un 0, se debe recursar la materia ya que no es una calificación válida.
            else{
                alert("No califica dentro del rango de 1 a 10. Debe recursar la materia.")
            }
        }

    //Establezco que se debe introducir un valor válido numérico o si se clickea al aceptar sin introducir nada.
    else{        
        if(cal != undefined){
            alert("Introducir un valor válido")
        }
    }
} while (cal != undefined);
//Doy por finalizado el ciclo.