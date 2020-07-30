const { Router } = require("express");
const path = require('path');


const route = Router();

route.get("/", async (req, res, next) => {
    let theme = req.cookies["theme"]
    res.sendFile(path.resolve(__dirname + "/../dynamic/theme/dark.css"))

});

module.exports = route;
