define(['dojo/node!@theintern/leadfoot/keys', 'dojo/text!./config.json'], function (keysModule, configfile) {
    var registerSuite = intern.getInterface('object').registerSuite;
    var assert = intern.getPlugin('chai').assert;
    var config = JSON.parse( configfile );

    registerSuite('Widget Instance', {
        'Can Open': function () {
            return this.remote
                .setFindTimeout(60000)
                .get(config.appUrl)
                .sleep(5000)
                .setFindTimeout(60000)
                .findDisplayedById('dijit__WidgetBase_0')
                .click()
                .end();
        }
    });

    registerSuite('Count', {
        'Increase count by 1': function () {
            return this.remote
                .setFindTimeout(60000)
                .get(config.appUrl)
                .sleep(5000)
                .setFindTimeout(60000)
                .findDisplayedById('dijit__WidgetBase_0')
                .click()
                .end()
                .setFindTimeout(60000)
                .findDisplayedById('countBtn')
                .click()
                .end()
                .setFindTimeout(60000)
                .findById('countLabel')
                .getProperty('innerHTML')
                .then(function (val) {
                    console.log(val)
                    assert.equal(val, 'Count: 1');
                });
        }
    });
});


