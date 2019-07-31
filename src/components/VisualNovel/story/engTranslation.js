/**
 *I found it easiest to create a separate js file to hold the english
 *translation of the story. NOTE: Some dialogues did not have any new vocab or
 *expressions to show, so I just kept the english translation in its place
 *for when the user presses the spacebar
 */
let engTranslation = [
  //////////////////////////Tutorial//////////////////////////////////////////
  {
    text: 'Click on the screen or press "Enter" to begin'
  },
  {
    text: 'Hello! Welcome to Genki VN! My name is Takeshi and I am here to guide you on how to play the game. First let us press that “ENTER” button on your keyboard.'
  },
  {
    text: 'Well done! You made it to the next dialogue! Throughout Genki VN, multiple characters will be speaking like me. To navigate through their dialogues, you can simple press “ENTER” or click on the screen.'
  },
  {
    text: 'This is a Visual Novel game. A visual novel game is...'
  },
  {
    text: 'Oh, hi Mary!'
  },
  {
    text: 'Hello Takeshi, who is your friend here?'
  },
  {
    text: 'This is our guest! He is learning Japanese! Can you help me guide him through the game?'
  },
  {
    text: "Sure! Let's get you ready for Genki VN!"
  },
  {
    text: 'Now where was I? Oh yeah! Genki VN stands for Genki Visual Novel.'
  },
  {
    text: 'A place where you the player can see the story unfold throughout the chapters of Genki I or II in the form of dialogues between Genki characters like me and Mary!'
  },
  {
    text: 'Genki VN is not only a great way to immerse yourself with the story in Genki textbooks, but also a fun way to learn Japanese!'
  },
  {
    text: '"In case you want to shift things around. See what I did there?" -> Bad pun by Takeshi...'
  },
  {
    text: 'What’s a game without giving the player options to toggle and fiddle with right? In Genki VN, there are settings you can choose from.'
  },
  {
    text: 'By pressing the “SPACEBAR” on your keyboard, the page will scroll down for options to choose from! Here try it out, press the SPACEBAR.'
  },
  {
    text: 'What do we have here! So many options! Skip, Save, Load, Config, Full Screen. So many things you can do to enjoy Genki VN the way you want to!  I will explain about the SKIP button first.'
  },
  {
    text: 'With the the SKIP button, you can navigate through the dialogues without pushing anything. Upon clicking on SKIP, you will be prompted to input how many seconds you want between dialogues. Isn’t that neat?'
  },
  {
    text: 'Don’t you hate it when you are playing a game and you have to reach a checkpoint to save your current progress...No? Well I do!'
  },
  {
    text: 'In Genki VN, you can save your progress at any point and load back in whenever you desire. (*Sometimes I wish I could do this in real life to load back to the times I’ve bailed on Mary san...*)'
  },
  {
    text: 'If you look next to the SKIP button, you can see the SAVE button. Once you click it, you will be able to select a slot, then click onto the big grey square to save your progress!'
  },
  {
    text: 'Try it now, click a slot and then the square screen to save. NOTE: *Saves to local machine only and will not carry over if you play on a different device!*'
  },
  {
    text: 'Now that you know how to save, now it is time to learn how to load your saved progress. Next to the save button, you can see the LOAD button.'
  },
  {
    text: 'Upon clicking it, you will see all the save slots, the ones with save data will be black while the ones with no save data will be grey.'
  },
  {
    text: 'Click the desired save slot, then click on the big square. You will be prompted with “Load save? Click ok to load your game. *You will be taken back to the SAVE instructions'
  },
  {
    text: 'Now that you mastered saving and loading your progress, let us take a look at the CONFIG button next to the load button.'
  },
  {
    text: 'With config, you can adjust the audio setting in the game (BGM) and also adjust the text font style. Why don’t you try it? Change the font style to Courier New.'
  },
  {
    text: 'Feeling fancy with all these tools huh? Well, we got something big for you, quiet literally.'
  },
  {
    text: 'You see that FULL SCREEN button to the right? If you click it, the game will go into full screen mode, things are looking big now huh? Have that skip option on, full screen mode and you have yourself Genki: The Movie!'
  },
  {
    text: 'Don’t grab some popcorn just yet! We still got a tutorial to finish here!'
  },
  {
    text: 'It’s time to jump around! You think I’m joking? In Genki VN, there is a JUMP feature that lets you well... jump back to previous dialogues you have read. '
  },
  {
    text: 'Scroll up with your mouse while on the game’s screen to pull up the BACKLOG of all the previous dialogues read! By clicking on JUMP next to the dialogue you will be taken back to that moment in the game. Try it out!'
  },
  {
    text: 'Congratulations E Congratulations A Congratulations H Congratulations A Congratulations B Congratulations......Is this an easter egg...?'
  },
  {
    text: 'I am glad I could help! Best of luck to you and have fun!'
  },
  {
    text: 'Before you go, I’d like to introduce to you the “T” command. By pressing “T” on your keyboard, you will be taken back to the game’s title screen. Press “T” to return to the game’s title.'
  },
  {
    text: 'Hmmm… it seems you did not press “T”...press “T” to return to the title screen.'
  },
  {
    text: 'Didn’t I tell you to press “T”?!... You know what, press ENTER and see what happens!'
  },
  {
    text: 'End of tutorial'
  },

  //////////////////////////Chapter 11//////////////////////////////////////////
  {
    text: 'Click on the screen or press "Enter" to begin'
  },
  //Scene 1
  {
    text: "Michiko and Mary meet after the vacation"
  },
  {
    text: "久しぶり(ひさしぶり)：It has been a long time [Other Expression]"
  },
  {
    text:
      "It was really fun. I went shopping, ate Korean dishes, and things like that in Korea."
  },
  {
    text: "Sounds good. I want to travel, too."
  },
  {
    text: "Did you have a fun vacation, Michiko?"
  },
  {
    text:
      "まあまあ：okay; so-so [Adverb] | ～だけ：just; only [Other Expression] | ドライブ：drive [Noun]"
  },

  //Scene 2
  {
    text: "Mary introduces John to Michiko"
  },
  {
    text:
      "紹介する(しょうかいする)：to introduce (person に person を) [Irregular Verb] | こちら：this person (polite) [Noun]"
  },
  {
    text: "How do yo do?"
  },
  {
    text: "How do yo do? I am Michiko Yamakawa."
  },

  //Scene 3
  {
    text: "Mary introduces John to Michiko"
  },
  {
    text: "出身(しゅっしん)：coming from (place の) [Adverb]"
  },
  {
    text: "オーストラリア：Australia [Noun]"
  },
  {
    text: "Is that so."
  },
  {
    text: "Have you been to Cairns?"
  },
  {
    text: "No, I haven’t."
  },
  {
    text: "山(やま)：mountain [Noun]"
  },
  {
    text:
      "I am from Nagano. Please come to visit me sometime. The food is good, too."
  },
  {
    text: "By all means, I would love to go."
  },

  //////////////////////////Chapter 12//////////////////////////////////////////
  {
    text: 'Click on the screen or press "Enter" to begin'
  },
  //Scene 1
  {
    text: "Mary and Michiko are talking at school"
  },
  {
    text: "元気がない(げんきがない)：don’t look well [Other Expression]"
  },
  {
    text:
      "おなか：stomach [Noun] | 痛い(いたい)：hurt; painful [い - Adjective]"
  },
  {
    text: "What’s the matter?"
  },
  {
    text: "たぶん：probably; maybe [Adverb]"
  },
  {
    text: "Are you all right?"
  },
  {
    text: "心配する(しんぱいする)：to worry [Irregular Verb]"
  },
  {
    text: "You had better go to a hospital."
  },

  //Scene 2
  {
    text: "At a hospital."
  },
  {
    text: "のど：throat [Noun]"
  },
  {
    text: "熱がある(ねつがある)：to have a fever [U - Verb] | かぜ：cold [Noun]"
  },
  {
    text:
      "もうすぐ：very soon; in a few moments/days [Adverb] | 試合(しあい)：match; game [Noun] | ～ので：because. . . [Other Expression]"
  },
  {
    text:
      "二三日(にさんにち)：for two to three days [Other Expression] | ～でしょう：probably; . . . , right? [Other Expression]"
  },
  {
    text: "I understand"
  },
  {
    text: "Take medicine and go to bed early tonight"
  },
  {
    text: "Yes. Thank you so much."
  },
  {
    text: "お大事に(おだいじに)：Get well soon [Other Expression]"
  },

  //////////////////////////Chapter 13//////////////////////////////////////////
  {
    text: 'Click on the screen or press "Enter" to begin'
  },
  //Scene 1, john calls Little Asia
  {
    text: "John calls Little Asia."
  },
  {
    text: "Yes, this is Little Asia."
  },
  {
    text:
      "〜と申します: my name is... [Expression]｜募集(ぼしゅう)：recruitment [noun]｜広告(こうこく)：advertisement [noun]"
  },
  {
    text: "店(みせ)：store [noun]"
  },
  {
    text: "I cannot come today, but if it's tomorrow, I think I can come."
  },
  {
    text: "だめ(な)：no good [な - adjective]"
  },
  {
    text: "One o' clock. Okay, I've got it."
  },

  //Scene 2, John arrives for interview at Little Asia
  {
    text: "John arrives for interview at Little Asia"
  },
  {
    text: "Mr. Wang, why are you interested in this job?"
  },
  {
    text: "いろいろ(な)：various; different kinds of [な - adjective] "
  },
  {
    text: "Have you worked at a restaurant before?"
  },
  {
    text: "ウェイター：waiter [noun]"
  },
  {
    text: "Can you start tomorrow?"
  },
  {
    text: "Yes. I'll do my best."
  },
  {
    text: "がんばる：to do one's best; to try hard [U - adjective]"
  },

  //Scene 3, John is on the job at the restaurant
  {
    text: "Professor Yamashita comes to Little Asia"
  },
  {
    text: "いらっしゃいます: (someone honorable) is present / home [Expression]"
  },
  {
    text: "John, do you work here."
  },
  {
    text: "三日(みっか)： [Numbers]"
  },
  {
    text: "I see. Which one is good?"
  },
  {
    text: "カレー：curry [noun]"
  },
  {
    text: "It looks good. Well, I will try this one."
  },

  //////////////////////////Chapter 14//////////////////////////////////////////
  {
    text: 'Click on the screen or press "Enter" to begin'
  },
  //Scene 4 - From here on will be finished by end of sprint
  {
    text: "A month before Valentine's Day."
  },
  {
    text: "バレンタインデー：Valentine's Day [Noun]"
  },
  {
    text:
      "同じ(おなじ)：same [Adverb] | あげる：to give (to others) (person に thing を) [RU - Verb]"
  },
  {
    text: "That might be a good idea."
  },

  //Scene 5
  {
    text: "On Valentine's Day at Takeshi's house."
  },
  {
    text: "〜くん：Mr/Ms...(casual) [Other Expression]"
  },
  {
    text: "For me? Thank you. May I open it?"
  },
  {
    text: "Yes."
  },
  {
    text:
      "こんな：...like this, this kind of...[Other Expression] | " +
      "ほしい：to want (thing が)[い - Adjective] | 編む(あむ) to knit [U -Verb]"
  },
  {
    text: "Yes. It may be small, so please try it on."
  },
  {
    text: "ちょうど： exactly [Adverb]"
  },

  //Scene 6
  {
    text: "The next day."
  },
  {
    text: "Your sweater looks warm."
  },
  {
    text: "くれる：to give (me) (person に thing を) [RU - Verb]"
  },
  {
    text:
      "よく：well [Adverb] | 似合う(にあう)：to look good (on somebody) (thing が) [U - Verb] |" +
      "チョコレート：chocolate [Noun] | 〜個(〜こ)：generic counter for small things [Counters]"
  },
  {
    text: "Hah, that’s incredible. How about you John?"
  },
  {
    text: "大家さん(おおやさん)：landlord/landlady [Noun]"
  },
  {
    text: "ホワイトデー：White Day (Yet another gift-giving day) [Noun]"
  },
  {
    text: "White Day?"
  },
  {
    text: "Yes, boys have to return the favor on March 14th."
  },

  ////////////////////Chapter 15 below//////////////////////////////////////
  {
    text: 'Click on the screen or press "Enter" to begin'
  },
  //Scene 7
  {
    text: "Before the vacation"
  },
  {
    text: "予定(よてい)：schedule; plan [Noun]"
  },
  {
    text: "Not really. Why?"
  },
  {
    text: "〜けど：...,but; ...,so [Other Expression]"
  },
  {
    text: "Is it okay?"
  },
  {
    text: "誘う(さそう)：to invite (〜を) [U - Verb]"
  },
  {
    text: "調べる(しらべる)：to look into (a matter) (matter を) [RU - Verb]"
  },
  {
    text: "Thanks. I will call Michiko."
  },

  //Scene 8
  {
    text: "At Nagano Station."
  },
  {
    text:
      "着く(つく)：to arrive (place に) [U - Verb] | " +
      "観光する(かんこうする)：to do sightseeing [Irregular - Verb]"
  },
  {
    text: "Yes. Where shall we go?"
  },
  {
    text: "How about Zenkoji Temple? It’s a famous temple."
  },
  {
    text: "する：to decide on (an item) (item に) [Irregular Verb]"
  },
  {
    text: "そば：soba; Japanese Buckwheat Noodles [Noun]"
  },

  //Scene 9
  {
    text: "At the Travel Information Office."
  },
  {
    text: "Excuse me, which bus goes to Zenkoji Temple?"
  },
  {
    text: "〜番(〜ばん)：number...[Other Expression]"
  },
  {
    text: "地図(ちず)：map [Noun]"
  },
  {
    text: "割引券(わりびきけん)：discount coupon [Noun]"
  },
  {
    text: "絵(え)：painting; picture; drawing [Noun]"
  },

  {
    text: "気をつける(きをつける)：To be careful/cautious (〜に) [RU - Verb]"
  },

  ////////////////////Chapter 16 below//////////////////////////////////////
  {
    text: 'Click on the screen or press "Enter" to begin'
  },
  //Scene 1
  {
    text: "At Professor Yamashita's Office"
  },
  {
    text:
      "失礼します(しつれいします)：Excuse me.; Sorry to interrupt you. [Other Expression] | 従業(じゅうぎょう)：Class [Noun]"
  },
  {
    text: "What happened?"
  },
  {
    text:
      "朝寝坊する(あさねぼうする)：to oversleep [Irregular Verb] | 乗り遅れる(のりおくれる)：to miss (a train, bus, etc.) (～に) [RU - Verb]"
  },
  {
    text: "目覚まし時計(めざましとけい)：Alarm Clock [Noun]"
  },
  {
    text:
      "入れる(いれる)：to put (something in) (thing を place に) [RU - Verb] | ファイル：file; portfolio [Noun]"
  },
  {
    text:
      "困る(こまる)：to have difficulty [U - Verb] | 見つかる(みつかる)：to be found (～が) [U - Verb]"
  },

  //Scene 2
  {
    text: "At the station"
  },
  {
    text: "Excuse me, I have lost my file."
  },
  {
    text: "What is the file like?"
  },
  {
    text:
      "このぐらい：About this much (＝これぐらい/このくらい/これくらい) [Other Expression] | 大きさ(おおきさ)：size [noun]"
  },
  {
    text: "ええと：well. . .; let me see. . . [Other Expression]"
  },

  //Scene 3
  {
    text: "At school the next day"
  },
  {
    text: "John, did you find the file?"
  },
  {
    text: "駅員さん(えきいんさん)：Station Attendant [Noun]"
  },
  {
    text: "Good."
  },
  {
    text: "This is the homework. I am sorry it is late."
  },
  {
    text: "That’s okay. It’s well done."
  },
  {
    text: "Yes, because the station attendant helped me."
  },

  ////////////////////Chapter 17 below//////////////////////////////////////
  {
    text: 'Click on the screen or press "Enter" to begin'
  },
  //Scene 1
  {
    text: "Sue and Takeshi have just run into each other at the station"
  },
  {
    text:
      "旅行会社(りょこうがいしゃ)：Travel Agency [Noun] | 就職する(しゅうしょくする)：to get a job a full-time job (at. . .) (company に) [Irregular Verb] | おめでとうございます：Congratulations! [Other Expression]"
  },
  {
    text: "Thank you."
  },
  {
    text: "慣れる(なれる)：to get used to. . . (～に) [RU - Verb]"
  },
  {
    text:
      "～に比べて(～にくらべて)：Compared with. . . [Other Expression] | 自分(じぶん)：Oneself [Adverb]"
  },
  {
    text: "残業(ざんぎょう)：Overtime work [Noun]"
  },
  {
    text:
      "うらやましい：envious [い - adjective] | 少ない(すくない)：a little; a few [い - adjective] | 給料(きゅうりょう)：Salary [Noun] | 最低(さいてい)：the lowest; the worst [noun]"
  },
  {
    text: "前(まえ)：before. . .[Other Expression]"
  },
  {
    text: "I thought that I could travel around when I got in a travel agency."
  },

  //Scene 2
  {
    text: "Ken and Sue have arranged to meet at the coffee shop"
  },
  {
    text: "I happened to meet Takeshi at the station this morning."
  },
  {
    text: "I haven’t seen him since he graduated. How was he?"
  },
  {
    text: "ずいぶん：very [Other Expression]"
  },
  {
    text:
      "やっぱり：after all [Other Expression] | サラリーマン：salaryman; company employee [noun]"
  },
  {
    text: "それに：moreover. . . [Other Expression]"
  },
  {
    text:
      "そうか：”I see. (casual) [Other Expression] | 選ぶ(えらぶ)：to choose; to select [U - Verb] | ～かな(あ)：I wonder. . . (casual) [Other Expression]"
  },

  ////////////////////Chapter 24 below//////////////////////////////////////
  {
    text: 'Click on the screen or press "Enter" to begin'
  },
  //Scene 1
  {
    text: "At the airport after Mary's departure."
  },
  {
    text: 'While Takeshi was walking, he bumped into someone.'
  },
  {
    text: 'Hey, watch it!'
  },
  {
    text: 'Pardon me.'
  },
  {
    text: 'Huh? Are you ok?'
  },
  {
    text: '・・・・・・'
  },
  {
    text: 'How pitiful. I wonder if he said goodbye to a close friend. Anyways, Japan Club is arriving soon right?'
  },
  {
    text: 'Yea. I am glad that everyone is traveling to Matsuyama and I can see them again.'
  },
  {
    text: 'Huh? Sean, May, and Rui didn’t come yet?'
  },
  {
    text: 'I Barely made it!'
  },
  {
    text: 'You’re late Sean! Did you bring the welcome sign?'
  },
  {
    text: 'Of course! Rui and May also helped. You didn’t help at all with preparing the poster.'
  },
  {
    text: 'You too! I bet you cannot do it yourself.'
  },
  {
    text: 'What did you say?! Rui, May, Satomi, I helped you right?'
  },
  {
    text: 'That’s enough. Everyone from Japan Club is arriving soon.'
  },
  {
    text: 'Yea. Lift up the welcome sign.'
  },
  {
    text: 'Oh! They’re here!'
  },
  {
    text: 'Welcome!'
  },

  //Scene 2
  {
    text: 'Takeshi on his way home.'
  },
  {
    text: 'I cannot believe Mary already returned to America. I’m sad...'
  },
  {
    text: "It's ya boy! Dogo Onsen! Habu-chan! Everyone! Let’s go!"
  },
  {
    text: 'Dogo Onsen? That seems relaxing...'
  },
  {
    text: "We all read Botchan right? To the left of Dogo Onsen, there are the statue figures of the book's characters. Let’s go take a look."
  },
  {
    text: 'But I want to go into the hotspring...'
  },
  {
    text: 'Have some patience David. We’ll go inside Dogo Onsen soon. '
  },
  {
    text: 'Yea. You should listen to Freddy. Masuyama sensei is showing us around.'
  },
  {
    text: 'Just like what Vicky said. Also, Christian will take some nice pictures for you.'
  },
  {
    text: 'Really?! Take a photo of me, Freddy, Vicky, and Kris posing in front of Dogo Onsen!'
  },
  {
    text: 'Sure thing. Say Cheese!'
  },
  {
    text: 'Anyways, where did Eahab and Jake go?'
  },
  {
    text: 'I just saw them not too long ago. I do not know where they went...'
  },
  {
    text: 'That’s strange huh?'
  },

  //Scene 3
  {
    text: 'Takeshi stops by mammam.'
  },
  {
    text: 'Everyone, let’s eat some Udon! This Udon place called “mammam” is delicious. I’ll take you guys there.'
  },
  {
    text: 'But wouldn’t Masuyama sensei get mad? Because we separated from everyone else.'
  },
  {
    text: 'Don’t worry about it. You want to eat some Udon too right Sean Weeks?'
  },
  {
    text: 'Yea, but...'
  },
  {
    text: 'It’s fine.'
  },
  {
    text: 'Kelly sensei?!'
  },
  {
    text: 'Jake and Clayton are also hungry.'
  },
  {
    text: 'Yes! We want to eat some Udon!'
  },
  {
    text: 'Here we are. Let’s go in.'
  },
  {
    text: '5 mins later...'
  },
  {
    text: 'I’m hungry. This Udon place looks good.'
  },
  {
    text: 'I’ll have one of the Dragon & Koi Udon please.'
  },
  {
    text: 'Dragon & Koi?!'
  },
  {
    text: 'Isn’t that the person you bumped into at the airport Eahab?'
  },
  {
    text: 'It seems like it. I’m going to try to talk with him.'
  },
  {
    text: '*Slurp*'
  },
  {
    text: 'Excuse me, we bumped into each other at the airport right? You looked sad. Is everything alright?'
  },
  {
    text: 'Not really. My close friend went back to America. I miss Mary.'
  },
  {
    text: 'It is tough to say goodbye. I’m sure your friend Mary wouldn’t want you to be lonely.'
  },
  {
    text: 'It was nice to eat with Mary. I don’t want to eat by myself.'
  },
  {
    text: 'Well then, let me introduce you to everyone here. My name is Eahab.'
  },
  {
    text: 'My name is Takeshi, nice to meet you.'
  },
  {
    text: "Hey guys, I'd like you to meet Takeshi."
  },
  {
    text: "Hello! I am Sean! Pleased to meet you!"
  },
  {
    text: "You should probably watch out from that guy."
  },
  {
    text: "Hey! What’re you saying!"
  },
  {
    text: "Hahaha"
  },

  //Scene 4
  {
    text: 'Takeshi rides the bus to Hiroshima with Japan Club.'
  },
  {
    text: 'Everyone, from here on Vassil sensei will guide you around Hiroshima.'
  },
  {
    text: 'How is everyone doing? Before the tour, does anyone have any questions?'
  },
  {
    text: 'Yes! I have a question! Which do you like more? The Hiroshima Okonomiyaki or the Kansai Okonomiyaki?'
  },
  {
    text: "I like Kansai style more!"
  },
  {
    text: "Me too!"
  },
  {
    text: "Without a doubt Hiroshima style!"
  },
  {
    text: "I think they’re both delicious!"
  },
  {
    text: "I wonder if I can buy a “Big Cute” Okonomiyaki."
  },
  {
    text: "I want to try and eat the Dragon Okonomiyaki."
  },
  {
    text: "Koi Okonomiyaka is the best!"
  },
  {
    text: "It looks like everyone likes Okonomiyaki huh?"
  },
  {
    text: "Yea. Everyone, let’s eat Okonomiyaki after we get off the bus."
  },
  {
    text: "All right! I’m hungry too. I’m looking forward to trying the Hiroshima style."
  },
  {
    text: "Yea. Hiroshima Okonomiyaki looks good!"
  },
  {
    text: "It is good. There’s also an Okonomiyaki restaurant where you can make it on the table yourself!"
  },
  {
    text: "Really?!"
  },
  {
    text: "Nagano style is the best."
  },
  {
    text: "There is no Nagano style!"
  },
  {
    text: "Hahaha."
  },
  {
    text: "Hahaha! Everyone in Japan Club is funny."
  },
  {
    text: "Hey Takeshi, do you like Okonomiyaki?"
  },
  {
    text: "I sure do. I used to often eat Okonomiyaki with Mary."
  },
  {
    text: "Mary is a close friend  of yours huh?"
  },
  {
    text: "Yea. Mary is energetic like you guys."
  },
  {
    text: "Is Mary coming to Japan again?"
  },
  {
    text: "Because Mary has a lot of friends and a host family in Japan, I think she will visit again."
  },
  {
    text: "You will surely meet her again."
  },
  {
    text: "I think friendship is important."
  },
  {
    text: "Everyone here values their friendships. I am sure she treasures the friendship you two have."
  },
  {
    text: "Thank you for your continuous support."
  },

  //Scene 5
  {
    text: 'Takeshi and Japan Club go to Miyajima.'
  },
  {
    text: 'Everyone, we have arrived at Tai Smile. We have a special guest today. This guest is from Yamaguchi.'
  },
  {
    text: 'Hello everyone!'
  },
  {
    text: 'Christian!'
  },
  {
    text: 'Chrisitan Palmer came to Hiroshima!'
  },
  {
    text: 'How’s Yamaguchi?'
  },
  {
    text: 'It’s good. I’ve come to like living there and have already gotten used to it. How’s the Ehime trip going?'
  },
  {
    text: 'We’re having fun! We’re going Miyajima Island soon.'
  },
  {
    text: 'Miyajima sounds fun. I am also going with you guys.'
  },
  {
    text: 'Everyone, we are leaving for Miyajima! Please board the boat.'
  },
  {
    text: 'Treasure! Tyler! Come with me!'
  },
  {
    text: 'Yes Yarrchan!'
  },
  {
    text: 'Hmm? Did you guys hear that voice?'
  },
  {
    text: 'Mikyan? No way! Can it be?!'
  },
  {
    text: 'Habu-chan!'
  },
  {
    text: 'Habu chan?'
  },
  {
    text: 'Briana? Hollie? What’re you doing here?'
  },
  {
    text: 'For treasure.'
  },
  {
    text: 'Amr is here too?!'
  },
  {
    text: 'Amr! Yarrchan found some treasure! Oh, hello everyone. I’m Jose.'
  },
  {
    text: 'Ok, let’s go!'
  },
  {
    text: 'Should we go take a look? I wonder what is the Miyajima treasure?'
  },
  {
    text: 'Since we have some time, let’s go to the treasure’s location.'
  },
  {
    text: 'This is not treasure...'
  },
  {
    text: 'A toy treasure chest...'
  },
  {
    text: 'Habu-chan?! It’s been so long! I thought I could find some treasure here...it’s hopeless! I can’t take it anymore!'
  },
  {
    text: 'Don’t give up Yarrchan. You’ll find treasure one day.'
  },
  {
    text: 'That’s right. We’ll give it our best together!'
  },
  {
    text: 'So, shall we return to America? There is no treasure here.'
  },
  {
    text: 'Japan Club is returning to America tomorrow right? Do you want to play with us before you leave?'
  },
  {
    text: 'Let’s pet the dears!'
  },
  {
    text: 'The dears are so cute!'
  },
  {
    text: 'It will be nice to relax at the beach.'
  },
  {
    text: 'Let’s play at Miyajima’s beach!'
  },
  {
    text: 'All right! Let’s also eat some Taiyaki!'
  },
  {
    text: 'Hey! We didn’t find any treasure. How do you plan on paying me back?'
  },
  {
    text: 'Uhh…someone help me!'
  },
  {
    text: 'Come back here!'
  },
  {
    text: 'Those two will never change...'
  },
  {
    text: 'Japan Club is a very interesting group.'
  },

  //Scene 6
  {
    text: 'Takeshi’s Treasure.'
  },
  {
    text: "I'm glad you hung out with us Takeshi."
  },
  {
    text: 'If you come to America, let’s hangout again.'
  },
  {
    text: 'I am glad I came across Japan Club.'
  },
  {
    text: 'Unfortunately, Yarrchan never found the treasure.'
  },
  {
    text: 'The treasure...'
  },
  {
    text: 'I wish I could have taken a picture of the treasure.'
  },
  {
    text: 'That’s not true. You did find it.'
  },
  {
    text: 'What do you mean?'
  },
  {
    text: 'The treasure you found at Miyajima Island is right here.. Everyone here cherishes Japan Club and carries strong friendships. Japan Club is the treasure.'
  },
  {
    text: 'It’s going to become lonely without Japan Club...'
  },
  {
    text: 'Yea. It’s sad to bid farewell.'
  },
  {
    text: 'I am glad I was able to make a lot of memories with Japan Club.'
  },
  {
    text: 'I am glad I was able to see Japan Club again.'
  },
  {
    text: "It’s not ‘goodbye’ but ‘see you again’!!"
  },
  {
    text: 'Japan Club! come on in for a big hug!'
  },
  {
    text: 'Japan Club, thank you so much. I will never forget this experience.'
  },
  {
    text: 'Say hi to Mary for us. We will be rooting for you Takeshi!'
  },
  {
    text: "Let’s take a picture everyone!"
  },
  {
    text: 'Okay everyone, say cheese!'
  },
  {
    text: ""
  },
  {
    text: "Special thanks to Eahab Masoud for Story Writer and Developer of Chapter 24."
  },
  {
    text: "Special thanks to Sean Weeks for the Art Design of characters in Chapter 24."
  },
  {
    text: "Special thanks to Briana Cruz for the Art Design of the Genki Cast/Developers (Credits portraits and in Chapter 24)."
  },
  {
    text: "Special thanks to Christian Palmer for assisting with the grammar/sentence structure found in Chapter 24's dialogues."
  },
  {
    text: "Special thanks to Amr Masoud for Quality Assurance and assistance with chapter 24's development."
  },



  //After Playing the last Chapter in the Game
  {
    text: "Thank You For Playing!"
  },

  //Credits
  {
    text: ""
  },

  //Title Screen Confirmation
  {
    text: 'Click on the screen or press "Enter" to return to Title Screen'
  },

  //Chapter Selection
  {
    text: ""
  }
];

