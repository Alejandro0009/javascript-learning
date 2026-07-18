/*
Realiza un programa que solicite al usuario una temperatura en grados Celsius.

El programa debe convertir esa temperatura a Fahrenheit.

Fórmula:

Fahrenheit = (Celsius * 9 / 5) + 32

Ejemplo:

Entrada:
Celsius: 25

Salida:
25°C equivalen a 77°F


Practica:
- Variables
- Prompt()
- Number()
- Operadores matemáticos
- Console.log()
- Template literals
*/
alert("El siguiente programa ayuda a converti una temperatura en grados Celcius a grados Fahrenheit")
let temp = Number(prompt("Ingresa la temperatura que deseas convertir a grados Fahrenheit "));
let conversion = (((temp * 9) / 5) + 32);
alert(`El resultado es: ${conversion} ` );