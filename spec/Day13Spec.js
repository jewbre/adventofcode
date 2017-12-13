describe("Day 13", function () {
    const packetScanner = require('../src/day-13/PacketScanner');

    it("when default, should be 24", function () {
        expect(packetScanner('0: 3\n' +
            '1: 2\n' +
            '4: 4\n' +
            '6: 4', 0)).toEqual(24);
    });
    it("when task, should be 1876", function () {
        expect(packetScanner('0: 3\n' +
            '1: 2\n' +
            '2: 4\n' +
            '4: 6\n' +
            '6: 4\n' +
            '8: 6\n' +
            '10: 5\n' +
            '12: 8\n' +
            '14: 8\n' +
            '16: 6\n' +
            '18: 8\n' +
            '20: 6\n' +
            '22: 10\n' +
            '24: 8\n' +
            '26: 12\n' +
            '28: 12\n' +
            '30: 8\n' +
            '32: 12\n' +
            '34: 8\n' +
            '36: 14\n' +
            '38: 12\n' +
            '40: 18\n' +
            '42: 12\n' +
            '44: 12\n' +
            '46: 9\n' +
            '48: 14\n' +
            '50: 18\n' +
            '52: 10\n' +
            '54: 14\n' +
            '56: 12\n' +
            '58: 12\n' +
            '60: 14\n' +
            '64: 14\n' +
            '68: 12\n' +
            '70: 17\n' +
            '72: 14\n' +
            '74: 12\n' +
            '76: 14\n' +
            '78: 14\n' +
            '82: 14\n' +
            '84: 14\n' +
            '94: 14\n' +
            '96: 14', 0)).toEqual(1876);
    });
});
