describe("Day 09", function () {
    const streamProcessor = require('../src/day-09/StreamProcessor');

    it("when <abc>, should be 3", function () {
        expect(streamProcessor('<abc>')).toEqual(3);
    });
    it("when <random characters>, should be 17", function () {
        expect(streamProcessor('<random characters>')).toEqual(17);
    });
    it("when <<<<>, should be 3", function () {
        expect(streamProcessor('<<<<>')).toEqual(3);
    });
    it("when <{!>}>, should be 2", function () {
        expect(streamProcessor('<{!>}>')).toEqual(2);
    });

    it("when <{o\"i!a,<{i<a>, should be 10", function () {
        expect(streamProcessor('<{o\"i!a,<{i<a>')).toEqual(10);
    });
});
