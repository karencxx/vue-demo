const add = require('../qunit/add.js');

QUnit.module('add');

QUnit.test('add two numbers', assert => {
    assert.equal(add(1, 1), 2);
});

QUnit.test('unique value', assert => {
    const set = new Set([1,2,3,4,5,4])
    assert.deepEqual([...set], [1,2,3,4,5],'passed')
})

QUnit.test('NaN', assert => {
    const items = new Set([NaN, NaN])
    assert.ok(items.size === 1, 'passed')
})
