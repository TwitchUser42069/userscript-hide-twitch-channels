// ==UserScript==
// @name     Hide Shitty Channels
// @version  1
// @include https://twitch.tv/*
// @include https://www.twitch.tv/*
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
  // ## END ASMR
];


const selectors = [];

shittyChannels.forEach((shittyChannel) => {
  shittyChannel = shittyChannel.replace('"', '');
  shittyChannel = shittyChannel.replace('https://www.twitch.tv/', '');
  // block recommended tag (Firefox 103 needs layout.css.has-selector.enabled=true in about:config)
	selectors.push(`div:has(>[href="/${shittyChannel}"])`);
});


const selector = selectors.join(', ');
// console.log(selector);
GM_addStyle(`
	${selector} {
		display: none;
	}
`);
