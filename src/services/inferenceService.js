// const tf = require('@tensorflow/tfjs-node');
// const InputError = require('../exceptions/InputError');

// async function predictClassification(model, image) {
//   if (!Buffer.isBuffer(image)) {
//     throw new InputError('Uploaded file is not an image.');
//   }

//   try {
//     const tensor = tf.node
//       .decodeImage(image)
//       .resizeNearestNeighbor([224, 224])
//       .expandDims()
//       .toFloat();

//     const prediction = model.predict(tensor);
//     const scores = await prediction.data();
//     const confidenceScore = Math.max(...scores) * 100;

//     // Determine result (e.g., letter or number)
//     const index = scores.indexOf(Math.max(...scores));
//     const result = model.labels[index]; // Labels should be pre-defined in model

//     tensor.dispose();
//     prediction.dispose();

//     return { confidenceScore, result };
//   } catch (error) {
//     throw new InputError(`Error during inference: ${error.message}`);
//   }
// }

// module.exports = predictClassification;
