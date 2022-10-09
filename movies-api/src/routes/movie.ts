import express from "express";
import * as validator from "express-validator";
import {
  createMovie,
  deleteMovie,
  editMovie,
  getMovie,
  getAllMovies
} from "../controllers/movie";
import { validate } from "../middlewares/validation";

const movieRouter = express.Router();

movieRouter.post(
  "/",
  validator.body("name").isString().bail().trim(),
  validator.body("description").optional().bail().isString(),
  validator.body("genre").optional().bail().isString(),
  validator.body("duration").optional().bail().isString(),
  validator.body("rating").optional().bail().isInt().toInt(),
  validate,
  createMovie
);

movieRouter.get(
  "/",
  getAllMovies
);

movieRouter.get(
  "/:movieId",
  validator.param("movieId").isString(),
  validate,
  getMovie
);

movieRouter.put(
  "/:movieId",
  validator.param("movieId").isString(),
  validator.body("name").optional().bail().isString(),
  validator.body("description").optional().bail().isString(),
  validate,
  editMovie
);

movieRouter.delete(
  "/:movieId",
  validator.param("movieId").isString(),
  validate,
  deleteMovie
);

export default movieRouter;
