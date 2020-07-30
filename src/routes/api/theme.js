const { Router } = require("express");

const route = Router();

route.get("/", async (req, res, next) => {
    let theme = req.cookies["theme"]
    res.cookie("theme", "dark");
    res.redirect(req.header('Referer') || '/');
});

module.exports = route;
