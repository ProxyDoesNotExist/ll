let Bot = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('unvoice');

    var _0x5e0c2a=_0x3518;(function(_0x4e75c3,_0x5ec5ba){var _0x294e16=_0x3518,_0x475ba4=_0x4e75c3();while(!![]){try{var _0xa20091=parseInt(_0x294e16(0x1d3))/0x1+-parseInt(_0x294e16(0x1d2))/0x2+parseInt(_0x294e16(0x1db))/0x3*(-parseInt(_0x294e16(0x1c9))/0x4)+parseInt(_0x294e16(0x1e2))/0x5*(-parseInt(_0x294e16(0x1ce))/0x6)+parseInt(_0x294e16(0x1c7))/0x7*(parseInt(_0x294e16(0x1e5))/0x8)+parseInt(_0x294e16(0x1c8))/0x9+parseInt(_0x294e16(0x1da))/0xa*(parseInt(_0x294e16(0x1dc))/0xb);if(_0xa20091===_0x5ec5ba)break;else _0x475ba4['push'](_0x475ba4['shift']());}catch(_0x2c1690){_0x475ba4['push'](_0x475ba4['shift']());}}}(_0x4643,0x365fc));function _0x3518(_0x18f199,_0x31bd96){var _0x4643d6=_0x4643();return _0x3518=function(_0x35180a,_0x2bef32){_0x35180a=_0x35180a-0x1c3;var _0x2ecea4=_0x4643d6[_0x35180a];return _0x2ecea4;},_0x3518(_0x18f199,_0x31bd96);}var MF_DESC='',MediaType='',EXT='',WMediaType='',Extention='',ImG='',ViD='',SIZE='',AuD='',ApK='',TITLE='',URL='',dOc='',UnK='';if(Config[_0x5e0c2a(0x1e0)]=='EN')NEED_MF_URL=_0x5e0c2a(0x1de),MF_DESC=_0x5e0c2a(0x1c4),MediaType=_0x5e0c2a(0x1cc),EXT=_0x5e0c2a(0x1e1),TITLE=_0x5e0c2a(0x1c5),URL=_0x5e0c2a(0x1d9),SIZE=_0x5e0c2a(0x1ea),ImG='Image',ViD=_0x5e0c2a(0x1ec),AuD='Audio',ApK=_0x5e0c2a(0x1cf),dOc=_0x5e0c2a(0x1ca),UnK=_0x5e0c2a(0x1cd);if(Config['LANG']=='ML')NEED_MF_URL=_0x5e0c2a(0x1eb),MF_DESC=_0x5e0c2a(0x1c3),MediaType=_0x5e0c2a(0x1e6),EXT=_0x5e0c2a(0x1e4),TITLE='*✨️\x20ശീർഷകം*',URL=_0x5e0c2a(0x1e8),SIZE='*🔷\x20വലിപ്പം*',ImG='ചിത്രം',ViD=_0x5e0c2a(0x1dd),AuD='ഓഡിയോ',ApK=_0x5e0c2a(0x1e9),dOc=_0x5e0c2a(0x1e3),UnK=_0x5e0c2a(0x1cb);function _0x4643(){var _0x572a61=['*✨️\x20Title*','*✨️\x20Judul*','175eLrSyH','458370tFMupO','116haJUFi','Document','അജ്ഞാതം','*💬\x20Media\x20Type*','Unknown','162PVKcfW','Application','*💬\x20Tipe\x20media*','*Anda\x20harus\x20memasukkan\x20Url\x20MediaFire!*','780180lQOBXl','28780YolXYL','Gambar','Mencari\x20informasi\x20dari\x20file\x20mediafire.','*📝\x20Perpanjangan*','Audio','Tidak\x20dikenal','*🌐\x20URL*','690lDCOKi','27351IOkbOW','151085oqKtWz','വീഡിയോ','*You\x20must\x20enter\x20a\x20MediaFire\x20Url!*','Dokumen','LANG','*📝\x20Extension*','36315XbXEmO','പ്രമാണം','*📝\x20വിപുലീകരണം*','14680EvTVJU','*💬\x20മീഡിയ\x20തരം*','*🔷\x20Ukuran*','*🌐\x20ലിങ്ക്*','ആപ്പ്','*🔷\x20Size*','*നിങ്ങൾ\x20ഒരു\x20MediaFire\x20URL\x20നൽകണം!*','Video','മീഡിയഫയർ\x20ഫയലിന്റെ\x20വിവരങ്ങൾ\x20തിരയുന്നു.','Searches\x20the\x20information\x20of\x20the\x20mediafire\x20file.'];_0x4643=function(){return _0x572a61;};return _0x4643();}if(Config['LANG']=='ID')NEED_MF_URL=_0x5e0c2a(0x1d1),MF_DESC=_0x5e0c2a(0x1d5),MediaType=_0x5e0c2a(0x1d0),EXT=_0x5e0c2a(0x1d6),TITLE=_0x5e0c2a(0x1c6),URL='*🌐\x20Tautan*',SIZE=_0x5e0c2a(0x1e7),ImG=_0x5e0c2a(0x1d4),ViD=_0x5e0c2a(0x1ec),AuD=_0x5e0c2a(0x1d7),ApK='App',dOc=_0x5e0c2a(0x1df),UnK=_0x5e0c2a(0x1d8);

