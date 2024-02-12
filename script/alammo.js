module.exports.config = {
    name: "alam mo kung bakit?",
    version: "7.3.1",
    hasPermssion: 0,
    credits: "Unknown", 
    description: "Just Respond",
    commandCategory: "no prefix",
    cooldowns: 3, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
    var { threadID, messageID, senderID } = event;
    var adminID = "100039153097506"; // Replace with your admin's ID
    var name = await Users.getNameUser(senderID);

    if (senderID !== adminID) {
        if (event.body.indexOf("alam mo") == 0 || event.body.indexOf("alam") == 0 || event.body.indexOf("alam mo kung bakit?") == 0 || event.body.indexOf("Alam mo") == 0 || event.body.indexOf("Alam Mo") == 0 || event.body.indexOf("Alam mo kung bakit?") == 0 || event.body.indexOf("Alam") == 0 || event.body.indexOf("bakit") == 0 || event.body.indexOf("Bakit") == 0 || event.body.indexOf("Bakit?") == 0) {
            var msg = {
                body: `pangit ka kasi ${name}`
            };
            api.sendMessage(msg, threadID, messageID);
            api.setMessageReaction("😆", event.messageID, (err) => {}, true);
        }
    }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {
    // Your run logic here
};
