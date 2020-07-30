const { Router } = require("express");
const bodyParser = require("body-parser");
const Bots = require("@models/bots");
const { RATELIMIT } = process.env;

const route = Router();
route.use(bodyParser.json({limit: '50mb'}));

route.post('/:id', async (req, res) => {
    let botid = req.params.id;
    let auth = req.headers.authorization;
    if (!auth) return res.json({ success: "false", error: "Authorization header not found." });
    let count = req.body.count ? req.body.count : req.body.server_count;

    if (!count) return res.json({ success: "false", error: "Count not found in body." });
    count = parseInt(count);
    if (!count) return res.json({ success: "false", error: "Count not integer." });
    let bot = await Bots.findOne({ botid }, { _id: false })
    if (!bot) return res.json({ success: "false", error: "Bot not found." });
    if (!bot.auth) return res.json({ success: "false", error: "Create a bot authorization token." });
    if (bot.auth !== auth) return res.json({ success: "false", error: "Incorrect authorization token." });

    await Bots.findOne({ 
        botid: botid }, (err, res) => { 
        res.servers = count
        res.save()
                 })
    bot = await Bots.findOne({ botid }, { _id: false })
    res.json({ success: true, bot });
});

module.exports = route;
