# wab-example-intern-tests

Contains an example of ArcGIS Web AppBuilder Widgets using intern as testing framework.
This particular repo includes both UNIT and FUNCTIONAL tests.

to find out more about intern visit - https://theintern.io/

In addition a full development environment is provided and includes
- TypeScript Development
- Esri Yo Generators
- Grunt Task Runner
- Dojo Build task - Minification etc

An Example Widget and Theme is also provided.


## Pre-Requisites

You will need to first download the latest version of ArcGIS Web AppBuilder. - https://developers.arcgis.com/web-appbuilder/ (*The current Tested version is 2.12*)

You will also need to install the latest version of NodeJS - https://nodejs.org/en/

### Java
Java will also need to be installed to use the SeleniumTunnel provided as part of interns function tests. 

Please also insure that java is on the system path. 

If you are only wishing to use unit tests you do not need to install Java.

### Browsers
This package defaults to using the google chrome browser for testing. You must ensure you have chomee installed to use this package without change.

Settings of other browsers are found at [Functional Tests](#Functional-Tests)

## Getting Started

### Install
To start you will need to clone this repository.

``` git clone https://github.com/mlewis22/wab-example-intern-tests.git ```

In a CMD prompt set current work space as "wab-example-intern-tests".

Next, run - ``` npm install ``` to get the latest packages.

This will run a preinstall process to install the following global packages. 
- Yeoman (yo) : https://yeoman.io/
- Intern : https://theintern.io
- Grunt-CLI : https://github.com/gruntjs/grunt-cli
- Bower : https://bower.io/
- Esri Yo Generators : https://github.com/Esri/generator-esri-appbuilder-js
- esri-wab-build : https://github.com/gbochenek/esri-wab-build

It will also install the ArcGIS JavaScript API 3.28 and supporting Dojo modules.

If this is the first time running this package it can take a few minutes.

### ArcGIS Web AppBuilder
Once you have downloaded the ArcGIS Web AppBuilder extract the zip folder.
Copy the "WebAppBuilderForArcGIS" folder into the root of this project.

Start the builder by running ```start.bat``` and create a new application as per esri documentation.

This will be your application of which the task runner will copy the widget and themes too.

### Configuring Task Runner

Grunt has been installed as part of this package. The basics of this task runner comes from the esri yo generator.

To push information to the app the gruntfile.js needs the following updates

- appDir: the location of your application created previously
- stemapp: the location of the stemapp folder. If you copied the builder to the root of the project you should not need to update this variable.


## Build
Once the task runner is updated run

``` npm run-script build ```


## Test
To test you must first build your project before running the tests. This is because the test files use the javascripts files released as part of the typescript process.

Secondly you need to ensure that the application is saved with the widget in place. This is to ensure that the functional tests are able to access the DOM.

finally update the url of the test application found at "tests\functional\widgets\Example\config.json"

to test, run

``` npm test ```

You should see two unit tests complete. Two functional tests will also complete by opening the browser.


### Unit Tests
Unit tests sit within "tests\unit" folder.
Within this folder is an example test suite. 

### Functional Tests
These test use the intern functional tests components. Tests can be found in "tests\functional".

Depending on whats installed on your machine additional environments can be tested. Issues should be directed at the intern repository.

The following can be added to the intern.json file. Currently google chrome is configured and is not headless. For information visit intern.io

```json
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
```

firefox will potentially need a gekodriver - "https://github.com/mozilla/geckodriver/releases"

https errors my interupt the function test due to the self sign certificate. It is suggested that the certificate is trusted. Alternatively testing can be completed on code stored in another web server.

## Release (optional)

Release uses the esri-wab-build libarary found here - https://github.com/gbochenek/esri-wab-build

This product attempts to compress the application using dojo build -https://dojotoolkit.org/documentation/tutorials/1.10/build/

run by using

``` npm release ```

There is a known bug with the bower release of ArcGIS JavaScript 2.35 & greater that has yet to be addressed. The dijit theme is unable to be downloaded.

You must update your version of the "buildTool.js" as per this merge

https://github.com/gbochenek/esri-wab-build/pull/62/commits/e7fd1ea94b0abe605460e56a2c75d744f455f16a

You can find it in the node_module\esri-wab-build folder.