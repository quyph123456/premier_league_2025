const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const PORT = 3001;
const db = require("./config/db");
const methodOverride = require("method-override");

//Connect to db
db.connect();
const route = require("./routes");

app.use(methodOverride("_method"));
app.engine(
    "hbs",
    handlebars.engine({
      extname: ".hbs",
      helpers: {
        sum: (a, b) => a + b,
      },
    })
  );
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
//Parse data from HTML forms
app.use(express.urlencoded({extended: true}));

route(app);

app.listen(PORT, () => console.log(`App listen at http://localhost:${PORT}`));