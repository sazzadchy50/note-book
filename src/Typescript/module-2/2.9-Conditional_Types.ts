{
  //conditional type

  type a1 = null;
  type b1 = undefined;

  type c = a1 extends null ? true : false; //conditional type
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  // car ase kina /bike ase kina/ ship ase kina
  type CheckVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false; // hardcode condition used

  // using keyof that will take key of sheikh type and union between all property
  type CheckVehicleDynamic<T> = T extends keyof Sheikh ? true : false;

  type hasBike = CheckVehicle<'car'>; // true

  type hasShip = CheckVehicleDynamic<'ship'>; // true

  //ex: Conditional typescript holo akta type onno akta type er upor vitti kore type nirdaron kore.
}
