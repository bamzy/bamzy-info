const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const { Api } = require("telegram/tl");
const input = require("input");
const {finalizeText,removeSpecialCharacters} = require("./wordRepo");
require('dotenv').config()
const apiId = parseInt(process.env.APP_API_ID);
const apiHash =  process.env.APP_API_HASH;
const stringSession = new StringSession(process.env.SESSION_STRING); // fill this later with the value from session.save()
const analyzeTelegramChannel = async (res,channelName)=>{
    const client = new TelegramClient(stringSession, apiId, apiHash, {
        connectionRetries: 5,
    });
    await client.start({
        phoneNumber: async () => await input.text("Please enter your number: "),
        password: async () => await input.text("Please enter your password: "),
        phoneCode: async () =>
            await input.text("Please enter the code you received: "),
        onError: (err) => console.log(err),
    });

    const result1 = await client.invoke(
        new Api.messages.GetHistory({
            peer: channelName,
            limit: 10,

        })
    );
    var ids = result1.messages.map((elem)=>{
        return elem.id
    })
    const result = await client.invoke(
        new Api.channels.GetMessages({
            channel: channelName,
            id:ids,
        })
    );
    const rawTextNewsArr = result.messages.map((item)=>{
        return  removeSpecialCharacters(item.message);
    })

    let data = finalizeText(rawTextNewsArr);
    res.json({freqs: data,size:data.length});
}
module.exports = {analyzeTelegramChannel}
