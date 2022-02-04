import express from "express";
import getNumsFromFile from "../utils/readFile.js";
import getStats from "../utils/stats.js";

const dataRouter = express.Router();

dataRouter.get("/:id", (req, res) => {
  async function renderAfterLoad() {
    const id = req.params.id;
    const nums = await getNumsFromFile(id);
    const stats = getStats(nums);
    res.render("stats.ejs", { stats: stats, dataSetName: id , dataSet: nums}); // TODO make view for data
  }

  renderAfterLoad();
});

export { dataRouter };
