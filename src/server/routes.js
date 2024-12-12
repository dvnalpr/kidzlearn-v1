const handlers = require("../server/handler");

const routes = [
  {
    method: "POST",
    path: "/register",
    handler: handlers.registerUser,
  },
  {
    method: "POST",
    path: "/login",
    handler: handlers.loginUser,
  },
  {
    method: "GET",
    path: "/animals",
    handler: (request, h) =>
      handlers.getCategoryMaterials(request, h, "animals"),
  },
  {
    method: "GET",
    path: "/colors",
    handler: (request, h) =>
      handlers.getCategoryMaterials(request, h, "colors"),
  },
  {
    method: "GET",
    path: "/colorAnimation",
    handler: (request, h) =>
      handlers.getCategoryMaterials(request, h, "colorAnimation"),
  },
  {
    method: "GET",
    path: "/letterAnimation",
    handler: (request, h) =>
      handlers.getCategoryMaterials(request, h, "letterAnimation"),
  },
  {
    method: "GET",
    path: "/alphabet",
    handler: (request, h) =>
      handlers.getCategoryMaterials(request, h, "alphabet"),
  },
  {
    method: "GET",
    path: "/alphabetAnimation",
    handler: (request, h) =>
      handlers.getCategoryMaterials(request, h, "alphabetAnimation"),
  },
  {
    method: "GET",
    path: "/dataSoalWritting",
    handler: handlers.getBankSoal,
  },
  {
    method: "GET",
    path: "/dataQuestionWritting",
    handler: handlers.getQuestionWritting,
  },
  // {
  //   method: 'POST',
  //   path: '/predict',
  //   handler: handlers.postPredictHandler,
  //   options: {
  //     payload: {
  //       allow: 'multipart/form-data',
  //       multipart: true,
  //     }
  //   }
  // },
];

module.exports = routes;
