import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

@modelOptions({
  schemaOptions: {
    timestamps: { updatedAt: true, createdAt: true },
  },
})
export class Genre {
  updatedAt?: Date;
  createdAt?: Date;
  _id: Types.ObjectId;

  @prop({ required: true, type: () => String })
  public name: string;

  @prop({ required: false, type: () => String })
  public description: string
}

export const GenreModel = getModelForClass(Genre);
