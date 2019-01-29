const { expect } = require('chai');
const wrap = require('./wrap')

describe('wrap', () => {
  
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  
  it('it is a function', () => {
    expect(typeof wrap).to.equal('function')
  })
  
  it('If the number is longer than string input, return the string input', () => {
    expect(wrap('test input string', 50)).to.equal('test input string') 
  })
  
  it('If the number is short than the length of string, it should wrap the text', () => {
    expect(wrap('aaaaaaaaaaaaaaa', 5)).to.equal('aaaaa\naaaaa\naaaaa')
  })
  
})