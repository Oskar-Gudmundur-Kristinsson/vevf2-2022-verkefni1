import express from "express";
import ejs from "ejs";
import { dataRouter } from "./routes/data.js";

const app = express();

app.set("veiw engine", ejs);
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  async function renderAfterLoad() {
    res.render("index.ejs");
  }

  renderAfterLoad();
});

app.use("/data", dataRouter);

app.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/"); // eslint-disable-line no-console
});
