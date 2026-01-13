import express, {
  type Application,
  type Request,
  type Response,
} from 'express';
import cors from 'cors';
import { studentRoute } from './app/config/modules/student/student.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());


//application
app.use('/api/v1/students', studentRoute)


const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};
app.get('/', getAController);

console.log(process.cwd());

export default app;
