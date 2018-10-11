"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_world_1 = require("./hello-world");
var chai = require("chai");
var expect = chai.expect;
describe('My add function', function () {
    it('should be able to add things correctly', function () {
        expect(hello_world_1.add(3, 4)).to.equal(7);
    });
});
//# sourceMappingURL=hello-world.spec.js.map