exports.info = {description: 'Выполнить код', required: 'BOT_OWNERS'}
exports.run = async (client, msg, args) => {
  var code = args.join(' ');
  try {
    let evaled = eval(code);
    if (!code) {
      return msg.channel.send('Для выполнения команды eval необходим код');
    }
    if (typeof evaled !== 'string')
      evaled = require('util').inspect(evaled)
      var embed = new client.RichEmbed()
        .setTitle(`Эвал успешно выполнен`)
        .setColor('4F351')
        .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(evaled)}\`\`\``)
      msg.channel.send({embed});
   } catch (err) {
     var embed = new client.RichEmbed()
       .setTitle('Ошибка выполнения кода')
       .setColor('FF0202')
       .setDescription(`📥 Input: \n \`\`\`${code}\`\`\`\n 📤 Output:\n  \`\`\`${(err)}\`\`\``)
     msg.channel.send({embed});
     msg.delete();
  }
}