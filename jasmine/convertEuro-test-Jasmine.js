describe('I convert euro to usd', function () {
    var currency;

    beforeEach(function () {
        currency = 'USD'
    });

    it('1€ should return 1,3$', function () {
        expect(convertEuro(1, currency)).toEqual(1.3);
    });

    it('1€ should return 2,6$', function () {
        expect(convertEuro(2, currency)).toEqual(2.6);
    });

});

describe('I convert euro to gbp', function () {
    var currency;

    beforeEach(function () {
        currency = 'GBP'
    });

    it('1€ should return 0,87£', function () {
        expect(convertEuro(1, currency)).toEqual(0.87);
    });

    it('1€ should return 1,74£', function () {
        expect(convertEuro(2, currency)).toEqual(1.74);
    });

});


describe('I convert euro to jpy', function () {
    var currency;

    beforeEach(function () {
        currency = 'JPY'
    });

    it('1€ should return 124,77¥', function () {
        expect(convertEuro(1, currency)).toEqual(124.77);
    });

    it('1€ should return 249,56¥', function () {
        expect(convertEuro(2, currency)).toEqual(249.56);
    });

});

describe('I try with currency not handled by the function', function () {

    it('I try with NZD', function () {
        expect(function () {
            convertEuro(1, 'NZD')
        }).toThrow('Currency not handled');
    });


});
