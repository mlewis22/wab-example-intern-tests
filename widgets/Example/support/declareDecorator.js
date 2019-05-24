define(["require", "exports", "dojo/_base/declare"], function (require, exports, declare) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A decorator that converts a TypeScript class into a declare constructor.
     * This allows declare constructors to be defined as classes, which nicely
     * hides away the `declare([], {})` boilerplate.
     */
    function default_1() {
        var mixins = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mixins[_i] = arguments[_i];
        }
        return function (target) {
            return declare(mixins, target.prototype);
        };
    }
    exports.default = default_1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyZURlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dpZGdldHMvc3VwcG9ydC9kZWNsYXJlRGVjb3JhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBRUE7Ozs7T0FJRztJQUNIO1FBQXdCLGdCQUFvQjthQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7WUFBcEIsMkJBQW9COztRQUMzQyxPQUFPLFVBQVMsTUFBZ0I7WUFDL0IsT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUM7SUFDSCxDQUFDO0lBSkQsNEJBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVjbGFyZSA9IHJlcXVpcmUoJ2Rvam8vX2Jhc2UvZGVjbGFyZScpO1xuXG4vKipcbiAqIEEgZGVjb3JhdG9yIHRoYXQgY29udmVydHMgYSBUeXBlU2NyaXB0IGNsYXNzIGludG8gYSBkZWNsYXJlIGNvbnN0cnVjdG9yLlxuICogVGhpcyBhbGxvd3MgZGVjbGFyZSBjb25zdHJ1Y3RvcnMgdG8gYmUgZGVmaW5lZCBhcyBjbGFzc2VzLCB3aGljaCBuaWNlbHlcbiAqIGhpZGVzIGF3YXkgdGhlIGBkZWNsYXJlKFtdLCB7fSlgIGJvaWxlcnBsYXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiguLi4gbWl4aW5zOiBPYmplY3RbXSk6IEZ1bmN0aW9uIHtcblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogRnVuY3Rpb24pOiBGdW5jdGlvbiB7XG5cdFx0cmV0dXJuIGRlY2xhcmUobWl4aW5zLCB0YXJnZXQucHJvdG90eXBlKTtcblx0fTtcbn1cbiJdfQ==