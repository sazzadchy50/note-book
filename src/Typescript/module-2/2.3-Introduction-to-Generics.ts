{
  //generic type

  type GenericArray<T> = Array<T>;

  //const rollNumbers =
  const rollNumbers: GenericArray<number> = [2, 6, 8];

  const mentors: GenericArray<string> = ['mr.x', 'mr.y', 'Mr.z'];

  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: 'mezba',
      age: 122,
    },
    {
      name: 'jonkar',
      age: 100,
    },
  ];
  const add = (x: number, y: number) => x + y;

  add(30, 20);

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ['mr.x', 'mr.y'];

  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    1233,
    { name: 'sazzad', email: 'sazzzad@gamil.com' },
  ];
}
