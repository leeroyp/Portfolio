let resumeData = {
    "name": "Leeroy Phili",
    "role": "Junior Full stack Web Developer",
    "linkedinId":"Leeroy Phili",
    "roleDescription": " Looking for a role in either front-end or back-end.   ",
    "phone":"4168284176",
    "email":"leeroyphili@gmail.com",

    "socialLinks":[
        {
          "name":"linkedin",
          "url":"https://www.linkedin.com/in/leeroy-phili-0b0b5119b/",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"https://github.com/leeroyp",
          "className":"fa fa-github"
        },
        {
          "name":"skype",
          "url":"http://twitter.com/LeeroyPhili",
          "className":"fa fa-twitter"
        },
        {
          "name":"twitter",
          "url":"http://twitter.com/leeroyphili",
          "className":"btn btn-secondary btn-sm"
        }
      ],
    "aboutme":"Mechanical engineering technologist pursing a career as a software developer. Although during my undergrad studies I took some coding classes, it was not until I graduated that I knew software development was the right career path for me. In an effort to achieve this dream, I have since enrolled in a number of courses achieving multiple certificates as a full stack web developer and furthermore for frameworks such as React, React Native, Redux and more.  Understanding the importance of community contributions, Im a very active member with Toronto Js and I continue to seek challenging projects that will help acquire more  knowledge about the subject.   ",
    "resume":"images/Leeroy-Phili-Resume.pdf",
    "projects":[
      {
        "name":"YoTixx ",
        "projectDiscription":"Inspired by the likes of ticketmaster, stubhub and many more ticketing apps, I challenged myself to build an app that was similar while implementing cool features such as price compare for the same or similar tickets sold  across multiple platforms. I used stubhub, Ticketmaster and Gametime web Api  to fetch data needed. Using firebase Auth, each user is able to signup/signin to access other cool features like view current tickets, or change some privacy settings in the app. Overall the app has a lot potential also displays a deep knowledge of ReactNative",
        "framework":"ReactNative, Node js , Express, Expo, Mongo",
        "year": 2020,
        "imgurl":"images/portfolio/modals/TicketApp.png",
        "giturl":"https://github.com/leeroyp/Tickets",
        "weburl":""
      },
      {
        "name":"Location-Tracker",
        "projectDiscription":" This was one of my first mobile application. This app was build using expo for the purposes of understanding and learning more about react native. This app let user track their routes using maps, at the end of each route logged in users have the ability to save the track.  All tracks will be saved on the Mongo Database.  Each time a user logs in they have the ability to view the previous saved tracks. This was a fun knowledgable project. At the end of the project I had great understanding of React Native navigation and more familiarity with React hooks ",
        "framework":"React Native , Node, Mongo",
        "year": 2020,
        "imgurl":"images/portfolio/modals/trackerApp.png",
        "giturl":"https://github.com/leeroyp/React-Native-Location-Tracker",
        "weburl":""
      },
     
      {
        "name":"Food App",
        "projectDiscription":"This is one of my very first mobile apps build using Expo CLI. In this app user can search any food item in the search bar. When a user submits the search, a request is sent to the yelp api for a business search. The response data from the api is filtered by pricing and and rendered to the screen.  Users can click on any result to view more food items from the same restaurant. ",
        "framework":"Javascript, Expo CLI, React Native",
        "year": 2020,
        "imgurl":"images/portfolio/modals/food2.png",
        "giturl":"https://github.com/leeroyp/React-Food-Search",
        "weburl":"https://expo.io/@leeroyp/food-search"

      },
      {
        "name":"The weather dashboard ",
        "projectDiscription":"This is a neat project that i really enjoyed building. Upon visit page, the user is instantley shown the current weather and the 5 day weather forecast of their curent city.  Users have the ability to search for any city in the world and get the the current weather and the 5 day weather forecast. As the user searches for different cities, each city is added to the array of previous searched cities and save in the local storage.  All the cities in the array are button which can be clicked to view the weather and the forecast of that particular city. All the weather data is fetched from Open Weather Api using AJAX    ",
        "framework":"javascript,JQuery,AJAX, Node.js, Bootstrap, HTML5",
        "year": 2020,
        "imgurl":"images/portfolio/modals/weatherApp.png",
        "giturl":"https://github.com/leeroyp/Assignment6LP.github.io",
        "weburl":"https://leeroyp.github.io/weatherDashboard.github.io/"
     
      },

      {
        "name":"Eat Da Burger",
        "projectDiscription":"Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks(devours the burger) it, the burger will move to the right side of the page, a user can devour as many burgers as they was.   All the burgers are stored  in MySql database, whether devoured or not.",
        "framework":"Javascript,HTML, CSS, Node.js, MySql",
        "year": 2020,
        "imgurl":"images/portfolio/modals/burgerApp.png",
        "giturl":"https://github.com/leeroyp/-burger-logger-",
        "weburl":"https://thawing-scrubland-31859.herokuapp.com/"

      },
      {
        "name":"Budget Tracker",
        "projectDiscription":"This is an online/offline budget track. Users will be able to to add expenses and deposits to their budget with or without connection. When entering transactions offline, they should populate the total when brought back online  ",
        "framework":"Javascript,HTML, CSS, Node.js, Monogo (mongoose)",
        "year": 2020,
        "imgurl":"images/portfolio/modals/budgetApp.png",
        "giturl":"https://github.com/leeroyp/Budget-Trackers",
        "weburl":" https://arcane-dawn-74998.herokuapp.com/"
      }
      
    ],
 
    "skillsDescription":"Skill Level",
    "skills":[
      {
        "skillname":"HTML5"
      },
      {
        "skillname":"CSS"
      },
      {
        "skillname":"Reactjs"
      },
      {
        "skillname":"ReactNative"
      },
      {
        "skillname":"SQL"
      },
      {
        "skillname":"JQuery"
      }
    ],
   
  }
  
  export default resumeData