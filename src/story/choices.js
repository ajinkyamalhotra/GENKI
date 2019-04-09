//in Var choices, array indexes will correspond to specific choices arrays in the game

var choices = [
  {
    //Array index 0
    choices: [
      {
        routeBegins: "chapter13Route",
        content: "Chapter 13",
        nextIndex: 0
      },
      {
        routeBegins: "chapter14Route",
        content: "Chapter 14",
        nextIndex: 0
      },

      {
        routeBegins: "chapter15Route",
        content: "Chapter 15",
        nextIndex: 0
      },
      {
        routeBegins: "titleScreenConfirmation",
        content: "Back",
        nextIndex: 0
      }
    ]
  },
  {
    //Array index 1
    choices: [
      {
        store: "blockAffection",
        routeBegins: "helpBlock",
        content: "Help Block."
      },
      {
        routeBegins: "noHelpBlock",
        content: "Don't help. He's too far."
      }
    ]
  },
  {
    //Array index 0
    choices: [
      {
        store: "blockAffection",
        routeBegins: "hangOutWithBlock",
        content: "Yep.",
        nextIndex: 0
      },
      {
        routeBegins: "noHangOutWithBlock",
        content: "Nope.",
        nextIndex: 0
      }
    ]
  }
];

/*var choices = [
  {
    choices: [
      {
        routeBegins: "showEffects",
        content: "Effects",
        nextIndex: 0
      },
      {
        routeBegins: "showTransitions",
        content: "Transitions",
        nextIndex: 0
      },

      {
        routeBegins: "showStoringChoices",
        content: "Storing choices for future use",
        resetStore: "true"
      },
      {
        routeBegins: "leave",
        content: "Leave"
      }
    ]
  },
  {
    choices: [
      {
        store: "blockAffection",
        routeBegins: "helpBlock",
        content: "Help Block."
      },
      {
        routeBegins: "noHelpBlock",
        content: "Don't help. He's too far."
      }
    ]
  },
  {
    choices: [
      {
        store: "blockAffection",
        routeBegins: "hangOutWithBlock",
        content: "Yep.",
        nextIndex: 0
      },
      {
        routeBegins: "noHangOutWithBlock",
        content: "Nope.",
        nextIndex: 0
      }
    ]
  }
];*/

export default choices;
