/*var Rotate = pc.createScript("rotate");

Rotate.prototype.update = function (dt) {
    this.entity.rotate(0, 10*dt, 0);
};
*/
pc.script.create("rotate", function (app) {
    var ScriptObject = function (entity) {
        this.entity = entity;
    };

    ScriptObject.prototype = {
        initialize: function () {

        },

        update: function (dt) {
            this.entity.rotate(0, 10*dt, 0);
        }
    };

    return ScriptObject;
});