var hooysasat = ['Возможно', 'Я не уверен', 'Скорее всего - да', 'Скорее всего - нет', 'Это нереально', 'Да, конечно',
               'Нет, конечно', 'Ты ебобо?', 'Я не знаю', 'Скорее всего - да, чем нет, но может и нет - больше, чем да',
               'Очень много времени занимает обдумка твоего вопроса', 'Возможно, но нет','Спроси попозже', 
               'Не спрашивай такое', 'Не могу ответить сейчас', 'Сконцентрируйся и спроси еще',
               'Вполне нереально, 'Из-за твоего вопроса - я сломался (нет)', 'У тебя плохие вопросы', 'Не отвечу на такой вопрос', 'Ты уверен, что хочешь задать этот вопрос?']

exports.info = {description: '~~Это вам не ask.fm~~', required: 'SEND_MESSAGES'}
exports.run = (client, msg, args) => {
  if(!args.join(' ')) return msg.reply('Я не умею угадывать твои мысли')
  var result = Math.floor((Math.random() * hooysasat.length));
  var embed = new Discord.RichEmbed()
  .setTitle("8шар - рандомный ответ")
  .setDescription('Мой ответ - ' + hooysasat[result]);)
  .setColor("RANDOM")
  msg.channel.send({embed})
}