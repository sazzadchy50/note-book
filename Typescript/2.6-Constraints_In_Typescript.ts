{

    //constraints  
     // constraints ortho force kora, kuno kichuke force korakei constaints bole

    const addCourseToStudent=<T>(student: T)=>{
        const course ="Next Level web Development";
        return{
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        name:'mr x',
        email:'x@gmail.com',
        devType:'NLWD',
    });

    
    //
}