//必要なパッケージをインポートする
import { TextChannel } from 'discord.js'
import { GatewayIntentBits, Client, Partials, Message } from 'discord.js'
import dotenv from 'dotenv'

//.envファイルを読み込む
dotenv.config()

//Botで使うGetwayIntents、partials
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel],
})

//Botがきちんと起動したか確認
client.once('ready', () => {
    console.log('Ready!')
    if(client.user){
        console.log(client.user.tag)
    }
})

client.on('messageCreate', async (message: Message) => {
    if (message.author.bot) return
    console.log(message.channel)
    if (message.channelId != '1127563852322705500') return
    const postchannel = client.channels.cache.get('1127563852322705500') as TextChannel;
    postchannel.send(`こらこら〜、${message.member?.displayName}! 一生懸命も、休み休みにしてよね :heart:`);
    postchannel.send({files: ['https://i.ytimg.com/vi/UA0apW76w2Y/hqdefault.jpg']});
})

//ボット作成時のトークンでDiscordと接続
client.login(process.env.TOKEN)