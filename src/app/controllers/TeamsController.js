const Team = require("../models/Team");
const { mongooseToObject, multipleMongooseToObject } = require("../../util/mongoose");

class TeamsController {
  // [GET]/teams/
  show(req, res, next) {
    let slug = req.params.slug ? req?.params?.slug : "";
    if (slug) {
      Team.findOne({ slug: req.params.slug })
        .then((team) => {
          res.render("teams/show", { team: mongooseToObject(team) });
        })
        .catch(next);
    } else {
      Team.find()
        .then((teams) => {
          res.render("home", { teams: multipleMongooseToObject(teams) });
        })
        .catch(next);
    }
  }

  // [GET]/teams/rate
  rate(req, res, next) {
    Team.find()
    .then((teams) => {
      res.render("teams/rating-teams", { 
        teams: multipleMongooseToObject(teams).sort((a,b) => b.points - a.points)
      });
    })
    .catch(next);
  }

  // [GET]/teams/create
  create(req, res, next) {
    res.render("teams/create")
  }

  // [POST]/teams/store
  store(req, res, next) {
    let team = new Team(req.body)
    team.save()
    .then(() => res.redirect("/rating"))
    .catch(next)
  }

  // [GET]/teams/:id/edit
  edit(req, res, next) {
    Team.findById(req.params.id)
      .then((team) => {
        res.render("teams/edit", { team: mongooseToObject(team) });
      })
      .catch(next);
  }

  // [PUT]/teams/:id
  update(req, res, next) {
    Team.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/rating"))
      .catch(next);
  }
}

module.exports = new TeamsController();
