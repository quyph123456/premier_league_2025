const team = require("../models/Team");
const { mongooseToObject, multipleMongooseToObject } = require("../../util/mongoose");

class TeamsController {
  // [GET]/teams/
  show(req, res, next) {
    let slug = req.params.slug ? req?.params?.slug : "";
    if (slug) {
      team.findOne({ slug: req.params.slug })
        .then((team) => {
          res.render("teams/show", { team: mongooseToObject(team) });
        })
        .catch(next);
    } else {
      team.find()
        .then((teams) => {
          res.render("home", { teams: multipleMongooseToObject(teams) });
        })
        .catch(next);
    }
  }

  // [GET]/teams/rate
  rate(req, res, next) {
    team.find()
    .then((teams) => {
      res.render("teams/rating-teams", { 
        teams: multipleMongooseToObject(teams).sort((a,b) => b.points - a.points)
      });
    })
    .catch(next);
  }
}

module.exports = new TeamsController();
