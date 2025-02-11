const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const PORT = 3001;

const route = require("./routes");

app.engine(
    "hbs",
    handlebars.engine({
      extname: ".hbs",
    })
  );
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));


app.get('/', (req, res) => {
    res.render('home');
})


app.listen(PORT, () => console.log(`App listen at http://localhost:${PORT}`));