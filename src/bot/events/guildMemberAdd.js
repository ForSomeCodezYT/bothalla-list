const { Event } = require('klasa');

module.exports = class extends Event {
    run(member) {
        if (member.user.bot) {
            member.roles.add(member.guild.roles.cache.get(process.env.UNVERIFIED_ROLE_ID));
        }else{
           member.roles.add(member.guild.roles.cache.get(process.env.USER_ROLE));
        }
    }
};
