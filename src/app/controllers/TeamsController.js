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
    let sortedTeams = Team.find().sort({points: 'asc'})

    Promise.all([sortedTeams,Team.countDocumentsDeleted({ deletedAt: { $ne: null } })]).then(result => {
      res.render("teams/rating-teams", { 
        teams: multipleMongooseToObject(result[0]),
        deletedCount: result[1]
      });
    }).catch(next)

    // Team.find()
    // .then((teams) => {
    //   res.render("teams/rating-teams", { 
    //     teams: multipleMongooseToObject(teams).sort((a,b) => b.points - a.points)
    //   });
    // })
    // .catch(next);
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

  // [DELETE]/teams/:id
  delete(req, res, next) {
    Team.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  // [DELETE]/teams/:id/force
  forceDelete(req, res, next) {
    Team.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  // [PATCH]/teams/:id
  restore(req, res, next) {
    Team.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  // [GET]/teams/delete
  trash(req, res, next) {
    Team.findDeleted({deletedAt:{$ne: null}})
      .then((teams) => {
        res.render("teams/trash", { teams: multipleMongooseToObject(teams) });
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
