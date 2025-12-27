{
  //Generic with interface

  interface Developer<T,X= null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X
  }

  const poordeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {    //  Default parameter na thakle Argument a null ba undefined dite hobe 
    name: "poor",
    computer: {
      brand: "walton",
      model: "A1o",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Emilab",
      model: "Kw66",
      display: "OLED",
    },
  };

  type AppleWatch = {
    //best practice for clean code
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  };
  interface YamahaBike{
    model: string;
    engineCapacity: string;
  }

  const richdeveloper: Developer<AppleWatch, YamahaBike > = {
    name: "Rich",
    computer: {
      brand: "Apple",
      model: "A1",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "apple",
      model: "AWatch",
      heartTrack: true,
      sleepTrack: true,
    },
    bike:{
      model: "Yamaha",
      engineCapacity: '160cc'
    }
  };
}
