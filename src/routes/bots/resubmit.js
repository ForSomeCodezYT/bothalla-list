const { Router } = require("express");
const Bots = require("@models/bots");

const route = Router();

route.get("/:id", async (req, res, next) => {
        let clientid = req.params.id;
    let bot2 = await Bots.findOne({ botid: clientid })
     if (!bot2) return res.sendStatus(404);
    if (bot2.state !== 'deleted') return res.sendStatus(404);
    res.render("resubmit/index", { bot: bot2 });
   let bot = await Bots.updateOne({ botid: clientid }, { $set: { state: "unverified" } })
});

module.exports = route;
