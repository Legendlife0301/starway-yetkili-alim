exports.run= async(client, message, args) => {
if(!message.member.permissions.has("0x0000000010000000")) return message.reply("Yetersiz Yetki!").catch(e => {})

if(!args[0]) return message.reply('rol al @member @role veya rol ver @member @role Yazmalısın!').catch(e => {})
if(args[0] === "ver"){
let member = message.mentions.members.first()
if(!member){
member = message.guild.members.cache.get(args[1])
}
const role = message.mentions.roles.first() || message.guild.roles.cache.find(m => m.name === args.slice(2).join(" "))

if(!member) return message.reply('Birini Etiketlemen Gerek').catch(e => {})
if(!role) return message.reply('Bir Rol Etiketlemen veya Ismini Yazman Gerek!').catch(e => {})
member.roles.add(role).then(cs => {
    message.channel.send('Basari ile Belirtilen Uyeye Belirtilen Rol Verildi!').catch(e => {})
}).catch(e => {
return message.channel.send(`${member.user.tag} adlı kullanıcıya ${role.name} rolü verilemedi!`).catch(e => {})
})
}
if(args[0] === "al"){
let member = message.mentions.members.first()
if(!member){
member = message.guild.members.cache.get(args[1])
}
const role = message.mentions.roles.first() || message.guild.roles.cache.find(m => m.name === args.slice(2).join(" "))

if(!member) return message.reply('Birini Etiketlemen Gerek').catch(e => {})
if(!role) return message.reply('Bir Rol Etiketlemen veya Ismini Yazman Gerek!').catch(e => {})
member.roles.remove(role).then(cs => {
    message.channel.send('Basari Ile Belirtilen Uyeden Belirtilen Rol Alindi!').catch(e => {})
}).catch(e => {
return message.channel.send(`${member.user.tag} adlı kullanıcıdan ${role.name} rolü alınamadı!`).catch(e => {})
})
}
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "rol"
} 