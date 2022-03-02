class Ninja{
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre = nombre
        this.salud = salud
        this.velocidad = velocidad
        this.fuerza = fuerza
    }
    sayName(){
        console.log(`Me llamo ${this.nombre}`);
    }
    showStats(){
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`)
    }
    drinkSake(){
        this.salud += 10;
        console.log(this.salud)
    }
} 
class Sensei extends Ninja{
    constructor(nombre, salud, velocidad, fuerza,){
        super(nombre, salud, velocidad, fuerza)
        this.sabiduria = 10
    }
    speakWisdom(){
        super.drinkSake()
        console.log(`Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.`);
    }
}
const senseiNinja = new Sensei("Sensei",200, 10, 10,)
console.log(senseiNinja);
senseiNinja.speakWisdom()
senseiNinja.showStats();