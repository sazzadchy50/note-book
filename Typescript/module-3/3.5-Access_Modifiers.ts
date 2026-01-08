{
  //Access Modifiers

  class BankAccount {
    readonly id: number;
    name: string;
    
    //private _balance: number;
    //ex: private modifier use করলে property টা শুধু ওই class এর ভিতরেই access করা যায়।
    //ex: child class বা class এর বাইরে থেকে access বা modify করা যায় না।

    protected _balance: number;
    //ex: protected modifier use করলে property টা ওই class এবং
    //ex: তার child (derived) class গুলোতে access করা যায়।
    //ex: তবে class এর বাইরে থেকে access করা যায় না।

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit = (amount: number) => {
      return (this._balance = this._balance + amount);
    };
    getBalance = () => {
      return this._balance;
    };
  }
  
  class StudentAccount extends BankAccount {
    test() {
      this._balance; // protecter hole balance aikhane pawa jabe
    }
  }
  const goriberAccount = new BankAccount(111, "gorid", 20);
  goriberAccount.addDeposit(20);
  const myBalance = goriberAccount.getBalance();
  console.log(myBalance);

  // goriberAccount = 3
}
