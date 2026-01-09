{
  //promise
  type Todo = {
    id: number;
    title: string;
    body: string;
  };
  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    const data = await response.json();

    return data;
  };
  getTodo();

  type something = { something: string };

  const createPromise = (): Promise<something> => {
    return new Promise((resolve, reject) => {
      const data: something = { something: 'Something' };
      if (data) {
        resolve(data);
      } else {
        reject('failed to load data');
      }
    });
  };

  //calling create promise function

  const showData = async (): Promise<something> => {
    const data: something = await createPromise();
    return data;
  };
  showData();
}
