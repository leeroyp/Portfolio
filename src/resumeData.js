let resumeData = {
    "name": "Leeroy Phili",
    "role": "Full stack Web Developer",
    "linkedinId":"Leeroy Phili",
    "roleDescription": " Located in Toronto, On. And i love watching and playing soccer     ",
    "phone":"416-828-4176",
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
    "aboutme":"My name is Leeroy Phili. I recently graduated from a Full Stack web developer program at the University of Toronto. I'm currently looking for my first job as a developer. In the last few months since graduation, I have been completing personal projects that can be seen on my GitHub page. In an effort to further my knowledge on the subject and stay current with the latest framework updates, I continue to take a number of courses on Udemy during my free time. Although I have no experience in the field, I believe my drive, passion and determination about software development can provide a fresh take on projects. I like new challenges and I am always open to constructive feedback. I am a quick learner and can comfortably adapt to any new environment. I am a team player, ready to use my skills and talents to help build quality and highly functional products.   ",
    "resume":"images/Leeroy-Phili-Resume.pdf",
    "projects":[
      {
        "name":"YoTixx ",
        "projectDiscription":"Inspired by the likes of Ticketmaster, Stubhub and many more ticketing apps. I challenged myself to build an app that was similar while implementing various features such as price compararison for the same or similar tickets sold  across multiple platforms. I used Stubhub, Ticketmaster and Gametime web Apis to fetch the required data. For user authenticatication I used firebase Auth to enable each user to sign-up/sign-in to access other features, like view current tickets, or change some privacy settings in the app. Overall the app has a lot potential also displays a deep knowledge in React Native",
        "framework":"ReactNative, Node js , Express, Expo, Mongo",
        "year": 2020,
        "imgurl":"images/portfolio/modals/TicketApp.png",
        "giturl":"https://github.com/leeroyp/Tickets",
        "weburl":""
      },
      {
        "name":"Location-Tracker",
        "projectDiscription":" This was one of my first mobile applications. This app was built using expo for the purposes of understanding and learning more about React Native. This app lets users track their routes using maps. Logged in users have the ability to record and save each route track with their own custom track name.  All route tracks will be saved to the Mongo Database.  Each time a user logs in, they have the ability to view the previously saved tracks. This was a fun and knowledgeable project. At the end of the project, I had great understanding of React Native navigation and more familiarity with React hooks, such as useContext and more.  ",
        "framework":"React Native , Node, Mongo",
        "year": 2020,
        "imgurl":"images/portfolio/modals/trackerApp.png",
        "giturl":"https://github.com/leeroyp/React-Native-Location-Tracker",
        "weburl":""
      },
     
      {
        "name":"Food App",
        "projectDiscription":"This app was  build using Expo CLI. Althought the app apppears to be very simple, it covers the most important topics of React Native.  In this app user can search any food item in the search bar which will send a request to the yelp api for a business search. The response data from the api is filtered by pricing and and rendered to the screen accordingly.  Users can click on any result to view more food items from the same restaurant. ",
        "framework":"Javascript, Expo CLI, React Native",
        "year": 2020,
        "imgurl":"images/portfolio/modals/food2.png",
        "giturl":"https://github.com/leeroyp/React-Food-Search",
        "weburl":"https://expo.io/@leeroyp/food-search"

      },
      {
        "name":"The Weather Dashboard ",
        "projectDiscription":"This is a neat project that I really enjoyed building. When the user visit the page, they will be instantly shown the current weather and the 5 day weather forecast of their curent city.  Users have the ability to search for any city in the world and get the current weather and the 5 day weather forecast. As the user searches for different cities, each city will be  added to the array of previoussly searched cities and saved in the local storage.  All the previously searched city names are rendered below the search bar in the search history. Users can click on any city in the search history and again be presented with current and future conditions of that city. All the weather data is fetched from Open Weather Api using AJAX    ",
        "framework":"javascript,JQuery,AJAX, Node.js, Bootstrap, HTML5",
        "year": 2020,
        "imgurl":"images/portfolio/modals/weatherApp.png",
        "giturl":"https://github.com/leeroyp/Assignment6LP.github.io",
        "weburl":"https://leeroyp.github.io/weatherDashboard.github.io/"
     
      },

      {
        "name":"Eat Da Burger",
        "projectDiscription":"Eat-Da-Burger! is a restaurant app that lets users input the names of the burgers they would like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks (devours the burger), the burger will move to the right side of the page which indicates the burger has been devoured. A user can devour as many burgers as they want.   All the burgers are stored in MySql database, whether devoured or not.",
        "framework":"Javascript,HTML, CSS, Node.js, MySql",
        "year": 2020,
        "imgurl":"images/portfolio/modals/burgerApp.png",
        "giturl":"https://github.com/leeroyp/-burger-logger-",
        "weburl":"https://thawing-scrubland-31859.herokuapp.com/"

      },
      {
        "name":"Budget Tracker",
        "projectDiscription":"This is an online/offline budget track. Users will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.  ",
        "framework":"Javascript,HTML, CSS, Node.js, Monogo (mongoose)",
        "year": 2020,
        "imgurl":"images/portfolio/modals/budgetApp.png",
        "giturl":"https://github.com/leeroyp/Budget-Trackers",
        "weburl":" https://arcane-dawn-74998.herokuapp.com/"
      }
      
    ],
 
    "skillsDescription":"Web Developemnt Skills",
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