const teamsRouter = require("./teams");

function route(app) {
  app.use("/teams", teamsRouter);
  app.use("/", teamsRouter);
}

module.exports = route;