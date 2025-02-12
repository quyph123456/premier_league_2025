const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-updater");
const mongooseDelete = require('mongoose-delete');


const Team = new Schema(
  {
    name: { type: String, required: true },
    point: { type: Number },
    logo: { type: String },
    matches_played: { type: Number },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true },
  { strict: false } // Cho phép lấy dữ liệu không khai báo trong schema
);

mongoose.plugin(slug);
Team.plugin(mongooseDelete, {deletedAt: true, overrideMethods: "all"})

module.exports = mongoose.model("Team", Team, "premier_league_standings");