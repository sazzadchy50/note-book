{

type GenericArray<T>=Array<T>
 interface User{
    name:string;
    age:number
 }
    
const user:GenericArray<User> = [
    {
      name: "mezba",
      age: 122,
    },
    {
      name: "jonkar",
      age: 100,
    },
  ];

}