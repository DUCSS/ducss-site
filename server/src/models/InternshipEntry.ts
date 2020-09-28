import mongoose from "mongoose";
const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const internshipEntrySchema = new Schema({
  title: requiredString,
  shortDescription: requiredString,
  links: [{ desciption: String, link: requiredString }],
});

export const InternshipEntry = mongoose.model(
  "InternshipEntry",
  internshipEntrySchema
);
