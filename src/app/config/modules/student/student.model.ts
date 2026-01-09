import { Schema, model } from 'mongoose';
import type {
  Guardian,
  LocalGuardian,
  Student,
 
  userName,
} from './student.interface.js';

const userNameSchema = new Schema<userName>({
  firstName: { type: String},
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  Name: { type: String },
  Occupation: { type: String },
  ContactNo: { type: String },
  address: { type: String },
});
const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: userNameSchema,
  gender: ['male', 'female'], // 'a' |'b' =['a' ,'b'] - enum type

  dateOfBirth: { type: String },
  email: { type: String },
  contactNo: { type: String },
  emergencyContactNo: { type: String },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],

  guardian: guardianSchema,

  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'inActive'],
});


// model

const Student = model<Student>('Student', studentSchema)

 