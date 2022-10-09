import { Request, Response } from "express";
import { getGenre } from "../helpers/axios";
import { Movie, MovieModel } from "../models/movie";

export const createMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  const movie = new MovieModel(req.body);
  await movie.save();
  res.status(201).send(movie.toJSON());
};

export const getAllMovies = async (
  req: Request,
  res: Response
) => {
  const movies = await MovieModel.find().lean();

  const genres: any[] = await Promise.all(movies.map(movie => getGenre(movie.genre)));

  return res.send(movies.map(m => ({
    ...m,
    genre: genres.find(g => g?._id == m.genre)
  })));
};

export const getMovie = async (
  req: Request,
  res: Response
) => {
  const movieId: string = req.params.movieId;
  const movie = await MovieModel.findById(movieId).exec();
  if (!movie) {
    return res.status(404).send('Movie not Found!')
  }
  return res.send(movie);
};

export const editMovie = async (
  req: Request,
  res: Response
) => {
  const update: Partial<Movie> = req.body;
  const movieId: string = req.params.movieId;
  const movie = await MovieModel.findOneAndUpdate(
    { _id: movieId },
    update,
    { new: true }
  );
  res.send(movie);
};

export const deleteMovie = async (
  req: Request,
  res: Response
) => {
  const movieId: string = req.params.movieId;
  await MovieModel.deleteOne({ _id: movieId });
  res.send();
};
