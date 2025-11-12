import express from "express";
import db from "../app/models/index.js";

const { sequelize, Employee }= db;

// import pool from '../db/my-db.js';
import { eduUsersTest } from "../app/middlewares/edu/edu.middleware.js";

const usersRouter = express.Router();

usersRouter.get('/', eduUsersTest, (request, response, next) => {
  response.status(200).send('유저 정보 전체 조회 완료');
});

usersRouter.get('/api/users/:id', async (request, response, next) => {
  try {
   const id = parseInt(request.params.id);
 // --------------
 // Sequelize로 DB 연동
 // --------------

   const result = await Employee.findByPk(id);
   return response.status(200).send(result);
  

  // 쿼리 작성
  //  const sql = `
  //   SELECT *
  //   FROM employees
  //   WHERE
  //     emp_id = ?
  //  `;
    // Prepared Statement





    // const [result] = await pool.execute(sql);

    // response.status(200).send(result);
  } catch(error) {
    next(error);
  }
});

usersRouter.put('/api/users/:id', (request, response, next) => {
  response.status(200).send('유저 정보 수정 완료');
});

export default usersRouter;
