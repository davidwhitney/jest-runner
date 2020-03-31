module.exports = {
    "reporters": [
      "default",
      ["./node_modules/jest-html-reporter", {
        "pageTitle": "Test Suite Reporter",
        "outputPath": "views/index.html",
        "includeFailureMsg": true,
        "includeConsoleLog": true,
        "useCssFile": false,
        "sort": "titleAsc",
        "append": false
      }]
    ]
};