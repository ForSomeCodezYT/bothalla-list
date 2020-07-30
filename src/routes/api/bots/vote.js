const { Router } = require("express");
const { getUser } = require('@utils/discordApi')
const Bots = require("@models/bots");
const Votes = require("@models/vote");
const route = Router();

route.get("/:id", async (req, res, next) => {
    let bot = await Bots.findOne({
    botid: req.params.id}, (err , res) => {
    if(!res){
    return res.sendStatus(404);
    }else{
    Votes.findOne({
    botid: req.params.id}, (err , vote) => {
    if(!vote){
    const votess = new Votes({
                votes: 1,
                botid: req.params.id,
            })
            votess.save().catch(err => console.log(err));
    }else{
    vote.votes = vote.votes- + -1
    vote.save()
    }
    })
    }
    })
    res.render("/", { bot: bot });
});

module.exports = route;
