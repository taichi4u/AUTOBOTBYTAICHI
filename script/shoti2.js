module.exports.config = {
  name: "shoti",
  version: "1.0.0",
  credits: "libyzxy0",
  description: "Generate random tiktok girl videos",
  hasPermssion: 0,
  commandCategory: "other",
  usage: "[shoti]",
  cooldowns: 3,
  dependencies: [],
};

module.exports.run = async function({ api, event }) {
  const axios = require("axios");
  const request = require('request');
  const fs = require("fs");

  api.sendMessage(`⏱️ | Sending Shoti Please Wait...`, event.threadID, async (error, info) => {
    try {
      let data = await axios.get('https://shoti-api.libyzxy0.repl.co/api/get-shoti?apikey=shoti-1ha4h3do8at9a7ponr');

      if (data.data.code === 200) {
        const videoUrl = data.data.data.url;
        const username = data.data.user.username;
        const nickname = data.data.user.nickname;

        var file = fs.createWriteStream(__dirname + "/cache/shoti.mp4");
        var rqs = request(encodeURI(videoUrl));
        console.log('Shoti Downloaded >>> ' + data.data.data.id)
        rqs.pipe(file);
        file.on('finish', () => {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + '/cache/shoti.mp4')
          }, event.threadID, async () => {

            await api.sendMessage(`Username: @${username}\nNickname: ${nickname}`, event.threadID); //plsss wag nyo palitan hehe
          });
        });
      } else {
        throw new Error("API response code is not 200");
      }
    } catch (error) {
      console.error("Error fetching or sending Shoti:", error);
      api.sendMessage("An error occurred while fetching or sending Shoti.", event.threadID);
    }
  });
};