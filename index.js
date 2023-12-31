
const nome= prompt("Qual o seu Nome: ")
const idade= prompt("Qual a sua Idade: ")
const tipo=prompt("Qual tipo de Heroi você escolhe: 'mago, monge, guerreiro, ninja'::  ")

class Heroi {

    atacar() {
        let ataque;
        switch (tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = '';
        }
        console.log(`O ${tipo} atacou usando ${ataque}`);
    }
}


let heroi = new Heroi(nome, idade, tipo);
heroi.atacar();