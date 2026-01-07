{
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }
  //Inheritance
  //ex: Child class  parent class theke er property nite pare inheritance er maddome, jerokom sontan tar babar sompod uttoradikar sutre pay.

  //super method
  //ex: 👉 super() দিয়ে parent class-এর constructor-এ data (argument) পাঠানো হয়।
  //ex: 👉 এতে parent class তার নিজের property initialize করতে পারে।

  // extends Parent
  //ex: extends মানে উত্তরাধিকার নেওয়া (inherit করা)
  //ex: Parent class-এর property, method গুলো Child class পায়
  //ex: Student class, Parent class-এর সব property ও method inherit করছে।
  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("mr x", 20, "uganda");

  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} class`);
    }
  }

  const Teacher1 = new Teacher("mr teacher", 25, "USA", "tea");

  console.log(Teacher1);
}
