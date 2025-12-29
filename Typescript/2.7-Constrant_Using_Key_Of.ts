{

//generic constrant with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship"; //manually written

    type Owner2 = keyof Vehicle     // automatic with keyof 

    
    const getPropertyValue =<X, Y extends keyof X>(obj:X, key:Y)=>{
        return obj[key]
    }

    const user ={
        name: 'sazzad',
        age: '20',
        address:'ctg',
    }

    const result = getPropertyValue(user, 'name') 

    //ex:Constraint using keyof mane jekuno akta property holeo thakte hobe. Mane union litarel use kore jekono akta property thakte hobe. R constraints a sudu extend  a sob gula property thakte hobe 
}