'use strict'

var test = require('tape')
var x

test('setup', function (t) {
  setup()
    .then(() => {
      t.end()
    })
})

test('test needing setup', function (t) {
  t.plan(1)
  t.equal(x, 42)
})

test('test needing no setup', function (t) {
  t.plan(1)
  t.equal(1, 1)
})

function setup () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      x = 42
      resolve()
    }, 100)
  })
}
