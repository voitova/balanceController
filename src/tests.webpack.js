// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

const context = require.context('./app', true, /\.js$/);

context.keys().forEach(context);

const angular = require('angular');
angular.module('app', [

]);