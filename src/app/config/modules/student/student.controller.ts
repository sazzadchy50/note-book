import type { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//get student data
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    console.log(result);

    res.status(200).json({
      success: true,
      message: 'Students data retrieve successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//get single data
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    if(!studentId){
      throw new Error("studentId is required")
    }
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
