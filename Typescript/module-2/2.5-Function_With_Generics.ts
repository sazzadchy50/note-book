{
   //function with generics

   const createArray = (param:string):string[]=>{
    return [param]
   }

   const createArrayWithGeneric =<T>(param: T):[T]=>{
    return [param]
   }


   const res1 = createArray('bd')
   const resGeneric = createArrayWithGeneric<string>('bd')
   type user = {id:number, name:string}
   const resGenericObj = createArrayWithGeneric<user>({id: 32, name:'mr x'})

   // create array with tuple
  

   const createArrayWithTuple =<T,X>(param1: T,param2:X):[T,X]=>{
    return [param1, param2]
   }


   const res10 = createArrayWithTuple<string, number>("bd",23)


   
   const addCourseToStudent = <T>(student: T)=>{
    const course ='senior dev'
    
    return{
      ...student,
      course
    }
   }
   const student1= addCourseToStudent({name:'mr x', email:'x@email', devtype: 'senior'})
   const student2= addCourseToStudent({name:'mr y', email:'y@email', hasWatch:'apple'})

}