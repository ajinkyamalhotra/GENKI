// bg
const clouds = require("./bg/Clouds.png");
const school = require("./bg/Genki school (Scaled).png");
const restaurant = require("./bg/Restaurant (Scaled).jpg");
const restaurantBedroom = require("./bg/Restaurant-Bedroom.png");
const park = require("./bg/Park.jpg");
const takeshiHouse = require("./bg/Takeshi-House.jpg");
const street = require("./bg/Street.png");
const naganoStation = require("./bg/Nagano Station.jpg");
const travelOffice = require("./bg/Travel Office.jpg");
const yamashitasOffice = require("./bg/Yamashitas Office.jpg");
const trainStation = require("./bg/Train Station.jpeg");
const classroom = require("./bg/Classroom.jpg");
const cafe = require("./bg/Cafe.jpg");
const hospital = require("./bg/Hospital.png");

// bgm
const take = require("./bgm/take.mp3");
const ishikariLore = require("./bgm/Ishikari Lore.m4a");

// speakers
const john = "ジョン";
const manager = "店長";
const yamashita = "山下先生";
const michiko = "みちこ";
const takeshi = "たけし";
const mary = "メアリー";
const infoAgent = "案内所の人";
const stationAttendant = "駅員（えきいん)";
const sue = "スー";
const ken = "けん";
const doctor = "医者（いしゃ）";

// sprites
const logo = require("./sprites/logo.png");
// Tutorial Images
const takeshiNeutral = require("./sprites/Takeshi-neutral.png");
const takeshiNeutralGif = require("./sprites/Takeshi-neutral-gif.gif");
const johnStudying = require("./sprites/John-studying.png");
const johnStudyingGif = require("./sprites/John-studying-gif.gif");
const johnWaiter = require("./sprites/John-waiter.png");
const johnWaiterGif = require("./sprites/John-waiter-gif.gif");
const managerNeutralGif = require("./sprites/Manager-neutral-gif.gif");
const managerNeutral = require("./sprites/Manager-neutral.png");
const yamashitaNeutral = require("./sprites/Yamashita-neutral.png");
const yamashitaNeutralGif = require("./sprites/Yamashita-neutral-gif.gif");
const maryNeutral = require("./sprites/Mary-neutral.png");
const maryNeutralGif = require("./sprites/Mary-neutral-gif.gif");
const maryTalking = require("./sprites/Mary-talking.png");
const maryTalkingGif = require("./sprites/Mary-talking-gif.gif");
const michikoNeutral = require("./sprites/Michiko-neutral.png");
const michikoNeutralGif = require("./sprites/Michiko-neutral-gif.gif");
const takeshiSweater = require("./sprites/Takeshi-sweater.png");
const takeshiSweaterGif = require("./sprites/Takeshi-sweater-gif.gif");
const takeshiTalking = require("./sprites/Takeshi-talking.png");
const takeshiTalkingGif = require("./sprites/Takeshi-talking-gif.gif");
const takeshiTemple = require("./sprites/Takeshi-temple.png");
const takeshiSoba = require("./sprites/Takeshi-soba.png");
const marySitting = require("./sprites/Mary-sitting.png");
const marySittingGif = require("./sprites/Mary-sitting-gif.gif");
const johnNeutral = require("./sprites/John-neutral.png");
const johnNeutralGif = require("./sprites/John-neutral-gif.gif");
const takeshiInSweater = require("./sprites/Takeshi-in-sweater.png");
const takeshiInSweaterGif = require("./sprites/Takeshi-in-sweater-gif.gif");
const infoAgentNeutral = require("./sprites/Info-Agent-neutral.png");
const infoAgentNeutralGif = require("./sprites/Info-Agent-neutral-gif.gif");
const johnWorried = require("./sprites/John-worried.png");
const johnWorriedGif = require("./sprites/John-worried-gif.gif");
const homeworkFile = require("./sprites/Homework-file.png");
const yamashitaInOffice = require("./sprites/Yamashita-in-office.png");
const yamashitaInOfficeGif = require("./sprites/Yamashita-in-office-gif.gif");
const stationAttendantSprite = require("./sprites/Station-attendant.png");
const stationAttendantGif = require("./sprites/Station-attendant-gif.gif");
const johnWithFile = require("./sprites/John-with-file.png");
const johnWithFileGif = require("./sprites/John-with-file-gif.gif");
const sueNeutral = require("./sprites/Sue-neutral.png");
const sueNeutralGif = require("./sprites/Sue-neutral-gif.gif");
const takeshiOverworked = require("./sprites/Takeshi-overworked.png");
const takeshiOverworkedGif = require("./sprites/Takeshi-overworked-gif.gif");
const kenNeutral = require("./sprites/Ken-neutral.png");
const kenNeutralGif = require("./sprites/Ken-neutral-gif.gif");
const marySick = require("./sprites/Mary-sick.png");
const marySickGif = require("./sprites/Mary-sick-gif.gif");
const doctorNeutral = require("./sprites/Doctor-neutral.png");
const doctorNeutralGif = require("./sprites/Doctor-neutral-gif.gif");

