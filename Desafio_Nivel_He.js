let name = "Link"
let xp = 90011
let nivel = "ferro"


//Se XP for menor do que 1.000 = Ferro
switch (true){
    case xp <= 1000:
         nivel = "ferro"
         console.log("O Herói de nome " + name + " está no nível de " + nivel);
    break;
}

//Se XP for entre 1.001 e 2.000 = Bronze
switch (true){
    case xp >= 1001 && xp <= 2000:
         nivel = "bronze"
         console.log("O Herói de nome " + name + " está no nível de " + nivel);
    break;
}

//Se XP for entre 2.001 e 5.000 = Prata
switch(true){
    case xp >= 2001 && xp <= 5000:
         nivel = "Prata"
         console.log("O Herói de nome " + name + " está no nível de " + nivel);
    break;     
}

//Se XP for entre 5.001 e 7.000 = Ouro
switch(true){
    case xp >= 5001 && xp <= 7000:
         nivel = "Ouro"
         console.log("O Herói de nome " + name + " está no nível de " + nivel);
    break;     
}

//Se XP for entre 7.001 e 8.000 = Platina
switch(true){
    case xp >= 7001 && xp <= 8000:
         nivel = "Platina"
         console.log("O Herói de nome " + name + " está no nível de " + nivel);
    break;     
}

//Se XP for entre 8.001 e 9.000 = Ascendente
switch(true){
    case xp >= 8001 && xp <= 9000:
         nivel = "Ascendente"
         console.log("O Herói de nome " + name + " está no nível de " + nivel);
    break;     
}

//Se XP for entre 9.001 e 10.000= Imortal
switch(true){
    case xp >= 9001 && xp <= 10000:
         nivel = "Imortal"
         console.log("O Herói de nome " + name + " está no nível de " + nivel);
    break;     
}

//Se XP for maior ou igual a 10.001 = Radiante
switch(true){
    case xp >= 10001:
         nivel = "Radiante"
         console.log("O Herói de nome " + name + " está no nível de " + nivel);
    break;     
}
//Aluno: Sergio Rodrigues

