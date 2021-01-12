/*-------------------------------------------------------------------*/
/*     |                   Евент сообщения
/*-------------------------------------------------------------------*/

module.exports = async (msg, next) => {
    if(msg.senderId < 0) return
    if(/\[club124387193\|(.*)\]/i.test(msg.text)) msg.text = msg.text.replace(/\[club124387193\|(.*)\]/ig, '').trim();
    if(!msg.text) return;

    msg.text = msg.text.replace(/^(\[club[0-9]+\|.*\] ?|@club[0-9]+ (.*))[, ]+/i, " ").replace('/', "")
    msg.original = msg.text
    msg.params_org = msg.original.split(" ");
    msg.params_org.shift();
    msg.params = msg.text.split(" ");
    msg.params.shift();
    msg.params_alt = msg.text.split(" ");

    await next();
}