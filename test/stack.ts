import { expect } from 'chai';
import { Display } from '../src/Display';

describe('Display', () => {
    
    let display = new Display
    
    it('returns a string', () => {
        expect(display.print()).to.be.a('string');
    });
    it('equals "Hello Batman"', () => {
        expect(display.print()).to.equal('Hello Batman')
    })
    
});