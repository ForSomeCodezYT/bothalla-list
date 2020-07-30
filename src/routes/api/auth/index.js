const { Router } = require("express");
const { getUser } = require('@utils/discordApi.js');
const create = require('@utils/createAuth.js');
const Bots = require("@models/bots");

const route = Router();

route.get("/:id", async (req, res, next) => {
    let user;
    let {refresh_token, access_token} = req.cookies;
    if (!refresh_token) return res.json({ "success": "false", "error": "Invalid token" })

    let result = await getUser({access_token, refresh_token});
    if (!result) return res.redirect("/login");
    [user, {refresh_token, access_token}] = result;
    res.cookie("refresh_token", refresh_token, {httpOnly: true});
    res.cookie("access_token", access_token, {httpOnly: true});

    const bot = await Bots.findOne({ botid: req.params.id }, { _id: false })
    if (!bot) return res.json({ "success": "false", "error": "Bot not found." });
    if (!bot.owners.includes(user.id) && !process.env.ADMIN_USERS.split(' ').includes(user.id)) return res.json({ "success": false, "error": "Bot owner is not user." });
    if (!bot.auth) {
        let newAuthCode = create(20);
        await Bots.updateOne({ botid: bot.botid }, {$set: { auth: newAuthCode } })
        res.json({ "success": true, "auth": newAuthCode });
    } else {
        res.json({ "success": true, "auth": bot.auth });
    }
});

module.exports = route;
