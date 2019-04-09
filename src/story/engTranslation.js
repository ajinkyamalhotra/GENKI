/**
 *I found it easiest to create a separate js file to hold the english
 *translation of the story. NOTE: Some dialogues did not have any new vocab or
 *expressions to show, so I just kept the english translation in its place
 *for when the user presses the spacebar
 */
let engTranslation = [
  //////////////////////////Chapter 13//////////////////////////////////////////
  {
    text: "Please press \"Enter\" to begin"
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
    text: "Please press \"Enter\" to begin"
  },
  //Scene 4 - From here on will be finished by end of sprint
  {
    text: "A month before Valentine's Day."
  },
  {
    text: "What do you think is for a Valentine’s present?"
  },
  {
    text:
      "Well, Takeshi always the same sweater, so why don’t you give him a sweater?"
  },
  {
    text: "That might be a good idea."
  },

  //Scene 5
  {
    text: "On Valentine's Day at Takeshi's house."
  },
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
    text:
      "Wow, this is a nice sweater! I’ve wanted one like this.  Did you knit it Mary?"
  },
  {
    text: "Yes. It may be small, so please try it on."
  },
  {
    text: "It fits perfectly. Thank you."
  },

  //Scene 6
  {
    text: "The next day."
  },
  {
    text: "Your sweater looks warm."
  },
  {
    text: "Mary gave me this."
  },
  {
    text:
      "It looks good on you. I want a girlfriend, too. You know, Robert got as many as ten chocolates."
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
    text: "Please press \"Enter\" to begin"
  },
  //Scene 7
  {
    text: "Before the vacation"
  },
  {
    text: "Takeshi, do you have any plans for the holidays?"
  },
  {
    text: "Not really. Why?"
  },
  {
    text:
      "I am thinking of going to Michiko’s home in Nagano. Do you want to go?"
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
  {
    text: "Thanks. I will call Michiko."
  },

  //Scene 8
  {
    text: "At Nagano Station."
  },
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
    text: "At the Travel Information Office."
  },
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
    text:
      "Yes, And these are discount tickets for the museum. Please take them, if you like."
  },
  {
    text:
      "This is the museum that has paintings of Higashiyama Kaii, isn’t it? We are planning to go tomorrow. Thank you."
  },

  {
    text: "気をつける(きをつける)：To be careful/cautious (〜に) [RU - Verb]"
  },
  {
    text:
      "Thank You For Playing!"
  },

  //Title Screen Confirmation
  {
    text:
      "Press \"Enter\" to return to Title Screen"
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
