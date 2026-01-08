{

    // Type Guard with instanceof 
    //ex:type Guard and type narrowing is same thing
    class Animal{  //parent class
        
        constructor(public name:string, public species:string){  
        }
        makeSound(){
            console.log("this is parent");   
        }
    }

    class Dog extends Animal{
        constructor( name:string, species:string){
            super(name, species) }
        MakeBerk(){
            console.log("I am barking");            
        }
    }

    class Cat extends Animal{
        constructor(name:string, species: string){
            super(name, species)
        }
        makeMeaw(){
            console.log("I am meawing");            
        }
    }
    
    //ex:Smart way te age handle korar jonn chaile amara function bebohar korte pari
    const isDog =(animal:Animal):animal is Dog =>{
        return animal instanceof Dog
    }
    const isCat =(animal:Animal): animal is Cat=>{
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal)=>{ //ex:Animal class type hisebe bebohar kora hoise
        //! if(animal instanceof Dog){  
        //!     animal.MakeBerk()
        //! }else if(animal instanceof Cat){
        //!     animal.makeMeaw()
        //! }else{
        //!     animal.makeSound()
        //! } 
        if(isDog(animal)){          //ex: Smart way te handle
            animal.MakeBerk()
        }else if(isCat(animal)){
            animal.makeMeaw()
        }else{
            animal.makeSound()
        }
    }
    const dog = new Dog("Dog bhai", "dog")
    const cat = new Cat("Cat bhai", "cat")
    
    getAnimal(cat)
    


}