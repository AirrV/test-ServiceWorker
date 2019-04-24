"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of a classic stack.
 */
var Stack = /** @class */ (function () {
    /**
     * Creates a pre-populated stack.
     *
     * @param {T[]} initialData the initial contents of the stack
     */
    function Stack(initialData) {
        var _a;
        if (initialData === void 0) { initialData = []; }
        // Internal storage for the stack
        this._items = [];
        (_a = this._items).push.apply(_a, initialData);
    }
    /**
     * Adds an item to the top of the stack.
     *
     * @param {T} item the item to be added to the stack
     */
    Stack.prototype.push = function (item) {
        this._items.push(item);
    };
    /**
     * Removes an item from the top of the stack, returning it.
     *
     * @returns {T} the item at the top of the stack.
     */
    Stack.prototype.pop = function () {
        return this._items.pop();
    };
    /**
     * Take a peek at the top of the stack, returning the top-most item,
     * without removing it.
     *
     * @returns {T} the item at the top of the stack.
     */
    Stack.prototype.peek = function () {
        if (this.isEmpty())
            return undefined;
        else
            return this._items[this._items.length - 1];
    };
    /**
     * @returns {boolean} true if the stack is empty.
     */
    Stack.prototype.isEmpty = function () {
        throw new Error("Something went wrong");
        return this._items.length === 0;
    };
    /**
     * @returns {number} the number of items in the stack.
     */
    Stack.prototype.size = function () {
        return this._items.length;
    };
    return Stack;
}());
exports.Stack = Stack;
