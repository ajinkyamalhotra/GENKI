// bg
const school = require("./bg/Genki school (Scaled).png");
const entrance = require("./bg/entrance.jpeg");
const bedroom = require("./bg/Bedroom (Scaled).png");
const restaurant = require("./bg/Restaurant (Scaled).jpg");
const restaurantBedroom = require("./bg/Restaurant-Bedroom.png");
const park = require("./bg/Park.jpg");
const takeshiHouse = require("./bg/Takeshi-House.jpg");
const street = require("./bg/Street.png");
const naganoStation = require("./bg/Nagano Station.jpg");
const travelOffice = require("./bg/Travel Office.jpg");


// bgm
const take = require("./bgm/take.mp3");

// speakers
// Tutorial Characters
/*const takeshi = "たけし";
const mary = "メアリー";*/
const john = "ジョン";
const manager = "店長";
const yamashita = "山下先生";
const michiko = "みちこ";
const takeshi = "たけし";
const mary = "メアリー";
const infoAgent = "案内所の人";

// sprites
// Tutorial Images
/*const tn = require("./sprites/Takeshi-neutral.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");
const mn = require("./sprites/Mary-neutral.png");*/
const johnStudying = require("./sprites/John-studying.png");
const johnStudyingGif = require("./sprites/John-studying-gif.gif");
const johnWaiter = require("./sprites/John-waiter.png");
const managerNeutralGif = require("./sprites/Manager-neutral-gif.gif");
const managerNeutral = require("./sprites/Manager-neutral.png");
const yamashitaNeutral = require("./sprites/Yamashita-neutral.png");
const maryNeutral = require("./sprites/Mary-neutral.png");
const maryTalking = require("./sprites/Mary-talking.png");
const michikoNeutral = require("./sprites/Michiko-neutral.png");
const takeshiSweater = require("./sprites/Takeshi-sweater.png");
const takeshiTalking = require("./sprites/Takeshi-talking.png");
const takeshiTemple = require("./sprites/Takeshi-temple.png");
const takeshiSoba = require("./sprites/Takeshi-soba.png");
const marySitting = require("./sprites/Mary-sitting.png");
const johnNeutral = require("./sprites/John-neautral.png");
const takeshiInSweater = require("./sprites/Takeshi-in-sweater.png");
const infoAgentNeutral = require("./sprites/Info-Agent-neutral.png");

