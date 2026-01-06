{
  //Mapped Types

  type areaNumber = {
    height: number;
    width: number;
  };

  type Height = areaNumber["height"]; // look up type
  //ex: same property ke onno type korte hole Mapped types er maddome new type kora jay.

  //      type areaString = {
  //      height: number;
  //      width: number;
  //    };

  type areaString = {
    [key in keyof areaNumber]: string;
    // [key/index in 'height'| 'width' ] :string
  };

  //custom type or generic
  type FlexAbleType<T> = {
    [key in keyof T]: T[key];
  };

  const area1: FlexAbleType<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  const area2: { height:string, width: number } = {
    height: "100",
    width: 50,
  };

  
}
