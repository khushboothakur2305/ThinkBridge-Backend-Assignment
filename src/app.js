const express = require(`express`);
const app = express();

const UserRoutes = require("./routes/user.route");
////Routes Import
const BooksAdmin = require(`./Routes/Books.route`);
require("./db/db");
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/books", BooksAdmin);
app.use(UserRoutes);
app.listen(port, () => {
  console.log("application served");
});
