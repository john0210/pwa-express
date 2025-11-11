import express from "express";
import { eduUsersTest } from "../app/middlewares/edu/edu.middleware.js";

const usersRouter = express.Router();

usersRouter.get('/', eduUsersTest, (request, response, next) => {
  response.status(200).send('유저 정보 전체 조회 완료');
});

usersRouter.get('/api/users/:id', (request, response, next) => {
  response.status(200).send('유저 정보 조회 완료');
});

usersRouter.put('/api/users/:id', (request, response, next) => {
  response.status(200).send('유저 정보 수정 완료');
});

export default usersRouter;
