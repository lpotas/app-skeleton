import express from 'express';
import fs from 'fs';
import path from 'path';
import multer from 'multer';

const router = express.Router();
// const idDependOnSomething = process.env.NODE_ENV === 'production' ? thing 1 : thing 2; 

let storage = multer.memoryStorage()

let upload = multer({
  storage: storage
})


// router.route('/path/:id')
//   .get((req, res, next) => {
//     res.send({});
  // });

export default router;
