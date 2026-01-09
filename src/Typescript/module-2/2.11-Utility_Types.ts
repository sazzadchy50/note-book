{
  //utility types
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  // pick
  type nameAge = Pick<Person, 'name' | 'age'>; //ex: je Key gula pick kora hobe seigula niye notun arekti type toiri hoye jabe

  //omit
  type contactInfo = Omit<Person, 'name' | 'age'>; //ex:Omit er maddome je key gula deya hobe sei gual bad diye baki key gula niye arekti type hoye jabe.

  //required
  type requireAll = Required<Person>; //ex: Person a email optional chilo ja akon required hoye new type hoyeche. required er maddome sob require hobe jabe.

  //partial
  type partialAll = Partial<Person>; //ex: Person type er sob key optional/partical hoye new type hoye jabe.

  // Readonly

  type readonlyPerson = Readonly<Person>; //ex: Person type er sob key read only hoye new type hoye jabe.

  // Record
  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    a: 'd',
    b: 'ds',
  };

  const EmptyObj: Record<string, unknown> = {}; //ex: first argument <> obj key sob somoy string hobe.
}
