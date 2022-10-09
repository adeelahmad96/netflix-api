import { Request, Response } from "express";
import { Genre, GenreModel } from "../models/genre";

export const createGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  const genre = new GenreModel(req.body);
  await genre.save();
  res.status(201).send(genre.toJSON());
};

export const getAllGenres = async (
  req: Request,
  res: Response
): Promise<void> => {
  const genres = await GenreModel.find().lean();
  res.send(genres);
};

export const getGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  const genreId: string = req.params.genreId;
  const genre = await GenreModel.findById(genreId).exec();
  res.send(genre);
};

export const editGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  const update: Partial<Genre> = req.body;
  const genreId: string = req.params.genreId;
  const genre = await GenreModel.findOneAndUpdate(
    { _id: genreId },
    update,
    { new: true }
  );
  res.send(genre);
};

export const deleteGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  const genreId: string = req.params.genreId;
  await GenreModel.deleteOne({ _id: genreId });
  res.send();
};
