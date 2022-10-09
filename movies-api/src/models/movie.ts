import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

@modelOptions({
  schemaOptions: {
    timestamps: { updatedAt: true, createdAt: true },
  },
})
export class Movie {
  updatedAt?: Date;
  createdAt?: Date;
  _id: Types.ObjectId;

  @prop({ required: true, type: () => String })
  public name: string;

  @prop({ required: false, type: () => String })
  public description: string

  @prop({ required: false, ref: 'genres' })
  public genre: Types.ObjectId

  @prop({ required: false, type: () => Date })
  public releaseDate: Date

  @prop({ required: false, type: () => String })
  public duration: string

  @prop({ required: false, type: () => Number })
  public rating: number
}

export const MovieModel = getModelForClass(Movie);
