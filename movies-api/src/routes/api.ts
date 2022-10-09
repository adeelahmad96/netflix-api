import { Express } from "express-serve-static-core";
import movieRouter from "./movie";
/**
 *
 * @param app
 */
export const api = (app: Express) => {
  app.use("/api/movies", movieRouter);
};
