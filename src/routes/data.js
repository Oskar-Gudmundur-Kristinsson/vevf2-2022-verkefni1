import express from "express";
import getNumsFromFile from "../utils/readFile.js";
import getStats from "../utils/stats.js";

const dataRouter = express.Router();

dataRouter.get("/:id", (req, res) => {
    async function renderAfterLoad(){
        var nums = await getNumsFromFile(req.params.id);
        var stats = getStats(nums);
        console.log(stats);
        res.render()//TODO make view for data
    }

    renderAfterLoad();
});



export { dataRouter };
