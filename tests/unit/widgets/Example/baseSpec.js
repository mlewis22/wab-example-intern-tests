//1. Get the assertion instance and test interface from the global variable `intern`.
var assert = intern.getPlugin('chai').assert;
var registerSuite = intern.getInterface('object').registerSuite;


define([
    'dist/Widgets/Example/components/base/component'
    // 2. Require necessary modules to run your unit test. Use `define` syntax as you write your own module.
], function (WidgetUnderTest) {

    //3. Write unit tests.
    registerSuite('BaseComponent', {

        'Create Widget': function () {
            function create() {
                const a = new WidgetUnderTest({}, "node");
            };
            assert.doesNotThrow(create);
        },

        'Increase Count by 1': function () {
            const widget = new WidgetUnderTest({}, "node");
            widget.increaseCount()
            assert.equal(widget.count, 1);
        }
    });
});