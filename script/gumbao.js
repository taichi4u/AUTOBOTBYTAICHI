const fs = require("fs");
module.exports.config = {
    name: "gumbao",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "taichi/jenard",
    description: "suntukan",
    commandCategory: "no prefix",
    usages: "hihi",
    cooldowns: 5,
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
    var { threadID, messageID, senderID } = event;
    var senderName = "";
    api.getUserInfo(senderID, (err, result) => {
        if (err) {
            console.error(err);
            senderName = "there";
        } else {
            senderName = result[senderID].name;
        }
        if (
            event.body.indexOf("suntukan") == 0 ||
            event.body.indexOf("suntukin") == 0 ||
            event.body.indexOf("christian") == 0 ||
            event.body.indexOf("gumbao") == 0
        ) {
            // Send text message with pogi gif haha
            api.sendMessage(
                {
                    body: `right, left,\n imiss you`,
                    attachment: fs.createReadStream(
                        __dirname + `/noprefix/gumbao.mp4`
                    ),
                },
                threadID,
                messageID
            );

            // Send voice message with additional kabaklaan
            const voiceFile = fs.readFileSync(
                __dirname + "/noprefix/gumbao.mp4"
            );
            api.sendMessage(
                {
                    attachment: voiceFile,
                    type: "audio",
                    body: "suntukan",
                },
                threadID,
                () => {}
            );

            api.setMessageReaction("❤️", event.messageID, (err) => {}, true);
        }
    });
};
module.exports.run = function ({ api, event, client, __GLOBAL }) {};