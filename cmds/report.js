exports.info = {description: 'Сделать репорт', required: 'SEND_MESSAGES'}
exports.run = async (client, msg, args) => {
  args.shift()
  var user = msg.mentions.users.first()
  if(!user) return msg.reply('Ты должен указать пользователя')
  var rule = args.shift()
  if(!rule) return msg.reply('Ты должен указать правило')
  var text = args.join(' ')
  if(!text) return msg.reply('Ты должен указать описание')
  var img = msg.attachments.first()
  if(!img) return msg.reply('Ты должен добавить скриншот')
  var embed = new client.RichEmbed()
    .setAuthor(msg.author.tag, msg.author.avatarURL)
    .setTitle('\nРепорт')
    .setDescription(text)
    .addField('\nНарушенное правило', rule)
    .addField('Нарушитель', `${user.tag} | ${user.id}`)
    .setImage(img.url)
    .setColor('FFFFFF')
  msg.guild.channels.find('name', 'reports').send({embed})
  msg.reply('Репорт успешно отравлен')
  await client.sleep(1000)
  msg.delete()
}