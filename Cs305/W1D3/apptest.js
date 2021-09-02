// const assert = require("chai").assert;
"use strict"
const assert = require('assert');
const app = require('./app.js');


describe('App', function(){
    it('app should retun hello', function(){
        assert.equal(app(), 'hello');
    
    });
});