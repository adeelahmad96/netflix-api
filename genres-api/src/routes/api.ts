import { Express } from "express-serve-static-core";
import genreRouter from "./genre";
/**
 *
 * @param app
 */
export const api = (app: Express) => {
  app.use("/api/genres", genreRouter);
};