let story = [
  //////////////////////////Chapter 13//////////////////////////////////////////
  //Scene 1, john calls Little Asia
  {
    bg: restaurantBedroom,
    bgm: take,
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
    bgm: take,
    speaker: "Scene 2",
    spriteLeft: "",
    spriteRight: "",
    text: "John arrives for interview at Little Asia"
  },
  {
    speaker: manager,
    spriteLeft: managerNeutral,
    text: "ワンさんはどうしてこのアルバイトに興味があるんですか。"
  },
  {
    speaker: john,
    spriteRight: johnWaiter,
    text: "おもしろそうですから。いろいろな人に会えるし、日本語も使えるし。"
  },
  {
    speaker: manager,
    text: "レストランで働いたことがありますか。"
  },
  {
    speaker: john,
    text: "はい。ウェイターならしたことがあります。"
  },
  {
    speaker: manager,
    text: "あしたから始められますか。"
  },
  {
    speaker: john,
    text: "はい。よろしくお願いします。"
  },
  {
    speaker: manager,
    text: "がんばってください。"
  },

  //Scene 3, John is on the job at the restaurant
  {
    bg: restaurant,
    bgm: take,
    speaker: "Scene 3",
    spriteLeft: "",
    spriteRight: "",
    text: "Professor Yamashita comes to Little Asia"
  },
  {
    bg: restaurant,
    bgm: take,
    speaker: john,
    spriteRight: johnWaiter,
    text: "いらっしゃいませ。あ、山下先生。"
  },
  {
    speaker: yamashita,
    spriteLeft: yamashitaNeutral,
    spriteRight: johnWaiter,
    text: "ジョンさん。ここでアルバイトをしているんですか。"
  },
  {
    speaker: john,
    text: "ええ。一週間に三日働いています。"
  },
  {
    speaker: yamashita,
    text: "そうですか。どれがおいしいですか。"
  },
  {
    speaker: john,
    text: "このカレーが一番人気がありますよ。"
  },
  {
    speaker: yamashita,
    text: "おいしそうですね。じゃあ、食べてみます。"
  },

  //////////////////////////Chapter 14//////////////////////////////////////////

  //Scene 4
  {
    speaker: "Scene 4",
    bg: park,
    spriteLeft: "",
    spriteRight: "",
    text: "A month before Valentine's Day."
  },
  {
    bgm: take,
    speaker: mary,
    spriteLeft: maryNeutral,
    text: "バレンタインのプレゼントは何がいいと思いますか。"
  },
  {
    speaker: michiko,
    spriteRight: michikoNeutral,
    text:
      "そうですね。たけしさんはいつも同じセーターを着ているから、セーターをあげたらどうですか。"
  },
  {
    speaker: mary,
    text: "それはいいかもしれませんね。"
  },

  //Scene 5
  {
    speaker: "Scene 5",
    bg: takeshiHouse,
    spriteLeft: "",
    spriteRight: "",
    text: "On Valentine's Day at Takeshi's house."
  },
  {
    bgm: take,
    speaker: mary,
    spriteRight: marySitting,
    text: "たけしくん、はい、これ。"
  },
  {
    speaker: takeshi,
    spriteLeft: takeshiSweater,
    text: "えっ、ぼくに？どうもありがとう。開けてもいい？"
  },
  {
    speaker: mary,
    text: "うん。"
  },
  {
    speaker: takeshi,
    text:
      "わあ、いいね、このセーター。こんなのがほしかったんだ。メアリーが編んだの？"
  },
  {
    speaker: mary,
    text: "うん、小さいかもしれないから着てみて。"
  },
  {
    speaker: takeshi,
    text: "ちょうどいいよ。ありがとう。"
  },

  //Scene 6
  {
    speaker: "Scene 6",
    bg: street,
    spriteLeft: "",
    spriteRight: "",
    text: "The next day."
  },
  {
    bgm: take,
    speaker: john,
    spriteLeft: johnNeutral,
    text: "暖かそうなセーターですね。"
  },
  {
    speaker: takeshi,
    spriteRight: takeshiInSweater,
    text: "これ、メアリーがくれたんです。"
  },
  {
    speaker: john,
    text:
      "よく似合っていますよ。ぼくも彼女がほしいなあ。ロバートさんはチョコレートを十個ももらったんですよ。"
  },
  {
    speaker: takeshi,
    text: "へえ、すごいですね。ジョンさんは？"
  },
  {
    speaker: john,
    text: "ぼくは一個しかもらえませんでした。大家さんから。さびしいなあ。"
  },
  {
    speaker: takeshi,
    text: "でも、ロバートさんはホワイトデーが大変ですよ。"
  },
  {
    speaker: john,
    text: "ホワイトデー？"
  },
  {
    speaker: takeshi,
    text: "ええ、男の人は三月十四日にお返しをしなきゃいけないんですよ。"
  },

  ////////////////////Chapter 15 below//////////////////////////////////////

  {
    speaker: "Scene 7",
    bg: school,
    spriteLeft: "",
    spriteRight: "",
    text: "Before the vaction"
  },
  {
    bgm: take,
    speaker: mary,
    text: "たけしくん、今度の休み、予定ある？"
  },
  {
    speaker: takeshi,
    text: "ううん。別に。どうして？"
  },
  {
    speaker: mary,
    text: "みちこさんの長野のうちに行こうと思ってるんだけど、一緒に行かない？"
  },
  {
    speaker: takeshi,
    text: "いいの？"
  },
  {
    speaker: mary,
    text: "うん。みちこさんが、「たけしくんも誘って」と言ってたから。"
  },
  {
    speaker: takeshi,
    text: "じゃあ、行く。電車の時間、調べておくよ。"
  },
  {
    speaker: mary,
    text: "ありがとう。じゃあ、私、みちこさんに電話しておく。"
  },

  //Scene 8
  {
    speaker: "",
    bg: restaurant,
    text: "Scene 8:　At Nagano Station."
  },
  {
    bg: restaurant,
    bgm: take,
    speaker: takeshi,
    text: "早く着いたから、ちょっと観光しない？"
  },
  {
    speaker: mary,
    text: "うん。どこに行く？"
  },
  {
    speaker: takeshi,
    text: "善光寺はどう？有名なお寺だよ。"
  },
  {
    speaker: mary,
    text: "そうだね。昼ご飯は何にする？"
  },
  {
    speaker: takeshi,
    text: "長野はそばがおいしいから、そばを食べようよ。"
  },

  //Scene 9
  {
    speaker: "",
    bg: restaurant,
    text: "Scene 9:　At the Travel Information Office."
  },
  {
    bg: restaurant,
    bgm: take,
    speaker: takeshi,
    text: "すみません、善光寺に行くバスはどれですか。"
  },
  {
    speaker: infoAgent,
    text: "善光寺なら、十一番のバスですよ。"
  },
  {
    speaker: takeshi,
    text: "ありがとうございます。この地図、もらってもいいですか。"
  },
  {
    speaker: infoAgent,
    text:
      "ええ、どうぞ。それから、これ、美術館の割引券ですが、よかったらどうぞ。"
  },
  {
    speaker: mary,
    text: "これ、東山魁夷の絵がある美術館ですね。あした行く予定なんです。"
  },
  {
    speaker: infoAgent,
    text: "気をつけて。",
    jumpTo: "title-screen"
  }

  //end of game

  /* Tutorial for Home Menu
  {
    bg: school,
    bgm: take,
    sprite: tn,
    speaker: takeshi,
    text: "こんにちは！私の名前はたけしです。遊び方を教えてあげます。スクリーンを押してください。Hello! My name is Takeshi. I will teach you how to play. Please Click on the screen"
  },
  {
    text: "いいですね！Good"
  },
  {
    text: "このゲームはVN. This is a Virtual Novel game"
  },
  {
    text: "VNゲームは。。。A virtual novel game is..."
  },
  {
    text: "Oh, hi Mary!"
  },
  {
    //sprite is the middle sprite, putting "" makes it null
    speaker: mary,
    sprite: "",
    spriteLeft: mn,
    spriteRight: tn,
    text: "Hello Takeshi, who is your friend here?"
  },
  {
    //sprite is the middle sprite, putting "" makes it null
    speaker: takeshi,
    text: "This is my friend, he is learning Japanese! Can you help me guide him through the game?"
  },
  {
    //sprite is the middle sprite, putting "" makes it null
    speaker: mary,
    text: "Sure! Let's get you ready for Genki VN!"
  },
  //end of game
  {
    routeBegins: "leave",
    speaker: takeshi,
    sprite: tn,
    spriteLeft: "",
    spriteRight:"",
    spriteEffect: "shake",
    text: "Thank you for playing Genki Tutorial. You are now ready to play!",
    jumpTo: "title-screen"
  }
  */

  /*
  {
    text:
      "However, if you plan to write something without any choices like a linear visual novel, then you don't need to worry about `choices.js`."
  },
  { text: "The writing will take place in `story.js`." },
  { text: "Let's begin with the sprite properties." },
  { text: "At max, we can only have three sprites on the screen." },
  { text: "You can set just one position like I'm doing right now." },
  {
    spriteLeft: bp,
    spriteRight: bh,
    text: "Or you can use all three positions simultaneously."
  },
  {
    spriteLeft: "",
    spriteRight: "",
    text: "We can also have sound effects and voices as well."
  },
  { text: "For example..." },
  { speaker: "", text: 'soundEffect: require("./sounds/jump.mp3")', soundEffect: require("./sounds/jump.mp3") },
  { speaker: takeshi, text: "And voices are done in the same manner." },
  {
    sprite: bh,
    text: "Okay, looks like we're done with the fundamentals."
  },
  {
    sprite: tn,
    text: "It's a little short, but it can do what you need for the most part."
  },
  { text: "Anyway, let's diverge to some specific features." },
  { choicesExist: true, receiveJump: "features" },
  // Effects
  { routeBegins: "showEffects", sprite: bh, text: "There are some preset effects at the moment." },
  { speaker: "", spriteEffect: "bounce", text: 'spriteEffect: "bounce"' },
  { spriteEffect: "shake", text: 'spriteEffect: "shake"' },
  { spriteEffect: "grow", text: 'spriteEffect: "grow"' },
  { spriteEffect: "shrink-back", text: 'spriteEffect: "shrink-back"' },
  { spriteEffect: "shrink", text: 'spriteEffect: "shrink"' },
  {
    spriteEffect: "shrink",
    text:
      "Before I grow back, one thing to note is that the sprite can stay in its altered state if the effect is continuously set."
  },
  { spriteEffect: "shrink", text: "A drawback is that when the sprite changes..." },
  { spriteEffect: "shrink", sprite: tn, text: "It reanimates." },
  {
    spriteEffect: "shrink",
    text: "The solution is to continuously apply a non-animated version of the effect after the initial animation."
  },
  {
    spriteEffect: "shrunk",
    text: 'So in this case, when `spriteEffect` is being set to "shrunk" instead of "shrink"...'
  },
  { sprite: bh, spriteEffect: "shrunk", text: "It doesn't reanimate." },
  {
    spriteEffect: "shrunk",
    sprite: tn,
    text:
      'The only difference between "shrink" and "shrunk" is that "shrunk" does not have the animation property in the CSS while "shrink" does.'
  },
  {
    spriteEffect: "grow-back",
    sprite: tn,
    text: "Anyway, `spriteLeft` and `spriteRight` also have their own effect functions."
  },
  { text: "For example..." },
  {
    speaker: "",
    sprite: "",
    spriteLeft: tn,
    spriteRight: tn,
    spriteLeftEffect: "grow",
    spriteRightEffect: "shake",
    text: 'spriteLeftEffect: "grow", spriteRightEffect: "shake"'
  },
  {
    speaker: takeshi,
    spriteRight: "",
    spriteLeftEffect: "grown",
    text: "The effect property simply uses the value as its CSS class."
  },
  {
    spriteLeft: "",
    sprite: bh,
    text: "That means you can also write your own effects as well."
  },
  {
    text: "Just write the class in the effects.css file and set the effect value to that in a string.",
    jumpTo: "features"
  },
  // Transitions
  {
    routeBegins: "showTransitions",
    sprite: "",
    text: "There are background transitions and sprite transitions."
  },
  {
    text: "By default, the transitions fade in out with the sprites transitioning faster than the backgrounds."
  },
  { text: "Here is the default background change..." },
  { bg: entrance },
  {
    bgTransition: "scene-change",
    bg: school,
    text: "And here's the default sprite enter transition..."
  },
  { sprite: tn },
  {
    text: "Background transitions only have fades, but sprite transitions have a bit more at the moment."
  },
  { text: "You can enter a sprite from the sides like this...", sprite: "" },
  {
    speaker: "",
    spriteLeftTransition: "from-right-leave-left",
    spriteLeft: tn,
    text: 'spriteLeftTransition: "from-right-leave-left", spriteLeft: require("./sprites/sprite.png")'
  },
  {
    spriteLeftTransition: "from-right-leave-left",
    spriteLeft: "",
    text: 'spriteLeftTransition: "from-right-leave-left"'
  },
  {
    spriteLeftTransition: "from-left-leave-right",
    spriteLeft: tn,
    text: "Now to move from one position to another takes a bit more work."
  },
  {
    spriteLeftTransition: "move-right",
    spriteLeft: "",
    spriteTransition: "move-right",
    sprite: tn,
    text:
      'spriteLeftTransition: "move-right", spriteTransition: "move-right", spriteLeft: "", sprite: require("./sprites/sprite.png"),'
  },
  { speaker: takeshi, text: "As you might have noticed, spriteLeft has to disappear with an empty string for this to work." },
  {
    text:
      "Since this application uses ReactCSSTransitionGroup, it is taking advantage of the leave and enter animations to make it work."
  },

  /*{
    text: "Yes, boys have to return the favor on March 14th."
  },*/

  ////////////////////Chapter 15 below//////////////////////////////////////

  //Scene 7
  {
    speaker: "Scene 7",
    bg: school,
    spriteLeft: "",
    spriteRight: "",
    text: "Before the vacation"
  },
  {
    bgm: take,
    speaker: mary,
    spriteLeft: maryTalking,
    text: "たけしくん、今度の休み、予定ある？"

  },
  { speaker: takeshi, text: "That's about it for now.", jumpTo: "features" },
  // Storing choices
  {

    speaker: takeshi,
    spriteRight: takeshiTalking,
    text: "ううん。別に。どうして？"
  
  },
  { text: "For some projects, that is enough." },
  {
    text: "But if you want the game to the user's choices, you can use the `store` property in 'choices.js'."
  },
  { text: "For example, let's say the user is friends with a character." },
  { text: "The user can pick choices that will raise affection points for that character." },
  { text: "If the user accumulated enough points by a certain point, the user will jump to a certain scene." },
  { text: "Let's see it in application." },
  {
    sprite: bp,
    text: "Hey, can you help me carry the school."
  },
  { choicesExist: true, text: "Help? (Refer to choices.js to see the properties.)" },
  {
    routeBegins: "helpBlock",
    speaker: "nashkenazy",
    text: "No problem."
  },
  {
    sprite: bh,
    speaker: takeshi,
    text: "Thanks.",
    jumpTo: "blockHelp"
  },
  {
    routeBegins: "noHelpBlock",
    speaker: "nashkenazy",
    text: "Nah, I'm good."
  },

  /*{
    text: "Thanks. I will call Michiko."
  },*/

  //Scene 8
  {
    speaker: "Scene 8",
    bg: naganoStation,
    spriteLeft: "",
    spriteRight: "",
    text: "At Nagano Station."
  },
  {
    bgm: take,
    speaker: takeshi,
    spriteRight: takeshiTalking,
    text: "早く着いたから、ちょっと観光しない？"

  },
  { text: "Block asked me to hang out at his place." },
  { text: "Did I accept?", choicesExist: true },
  {

    speaker: mary,
    spriteLeft: maryTalking,
    text: "うん。どこに行く？"

  },
  {

    speaker: takeshi,
    spriteRight: takeshiTalking,
    sprite: takeshiTemple,
    text: "善光寺はどう？有名なお寺だよ。"

  },
  {
    receiveJump: "blockHangOut",
    text: "(Back to common route) I haven't seen Block for a few years now."
  },
  { text: "I text him to see how he's doing.", jumpToBecauseStore: "blockAffection" },
  // Goes to next index if the user's choices do not fulfill any `receiveJumpBecauseStore` requirements.
  {

    speaker: takeshi,
    sprite: takeshiSoba,
    text: "長野はそばがおいしいから、そばを食べようよ。"
  },
  /*{
    text: "Soba noodles in Nagano are delicious, so let’s eat soba."
  },*/

  //Scene 9
  {
    speaker: "Scene 9",
    bg: travelOffice,
    spriteLeft: "",
    spriteRight: "",
    sprite: "",
    text: "At the Travel Information Office."
  },
  {
    bgm: take,
    speaker: takeshi,
    spriteRight: takeshiTalking,
    spriteLeft: maryTalking,
    text: "すみません、善光寺に行くバスはどれですか。"
  },
  { text: "I forgot to send you a letter, but would you like to come?" },
  { speaker: "", text: "blockAffection score: 1.", jumpTo: "skitDone" },
  {

    speaker: infoAgent,
    sprite: infoAgentNeutral,
    text: "善光寺なら、十一番のバスですよ。"

  },
  {
    speaker: takeshi,
    text: "Hey, nashkenazy! It's been so long since we'd last talked."
  },
  { text: "I was thinking about making you my best man for a wedding I've been planning." },
  { text: "I know it's a bit sudden, but you're the only one I think is best for the role." },
  { text: "blockAffection score: 2.", jumpTo: "skitDone" },
  {
    receiveJump: "skitDone",
    text: "(Done with skit) It takes a bit more work to get the choices done, but it should work out in the end.",
    jumpTo: "features"
  },
  */
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
