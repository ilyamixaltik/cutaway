const { VK, Keyboard } = require('vk-io')
const config = require("../config.json");

const vk = new VK({
    token: config.access_token.group,
    lang: "ru",
    pollingGroupId: config.id.group,
    apiMode: "parallel"
});

/*-------------------------------------------------------------------*/
/*     |                       Инфо
/*-------------------------------------------------------------------*/

module.exports = async (msg) => {
    let smsg = ``

    let [ IUser ] = await vk.api.users.get({ user_ids: msg.senderId });
    let arg = {

    disable_mentions: 1,
    keyboard: Keyboard.builder()
        .urlButton({ label: `Написать ВКонтакте`, url: `https://vk.com/im?media=&sel=192611866` })
        .urlButton({ label: `Написать в Telegram`, url: `https://t.me/ilya_mixaltik` })
        .urlButton({ label: `Зайти в аккаунт GitHub`, url: `https://github.com/ilyamixaltik` }).inline()
    }

    smsg += `Здравствуйте, ${IUser.first_name} ${IUser.last_name}\n`
    smsg += `Я -- чат-бот визитка. Вот данные для связи с моим хозяином:\n`
    smsg += `ВКонтакте: https://vk.com/ilya_mixaltik\n`
    smsg += `Telegram: https://t.me/ilya_mixaltik\n`
    smsg += `GitHub: https://github.com/ilyamixaltik\n`

    return msg.send(smsg, arg)
}