# wab-example-intern-tests

Contains an example of ArcGIS Web AppBuilder Widgets using intern as testing framework.
This particular repo includes both UNIT and FUNCTIONAL tests.

to find out more about intern visit - https://theintern.io/


-Yo - Esri Generator - https://github.com/Esri/generator-esri-appbuilder-js
-Grunt Task Runner
-Intern - Tester
- Typescript
- bower - ArcGIS JavaScript Package Manager


## Getting Started

Clone this repository.

run - ``` npm install ``` to get the latest packages.
This will 



## Build



# prereqs
You must have ArcGIS web appbuilder setup somewhere on disk. 

npm install to get the packages.

# Unit tests


# functional tests

to run a functional test you need to ensure that the web app builder is launched. Without that it is unable to hook into the interface


chrome can be made headless by removing theheadless args

        {
            "browserName": "chrome",
            "fixSessionCapabilities": "no-detect",
            "chromeOptions": {
                "args": [
                    "headless",
                    "disable-gpu"
                ]
            }
        },


// Firefox needs to have loader in path.
            "environments": [
        {
            "browserName": "chrome",
            "fixSessionCapabilities": "no-detect",
            "chromeOptions": {
                "args": [
                    "headless",
                    "disable-gpu"
                ]
            }
        },
        {
            "browserName": "internet explorer",
            "fixSessionCapabilities": "no-detect"
        },
        {
            "browserName":"MicrosoftEdge"
        },
        {
            "browserName": "firefox",
            "moz:firefoxOptions": {
              "args": ["-headless", "--window-size=1024,768"]
            }
        }
    ]