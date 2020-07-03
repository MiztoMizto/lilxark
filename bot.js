const Discord = require('discord.js');
const bot = new Discord.Client();
var colors = require('colors');
const ytdl = require('ytdl-core');
 

bot.on('ready', () => {
	console.log(colors.magenta('Veleno has been poured in beautiful woman drink!'));
	bot.user.setActivity("𝕷𝖎𝖑𝖝𝖆𝖗𝖐 bot", {
		type: "STREAMING",
		url: "https://www.twitch.tv/mizto_"
	});
});

bot.on('reconnecting', () => {
 console.log('Reconnecting!');
});
bot.on('disconnect', () => {
 console.log('Disconnect!');
});

var invalidFormat;
var np = false;
var npSong = "none";

bot.on('message', message => {
	if(message.author.id != '663840840808136725') {


		// REACTIONS / VOTING SYSTEM

		if(message.content == "%start" && message.channel.id === "728365399959142501") {
			var started = false;


			function startQueue() {

				started = true;

				var reactionsMsg;
				message.delete();

				let embed = new Discord.MessageEmbed()
				embed.setColor('f54242')
				embed.setTitle('MUSIC VOTE:')
				embed.setDescription('⏰ -> Omega\n🍹 -> Veleno\n💵 -> CA$H\n😢 -> $AD\n❔ -> Mystery\n🤩 -> Prodigy\n💔 -> BRKN HRTS');
				embed.setFooter('Casting votes can take up to a minute!')
				message.channel.send(embed).then(sentEmbed => {
					sentEmbed.react('⏰');
					sentEmbed.react('🍹');
					sentEmbed.react('💵');
					sentEmbed.react('😢');
					sentEmbed.react('❔');
					sentEmbed.react('🤩');
					sentEmbed.react('💔');
					reactionsMsg = sentEmbed;
					setTimeout(function getReact() {collect()}, 60000);
				});



				// CALCULATING THE REACTIONS

				function collect() {

					var msgId = reactionsMsg.id;
					var i = 0;
					var countArray = new Array();
					var arrayReact = new Array();
					var ogArray = new Array();
					var songVoted;
					var voteTimeout;
					var randomised = false;

					arrayReact = reactionsMsg.reactions.cache.array();

					for(i=0; i < arrayReact.length; i++) {
						countArray.push(arrayReact[i].count);
					};

					ogReact = reactionsMsg.reactions.cache.array();

					for(i=0; i < arrayReact.length; i++) {
						ogArray.push(arrayReact[i].count);
					};

					function bubbleSort(arr){
					   var len = arr.length;
					   for (var i = len-1; i>=0; i--){
					     for(var j = 1; j<=i; j++){
					       if(arr[j-1]>arr[j]){
					           var temp = arr[j-1];
					           arr[j-1] = arr[j];
					           arr[j] = temp;
					        }
					     }
					   }
					   return arr;
					};

					countArray = bubbleSort(countArray);

					for(i=0; i < ogArray.length; i++) {

						if(countArray[6] === ogArray[i]) {
							if(countArray[5] === ogArray[i]) {
								var rndm = Math.floor(Math.random() * 7);
								randomised = true;
								switch(rndm) {
									case 0:
										songVoted = "omega";
										voteTimeout = 152000;
										break;
									case 1:
										songVoted = "veleno";
										voteTimeout = 120000;
										break;
									case 2:
										songVoted = "cash";
										voteTimeout = 265000;
										break;
									case 3:
										songVoted = "sad";
										voteTimeout = 91000;
										break;
									case 4:
										songVoted = "mystery";
										voteTimeout = 139000;
										break;
									case 5:
										songVoted = "prodigy";
										voteTimeout = 140000;
										break;
									case 6:
										songVoted = "brkn";
										voteTimeout = 150000;
								};
							} else {
								switch(i) {
									case 0:
										songVoted = "omega";
										voteTimeout = 152000;
										break;
									case 1:
										songVoted = "veleno";
										voteTimeout = 120000;
										break;
									case 2:
										songVoted = "cash";
										voteTimeout = 265000;
										break;
									case 3:
										songVoted = "sad";
										voteTimeout = 91000;
										break;
									case 4:
										songVoted = "mystery";
										voteTimeout = 139000;
										break;
									case 5:
										songVoted = "prodigy";
										voteTimeout = 140000;
										break;
									case 6:
										songVoted = "brkn";
										voteTimeout = 150000;
								};
								randomised = false;
							}
						}

					};

					voteTimeout = parseInt(voteTimeout);

					npSong = songVoted;

					// DELETING REACTIONS
					reactionsMsg.delete();
					if(randomised == false) {
						message.channel.send(":smiling_imp: **VOTING OVER!** Song now playing: ``" + songVoted +"``. Use ``%join`` in your servers to join the stream!")
							.then(msg => {
								msg.delete({ timeout: voteTimeout });
							})
							.catch(console.error);
					} else {
						message.channel.send(":smiling_imp: **VOTING OVER!** Since you couldn't decide what you wanted to hear, I have picked ``" + songVoted +"``. Use ``%join`` in your servers to join the stream!")
							.then(msg => {
								msg.delete({ timeout: voteTimeout });
							})
							.catch(console.error);
					}
					

					//CLEARING THE ARRAY
					countArray = [];

					//STREAM SETUP

					bot.user.setActivity(npSong, {
						type: "STREAMING",
						url: "https://www.twitch.tv/mizto_"
					});

					np = true;

					//DISCONNECT AND REVOTE AGAIN
					setTimeout(function hhhhhh() {leaveIt()}, voteTimeout);

					function leaveIt() {
						startQueue();
						bot.user.setActivity("𝕷𝖎𝖑𝖝𝖆𝖗𝖐 bot", {
							type: "STREAMING",
							url: "https://www.twitch.tv/mizto_"
						});
					}
				}
			};

			if(started == false) {
				startQueue();
			}


		}











		//--------------------------------------------------------------------------------

		if(message.author.bot == true) {
			if(message.content.toLowerCase().includes("lilxark", "𝕷𝖎𝖑𝖝𝖆𝖗𝖐") == true) {
				message.channel.send(":imp: Hey bitch boi, use me to play / view lilxark's music!!!");
			}
		};

		if(message.content === "%ping") {
			message.channel.send("𝕲𝖆𝖓𝖌 :smiling_imp:");
		}

		else if(message.content === "%play") {
			message.channel.send(":imp: Enter song, boi! (`%play <song by lilxark>`)");
			invalidFormat = true;
		}

		if(message.content.includes("%join") == true) {
			const broadcast = bot.voice.createBroadcast();

			const voiceChannel = message.member.voice.channel;
			if (!voiceChannel)
				return message.channel.send("You need to be in a voice channel to play music!");

			voiceChannel.join();

			broadcast.play(npSong + '.mp3');
			message.channel.send(":smiling_imp: `" + npSong + "` is playing! Make sure to use `%lyrics " + npSong + "` to follow it :smiling_imp:");
			for (const connection of bot.voice.connections.values()) {
				connection.play(broadcast);
			};
			message.channel.send(":imp: Welcome to the stream gang!");
		}

		if(message.content.includes("%play") == true) {
			if(message.author.id === '210768656290938882') {
				if(invalidFormat != true) {
					var args = message.content.split(" ", 3);
					message.channel.send(":smiling_imp: Searching for `lilxark - " + args[1] + "`!");
					const broadcast = bot.voice.createBroadcast();

					const voiceChannel = message.member.voice.channel;
					if (!voiceChannel)
						return message.channel.send("You need to be in a voice channel to play music!");

					voiceChannel.join();

					if(args[1] === 'Veleno' || args[1] === 'veleno' || args[1] === 'poison' || args[1] === 'Poison') {
						broadcast.play('veleno.mp3');
						message.channel.send(":smiling_imp: `Veleno` is playing! Make sure to use `%lyrics veleno` to follow it :smiling_imp:");
						for (const connection of bot.voice.connections.values()) {
							connection.play(broadcast);
						np = true;
						npSong = "veleno";
						bot.user.setActivity("Veleno", {
							type: "STREAMING",
							url: "https://www.twitch.tv/mizto_"
						});
						};
					} else if(args[1] === 'sad' || args[1] === '$ad' || args[1] === 'Sad') {
						broadcast.play('sad.mp3');
						message.channel.send(":smiling_imp: `$ad` is playing! Make sure to use `%lyrics $ad` to follow it :smiling_imp:");
						for (const connection of bot.voice.connections.values()) {
							connection.play(broadcast);
						np = true;
						npSong = "sad";
						bot.user.setActivity("$AD", {
							type: "STREAMING",
							url: "https://www.twitch.tv/mizto_"
						});
						};
					} else if(args[1] === 'omega' || args[1] === 'Omega' || args[1] === 'OMEGA') {
						broadcast.play('omega.mp3');
						message.channel.send(":smiling_imp: `Omega` is playing! Make sure to use `%lyrics omega` to follow it :smiling_imp:");
						for (const connection of bot.voice.connections.values()) {
							connection.play(broadcast);
						np = true;
						npSong = "omega";
						bot.user.setActivity("Omega", {
							type: "STREAMING",
							url: "https://www.twitch.tv/mizto_"
						});
						};
					} else if(args[1] === 'prodigy' || args[1] === 'Prodigy') {
						broadcast.play('prodigy.mp3');
						message.channel.send(":smiling_imp: `Prodigy` is playing! Make sure to use `%lyrics prodigy` to follow it :smiling_imp:");
						for (const connection of bot.voice.connections.values()) {
							connection.play(broadcast);
						np = true;
						npSong = "prodigy";
						bot.user.setActivity("Prodigy", {
							type: "STREAMING",
							url: "https://www.twitch.tv/mizto_"
						});
						};
					} else if(args[1] === 'cash' || args[1] === 'ca$h'|| args[1] === 'Ca$h' || args[1] === 'Cash') {
						broadcast.play('cash.mp3');
						message.channel.send(":smiling_imp: `CA$H` is playing! Lyrics for this song are currently unavailable :imp:");
						for (const connection of bot.voice.connections.values()) {
							connection.play(broadcast);
						np = true;
						npSong = "cash";
						bot.user.setActivity("CA$H", {
							type: "STREAMING",
							url: "https://www.twitch.tv/mizto_"
						});
						};
					} else if(args[1] === 'mystery' || args[1] === 'Mystery'|| args[1] === 'mastery' || args[1] === 'Mastery') {
						broadcast.play('mystery.mp3');
						message.channel.send(":smiling_imp: `Mystery` is playing! Lyrics for this song are currently unavailable :imp:");
						for (const connection of bot.voice.connections.values()) {
							connection.play(broadcast);
						np = true;
						npSong = "mystery";
						bot.user.setActivity("Mystery", {
							type: "STREAMING",
							url: "https://www.twitch.tv/mizto_"
						});
						};
					} else if(args[1] === 'brkn' || args[1] === 'hrts') {
						broadcast.play('brkn.mp3');
						message.channel.send(":smiling_imp: `Brkn hrts` is playing! Lyrics for this song are currently unavailable :imp:");
						for (const connection of bot.voice.connections.values()) {
							connection.play(broadcast);
						np = true;
						npSong = "brkn";
						bot.user.setActivity("Brkn Hrts", {
							type: "STREAMING",
							url: "https://www.twitch.tv/mizto_"
						});
						};
					} else {
						if(np == true) {
							message.channel.send(":cold_face: This is icy moment! That song isn't out yet or it doesn't exist!");
						} else {
							message.channel.send(":cold_face: This is icy moment! That song isn't out yet or it doesn't exist! Anyways, I'm out, GANG!");
							voiceChannel.leave();
							np = false;
						}
					};
				} else {
					invalidFormat = false;
				}
			} else {
				message.channel.send(":smiling_imp: You don't have the permissions to use this command!");
			}

		}


		if(message.content === "%disconnect") {
			const voiceChannel = message.member.voice.channel;
			if (!voiceChannel) {
				return message.channel.send("You need to be in a voice channel to disconnect me!");
				return;
			};

			if(np == true) {
				voiceChannel.leave();
				message.channel.send("Disconnected :imp:");
			} else {
				message.channel.send("Don't try to shut me up boi, I'm not playing right now gang :imp:");
			};
			if (!voiceChannel)
				return message.channel.send("You need to be in a voice channel to disconnect me!");
		}

		if(message.content === "%help") {

			let embed = new Discord.MessageEmbed()
			embed.setColor('f370ff')
			embed.setTitle('I am here to help, gang:')
			embed.setDescription('Here is a list of commands, ' + message.author.username + ':\n\n:notes: **%songs** - `displays all available lilxark songs`\n\n:writing_hand: **%lyrics <song> [-t (-translate)]** - `displays lyrics / translations for the selected song`\n\n:loud_sound: **%join** - `join the xark stream!`\n\n:mute: **%disconnect** - `kill the xark vibe :(`\n\n:cd: **%albums** - `lilxark album list`\n\n:envelope_with_arrow: **%invite** - `CAST YOUR VOTES for the music!`');
			message.channel.send(embed);
		}

		if(message.content === "%invite") {
			message.channel.send(":smiling_imp: You can join the **voting server** by clicking on this link! https://discord.gg/YbPGQGb");
		}

		if(message.content === "%48376298") {
			message.delete();
			let embed = new Discord.MessageEmbed()
			embed.setColor('f370ff')
			embed.setTitle('XARK NEWS')
			embed.setDescription('**Yea boi skurru,**\n Xark news reports that *Lilxark* has deleted all of his songs and has rebranded as `lilenzicy`. We are still looking into the possibility of announced songs getting released! Stay icy, enzicy gang :smiling_imp:')
			message.channel.send(embed);
		}

		if(message.content === "%songs") {
			message.channel.send(":imp: lilxark's current music is: \n`Prodigy (Re-release)\nVELENO\n$ad\nOmega\nLUNĂ (Deleted)\nCA$H ft. dxyn\nMystery ft. arex\nFreeze$ ft. MZT (W.I.P)\nMENTOS (W.I.P)\n$TRAZI (W.I.P)\nCOVID-19 (W.I.P)\nWave$ ft. Arex (W.I.P)\nWind$ (W.I.P)\nIcy (W.I.P)\nBlue$ ft. zares\nPurblue ft. Arex (W.I.P)\nBeach$ (W.I.P)`\nMore in 2020 and 2021 tho :eyes:");
		}

		if(message.content === "%albums") {
			message.channel.send(":imp: lilxark's current albums are: \n\n:purple_heart: :blue_heart: - `cca. late 2020.`\n\nIcy - `cca. late 2020. / early 2021.`");
		}

		else if(message.content === "%lyrics") {
			message.channel.send(":imp: Enter song, boi! (`%lyrics <song by lilxark> [-t (-translate)]`)");
			invalidFormat = true;
		}

		else if(message.content.includes("%lyrics") == true) {
			var args = message.content.split(" ", 3);
			if(invalidFormat != true) {

				message.channel.send(":imp: Searching for `Lilxark - " + args[1] + "` lyrics...");
				console.log(colors.green(message.author.username) + colors.white(" has searched for " + colors.green(args[1])));

				if(args[2] === '-t' || args[2] === '-translate') {
					if(args[1] === 'Veleno' || args[1] === 'veleno' || args[1] === 'poison' || args[1] === 'Poison') {
						message.channel.send(":smiling_imp: Auto-translated lyrics for `Lilxark - Veleno`: `\n\n[Verse 1]\n\nWhen I am a hero with Nedal and I feel like Poison,\nlike a poison you're alone in the dark room,\nhow unhappy he seems to be without a gang of girls,\nthen you will have a broken heart as if it could flow boi.\nNo friend for this life is what it seems to be now,\nwhen you are alone for each time in your life band,\nhow would you like to be single without friends,\neven without a girl when they never love you.\n\n[Verse 2]\n\nPoison is a more dangerous substance for me,\nbut this happens when I'm always sad,\nwithout getting engaged to a beautiful girl it's ok,\nmy future is to feel alone as a rapper.\nMoney is more important than loving a female gang,\nmy life is like living alone with a lot of money,\nis what more kids like young eskers can do,\nas I am always a boy without loving a girl for now.\n\n[Verse 3]\n\nThe poison is also that I will always feel sad the gang,\npurple for them is male as poison but for me no,\nsad as always dark in my room so broken,\nin due course or boy destroyed life.\nPoison as the crown boy throws himself from my ice,\nI don't need COVID 19 because crown cough on my wrist,\nwhen dipings and viola is like being a toxic poison,\neh it's not good when the snake's viper bites you the truth.\n\n[END: VERY MUCH]\n\nYes, the colon colon virus is more dangerous\nof poison, yes gang skrr.\n`");
					} else if(args[1] === 'luna' || args[1] === 'Luna' || args[1] === 'Moon' || args[1] === 'moon' || args[1] === 'moonlight' || args[1] === 'Moonlight') {
						message.channel.send(":smiling_imp: Auto-translated lyrics for `Lilxark - LUNĂ`: `[IN A MONTH]\nSoyaa, Lilxark, full moon,\nSkkrrr\n\n[Verse 1]\nThe moon makes you disturb your sleep altogether,\nbut it is known that what you say is true.\nBut it lets you stay up until midnight,\nas if you were asleep as sleepless with your eyes open.\nThe night is as favorite as the day this time,\nwhen you are alone in the room through the darkness this is clear.\nWithout a girl next to you is like being sad as ever,\nand girls are deceiving you as if they didn't love you at all.\n\n[Verse 2]\nBoys like money more than believing in beautiful girls,\nas a lie it solves absolutely nothing for a girl\nin which they will not do good to you, but evil will always give\nand that means being heartbroken with pain.\n\n[Verse 3 - Repeat I]\nThe moon makes you disturb your sleep altogether,\nbut it is known that what you say is true.\nBut it lets you stay up until midnight,\nas if you were asleep as sleepless with your eyes open.\nThe night is as favorite as the day this time,\nwhen you are alone in the room through the darkness this is clear.\nWithout a girl next to you is like being sad as ever,\nand girls are deceiving you as if they didn't love you at all.\n\n[Verse 4]\nThe full moon is when you spend the weekend with no girls,\neven at a party with music at its best this brother.\nEither way it makes you lose your life for a beautiful girl\nlike being Romanian,\nbut it's not as easy to conquer as you think it is.\n`");
						message.channel.send("`\n[Verse 5 - Repeat II]\nThe moon makes you disturb your sleep altogether,\nbut it is known that what you say is true.\nBut it lets you stay up until midnight,\nas if you were asleep as sleepless with your eyes open.\nThe night is as favorite as the day this time,\nwhen you are alone in the room through the darkness this is clear.\nWithout a girl next to you is like being sad as ever,\nand girls are deceiving you as if they didn't love you at all.\n\n[END: MONTH]\nYeah, full moon gang as always,\nBoy with sadness on his soul, yeah bull.\n`");
					} else {
						message.channel.send(":cold_face: This is icy moment! There either isn't any translation for the song, or the song doesnt't exist! Maybe at 2020 tho :eyes:");
					}
					} else {
					if(args[1] === 'Veleno' || args[1] === 'veleno' || args[1] === 'poison' || args[1] === 'Poison') {
						message.channel.send(":smiling_imp: Lyrics for `Lilxark - Veleno`: `\n\n[INTRO: VELENO]\n\nLilxark, yeah, gang, \nVeleno boi skkrr!\n\n[Verse 1]\n\nWhen i do the heroan with nedal i feel like veleno,\nlike a poison you're alone boi in the dark room,\nhow looks like being unhappy without girls gang,\nthen you'll have a broken heart like it would flow boi.\nNo friend for this life is how it looks like being sad,\nwhen you're lonely for every time in your life gang,\nhow would you like to be single without friends,\neven without girlfriend when they never loves you.\n\n[Verse 2]\n\nIl veleno è una sostanza più pericolosa per me,\nperò questo succede quando sono sempre triste,\nsenza fidanzarmi con una ragazza bella è okay,\nil mio futuro è sentirmi solo come un rapper.\nMoney is more important than loving a girl gang,\nmy life is like living alone with big money boi,\nso it's what can do more teens like young eskere,\nas I'm always a boy without loving a girlfriend for now.\n\n[Verse 3]\n\nIl veleno è anche che mi sentirò triste sempre gang,\nviola per loro fa male come veleno però per me no,\ntriste come sempre buio in camera mia così spezzato,\nin due come broken heart il ragazzo distrutto la vita.\nVeleno come il ragazzo della corona tossisce dal mio ghiaccio, \nnon ho bisogno di COVID 19 perché tosse da corona sul mio polso,\nquando dipingi in viola è come essere un veleno tossico,\neh non va bene quando la vipera del serpente ti morde la verità.\n\n[END: VELENO]\n\nYeah, colonavirus più pericolosa \ndi veleno, yeah gang skrr.\n`");
					} else if(args[1] === 'sad' || args[1] === '$ad' || args[1] === 'Sad') {
						message.channel.send(":smiling_imp:: Lyrics for `Lilxark - $ad`: `\n\n18 but my new bitch 17,\nDon't drink but I do hella lean,\nCan't rhyme for shit but I'm hella clean,\nSay you love me but you hate me what the fuck you mean! (x2)\n\nI'm addicted to the money,\nI'm addicted to the drugs,\nAddicted to the bitches,\nI'm addicted to my plug. (x2)\n\nI don't take no for an answer\nMAC-11 turn you to a dancer\n\nGang boi that's my style\nYou ain't worth my while\n\n(I'm addicted to the money\nI'm addicted to the drugs\nAddicted to the bitches\nI'm addicted to my plug) x2\n\n18 but my new bitch 17,\nDon't drink but I do hella lean,\nCan't rhyme for shit but I'm hella clean,\nSay you love me but you hate me what the fuck you mean! (x2)\n\n(Fuck you mean) x7\n\nSay you love me but you hate me what the fuck you mean!\n`" )
					} else if(args[1] === 'omega' || args[1] === 'Omega' || args[1] === 'OMEGA') {
						message.channel.send(":smiling_imp:: Lyrics for `Lilxark - OMEGA`: `\n\n[INTRO: OMEGA]\nLilxark gang 2020 bois.\nOmega, oh yeah - skkrrr!!\n\n[Verse 1]\nMoney's like green dollars is when you're rich boi,\nthen you can buy something for flex so hell yeah bro.\nI'm like a new rapper so it's what I started to be a rapper,\nbut I never haved a big money enough being like true rapper.\nIs when I'm young so well I know how I can be,\nlike sad rapper i had a broken heart in my life without girls.\nI know I wasn't always happy last year,\nand brother like me must already to have a girlfriend for now.\n\n[Verse 2]\nOmega is just for not flexing lol it's just for elegance boi,\nIt costs so low than Rolex that's it anyway bro.\nBut the clock is for men's like being so elegant boi,\nThen Rolex is for flex like rappers with big money bro.\n\n[Verse 3]\nMoney's like green dollars is when you're rich boi,\nthen you can buy something for flex so hell yeah bro.\nI'm like a new rapper so it's what I started to be a rapper,\nbut I never haved a big money enough being like true rapper.\nIs when I'm young so well I know how I can be,\nlike sad rapper i had a broken heart in my life without girls.\nI know I wasn't always happy last year,\nand brother like me must already to have a girlfriend for now.\n\nMoney's like green dollars is when you're rich boi,\nI'm like a new rapper so it's what I started to be a rapper.\nIs when I'm young so well I know how I can be,\nbut brother like me must already to have a girlfriend for now.\n`");
						message.channel.send("`[Verse 4]\nOmega is just for not flexing lol it's just for elegance boi,\nIt costs so low than Rolex that's it anyway bro.\nBut the clock is for men's like being so elegant boi,\nThen Rolex is for flex like rappers with big money bro.\n\n[Verse 5]\nMoney's like green dollars is when you're rich boi,\nthen you can buy something for flex so hell yeah bro.\nI'm like a new rapper so it's what I started to be a rapper,\nbut I never haved a big money enough being like true rapper.\nIs when I'm young so well I know how I can be,\nlike sad rapper i had a broken heart in my life without girls.\nI know I wasn't always happy last year,\nand brother like me must already to have a girlfriend for now.\n\nMoney's like green dollars is when you're rich boi,\nI'm like a new rapper so it's what I started to be a rapper.\nIs when I'm young so well I know how I can be,\nbut brother like me must already to have a girlfriend for now.\n\n[END: OMEGA]\nYeah, big money boi like rich rappers\nthat produce the money's from his songs\nIt was about to get more girls in your life\nwhen you're a rapper with big money boi!\n`");
					} else if(args[1] === 'luna' || args[1] === 'Luna' || args[1] === 'Moon' || args[1] === 'moon' || args[1] === 'moonlight' || args[1] === 'Moonlight') {
						message.channel.send(":smiling_imp:: Lyrics for `Lilxark - LUNĂ`: `\n\n[INTRO: LUNĂ]\nSoyaa, Lilxark, lună plină,\nSkkrrr\n\n[Verse 1]\nLuna te face pe tine să-ți tulbure somnul de tot,\ndar se știe că este adevărat ceea ce zici tu.\nDar te lasă sa stai treaz până la miezul nopții,\ncum ar fii nedormit ca sleepless cu ochii deschiși.\nNoaptea este cât de preferată decât ziua de data asta,\ncând ești singur in cameră prin întuneric asta este clar.\nFără o fată lângă tine e cum ar fii trist ca întotdeauna,\nși te înșeală fetele cum ar fii ca nu te iubesc deloc.\n\n[Verse 2]\nBăieți plac banii decât să creadă în fete frumoase,\nca o minciună nu rezolvă absolut nimic pentru o fată\nîn care nu îți vor binele dar răul cu siguranță da mereu\nşi asta înseamnă să fii singur cu inimă frânt de dureri.\n\n[Verse 3 - Repeat I ]\nLuna te face pe tine să-ți tulbure somnul de tot,\ndar se știe că este adevărat ceea ce zici tu.\nDar te lasă sa stai treaz până la miezul nopții,\ncum ar fii nedormit ca sleepless cu ochii deschiși.\nNoaptea este cât de preferată decât ziua de data asta,\ncând ești singur in cameră prin întuneric asta este clar.\nFără o fată lângă tine e cum ar fii trist ca întotdeauna,\nși te înșeală fetele cum ar fii ca nu te iubesc deloc.\n\n[Verse 4]\nLuna plină este când îți petreci în week-end fără nicio fată,\nchiar și într-o petrecere cu muzică la maxim asta da frate.\nOricum te face să pierzi viața pentru o fată frumoasă \ncum ar fii românce,\ndar nu este așa de ușor să o cucerești cum crezi tu asta.`");
						message.channel.send("`\n[Verse 5 - Repeat II ]\nLuna te face pe tine să-ți tulbure somnul de tot,\ndar se știe că este adevărat ceea ce zici tu.\nDar te lasă sa stai treaz până la miezul nopții,\ncum ar fii nedormit ca sleepless cu ochii deschiși.\nNoaptea este cât de preferată decât ziua de data asta,\ncând ești singur in cameră prin întuneric asta este clar.\nFără o fată lângă tine e cum ar fii trist ca întotdeauna,\nși te înșeală fetele cum ar fii ca nu te iubesc deloc.\n\n[END: LUNĂ]\nYeah, gang lună plină ca întotdeauna,\nBăiat cu tristețe pe suflet, yeah boi.`");
					} else if(args[1] === "prodigy" || args[1] === "Prodigy") {
						message.channel.send(":smiling_imp: Lyrics for `Lilxark - Prodigy`: `\n\n[INTRO: PRODIGY]\n\nLilxark, yeah... gang, yeah..\nYeah skkrr!\n\n[Verse 1]\n\nThis was prodigy when I was a kid gang,\nlike 10 years old I had more friends yeah!\nI was happy like prodigy child gangg,\nlike we are having fun a lot outside yeah!\nLil brother was like my best friend ever,\nthat knows rapping like a kid yeah!\nTime passed and now my old friends is gone yeah,\nbecause everything was fake between friends!\nCall me Lilxark cause I'm sad boi as always gang,\nwithout girls and started being lonely yeahh!\nIt's what I merited in the future yeah!\nlike happy staying alone boi skrr boi!\n\n[Verse 2]\n\nProdigy, Prodigio, Minune (Yeah boi)\n\nMoney is my favourite than girls, is that always makes me happy when moneys spends flexing chains gang!\nProdigy is that feel me happy being single, I like money in my life than to have a girlfriend definitely.\n\n[Verse 3 - Repeat]\n\nThis was prodigy when I was a kid gang,\nlike 10 years old I had more friends yeah!\nI was happy like prodigy child gangg,\nlike we are having fun a lot outside yeah!\nLil brother was like my best friend ever,\nthat knows rapping like a kid yeah!\nTime passed and now my old friends is gone yeah,\nbecause everything was fake between friends!\nCall me Lilxark cause I'm sad boi as always gang,\nwithout girls and started being lonely yeahh!\nIt's what I merited in the future yeah!\nlike happy staying alone boi skrr boi!\n`");
					} else if(args[1] === 'cash' || args[1] === 'ca$h'|| args[1] === 'Ca$h' || args[1] === 'Cash') {
						message.channel.send(":smiling_imp: Lyrics for `Lilxark - CA$H` are currently unavailable!");
					} else if(args[1] === 'mystery' || args[1] === 'Mystery'|| args[1] === 'mastery' || args[1] === 'Mastery') {
						message.channel.send(":smiling_imp: Lyrics for `Lilxark - Mystery` are currently unavailable!");
					} else {
						message.channel.send(":cold_face: This is icy moment! No music found by the name: *" + args[1] + "*! Maybe at 2021 tho :eyes:? Try again boi!");
					}
				}
			} else {
				invalidFormat = false;
			}
		}
	}
})









 
bot.login(process.env.TOKEN);
