describe("Day 03", function () {
    const spiralDistance = require('../src/day-03/SpiralDistance');

    it("when input 2, should be 1", function () {
        expect(spiralDistance(2)).toEqual(1);
    });
    it("when input 3, should be 2", function () {
        expect(spiralDistance(3)).toEqual(2);
    });
    it("when input 4, should be 1", function () {
        expect(spiralDistance(4)).toEqual(1);
    });
    it("when input 5, should be 2", function () {
        expect(spiralDistance(5)).toEqual(2);
    });
    it("when input 6, should be 1", function () {
        expect(spiralDistance(6)).toEqual(1);
    });
    it("when input 7, should be 2", function () {
        expect(spiralDistance(7)).toEqual(2);
    });
    it("when input 8, should be 1", function () {
        expect(spiralDistance(8)).toEqual(1);
    });
    it("when input 9, should be 2", function () {
        expect(spiralDistance(9)).toEqual(2);
    });
    it("when input 10, should be 3", function () {
        expect(spiralDistance(10)).toEqual(3);
    });

    // Max stack call
    // it("when input 325489, should be 552", function() {
    //     expect(spiralDistance(325489)).toEqual(552);
    // });

});
