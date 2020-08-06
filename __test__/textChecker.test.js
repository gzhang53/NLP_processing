import {textChecker} from "../src/client/js/textChecker"

describe('Test of textChecker function', () => {
    test('Test true if textChecker functions', () => {
        expect(textChecker('feel good')).toBeDefined();
    });
});