let story = [
  //////////////////////////Tutorial//////////////////////////////////////////
  {
    speaker: "Tutorial",
    spriteRight: "",
    spriteLeft: "",
    sprite: logo,
    bg: clouds,
    bgm: ishikariLore,
    text: "Click on the screen or press \"Enter\" to begin"
  },
  {
    bg: school,
    bgm: ishikariLore,
    sprite: takeshiNeutralGif,
    speaker: takeshi,
    text: "Hello! Welcome to Genki VN! My name is Takeshi and I am here to guide you on how to play the game. First let us press that “ENTER” button on your keyboard."
  },
  {
    text: "Well done! You made it to the next dialogue! Throughout Genki VN, multiple characters will be speaking like me. To navigate through their dialogues, you can simple press “ENTER” or click on the screen."
  },
  {
    text: "This is a Visual Novel game. A visual novel game is..."
  },
  {
    text: "Oh, hi Mary!"
  },
  {
    speaker: mary,
    sprite: "",
    spriteLeft: maryNeutralGif,
    spriteRight: takeshiTalking,
    text: "Hello Takeshi, who is your friend here?"
  },
  {
    speaker: takeshi,
    spriteLeft: maryNeutral,
    spriteRight: takeshiTalkingGif,
    text: "This is our guest! He is learning Japanese! Can you help me guide him through the game?"
  },
  {
    speaker: mary,
    spriteLeft: maryNeutralGif,
    spriteRight: takeshiTalking,
    text: "Sure! Let's get you ready for Genki VN!"
  },
  {
    speaker: takeshi,
    spriteLeft:maryNeutral,
    spriteRight: takeshiTalkingGif,
    text: "Now where was I? Oh yeah! Genki VN stands for Genki Visual Novel."
  },
  {
    text: "A place where you the player can see the story unfold throughout the chapters of Genki I or II in the form of dialogues between Genki characters like me and Mary!"
  },
  {
    text: "Genki VN is not only a great way to immerse yourself with the story in Genki textbooks, but also a fun way to learn Japanese!"
  },
  {
    text: "In Genki VN, you can learn about the new vocabulary presented within the dialogues and their translations by pressing the “SHIFT” button on your keyboard. In case you want to shift things around. See what I did there?"
  },
  {
    text: "What’s a game without giving the player options to toggle and fiddle with right? In Genki VN, there are settings you can choose from."
  },
  {
    speaker: mary,
    spriteLeft: maryNeutralGif,
    spriteRight: takeshiTalking,
    text: "By pressing the “SPACEBAR” on your keyboard, the page will scroll down for options to choose from! Here try it out, press the SPACEBAR."
  },
  {
    text: "What do we have here! So many options! Skip, Save, Load, Config, Full Screen. So many things you can do to enjoy Genki VN the way you want to!  I will explain about the SKIP button first."
  },
  {
    text: "With the the SKIP button, you can navigate through the dialogues without pushing anything. Upon clicking on SKIP, you will be prompted to input how many seconds you want between dialogues. Isn’t that neat?"
  },
  {
    speaker: takeshi,
    spriteLeft:maryNeutral,
    spriteRight: takeshiTalkingGif,
    text: "Don’t you hate it when you are playing a game and you have to reach a checkpoint to save your current progress...No? Well I do!"
  },
  {
    text: "In Genki VN, you can save your progress at any point and load back in whenever you desire. (*Sometimes I wish I could do this in real life to load back to the times I’ve bailed on Mary san...*)"
  },
  {
    text: "If you look next to the SKIP button, you can see the SAVE button. Once you click it, you will be able to select a slot, then click onto the big grey square to save your progress!"
  },
  {
    text: "Try it now, click a slot and then the square screen to save. NOTE: *Saves to local machine only and will not carry over if you play on a different device!*"
  },
  {
    speaker: mary,
    spriteLeft: maryNeutralGif,
    spriteRight: takeshiTalking,
    text: "Now that you know how to save, now it is time to learn how to load your saved progress. Next to the save button, you can see the LOAD button."
  },
  {
    text: "Upon clicking it, you will see all the save slots, the ones with save data will be black while the ones with no save data will be grey."
  },
  {
    text: "Click the desired save slot, then click on the big square. You will be prompted with “Load save? Click ok to load your game. *You will be taken back to the SAVE instructions"
  },
  {
    text: "Now that you mastered saving and loading your progress, let us take a look at the CONFIG button next to the load button."
  },
  {
    text: "With config, you can adjust the audio setting in the game (BGM) and also adjust the text font style. Why don’t you try it? Change the font style to Courier New."
  },
  {
    speaker: takeshi,
    spriteLeft:maryNeutral,
    spriteRight: takeshiTalkingGif,
    text: "Feeling fancy with all these tools huh? Well, we got something big for you, quiet literally."
  },
  {
    text: "You see that FULL SCREEN button to the right? If you click it, the game will go into full screen mode, things are looking big now huh? Have that skip option on, full screen mode and you have yourself Genki: The Movie!"
  },
  {
    text: "Don’t grab some popcorn just yet! We still got a tutorial to finish here!"
  },
  {
    text: "It’s time to jump around! You think I’m joking? In Genki VN, there is a JUMP feature that lets you well... jump back to previous dialogues you have read. "
  },
  {
    text: "Scroll up with your mouse while on the game’s screen to pull up the BACKLOG of all the previous dialogues read! By clicking on JUMP next to the dialogue you will be taken back to that moment in the game. Try it out!"
  },
  {
    text: "Congratulations on making it to the end of the tutorial! Thank you Mary for helping me teach our guest here today."
  },
  {
    speaker: mary,
    spriteLeft: maryNeutralGif,
    spriteRight: takeshiTalking,
    text: "I am glad I could help! Best of luck to you and have fun!"
  },
  {
    speaker: takeshi,
    sprite: takeshiNeutralGif,
    spriteLeft: "",
    spriteRight: "",
    text: "Before you go, I’d like to introduce to you the “T” command. By pressing “T” on your keyboard, you will be taken back to the game’s title screen. Press “T” to return to the game’s title."
  },
  {
    text: "Hmmm… it seems you did not press “T”...press “T” to return to the title screen."
  },
  {
    text: "Didn’t I tell you to press “T”?!... You know what, press ENTER and see what happens!"
  },
  {
    speaker: "",
    sprite: "",
    text: "End of tutorial"
  },



  //End of Tutorial

  //////////////////////////Chapter 11//////////////////////////////////////////
  {
    routeBegins: "chapter11Route",
    speaker: "Chapter 11",
    spriteRight: "",
    spriteLeft: "",
    sprite: logo,
    bg: clouds,
    bgm: ishikariLore,
    text: "Click on the screen or press \"Enter\" to begin",
    jumpTo: "chapter11"
  },

  //Scene 1, Michiko and Mary meet after the vacation
  {
    receiveJump: "chapter11",
    bg: school,
    bgm: ishikariLore,
    sprite: "",
    speaker: "Scene 1",
    text: "Michiko and Mary meet after the vacation"
  },
  {
    speaker: michiko,
    spriteRight: michikoNeutralGif,
    text: "メアリーさん、久しぶりですね。休みはどうでしたか。"
  },
  {
    speaker: mary,
    spriteLeft: maryNeutralGif,
    spriteRight: michikoNeutral,
    text: "すごく楽しかったです。韓国で買い物をしたり、韓国料理を食べたりしました。"
  },
  {
    speaker: michiko,
    spriteLeft: maryNeutral,
    spriteRight: michikoNeutralGif,
    text: "いいですね。私も旅行したいです。"
  },
  {
    speaker: mary,
    spriteLeft: maryNeutralGif,
    spriteRight: michikoNeutral,
    text: "みちこさんの休みは楽しかったですか。"
  },
  {
    speaker: michiko,
    spriteLeft: maryNeutral,
    spriteRight: michikoNeutralGif,
    text: "まあまあでした。一日だけドライブに行きましたが、毎日アルバイトをしていました。"
  },

  //Scene 2, Mary introduces John to Michiko
  {
    bg: school,
    bgm: ishikariLore,
    sprite: "",
    spriteLeft: "",
    spriteRight: "",
    speaker: "Scene 2",
    text: "Mary introduces John to Michiko"
  },
  {
    speaker: mary,
    spriteLeft: maryNeutralGif,
    text: "みちこさん、友だちを紹介します。こちらはジョンさんです。ジョンさんは先月、日本に来ました。"
  },
  {
    speaker: john,
    sprite: johnNeutralGif,
    spriteLeft: maryNeutral,
    text: "初めまして。"
  },
  {
    speaker: michiko,
    sprite: johnNeutral,
    spriteLeft: maryNeutral,
    spriteRight: michikoNeutralGif,
    text: "初めまして、山川みちこです。"
  },

  //Scene 3, John talks about himself
  {
    bg: school,
    bgm: ishikariLore,
    sprite: "",
    spriteLeft: "",
    spriteRight: "",
    speaker: "Scene 3",
    text: "John talks about himself"
  },
  {
    speaker: michiko,
    spriteRight: michikoNeutralGif,
    text: "ジョンさん、出身はどこですか。"
  },
  {
    speaker: john,
    spriteLeft: johnNeutralGif,
    spriteRight: michikoNeutral,
    text: "オーストラリアのケアンズです。"
  },
  {
    speaker: michiko,
    spriteLeft: johnNeutral,
    spriteRight: michikoNeutralGif,
    text: "そうですか。"
  },
  {
    speaker: john,
    spriteLeft: johnNeutralGif,
    spriteRight: michikoNeutral,
    text: "みちこさんはケアンズに行ったことがありますか。"
  },
  {
    speaker: michiko,
    spriteLeft: johnNeutral,
    spriteRight: michikoNeutralGif,
    text: "いいえ、ありません。"
  },
  {
    speaker: john,
    spriteLeft: johnNeutralGif,
    spriteRight: michikoNeutral,
    text: "山や海があって、きれいな所ですよ。グレートバリアリーフで有名です。みちこさんはどこの出身ですか。"
  },
  {
    speaker: michiko,
    spriteLeft: johnNeutral,
    spriteRight: michikoNeutralGif,
    text: "長野です。今度遊びに来てください。食べ物もおいしいですよ。"
  },
  {
    speaker: john,
    spriteLeft: johnNeutralGif,
    spriteRight: michikoNeutral,
    text: "ぜひ、行きたいです。"
  },

  //////////////////////////Chapter 12//////////////////////////////////////////
  {
    routeBegins: "chapter12Route",
    speaker: "Chapter 12",
    spriteRight: "",
    spriteLeft: "",
    sprite: logo,
    bg: clouds,
    bgm: ishikariLore,
    text: "Click on the screen or press \"Enter\" to begin",
    jumpTo: "chapter12"
  },

  //Scene 1, Mary and Michiko are talking at school
  {
    receiveJump: "chapter12",
    bg: classroom,
    bgm: ishikariLore,
    sprite: "",
    speaker: "Scene 1",
    text: "Mary and Michiko are talking at school"
  },
  {
    speaker: michiko,
    spriteRight: michikoNeutralGif,
    text: "メアリーさん、元気がありませんね。"
  },
  {
    speaker: mary,
    spriteLeft: marySickGif,
    spriteRight: michikoNeutral,
    text: "うーん。ちょっとおなかが痛いんです。"
  },
  {
    speaker: michiko,
    spriteLeft: marySick,
    spriteRight: michikoNeutralGif,
    text: "どうしたんですか。"
  },
  {
    speaker: mary,
    spriteLeft: marySickGif,
    spriteRight: michikoNeutral,
    text: "きのう友だちと晩ご飯を食べに行ったんです。たぶん食べすぎたんだと思います。"
  },
  {
    speaker: michiko,
    spriteLeft: marySick,
    spriteRight: michikoNeutralGif,
    text: "大丈夫ですか。"
  },
  {
    speaker: mary,
    spriteLeft: marySickGif,
    spriteRight: michikoNeutral,
    text: "ええ。心配しないでください。……ああ、痛い。"
  },
  {
    speaker: michiko,
    spriteLeft: marySick,
    spriteRight: michikoNeutralGif,
    text: "病院に行った方がいいですよ。"
  },

  //Scene 2, At a hospital.
  {
    bg: hospital,
    bgm: ishikariLore,
    sprite: "",
    spriteLeft: "",
    spriteRight: "",
    speaker: "Scene 2",
    text: "At a hospital."
  },
  {
    speaker: mary,
    spriteLeft: marySickGif,
    text: "先生、のどが痛いんです。きのうはおなかが痛かったんです。"
  },
  {
    speaker: doctor,
    spriteRight: doctorNeutralGif,
    spriteLeft: marySick,
    text: "ああ、そうですか。熱もありますね。かぜですね。"
  },
  {
    speaker: mary,
    spriteRight: doctorNeutral,
    spriteLeft: marySickGif,
    text: "あの、もうすぐテニスの試合があるので、練習しなきゃいけないんですが……。"
  },
  {
    speaker: doctor,
    spriteRight: doctorNeutralGif,
    spriteLeft: marySick,
    text: "二三日、運動しないほうがいいでしょう。"
  },
  {
    speaker: mary,
    spriteRight: doctorNeutral,
    spriteLeft: marySickGif,
    text: "わかりました。"
  },
  {
    speaker: doctor,
    spriteRight: doctorNeutralGif,
    spriteLeft: marySick,
    text: "今日は薬を飲んで、早く寝てください。"
  },
  {
    speaker: mary,
    spriteRight: doctorNeutral,
    spriteLeft: marySickGif,
    text: "はい、ありがとうございました。"
  },
  {
    speaker: doctor,
    spriteRight: doctorNeutralGif,
    spriteLeft: marySick,
    text: "お大事に。"
  },

  //////////////////////////Chapter 13//////////////////////////////////////////
  {
    routeBegins: "chapter13Route",
    speaker: "Chapter 13",
    spriteRight: "",
    spriteLeft: "",
    sprite: logo,
    bg: clouds,
    bgm: ishikariLore,
    text: "Click on the screen or press \"Enter\" to begin",
    jumpTo: "chapter13"
  },

  //Scene 1, john calls Little Asia
  {
    receiveJump: "chapter13",
    bg: restaurantBedroom,
    bgm: ishikariLore,
    sprite: "",
    speaker: "Scene 1",
    text: "John calls Little Asia."
  },
  {
    speaker: manager,
    spriteLeft: managerNeutralGif,
    text: "はい、「リトル・アジア」です。"
  },
  {
    speaker: john,
    spriteRight: johnStudyingGif,
    spriteLeft: managerNeutral,
    text: "私、ジョン・ワンと申します。アルバイト募集の広告を見たんですが。"
  },
  {
    speaker: manager,
    spriteLeft: managerNeutralGif,
    spriteRight: johnStudying,
    text: "そうですか。じゃあ、会って、話しましょうか。今日店に来られますか。"
  },
  {
    speaker: john,
    spriteRight: johnStudyingGif,
    spriteLeft: managerNeutral,
    text: "今日はちょっと行けないんですが、あしたなら行けると思います。"
  },
  {
    speaker: manager,
    spriteLeft: managerNeutralGif,
    spriteRight: johnStudying,
    text: "そうですか。今日はだめですか。じゃあ、あしたの一時ごろはどうですか。"
  },
  {
    speaker: john,
    spriteRight: johnStudyingGif,
    spriteLeft: managerNeutral,
    text: "一時ですね。わかりました。"
  },

  //Scene 2, John arrives for interview at Little Asia
  {
    bg: restaurant,
    bgm: ishikariLore,
    speaker: "Scene 2",
    spriteLeft: "",
    spriteRight: "",
    text: "John arrives for interview at Little Asia"
  },
  {
    speaker: manager,
    spriteLeft: managerNeutralGif,
    text: "ワンさんはどうしてこのアルバイトに興味があるんですか。"
  },
  {
    speaker: john,
    spriteLeft: managerNeutral,
    spriteRight: johnWaiterGif,
    text: "おもしろそうですから。いろいろな人に会えるし、日本語も使えるし。"
  },
  {
    speaker: manager,
    spriteLeft: managerNeutralGif,
    spriteRight: johnWaiter,
    text: "レストランで働いたことがありますか。"
  },
  {
    speaker: john,
    spriteLeft: managerNeutral,
    spriteRight: johnWaiterGif,
    text: "はい。ウェイターならしたことがあります。"
  },
  {
    speaker: manager,
    spriteLeft: managerNeutralGif,
    spriteRight: johnWaiter,
    text: "あしたから始められますか。"
  },
  {
    speaker: john,
    spriteLeft: managerNeutral,
    spriteRight: johnWaiterGif,
    text: "はい。よろしくお願いします。"
  },
  {
    speaker: manager,
    spriteLeft: managerNeutralGif,
    spriteRight: johnWaiter,
    text: "がんばってください。"
  },

  //Scene 3, John is on the job at the restaurant
  {
    bg: restaurant,
    bgm: ishikariLore,
    speaker: "Scene 3",
    spriteLeft: "",
    spriteRight: "",
    text: "Professor Yamashita comes to Little Asia"
  },
  {
    bg: restaurant,
    bgm: ishikariLore,
    speaker: john,
    spriteRight: johnWaiterGif,
    text: "いらっしゃいませ。あ、山下先生。"
  },
  {
    speaker: yamashita,
    spriteRight: johnWaiter,
    spriteLeft: yamashitaNeutralGif,
    text: "ジョンさん。ここでアルバイトをしているんですか。"
  },
  {
    speaker: john,
    spriteRight: johnWaiterGif,
    spriteLeft: yamashitaNeutral,
    text: "ええ。一週間に三日働いています。"
  },
  {
    speaker: yamashita,
    spriteRight: johnWaiter,
    spriteLeft: yamashitaNeutralGif,
    text: "そうですか。どれがおいしいですか。"
  },
  {
    speaker: john,
    spriteRight: johnWaiterGif,
    spriteLeft: yamashitaNeutral,
    text: "このカレーが一番人気がありますよ。"
  },
  {
    speaker: yamashita,
    spriteRight: johnWaiter,
    spriteLeft: yamashitaNeutralGif,
    text: "おいしそうですね。じゃあ、食べてみます。"
  },

  //////////////////////////Chapter 14//////////////////////////////////////////
  {
    routeBegins: "chapter14Route",
    speaker: "Chapter 14",
    spriteRight: "",
    spriteLeft: "",
    sprite: logo,
    bg: clouds,
    bgm: ishikariLore,
    text: "Click on the screen or press \"Enter\" to begin",
    jumpTo: "chapter14"
  },

  //Scene 1, A month before Valentine's Day.
  {
    receiveJump: "chapter14",
    speaker: "Scene 1",
    bg: park,
    sprite: "",
    spriteLeft: "",
    spriteRight: "",
    text: "A month before Valentine's Day."
  },
  {
    bgm: ishikariLore,
    speaker: mary,
    spriteLeft: maryNeutralGif,
    text: "バレンタインのプレゼントは何がいいと思いますか。"
  },
  {
    speaker: michiko,
    spriteLeft: maryNeutral,
    spriteRight: michikoNeutralGif,
    text:
      "そうですね。たけしさんはいつも同じセーターを着ているから、セーターをあげたらどうですか。"
  },
  {
    speaker: mary,
    spriteLeft: maryNeutralGif,
    spriteRight: michikoNeutral,
    text: "それはいいかもしれませんね。"
  },

  //Scene 2, On Valentine's Day at Takeshi's house.
  {
    speaker: "Scene 2",
    bg: takeshiHouse,
    spriteLeft: "",
    spriteRight: "",
    text: "On Valentine's Day at Takeshi's house."
  },
  {
    bgm: ishikariLore,
    speaker: mary,
    spriteRight: marySittingGif,
    text: "たけしくん、はい、これ。"
  },
  {
    speaker: takeshi,
    spriteLeft: takeshiSweaterGif,
    spriteRight: marySitting,
    text: "えっ、ぼくに？どうもありがとう。開けてもいい？"
  },
  {
    speaker: mary,
    spriteLeft: takeshiSweater,
    spriteRight: marySittingGif,
    text: "うん。"
  },
  {
    speaker: takeshi,
    spriteLeft: takeshiSweaterGif,
    spriteRight: marySitting,
    text:
      "わあ、いいね、このセーター。こんなのがほしかったんだ。メアリーが編んだの？"
  },
  {
    speaker: mary,
    spriteLeft: takeshiSweater,
    spriteRight: marySittingGif,
    text: "うん、小さいかもしれないから着てみて。"
  },

  {
    speaker: takeshi,
    spriteLeft: takeshiSweaterGif,
    spriteRight: marySitting,
    text: "ちょうどいいよ。ありがとう。"
  },

  //Scene 3, The next day.
  {
    speaker: "Scene 3",
    bg: street,
    spriteLeft: "",
    spriteRight: "",
    text: "The next day."
  },
  {
    bgm: ishikariLore,
    speaker: john,
    spriteLeft: johnNeutralGif,
    text: "暖かそうなセーターですね。"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiInSweaterGif,
    spriteLeft: johnNeutral,
    text: "これ、メアリーがくれたんです。"
  },
  {
    speaker: john,
    spriteRight: takeshiInSweater,
    spriteLeft: johnNeutralGif,
    text:
      "よく似合っていますよ。ぼくも彼女がほしいなあ。ロバートさんはチョコレートを十個ももらったんですよ。"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiInSweaterGif,
    spriteLeft: johnNeutral,
    text: "へえ、すごいですね。ジョンさんは？"
  },

  {
    speaker: john,
    spriteRight: takeshiInSweater,
    spriteLeft: johnNeutralGif,
    text: "ぼくは一個しかもらえませんでした。大家さんから。さびしいなあ。"
  },

  {
    speaker: takeshi,
    spriteRight: takeshiInSweaterGif,
    spriteLeft: johnNeutral,
    text: "でも、ロバートさんはホワイトデーが大変ですよ。"
  },
  {
    speaker: john,
    spriteRight: takeshiInSweater,
    spriteLeft: johnNeutralGif,
    text: "ホワイトデー？"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiInSweaterGif,
    spriteLeft: johnNeutral,
    text: "ええ、男の人は三月十四日にお返しをしなきゃいけないんですよ。"
  },

  ////////////////////Chapter 15 below//////////////////////////////////////
  {
    routeBegins: "chapter15Route",
    speaker: "Chapter 15",
    spriteRight: "",
    spriteLeft: "",
    sprite: logo,
    bg: clouds,
    bgm: ishikariLore,
    text: "Click on the screen or press \"Enter\" to begin",
    jumpTo: "chapter15"
  },

  //Scene 1, Before the vacation
  {
    receiveJump: "chapter15",
    speaker: "Scene 1",
    bg: school,
    sprite: "",
    spriteLeft: "",
    spriteRight: "",
    text: "Before the vacation"
  },
  {
    bgm: ishikariLore,
    speaker: mary,
    spriteLeft: maryTalkingGif,
    text: "たけしくん、今度の休み、予定ある？"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiTalkingGif,
    spriteLeft: maryTalking,
    text: "ううん。別に。どうして？"
  },
  {
    speaker: mary,
    spriteRight: takeshiTalking,
    spriteLeft: maryTalkingGif,
    text: "みちこさんの長野のうちに行こうと思ってるんだけど、一緒に行かない？"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiTalkingGif,
    spriteLeft: maryTalking,
    text: "いいの？"
  },

  {
    speaker: mary,
    spriteRight: takeshiTalking,
    spriteLeft: maryTalkingGif,
    text: "うん。みちこさんが、「たけしくんも誘って」と言ってたから。"
  },

  {
    speaker: takeshi,
    spriteRight: takeshiTalkingGif,
    spriteLeft: maryTalking,
    text: "じゃあ、行く。電車の時間、調べておくよ。"
  },
  {
    speaker: mary,
    spriteRight: takeshiTalking,
    spriteLeft: maryTalkingGif,
    text: "ありがとう。じゃあ、私、みちこさんに電話しておく。"
  },

  //Scene 2, At Nagano Station.
  {
    speaker: "Scene 2",
    bg: naganoStation,
    spriteLeft: "",
    spriteRight: "",
    text: "At Nagano Station."
  },
  {
    bgm: ishikariLore,
    speaker: takeshi,
    spriteRight: takeshiTalkingGif,
    text: "早く着いたから、ちょっと観光しない？"
  },
  {
    speaker: mary,
    spriteLeft: maryTalkingGif,
    spriteRight: takeshiTalking,
    text: "うん。どこに行く？"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiTalkingGif,
    spriteLeft: maryTalking,
    sprite: takeshiTemple,
    text: "善光寺はどう？有名なお寺だよ。"
  },
  {
    speaker: mary,
    spriteRight: takeshiTalking,
    spriteLeft: maryTalkingGif,
    text: "そうだね。昼ご飯は何にする？"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiTalkingGif,
    spriteLeft: maryTalking,
    sprite: takeshiSoba,
    text: "長野はそばがおいしいから、そばを食べようよ。"
  },

  //Scene 3, At the Travel Information Office.
  {
    speaker: "Scene 3",
    bg: travelOffice,
    spriteLeft: "",
    spriteRight: "",
    sprite: "",
    text: "At the Travel Information Office."
  },
  {
    bgm: ishikariLore,
    speaker: takeshi,
    spriteRight: takeshiTalkingGif,
    spriteLeft: maryTalking,
    text: "すみません、善光寺に行くバスはどれですか。"
  },
  {
    speaker: infoAgent,
    spriteRight: takeshiTalking,
    spriteLeft: maryTalking,
    sprite: infoAgentNeutralGif,
    text: "善光寺なら、十一番のバスですよ。"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiTalkingGif,
    spriteLeft: maryTalking,
    sprite: infoAgentNeutral,
    text: "ありがとうございます。この地図、もらってもいいですか。"
  },
  {
    speaker: infoAgent,
    spriteRight: takeshiTalking,
    spriteLeft: maryTalking,
    sprite: infoAgentNeutralGif,
    text:
      "ええ、どうぞ。それから、これ、美術館の割引券ですが、よかったらどうぞ。"
  },
  {
    speaker: mary,
    spriteRight: takeshiTalking,
    spriteLeft: maryTalkingGif,
    sprite: infoAgentNeutral,
    text: "これ、東山魁夷の絵がある美術館ですね。あした行く予定なんです。"
  },
  {
    speaker: infoAgent,
    spriteRight: takeshiTalking,
    spriteLeft: maryTalking,
    sprite: infoAgentNeutralGif,
    text: "気をつけて。",
  },


  ////////////////////Chapter 16 below//////////////////////////////////////
  {
    routeBegins: "chapter16Route",
    speaker: "Chapter 16",
    spriteRight: "",
    spriteLeft: "",
    sprite: logo,
    bg: clouds,
    bgm: ishikariLore,
    text: "Click on the screen or press \"Enter\" to begin",
    jumpTo: "chapter16"
  },

  //Scene 1, At Professor Yamashita's Office
  {
    receiveJump: "chapter16",
    speaker: "Scene 1",
    bg: yamashitasOffice,
    sprite: "",
    spriteLeft: "",
    spriteRight: "",
    text: "At Professor Yamashita's Office"
  },
  {
    bgm: ishikariLore,
    speaker: john,
    spriteLeft: "",
    spriteRight: johnWorriedGif,
    text: "失礼します。先生、今日従業に来られなくてすみませんでした。"
  },
  {
    speaker: yamashita,
    spriteRight: johnWorried,
    spriteLeft: yamashitaInOfficeGif,
    text: "どうしたんですか。"
  },
  {
    speaker: john,
    spriteRight: johnWorriedGif,
    spriteLeft: yamashitaInOffice,
    text: "実は、朝寝坊して、電車に乗り遅れたんです。すみません。"
  },
  {
    speaker: yamashita,
    spriteRight: johnWorried,
    spriteLeft: yamashitaInOfficeGif,
    text: "もう三回目ですよ。目覚まし時計を買ったらどうですか。"
  },

  {
    speaker: john,
    sprite: homeworkFile,
    spriteRight: johnWorriedGif,
    spriteLeft: yamashitaInOffice,
    text: "はい。あの、先生、宿題をあしたまで待っていただけませんか。宿題を入れたファイルがないんです。"
  },

  {
    speaker: yamashita,
    sprite: "",
    spriteRight: johnWorried,
    spriteLeft: yamashitaInOfficeGif,
    text: "困りましたね。見つかるといいですね。"
  },

  //Scene 2, At the station
  {
    speaker: "Scene 2",
    bg: trainStation,
    spriteLeft: "",
    spriteRight: "",
    text: "At the station"
  },
  {
    bgm: ishikariLore,
    speaker: john,
    spriteRight: johnWorriedGif,
    text: "すみません。ファイルをなくしたんですが。"
  },
  {
    speaker: stationAttendant,
    spriteLeft: stationAttendantGif,
    spriteRight: johnWorried,
    text: "どんなファイルですか。"
  },
  {
    speaker: john,
    spriteRight: johnWorriedGif,
    spriteLeft: stationAttendantSprite,
    text: "青くてこのぐらいの大きさです。電車を降りる時、忘れたと思うんですが。"
  },
  {
    speaker: stationAttendant,
    spriteRight: johnWorried,
    spriteLeft: stationAttendantGif,
    text: "ええと。。。ちょっと待ってください。電話して聞いてみます。"
  },

  //Scene 3, At school the next day
  {
    speaker: "Scene 3",
    bg: classroom,
    spriteLeft: "",
    spriteRight: "",
    sprite: "",
    text: "At school the next day"
  },
  {
    bgm: ishikariLore,
    speaker: yamashita,
    spriteLeft: yamashitaInOfficeGif,
    text: "ジョンさん、ファイルはありましたか。"
  },
  {
    speaker: john,
    spriteRight: johnWithFileGif,
    spriteLeft: yamashitaInOffice,
    text: "はい、駅員さんが探してくれたんです。"
  },
  {
    speaker: yamashita,
    spriteRight: johnWithFile,
    spriteLeft: yamashitaInOfficeGif,
    text: "よかったですね。"
  },
  {
    speaker: john,
    spriteRight: johnWithFileGif,
    spriteLeft: yamashitaInOffice,
    text: "これ、宿題です。遅くなってすみませんでした。"
  },
  {
    speaker: yamashita,
    spriteRight: johnWorried,
    spriteLeft: yamashitaInOfficeGif,
    text: "いいえ。よくできていますね。"
  },
  {
    speaker: john,
    spriteRight: johnWorriedGif,
    spriteLeft: yamashitaInOffice,
    text: "ええ、駅員さんに手伝ってもらいましたから。",
  },

  ////////////////////Chapter 17 below//////////////////////////////////////
  {
    routeBegins: "chapter17Route",
    speaker: "Chapter 17",
    spriteRight: "",
    spriteLeft: "",
    sprite: logo,
    bg: clouds,
    bgm: ishikariLore,
    text: "Click on the screen or press \"Enter\" to begin",
    jumpTo: "chapter17"
  },

  //Scene 1, Sue and Takeshi have just run into each other at the station
  {
    receiveJump: "chapter17",
    speaker: "Scene 1",
    bg: trainStation,
    sprite: "",
    spriteLeft: "",
    spriteRight: "",
    text: "Sue and Takeshi have just run into each other at the station"
  },
  {
    bgm: ishikariLore,
    speaker: sue,
    spriteLeft: sueNeutralGif,
    spriteRight: "",
    text: "たけしさん、久しぶりですね。旅行会社に就職したそうですね。おめでとうございます。"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiOverworkedGif,
    spriteLeft: sueNeutral,
    text: "ありがとうございます。"
  },
  {
    speaker: sue,
    spriteRight: takeshiOverworked,
    spriteLeft: sueNeutralGif,
    text: "もう仕事に慣れましたか。"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiOverworkedGif,
    spriteLeft: sueNeutral,
    text: "ええ。でも学生の時に比べてすごく忙しくなりました。自分の時間がぜんぜんないんです。"
  },

  {
    speaker: sue,
    spriteRight: takeshiOverworked,
    spriteLeft: sueNeutralGif,
    text: "大変ですね。私の友だちの会社は休みが多くて、残業をしなくてもいいそうですよ。"
  },

  {
    speaker: takeshi,
    spriteRight: takeshiOverworkedGif,
    spriteLeft: sueNeutral,
    text: "うらやましいですよ。ぼくの会社は休みも少ないし、給料も安いし、最低です。"
  },
  {
    speaker: sue,
    spriteRight: takeshiOverworked,
    spriteLeft: sueNeutralGif,
    text: "会社に入る前にどうしてもっと調べなかったんですか。"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiOverworkedGif,
    spriteLeft: sueNeutral,
    text: "旅行会社に入ったら、旅行ができると思ったんです。"
  },

  //Scene 2, Ken and Sue have arranged to meet at the coffee shop
  {
    speaker: "Scene 2",
    bg: cafe,
    spriteLeft: "",
    spriteRight: "",
    text: "Ken and Sue have arranged to meet at the coffee shop"
  },
  {
    bgm: ishikariLore,
    speaker: sue,
    spriteLeft: sueNeutralGif,
    spriteRight: kenNeutral,
    text: "けさ、駅でたけしさんに会ったよ。"
  },
  {
    speaker: ken,
    spriteLeft: sueNeutral,
    spriteRight: kenNeutralGif,
    text: "たけしさんが卒業してからぜんぜん会ってないけど、元気だった？"
  },
  {
    speaker: sue,
    spriteRight: kenNeutral,
    spriteLeft: sueNeutralGif,
    text: "ずいぶん疲れているみたい。毎晩四、五時間しか寝ていないそうだよ。"
  },
  {
    speaker: ken,
    spriteRight: kenNeutralGif,
    spriteLeft: sueNeutral,
    text: "やっぱりサラリーマンは大変だなあ。"
  },
  {
    speaker: sue,
    spriteRight: kenNeutral,
    spriteLeft: sueNeutralGif,
    text: "それに、忙しすぎてメアリーとデートする時間もないって。"
  },
  {
    speaker: ken,
    spriteRight: kenNeutralGif,
    spriteLeft: sueNeutral,
    text: "そうか。ぼくだったら、仕事より彼女を選ぶけど。あの二人、大丈夫かなあ。"
  },


  //After Playing the last Chapter in the Game
  {
    bg: clouds,
    bgm: "",
    speaker: infoAgent,
    spriteRight: "",
    spriteLeft: "",
    sprite: infoAgentNeutralGif,
    text: "Thank You For Playing!",
    jumpTo: "title-screen"
  },

  //end of game



  //Title Screen Confirmation
  {
    routeBegins: "titleScreenConfirmation",
    speaker: "",
    spriteRight: "",
    spriteLeft: "",
    sprite: logo,
    bg: clouds,
    bgm: "",
    text: "Are you sure you want to return to the Title Screen?",
    jumpTo: "title-screen"
  },

  //Chapter Selection
  {
    receiveJump: "chapterSelection", //Possible choice at end chapters
    speaker: "",
    spriteLeft: "",
    spriteRight: "",
    sprite: "",

    choicesExist: true,
    text: "",
    jumpTo: "chapterSelection"
  },
];

// The code below is to set undefined properties to the last defined property.
// It is optional and based on preference, so feel free to add or remove any function calls.

setFutureProperties("bg");
setFutureProperties("bgm");
setFutureProperties("speaker");
setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");

function setFutureProperties(key) {
  let cache = "";
  for (let obj of story) {
    if (obj[key] || obj[key] === "") {
      cache = obj[key];
    } else {
      obj[key] = cache;
    }
  }
}
export default story;
