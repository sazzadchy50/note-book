{
  // Type Guard with instanceof
  //ex:type Guard and type narrowing is same thing
  class Animal {
    //parent class

    constructor(public name: string, public species: string) {}
    makeSound() {
      console.log("this is parent");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    MakeBerk() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am meawing");
    }
  }

  //ex:Smart way te age handle korar jonn chaile amara function bebohar korte pari
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    //ex:Animal class type hisebe bebohar kora hoise
    //! if(animal instanceof Dog){
    //!     animal.MakeBerk()
    //! }else if(animal instanceof Cat){
    //!     animal.makeMeaw()
    //! }else{
    //!     animal.makeSound()
    //! }
    if (isDog(animal)) {
      //ex: Smart way te handle
      animal.MakeBerk();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };
  const dog = new Dog("Dog bhai", "dog");
  const cat = new Cat("Cat bhai", "cat");

  getAnimal(cat);

  //ex:TypeScript-এ instanceof type guard হলো একটি built-in operator, যেটা runtime-এ কোনো object নির্দিষ্ট কোনো class বা constructor function থেকে তৈরি হয়েছে কিনা তা যাচাই করতে ব্যবহার করা হয়।

  //ex:এটি TypeScript compiler-কে conditional block-এর ভেতরে কোনো variable-এর সঠিক type নির্ধারণ (type narrow) করতে সাহায্য করে, যার ফলে type safety নিশ্চিত হয় এবং runtime error হওয়ার সম্ভাবনা কমে যায়।
}
