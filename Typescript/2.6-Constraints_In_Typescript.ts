{
  //constraints
  //ex: constraints ortho force kora, kuno kichuke force korakei constaints bole

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    //ex: id,name,number gula oboshi thakte hobe,  extends kore constrints (baddo) koraikei bujay.
    const course = "Next Level web Development";
    return {
      ...student,
      course,
    };
  };

  const student2 = addCourseToStudent({
    amni: "amni", // id, name,email chara hobe na
  });
  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "mr x",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  //
}
