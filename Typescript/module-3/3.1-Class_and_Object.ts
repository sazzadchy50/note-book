//oop - class
{
class Animal {
//   public name: string;  //by default public thake
//   public species: string;
//   public sound: string;

    //parameter properties
    //ex: 👉 Parameter property ব্যবহার করলে constructor-এ parameter লিখেই automatic property তৈরি হয়।
    //ex: 👉 Code ছোট, clean হয় এবং extra this.property = value লিখতে হয় না।
  constructor(public name:string,public species:string,public sound:string){
    // this.name = name;
    // this.species = species; 
    // this.sound = sound;
  }

  makeSound(){
    console.log(`The ${this.name} say ${this.sound}`);
    
  }

}
const dog = new Animal("German Shepard Bhai", "dog", "ghew ghew")
const cat = new Animal("Persian bhai", "cat", "meaw meaw")


dog.makeSound() // The German Shepard Bhai say ghew ghew


}
