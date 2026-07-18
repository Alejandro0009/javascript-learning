/*
===========================================
PROGRAMA 05 - NÓMINA CON HORAS EXTRA
===========================================

Desarrolla un programa que solicite al usuario la siguiente información:

- Nombre del empleado.
- Horas trabajadas durante la semana.
- Pago por hora.

El programa deberá calcular el salario semanal considerando las siguientes reglas:

1. Si el empleado trabajó 40 horas o menos, todas las horas se pagan con la tarifa normal.

2. Si el empleado trabajó más de 40 horas:
   - Las primeras 40 horas se pagan normalmente.
   - Las horas excedentes se pagan al doble del valor de la hora.

Al finalizar, muestra la siguiente información:

===========================================
           RECIBO DE NÓMINA
===========================================

Empleado:
Horas trabajadas:
Pago por hora:
Horas normales:
Horas extra:
Salario total:

===========================================

Ejemplo:

Nombre: Alejandro
Horas trabajadas: 45
Pago por hora: 120

Horas normales: 40
Horas extra: 5

Salario total: $6000

===========================================

Conceptos que se practican:

- Variables
- Tipos de datos
- Number()
- Prompt()
- Operadores matemáticos
- Operadores relacionales
- if / else
- Template literals
- Lógica de programación
*/

let name = prompt("Ingresa tu nombre completo: ");
let horast = Number(prompt("Ingresa las horas trabajadas a la semana: "));
let pagoh = 32;

if (horast >1 && horast < 41){
    let suma = horast * pagoh;
    alert("Recibo de Nomina \n");
    alert("Nombre del Colaborador: "+name);
    alert("Horas trabajadas Normales son: "+horast);
    alert("Horas trabajadas Extras 0");
    alert("Suelvo por semana: "+suma);
    alert("Sueldo por mes: "+ (suma*4));


}else if(horast > 40){
    let horasE= horast-40;
    let suma = 40*pagoh;
    let sumaE = ((horasE)*(pagoh*2));
    let sumat=suma+sumaE;
    alert("Recibo de Nomina \n");
    alert("Nombre del Colaborador: "+name);
    alert("Horas trabajadas Normales son: 40");
    alert("Horas trabajadas Extras: " + horasE);
    alert("Pago por semana de horas Normales: "+suma);
    alert("Sueldo por mes Normal:  "+ (suma*4));
    alert("Sueldo adicional por horas trabajas Extras: " + sumaE);
    alert("El sueldo total con sus horas extras por semana es: "+ sumat)
    


}else if (horast<0){
    alert("Horas trabajas son invalida vuelve a intentar.")
}

