import mongoose from "mongoose";
const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const internshipEntrySchema = new Schema({
  company: requiredString,
  title: requiredString,
  shortDescription: requiredString,
  links: [{ description: String, link: requiredString }],
});

export const InternshipEntry = mongoose.model(
  "InternshipEntry",
  internshipEntrySchema
);