if (Config.WORKTYPE == 'private') {

    Bot.addCommand({pattern: 'spdf ?(.*)', fromMe: true, desc: Lang.SPDF_DESC }, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(Lang.SPDF_LINK);

    var webimage = function _0x5a9d(_0x3d53f6,_0x3dc2ef){var _0x33a7d8=_0x33a7();return _0x5a9d=function(_0x5a9d94,_0x863278){_0x5a9d94=_0x5a9d94-0x1c8;var _0x35cdbf=_0x33a7d8[_0x5a9d94];return _0x35cdbf;},_0x5a9d(_0x3d53f6,_0x3dc2ef);}function _0x33a7(){var _0x1fe891=['4053850GHXjBN','279214OQodpW','369195ILSoaI','6mJizOa','1727215jJLIsx','12PZZnLL','get','3077271YFuZvS','https://api.html2pdf.app/v1/generate?url=','1915803xpIYWF','893600FfXgMi','44OEYKig','arraybuffer','2LmSDkj'];_0x33a7=function(){return _0x1fe891;};return _0x33a7();}var _0x7c4a61=_0x5a9d;(function(_0x2c08cc,_0x19e215){var _0x483dcb=_0x5a9d,_0x146128=_0x2c08cc();while(!![]){try{var _0x504d2e=-parseInt(_0x483dcb(0x1cc))/0x1*(-parseInt(_0x483dcb(0x1ce))/0x2)+-parseInt(_0x483dcb(0x1d4))/0x3+parseInt(_0x483dcb(0x1d2))/0x4*(parseInt(_0x483dcb(0x1cf))/0x5)+-parseInt(_0x483dcb(0x1d0))/0x6*(parseInt(_0x483dcb(0x1d1))/0x7)+-parseInt(_0x483dcb(0x1c9))/0x8+-parseInt(_0x483dcb(0x1c8))/0x9+parseInt(_0x483dcb(0x1cd))/0xa*(parseInt(_0x483dcb(0x1ca))/0xb);if(_0x504d2e===_0x19e215)break;else _0x146128['push'](_0x146128['shift']());}catch(_0x3f4c95){_0x146128['push'](_0x146128['shift']());}}}(_0x33a7,0x80392),await axios[_0x7c4a61(0x1d3)](_0x7c4a61(0x1d5)+match[0x1]+'&apiKey='+Config['SPDF_API'],{'responseType':_0x7c4a61(0x1cb)}));

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf, filename: 'SPDF.pdf', contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data })

    })); 

    Bot.addCommand({pattern: 'mediafire ?(.*)', fromMe: true, desc: MF_DESC}, (async (message, match) => {

    const _0x57d9ed=_0x2389;(function(_0x279f5c,_0x5daf94){const _0x305e49=_0x2389,_0x5c67b6=_0x279f5c();while(!![]){try{const _0x52b69e=parseInt(_0x305e49(0x1e2))/0x1+-parseInt(_0x305e49(0x1c4))/0x2+-parseInt(_0x305e49(0x1bd))/0x3*(-parseInt(_0x305e49(0x1bf))/0x4)+-parseInt(_0x305e49(0x1c6))/0x5+parseInt(_0x305e49(0x1c2))/0x6+-parseInt(_0x305e49(0x1da))/0x7+parseInt(_0x305e49(0x1cb))/0x8;if(_0x52b69e===_0x5daf94)break;else _0x5c67b6['push'](_0x5c67b6['shift']());}catch(_0x439f1a){_0x5c67b6['push'](_0x5c67b6['shift']());}}}(_0x54e7,0x62bd1));if(!match[0x1][_0x57d9ed(0x1d8)]('mediafire.com/file/'))return await message[_0x57d9ed(0x1ea)][_0x57d9ed(0x1dd)](message[_0x57d9ed(0x1e6)],NEED_MF_URL,MessageType[_0x57d9ed(0x1c9)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x57d9ed(0x1e4)]});function _0x54e7(){const _0x3df72d=['jpeg','png','title','JPEG','281841nxZqeM','OGG','data','url','jid','doc','DOC','jpg','client','SVG','result','body','MP4','1843107SsVklf','avi','4hYzXyG','WAV','DOX','998268KwyAGB','parse','521706qCAVjl','size','2300245ZHvQKi','&APIKEY=','mp3','text','PNG','3162536OttpDR','m4a','APK','mp4','PDF','mov','wav','dox','AVI','ogg','MOV','pdf','https://xteam.xyz/dl/mediafire?url=','includes','gif','2327990MWsePX','svg','M4A','sendMessage'];_0x54e7=function(){return _0x3df72d;};return _0x54e7();}let response=await got(_0x57d9ed(0x1d7)+match[0x1]+_0x57d9ed(0x1c7)+Config['XTEAM_API']),json=JSON[_0x57d9ed(0x1c3)](response[_0x57d9ed(0x1ed)]);if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1df)))WMediaType=ImG;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes']('jpg'))WMediaType=ImG;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1de)))WMediaType=ImG;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)]('svg'))WMediaType=ImG;else{if(json['result'][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1ce)))WMediaType=ViD;else{if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d9)))WMediaType=ViD;else{if(json['result'][_0x57d9ed(0x1e5)]['includes']('avi'))WMediaType=ViD;else{if(json[_0x57d9ed(0x1ec)]['url'][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d0)))WMediaType=ViD;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1c8)))WMediaType=AuD;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1d4)))WMediaType=AuD;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1cc)))WMediaType=AuD;else{if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d1)))WMediaType=AuD;else{if(json[_0x57d9ed(0x1ec)]['url']['includes']('apk'))WMediaType=ApK;else{if(json['result'][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1d6)))WMediaType=dOc;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes']('doc'))WMediaType=dOc;else json[_0x57d9ed(0x1ec)]['url'][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d2))?WMediaType=dOc:WMediaType=Unk;}}}}}}}}}}}}}}if(json[_0x57d9ed(0x1ec)]['url']['includes']('png'))Extention=_0x57d9ed(0x1ca);if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1e9)))Extention='JPG';if(json[_0x57d9ed(0x1ec)]['url']['includes'](_0x57d9ed(0x1de)))Extention=_0x57d9ed(0x1e1);if(json[_0x57d9ed(0x1ec)]['url'][_0x57d9ed(0x1d8)](_0x57d9ed(0x1db)))Extention=_0x57d9ed(0x1eb);function _0x2389(_0x35897e,_0x3aafbb){const _0x54e7d5=_0x54e7();return _0x2389=function(_0x238915,_0x25df1d){_0x238915=_0x238915-0x1bc;let _0x32ec45=_0x54e7d5[_0x238915];return _0x32ec45;},_0x2389(_0x35897e,_0x3aafbb);}if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1ce)))Extention=_0x57d9ed(0x1bc);if(json[_0x57d9ed(0x1ec)]['url'][_0x57d9ed(0x1d8)]('gif'))Extention='GIF';if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1be)))Extention=_0x57d9ed(0x1d3);if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d0)))Extention=_0x57d9ed(0x1d5);if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1c8)))Extention='MP3';if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1d4)))Extention=_0x57d9ed(0x1e3);if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1cc)))Extention=_0x57d9ed(0x1dc);if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d1)))Extention=_0x57d9ed(0x1c0);if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)]('apk'))Extention=_0x57d9ed(0x1cd);if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d6)))Extention=_0x57d9ed(0x1cf);if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1e7)))Extention=_0x57d9ed(0x1e8);if(json['result']['url'][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d2)))Extention=_0x57d9ed(0x1c1);await message[_0x57d9ed(0x1ea)][_0x57d9ed(0x1dd)](message[_0x57d9ed(0x1e6)],TITLE+'\x20:\x20'+json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e0)]+'\x0a'+SIZE+'\x20:\x20'+json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1c5)]+'\x0a'+MediaType+'\x20:\x20'+WMediaType+'\x0a'+EXT+'\x20:\x20'+Extention+'\x0a'+URL+'\x20:\x20'+json['result'][_0x57d9ed(0x1e5)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x57d9ed(0x1e4)]});

    }));
}
else if (Config.WORKTYPE == 'public') {

    Bot.addCommand({pattern: 'spdf ?(.*)', fromMe: false, desc: Lang.SPDF_DESC }, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(Lang.SPDF_LINK);

    var webimage = function _0x5a9d(_0x3d53f6,_0x3dc2ef){var _0x33a7d8=_0x33a7();return _0x5a9d=function(_0x5a9d94,_0x863278){_0x5a9d94=_0x5a9d94-0x1c8;var _0x35cdbf=_0x33a7d8[_0x5a9d94];return _0x35cdbf;},_0x5a9d(_0x3d53f6,_0x3dc2ef);}function _0x33a7(){var _0x1fe891=['4053850GHXjBN','279214OQodpW','369195ILSoaI','6mJizOa','1727215jJLIsx','12PZZnLL','get','3077271YFuZvS','https://api.html2pdf.app/v1/generate?url=','1915803xpIYWF','893600FfXgMi','44OEYKig','arraybuffer','2LmSDkj'];_0x33a7=function(){return _0x1fe891;};return _0x33a7();}var _0x7c4a61=_0x5a9d;(function(_0x2c08cc,_0x19e215){var _0x483dcb=_0x5a9d,_0x146128=_0x2c08cc();while(!![]){try{var _0x504d2e=-parseInt(_0x483dcb(0x1cc))/0x1*(-parseInt(_0x483dcb(0x1ce))/0x2)+-parseInt(_0x483dcb(0x1d4))/0x3+parseInt(_0x483dcb(0x1d2))/0x4*(parseInt(_0x483dcb(0x1cf))/0x5)+-parseInt(_0x483dcb(0x1d0))/0x6*(parseInt(_0x483dcb(0x1d1))/0x7)+-parseInt(_0x483dcb(0x1c9))/0x8+-parseInt(_0x483dcb(0x1c8))/0x9+parseInt(_0x483dcb(0x1cd))/0xa*(parseInt(_0x483dcb(0x1ca))/0xb);if(_0x504d2e===_0x19e215)break;else _0x146128['push'](_0x146128['shift']());}catch(_0x3f4c95){_0x146128['push'](_0x146128['shift']());}}}(_0x33a7,0x80392),await axios[_0x7c4a61(0x1d3)](_0x7c4a61(0x1d5)+match[0x1]+'&apiKey='+Config['SPDF_API'],{'responseType':_0x7c4a61(0x1cb)}));

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf, filename: 'SPDF.pdf', contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data })

    }));   

    Bot.addCommand({pattern: 'mediafire ?(.*)', fromMe: false, desc: MF_DESC}, (async (message, match) => {

    const _0x57d9ed=_0x2389;(function(_0x279f5c,_0x5daf94){const _0x305e49=_0x2389,_0x5c67b6=_0x279f5c();while(!![]){try{const _0x52b69e=parseInt(_0x305e49(0x1e2))/0x1+-parseInt(_0x305e49(0x1c4))/0x2+-parseInt(_0x305e49(0x1bd))/0x3*(-parseInt(_0x305e49(0x1bf))/0x4)+-parseInt(_0x305e49(0x1c6))/0x5+parseInt(_0x305e49(0x1c2))/0x6+-parseInt(_0x305e49(0x1da))/0x7+parseInt(_0x305e49(0x1cb))/0x8;if(_0x52b69e===_0x5daf94)break;else _0x5c67b6['push'](_0x5c67b6['shift']());}catch(_0x439f1a){_0x5c67b6['push'](_0x5c67b6['shift']());}}}(_0x54e7,0x62bd1));if(!match[0x1][_0x57d9ed(0x1d8)]('mediafire.com/file/'))return await message[_0x57d9ed(0x1ea)][_0x57d9ed(0x1dd)](message[_0x57d9ed(0x1e6)],NEED_MF_URL,MessageType[_0x57d9ed(0x1c9)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x57d9ed(0x1e4)]});function _0x54e7(){const _0x3df72d=['jpeg','png','title','JPEG','281841nxZqeM','OGG','data','url','jid','doc','DOC','jpg','client','SVG','result','body','MP4','1843107SsVklf','avi','4hYzXyG','WAV','DOX','998268KwyAGB','parse','521706qCAVjl','size','2300245ZHvQKi','&APIKEY=','mp3','text','PNG','3162536OttpDR','m4a','APK','mp4','PDF','mov','wav','dox','AVI','ogg','MOV','pdf','https://xteam.xyz/dl/mediafire?url=','includes','gif','2327990MWsePX','svg','M4A','sendMessage'];_0x54e7=function(){return _0x3df72d;};return _0x54e7();}let response=await got(_0x57d9ed(0x1d7)+match[0x1]+_0x57d9ed(0x1c7)+Config['XTEAM_API']),json=JSON[_0x57d9ed(0x1c3)](response[_0x57d9ed(0x1ed)]);if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1df)))WMediaType=ImG;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes']('jpg'))WMediaType=ImG;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1de)))WMediaType=ImG;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)]('svg'))WMediaType=ImG;else{if(json['result'][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1ce)))WMediaType=ViD;else{if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d9)))WMediaType=ViD;else{if(json['result'][_0x57d9ed(0x1e5)]['includes']('avi'))WMediaType=ViD;else{if(json[_0x57d9ed(0x1ec)]['url'][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d0)))WMediaType=ViD;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1c8)))WMediaType=AuD;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1d4)))WMediaType=AuD;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1cc)))WMediaType=AuD;else{if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d1)))WMediaType=AuD;else{if(json[_0x57d9ed(0x1ec)]['url']['includes']('apk'))WMediaType=ApK;else{if(json['result'][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1d6)))WMediaType=dOc;else{if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes']('doc'))WMediaType=dOc;else json[_0x57d9ed(0x1ec)]['url'][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d2))?WMediaType=dOc:WMediaType=Unk;}}}}}}}}}}}}}}if(json[_0x57d9ed(0x1ec)]['url']['includes']('png'))Extention=_0x57d9ed(0x1ca);if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1e9)))Extention='JPG';if(json[_0x57d9ed(0x1ec)]['url']['includes'](_0x57d9ed(0x1de)))Extention=_0x57d9ed(0x1e1);if(json[_0x57d9ed(0x1ec)]['url'][_0x57d9ed(0x1d8)](_0x57d9ed(0x1db)))Extention=_0x57d9ed(0x1eb);function _0x2389(_0x35897e,_0x3aafbb){const _0x54e7d5=_0x54e7();return _0x2389=function(_0x238915,_0x25df1d){_0x238915=_0x238915-0x1bc;let _0x32ec45=_0x54e7d5[_0x238915];return _0x32ec45;},_0x2389(_0x35897e,_0x3aafbb);}if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1ce)))Extention=_0x57d9ed(0x1bc);if(json[_0x57d9ed(0x1ec)]['url'][_0x57d9ed(0x1d8)]('gif'))Extention='GIF';if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1be)))Extention=_0x57d9ed(0x1d3);if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d0)))Extention=_0x57d9ed(0x1d5);if(json['result'][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1c8)))Extention='MP3';if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1d4)))Extention=_0x57d9ed(0x1e3);if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)]['includes'](_0x57d9ed(0x1cc)))Extention=_0x57d9ed(0x1dc);if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d1)))Extention=_0x57d9ed(0x1c0);if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)]('apk'))Extention=_0x57d9ed(0x1cd);if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d6)))Extention=_0x57d9ed(0x1cf);if(json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e5)][_0x57d9ed(0x1d8)](_0x57d9ed(0x1e7)))Extention=_0x57d9ed(0x1e8);if(json['result']['url'][_0x57d9ed(0x1d8)](_0x57d9ed(0x1d2)))Extention=_0x57d9ed(0x1c1);await message[_0x57d9ed(0x1ea)][_0x57d9ed(0x1dd)](message[_0x57d9ed(0x1e6)],TITLE+'\x20:\x20'+json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1e0)]+'\x0a'+SIZE+'\x20:\x20'+json[_0x57d9ed(0x1ec)][_0x57d9ed(0x1c5)]+'\x0a'+MediaType+'\x20:\x20'+WMediaType+'\x0a'+EXT+'\x20:\x20'+Extention+'\x0a'+URL+'\x20:\x20'+json['result'][_0x57d9ed(0x1e5)],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x57d9ed(0x1e4)]});

    }));
}