/** Moved the english translation from story into this file since this is where
 *everything related to translation dialogue will go.
 */
//Scene 1
/*{
  text: "Yes, this is Little Asia."
},
{
  text: "My name is John Wang. I saw your classified ad."
},
{
  text: "I see. Well, shall we meet and talk? Can you come to the store today?"
},
{
  text: "I cannot come today, but if it's tomorrow, I think I can come."
},
{
  text: "I see. Today is no good...All right, how about one o' clock tomorrow?
"},
 {
  text: "One o' clock. Okay, I've got it."
 },

 //Scene 2, John arrives for interview at Little Asia
 {
   text: "Mr. Wang, why are you interested in this job?"
 },
 {
   text: "It seems interesting. I can meet various people; I can also use Japanese... "
 },
 {
   text: "Have you worked at a restaurant before?"
 },
 {
   text: "Yes. As a waiter, I have."
 },
 {
   text: "Can you start tomorrow?"
 },
 {
   text: "Yes. I'll do my best."
 },
 {
   text: "Good luck."
 },

 //Scene 3, John is on the job at the restaurant

 {
   text: "Oh, Professor Yamashita."
 },
 {
   text: "John, do you work here."
 },
 {
   text: "Yes, I work three days a week."
 },
 {
   text: "I see. Which one is good?"
 },
 {
   text: "This curry is the most popular one.
 },
 {
   text: "It looks good. Well, I will try this one."
 },

 //////////////////////////Chapter 14//////////////////////////////////////////

 {
   text: "What do you think is for a Valentine’s present?"
 },
 {
   text: "Well, Takeshi always the same sweater, so why don’t you give him a sweater?"
 },
 {
   text: "That might be a good idea."
 },

//Scene 5

{
  text: "Takeshi, this is for you."
},
{
  text: "For me? Thank you. May I open it?"
},
{
  text: "Yes."
},
{
  text: "Wow, this is a nice sweater! I’ve wanted one like this.  Did you knit it Mary?"
},
{
  text: "Yes. It may be small, so please try it on."
},
{
  text: "It fits perfectly. Thank you."
},

//Scene 6

{
  text: "Your sweater looks warm."
},
{
  text: "Mary gave me this."
},
{
  text: "It looks good on you. I want a girlfriend, too. You know, Robert got as many as ten chocolates."
},
{
  text: "Hah, that’s incredible. How about you John?"
},
{
  text: "Yes. I only got one. From my landlady. How sad?"
},
{
  text: "But Robert will probably have a tough day on White Day."
},
{
  text: "White Day?"
},
{
  text: "Yes, boys have to return the favor on March 14th."
},

////////////////////Chapter 15 below//////////////////////////////////////

{
  text: "Takeshi, do you have any plans for the holidays?"
},
{
  text: "Not really. Why?"
},
{
  text: "I am thinking of going to Michiko’s home in Nagano. Do you want to go?"
},
{
  text: "Is it okay?"
},
{
  text: "Yes, Michiko told me to invite you."
},
{
  text: "Then, I will go. I will check the train schedule."
},

//Scene 8
{
  text: "Since we got here early, do you want to do a little sightseeing?"
},
{
  text: "Yes. Where shall we go?"
},
{
  text: "How about Zenkoji Temple? It’s a famous temple."
},
{
  text: "Sounds good. What shall we eat for lunch?"
},
{
  text: "Soba noodles in Nagano are delicious, so let’s eat soba."
},

//Scene 9
{
  text: "Excuse me, which bus goes to Zenkoji Temple?"
},
{
  text: "For Zenkoji, it’s bus number 11."
},
{
  text: "Thank you very much. Can I have this map? "
},
{
  text: "Yes, And these are discount tickets for the museum. Please take them, if you like."
},
{
  text: "This is the museum that has paintings of Higashiyama Kaii, isn’t it? We are planning to go tomorrow. Thank you."
},
{
  text: "Have a safe trip."
},*/

export default engTranslation;
