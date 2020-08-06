import { handleSubmit } from "../src/client/js/formHandler"
import {textChecker} from "../src/client/js/textChecker"

describe('Test of handleSubmit function', () => {
    test('Test true if handleSubmit functions', () => {
        expect(handleSubmit).toBeDefined();
    });
});


describe('Test of textChecker function', () => {
    test('Test true if textChecker functions', () => {
        expect(textChecker('feel good')).toBeDefined();
    });
});