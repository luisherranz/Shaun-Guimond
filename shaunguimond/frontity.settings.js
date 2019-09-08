const settings = 
[
//Site 1
  {
  "name": "shaunguimond",
  "match": ["https://shaunguimond.com", "localhost:3000"],
  "state": {
    "frontity": {
      "url": "https:/www.shaunguimond.com",
      "title": "Shaun Guimond",
      "description": "A blog for business, travel and technology."
    }
  },
  "packages": [
    {
      "name": "@frontity/twentynineteen-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Business",
              "/category/business/"
            ],
            [
              "Travels",
              "/category/travels/"
            ],
            [
              "Technology",
              "/category/technology/"
            ],
            [
              "Projects",
              "/projects/"
            ],
            [
              "About Shaun",
              "/about-shaun/"
            ]

          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://wp.shaunguimond.com/wp-json/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
},
// Site 2*
{
"name": "unsweetenedcaroline",
"match": ["https://unsweetenedcaroline.shaunguimond.now.sh", "localhost:3001"],
"state": {
  "frontity": {
    "url": "https:/www.unsweetenedcaroline.shaunguimond.now.sh",
    "title": "Unsweetened Caroline",
    "description": "Where no recipe is sugarcoated."
  }
},
"packages": [
  {
    "name": "@frontity/mars-theme",
    "state": {
      "theme": {
        "menu": [
          [
            "About",
            "/my-story"
          ],
          [
            "Recipe",
            "/category/all-recipes/"
          ],
          [
            "Life",
            "/category/life/"
          ],
          [
            "Contact",
            "/contact/"
          ],
          [
            "Subscribe",
            "/subscribe/"
          ],
          [
            "Shop",
            "/shop/"
          ]

        ],
        "featured": {
          "showOnList": true,
          "showOnPost": false
        }
      }
    }
  },
  {
    "name": "@frontity/wp-source",
    "state": {
      "source": {
        "api": "https://unsweetenedcaroline.com/wp-json/"
      }
    }
  },
  "@frontity/tiny-router",
  "@frontity/html2react"
]
}, 
]; 

export default settings;
