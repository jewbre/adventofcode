describe("Day 03", function () {
    const passwordValidity = require('../src/day-04/PasswordValidity');
    const passwordValidityOrderInsensitive = require('../src/day-04/PasswordValidityOrderInsensitive');

    it("should be 1", function () {
        expect(passwordValidity('aa bb cc dd ee')).toEqual(1);
    });

    it("should be 0", function () {
        expect(passwordValidity('aa bb cc dd aa')).toEqual(0);
    });


    it("when abcde fghij, should be 1", function () {
        expect(passwordValidityOrderInsensitive('abcde fghij')).toEqual(1);
    });

    it("when iiii oiii ooii oooi oooo, should be 1", function () {
        expect(passwordValidityOrderInsensitive('iiii oiii ooii oooi oooo')).toEqual(1);
    });

    it("when a ab abc abd abf abj, should be 1", function () {
        expect(passwordValidityOrderInsensitive('a ab abc abd abf abj')).toEqual(1);
    });

    it("when abcde xyz ecdab, should be 0", function () {
        expect(passwordValidityOrderInsensitive('abcde xyz ecdab')).toEqual(0);
    });

    it("when oiii ioii iioi iiio, should be 0", function () {
        expect(passwordValidityOrderInsensitive('oiii ioii iioi iiio')).toEqual(0);
    });

});
