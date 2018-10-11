import { add } from './hello-world';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect  = chai.expect;

describe('My add function', () => {

    it('should be able to add things correctly' , () => {
        expect(add(3,4)).to.equal(7);
    });

});