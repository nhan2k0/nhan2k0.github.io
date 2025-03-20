var images = [
	'bg1.jpg',
	'bg2.gif',
	'bg3.png',
	'bg4.gif',
	'bg5.png',
	'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8424458ae533c80a0fed89dc31',
	'https://cdn.discordapp.com/emojis/859395439547777035.gif',
	'https://cdn.discordapp.com/emojis/915902293667348480.gif',
	'https://cdn.discordapp.com/attachments/611425673642508290/947379656494051328/1637100266142.gif',
	'https://image.shutterstock.com/image-photo/man-screaming-sky-600w-330344243.jpg?width=450&height=450',
];


var img = document.getElementById("img");


function imgDisp(num) {
	var num = Math.floor(Math.random() * 10);
	img.style.backgroundImage = 'url("' + images[num] +'")';

}
imgDisp();