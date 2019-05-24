define(['dojo/_base/declare',
  'jimu/BaseWidgetPanel',
  'dojo/topic',
  'dijit/_TemplatedMixin',
  'dojo/text!./Panel.html'
],
  function (declare, BaseWidgetPanel, topic, _TemplatedMixin, template) {

    return declare([BaseWidgetPanel, _TemplatedMixin], {
      templateString: template,
      baseClass: 'jimu-panel jimu-dockable-panel',

      postCreate: function () {
        this.inherited(arguments);
      },

      startup: function () {
        this.inherited(arguments);

        // TOPIC ADDED
        topic.publish('changeMapPosition', {right: this.position.width});
      },

    });
  });











