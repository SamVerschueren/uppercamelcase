'use strict';

/**
 * All the tests for the UpperCamelCase library.
 *
 * @author Sam Verschueren      <sam.verschueren@gmail.com>
 * @since  17 April 2015
 */

// module dependencies
var chai = require('chai'),
    upperCamelCase = require('./');

chai.should();

describe('UpperCamelCase', function() {

    it('Should return \'Foo\' for \'foo\'', function() {
        upperCamelCase('foo').should.be.equal('Foo');
    });

    it('Should return \'FooBar\' for \'fooBar\'', function() {
        upperCamelCase('fooBar').should.be.equal('FooBar');
    });

    it('Should return \'FoobarBaz\' for \'fooBar-Baz\'', function() {
        upperCamelCase('fooBar-Baz').should.be.equal('FoobarBaz');
    });

    describe('Dashes', function() {
        it('Should return \'FooBar\' for \'foo-bar\'', function() {
            upperCamelCase('foo-bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBarBaz\' for \'foo-bar-baz\'', function() {
            upperCamelCase('foo-bar-baz').should.be.equal('FooBarBaz');
        });

        it('Should return \'FooBar\' for \'foo--bar\'', function() {
            upperCamelCase('foo--bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'--foo-bar\'', function() {
            upperCamelCase('--foo-bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'--foo--bar\'', function() {
            upperCamelCase('--foo--bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'FOO-BAR\'', function() {
            upperCamelCase('FOO-BAR').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'-foo-bar-\'', function() {
            upperCamelCase('-foo-bar-').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'--foo--bar--\'', function() {
            upperCamelCase('--foo--bar--').should.be.equal('FooBar');
        });

        it('Should return \'-\' for \'-\'', function() {
            upperCamelCase('-').should.be.equal('-');
        });

        it('Should return \'-\' for \' - \'', function() {
            upperCamelCase(' - ').should.be.equal('-');
        });
    });

    describe('Dots', function() {
        it('Should return \'FooBar\' for \'foo.bar\'', function() {
            upperCamelCase('foo.bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBarBaz\' for \'foo.bar.baz\'', function() {
            upperCamelCase('foo.bar.baz').should.be.equal('FooBarBaz');
        });

        it('Should return \'FooBar\' for \'foo..bar\'', function() {
            upperCamelCase('foo..bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'..foo.bar\'', function() {
            upperCamelCase('..foo.bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'..foo..bar\'', function() {
            upperCamelCase('..foo..bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'.foo.bar.\'', function() {
            upperCamelCase('.foo.bar.').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'..foo..bar..\'', function() {
            upperCamelCase('..foo..bar..').should.be.equal('FooBar');
        });
    });

    describe('Underscores', function() {
        it('Should return \'FooBar\' for \'foo_bar\'', function() {
            upperCamelCase('foo_bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBarBaz\' for \'foo_bar_baz\'', function() {
            upperCamelCase('foo_bar_baz').should.be.equal('FooBarBaz');
        });

        it('Should return \'FooBar\' for \'foo__bar\'', function() {
            upperCamelCase('foo__bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'__foo_bar\'', function() {
            upperCamelCase('__foo_bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'__foo__bar\'', function() {
            upperCamelCase('__foo__bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'_foo_bar_\'', function() {
            upperCamelCase('_foo_bar_').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'__foo__bar__\'', function() {
            upperCamelCase('__foo__bar__').should.be.equal('FooBar');
        });
    });

    describe('Spaces', function() {
        it('Should return \'FooBar\' for \'foo bar\'', function() {
            upperCamelCase('foo bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBarBaz\' for \'foo bar baz\'', function() {
            upperCamelCase('foo bar baz').should.be.equal('FooBarBaz');
        });

        it('Should return \'FooBar\' for \'foo  bar\'', function() {
            upperCamelCase('foo  bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'  foo bar\'', function() {
            upperCamelCase('  foo bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'  foo  bar\'', function() {
            upperCamelCase('  foo  bar').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \' foo bar \'', function() {
            upperCamelCase(' foo bar ').should.be.equal('FooBar');
        });

        it('Should return \'FooBar\' for \'  foo  bar  \'', function() {
            upperCamelCase('  foo  bar  ').should.be.equal('FooBar');
        });
    });
});
