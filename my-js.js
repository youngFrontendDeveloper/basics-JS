// "use strict";
var centigradeTemperature = prompt("Введите температуру воздуха по Цельсию", 20);
var temperatureInFahrenheit = (9 / 5) * centigradeTemperature + 32;
alert("Температура по Фаренгейту равна " + temperatureInFahrenheit + " фаренгейт");

var name, admin;
name = "Василий";
admin = name;
alert(admin);

// JS-выражение 1000 + "108" будет равно строке "1000108", т.к. при конкатенации числа и строки JS приводит число к строке и затем склеивает их.

alert(1000 + "108");