import { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

const app: Application = require('express')();

dotenv.config();

//  set server setting
const port: number =
	parseInt(process.env.PORT as unknown as string) || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
