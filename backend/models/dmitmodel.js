const mongoose = require("mongoose");

// Define the schema for dmitTest object
const dmitTestSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true, // Ensures that heading is mandatory
    },
    description: {
      type: String,
      required: true, // Ensures that description is mandatory
    },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt timestamps automatically

// Define the schema for the content object
const contentSchema = new mongoose.Schema(
  {
    content: {
      type: String, // Field type is String to hold the content
      required: true, // Ensures the content field is mandatory
    },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt timestamps automatically

// Define the schema for individual benefit cards
const cardSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true, // Each card must have an id
  },
  link: {
    type: String,
    default: "", // Default empty string if no link is provided
  },
  description: {
    type: String,
    required: true, // Description is mandatory
  },
  imageUrl: {
    type: String,
    required: true, // Image URL is mandatory
  },
  title: {
    type: String,
    required: true, // Title is mandatory
  },
});

// Define the main schema for benefits section
const benefitsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title of the benefits section is mandatory
    },
    cards: {
      type: [cardSchema], // An array of cardSchema
      required: true, // Cards array is mandatory
    },
  },
  { timestamps: true }
);

// Define the schema for individual feature cards
const featuresCardSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true, // Each card must have an id
  },
  description: {
    type: String,
    required: true, // Description is mandatory
  },
  title: {
    type: String,
    required: true, // Title is mandatory
  },
  icon: {
    type: String,
    required: true, // Icon URL is mandatory
  },
  bgColor: {
    type: String,
    required: true, // Background color is mandatory
  },
});

// Define the main schema for features section
const featuresSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title of the features section is mandatory
    },
    description: {
      type: String,
      required: true, // Description of the features section is mandatory
    },
    cards: {
      type: [featuresCardSchema], // An array of featuresCardSchema
      required: true, // Cards array is mandatory
    },
  },
  { timestamps: true }
);

// Define the schema for individual information items
const infoItemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true, // Each item must have an id
  },
  heading: {
    type: String,
    required: true, // Heading is mandatory
  },
  text: {
    type: String,
    required: true, // Text is mandatory
  },
  bgColor: {
    type: String,
    required: true, // Background color is mandatory
  },
  inputStyle: {
    type: String,
    required: true, // Input style is mandatory
  },
});

// Define the main schema for information section
// const infoSchema = new mongoose.Schema(
//   {
//     items: {
//       type: [infoItemSchema], // An array of infoItemSchema
//       required: true, // Items array is mandatory
//     },
//   },
//   { timestamps: true }
// );

// Define the schema for brain and finger connection object
const brainFingerConnectionSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true, // Heading is mandatory
    },
    subHeading: {
      type: String,
      required: true, // Sub-heading is mandatory
    },
    imageUrl: {
      type: String,
      required: false, // Image URL is optional
    },
    content: {
      type: String,
      required: true, // Content is mandatory
    },
  },
  { timestamps: true }
);

// Define the main schema for the DMIT page
const dmitPageSchema = new mongoose.Schema({
  dmitTest: {
    type: dmitTestSchema,
    required: true, // Ensure dmitTest is mandatory
  },
  careerTest: {
    type: contentSchema,
    required: true, // Ensure careerTest is mandatory
  },
  benefits: {
    type: benefitsSchema,
    required: true, // Ensure benefits section is mandatory
  },
  features: {
    type: featuresSchema,
    required: true, // Ensure features section is mandatory
  },
  info: {
    type: [infoItemSchema], // Info should be an array of infoItemSchema
    required: true, // Ensure info array is mandatory
  },
  brainFinger: {
    type: brainFingerConnectionSchema,
    required: true, // Ensure brainFinger section is mandatory
  },
});

// Create and export the model
const DmitPage = mongoose.model("DmitPage", dmitPageSchema);

module.exports = DmitPage;
