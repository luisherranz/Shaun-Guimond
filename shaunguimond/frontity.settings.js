const settings = {
  "name": "shaunguimond",
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
              "Marketing",
              "/category/marketing/"
            ],
            [
              "Travels",
              "/category/travels/"
            ],
            [
              "Coding",
              "/category/coding/"
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
};

export default settings;
