// ==UserScript==
// @name     Hide Shitty Channels
// @version  1
// @include https://twitch.tv/*
// @include https://www.twitch.tv/*
// @homepage https://github.com/TwitchUser42069/userscript-hide-twitch-channels
// @updateURL https://raw.githubusercontent.com/TwitchUser42069/userscript-hide-twitch-channels/master/hide-twitch-channels.userscript.js
// @downloadURL https://raw.githubusercontent.com/TwitchUser42069/userscript-hide-twitch-channels/master/hide-twitch-channels.userscript.js
// ==/UserScript==

const style = document.createElement('style');
document.head.appendChild(style);

function GM_addStyle(css) {
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

const shittyChannels = [
  // ## ASMR
  // constant reruns:
  'https://www.twitch.tv/akuasmr',
  'https://www.twitch.tv/foxenkin',
  'https://www.twitch.tv/katrine',
  'https://www.twitch.tv/sharonqueen',
  'https://www.twitch.tv/whitespaa',
  'https://www.twitch.tv/asmr_kotya',
  'https://www.twitch.tv/castaway',
  'https://www.twitch.tv/malinkaa98',
  'https://www.twitch.tv/asmr_arale',
  'https://www.twitch.tv/sarenewild',
  'https://www.twitch.tv/ijenz',
  'https://www.twitch.tv/reneesrealm',
  'https://www.twitch.tv/firesighedchatsasmr',
  'https://www.twitch.tv/argelyasmr', // "Live" desc but not actually live
  // sometimes reruns:
  'https://www.twitch.tv/miwo',
  'https://www.twitch.tv/mirys',
  'https://www.twitch.tv/rubytrue',
  'https://www.twitch.tv/maryjleeee',
  'https://www.twitch.tv/lonixy_',
  'https://www.twitch.tv/violetta_purpur',
  'https://www.twitch.tv/jazminvt',
  'https://www.twitch.tv/riinahlucidvt',
  'https://www.twitch.tv/gwing',
  'https://www.twitch.tv/katyma12',
  'https://www.twitch.tv/maryjaneasmr',
  'https://www.twitch.tv/firesighedchatsasmr',
  'https://www.twitch.tv/ebybz',
  'https://www.twitch.tv/riza',
  'https://www.twitch.tv/solacesoulasmr', // this is a hard "sometimes", depends on your RR preference
  'https://www.twitch.tv/jessica_secrets',
  'https://www.twitch.tv/nefercali',
  'https://www.twitch.tv/caitlin',
  // random videos or 24/7 channels: (not streamers)
  'https://www.twitch.tv/asmr_massagess1',
  'https://www.twitch.tv/asmrmassagess1',
  'https://www.twitch.tv/asmrmassagers',
  'https://www.twitch.tv/asmr_while',
  'https://www.twitch.tv/fire_kitchen',
  'https://www.twitch.tv/hottubhotties',
  'https://www.twitch.tv/shinylisa',
  'https://www.twitch.tv/lightningstormclub',
  'https://www.twitch.tv/asmr_sleep_official',
  'https://www.twitch.tv/onlytrashtv',
  'https://www.twitch.tv/rainradio',
  'https://www.twitch.tv/movie_asmr',
  'https://www.twitch.tv/movie_asmr',
  'https://www.twitch.tv/enchantedsounds',
  'https://www.twitch.tv/northernserenity',
  'https://www.twitch.tv/naturetec',
  'https://www.twitch.tv/asmrmasssage',
  'https://www.twitch.tv/mountain_settler',
  'https://www.twitch.tv/narumihayase',
  'https://www.twitch.tv/relaxingsoundschannel',
  'https://www.twitch.tv/nobodylovesme_de',
  'https://www.twitch.tv/eternotwitch',
  'https://www.twitch.tv/beeeuphonia',
  'https://www.twitch.tv/seedowntown',
  'https://www.twitch.tv/holidayfireplace',
  'https://www.twitch.tv/al_markowicz',
  'https://www.twitch.tv/soundsofrelaxation',
  'https://www.twitch.tv/asmr_diamond',
  'https://www.twitch.tv/boyfriendai',
  'https://www.twitch.tv/wibetankachu',
  'https://www.twitch.tv/asmr_maker',
  'https://www.twitch.tv/coolsleepmusic',
  'https://www.twitch.tv/jocie_b_asmr',
  'https://www.twitch.tv/asmrobjects',
  'https://www.twitch.tv/manimeu',
  'https://www.twitch.tv/sleepy_earth',
  'https://www.twitch.tv/stormchaserirl',
  // rr vtubers or those static anime images with asmr sounds:
  'https://www.twitch.tv/japan_asmr',
  'https://www.twitch.tv/asmr_marie',
  'https://www.twitch.tv/asmr_moony',
  'https://www.twitch.tv/hina_asmr',
  'https://www.twitch.tv/asmr_kyoko',
  'https://www.twitch.tv/okaasan_asmr',
  'https://www.twitch.tv/asmr_dina',
  'https://www.twitch.tv/anamaneki',
  'https://www.twitch.tv/yunaasmr',
  'https://www.twitch.tv/asmr_3d',
  'https://www.twitch.tv/ahriiiiiiiiii',
  'https://www.twitch.tv/nyafangs', // not sure, could be real vtuber sometimes
  'https://www.twitch.tv/bia_and_luna',
  'https://www.twitch.tv/purestrawberryasmr',
  'https://www.twitch.tv/livingroom_tv',
  'https://www.twitch.tv/asrmforall',
  'https://www.twitch.tv/hermosuraia',
  'https://www.twitch.tv/keimiasmr',
  'https://www.twitch.tv/asmr_ushio',
  'https://www.twitch.tv/rudhi0305',
  'https://www.twitch.tv/mewlyna',
  'https://www.twitch.tv/azumiiasmr',
  'https://www.twitch.tv/babymelyssa',
  'https://www.twitch.tv/lightsidervibes',
  'https://www.twitch.tv/whobabycry',
  'https://www.twitch.tv/sujan___s2',
  'https://www.twitch.tv/sheekiyomi',
  'https://www.twitch.tv/novah_asmr',
  'https://www.twitch.tv/enoika',
  'https://www.twitch.tv/cutieloony',
  'https://www.twitch.tv/asmrcute',
  // spam channels
  'https://www.twitch.tv/clarix_6',
  'https://www.twitch.tv/honeyhazeee',
  'https://www.twitch.tv/ahn_rho',
  'https://www.twitch.tv/morenasmrs',
  'https://www.twitch.tv/borissavchenko', // not asmr
  'https://www.twitch.tv/bellota176',
  'https://www.twitch.tv/baeysia',
  'https://www.twitch.tv/therealdjinxx', // not asmr
  'https://www.twitch.tv/asmr_anee', // fake
  'https://www.twitch.tv/wpme_komoratreningowa', // not asmr
  'https://www.twitch.tv/xest13', // not asmr
  'https://www.twitch.tv/holygh0st777', // bible shit
  'https://www.twitch.tv/yukizena', // not asmr
  'https://www.twitch.tv/wsekor', // fake
  'https://www.twitch.tv/mesthretv', // ??
  'https://www.twitch.tv/blockysplashy',
  'https://www.twitch.tv/almightyraud',
  'https://www.twitch.tv/sbr717',
  'https://www.twitch.tv/phishybizniz',
  'https://www.twitch.tv/atiasadi',
  'https://www.twitch.tv/marish_asmr',
  'https://www.twitch.tv/asmr_gabisan',
  'https://www.twitch.tv/asmr_nisa',
  'https://www.twitch.tv/cortesdoserrado',
  'https://www.twitch.tv/snusoedij',
  'https://www.twitch.tv/gameboy2012j',
  'https://www.twitch.tv/l1ndstromdk',
  'https://www.twitch.tv/rosa_asmr',
  'https://www.twitch.tv/vivodesde',
  'https://www.twitch.tv/mqall',
  'https://www.twitch.tv/catprints3d',
  'https://www.twitch.tv/liveinahive',
  'https://www.twitch.tv/derplanki',
  'https://www.twitch.tv/pastille2',
  'https://www.twitch.tv/muerte_666',
  'https://www.twitch.tv/nicolas2954',
  'https://www.twitch.tv/brangames69',
  'https://www.twitch.tv/healingmeditation',
  'https://www.twitch.tv/0aava',
  'https://www.twitch.tv/audyanthony',
  'https://www.twitch.tv/nkkalxs',
  'https://www.twitch.tv/firepanda42',
  'https://www.twitch.tv/kabocha_no_tempura7',
  'https://www.twitch.tv/gamebience',
  'https://www.twitch.tv/mommarapper',
  'https://www.twitch.tv/maadasmrtriggers',
  'https://www.twitch.tv/asmr_for_you',
  'https://www.twitch.tv/gilbertocorcuera',
  'https://www.twitch.tv/cutestmanintheworld',
  'https://www.twitch.tv/tarokros',
  'https://www.twitch.tv/nevergotfamous',
  // ## END ASMR
];


const selectors = [];

shittyChannels.forEach((shittyChannel) => {
  shittyChannel = shittyChannel.replace('"', '');
  shittyChannel = shittyChannel.replace('https://www.twitch.tv/', '');
  // block recommended tag (Firefox 103 needs layout.css.has-selector.enabled=true in about:config)
	selectors.push(`div:has(>[href="/${shittyChannel}"])`);
	selectors.push(`.tw-tower>div:has(>div>div>div>article>div>div>div>div>a[href="/${shittyChannel}"])`); // lol
});


const selector = selectors.join(', ');
// console.log(selector);
GM_addStyle(`
	${selector} {
		display: none;
	}
`);
