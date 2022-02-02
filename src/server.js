import express from "express";
import ejs from "ejs";
import { dataRouter } from "./routes/data.js";
import { uploadRouter } from "./routes/upload.js";
import getNumsFromFile from "./utils/readFile.js";
import getStats from "./utils/stats.js";

const app = express();

app.set("veiw engine", ejs);
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
    async function renderAfterLoad(){
        var nums = await getNumsFromFile("1");
        var stats = getStats(nums);
        console.log(stats);
        res.render("index.ejs");
    }

    renderAfterLoad();

});

app.use("/data", dataRouter);
app.use("/upload", uploadRouter);

app.listen(3000, () => {
    console.log("Server running at http://127.0.0.1:3000/");
});
