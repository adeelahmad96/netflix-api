import express from "express";
import * as validator from "express-validator";
import {
  createGenre,
  deleteGenre,
  editGenre,
  getGenre,
  getAllGenres
} from "../controllers/genre";
import { validate } from "../middlewares/validation";

const genreRouter = express.Router();

genreRouter.post(
  "/",
  validator.body("name").isString().bail().trim(),
  validator.body("description").isString().bail().trim(),
  validate,
  createGenre
);

genreRouter.get(
  "/",
  getAllGenres
);

genreRouter.get(
  "/:genreId",
  validator.param("genreId").isString(),
  validate,
  getGenre
);

genreRouter.put(
  "/:genreId",
  validator.param("genreId").isString(),
  validator.body("name").optional().bail().isString(),
  validator.body("description").optional().bail().isString(),
  validate,
  editGenre
);

genreRouter.delete(
  "/:genreId",
  validator.param("genreId").isString(),
  validate,
  deleteGenre
);

export default genreRouter;
