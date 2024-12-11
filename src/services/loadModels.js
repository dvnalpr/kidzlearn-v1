const tf = require('@tensorflow/tfjs-node');
require('dotenv').config();

async function loadModels() {
  try {
    const letterModel = await tf.loadGraphModel(process.env.LETTER_MODEL_URL);
    const numberModel = await tf.loadGraphModel(process.env.NUMBER_MODEL_URL);

    return { letterModel, numberModel };
  } catch (error) {
    console.error('Failed to load models:', error);
    throw new Error('Failed to load models.');
  }
}

module.exports = loadModels;
