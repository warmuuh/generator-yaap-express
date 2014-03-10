'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var YaapExpressGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('Generating Express Skeleton with Yaap/Wire integration.'));

    var prompts = [{
      type: 'confirm',
      name: 'deepScanning',
      message: 'Do you need deep annotation scanning (slower startup)?',
      default: false
    },
    {
      type: 'confirm',
      name: 'restOnly',
      message: 'Rest only (y) or server-side rendering with Jade (n)?',
      default: false
    }];

    this.prompt(prompts, function (props) {
      this.deepScanning = props.deepScanning;
      this.restOnly = props.restOnly;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/public');
    this.mkdir('app/public/images');
    this.mkdir('app/public/javascripts');
    this.mkdir('app/public/stylesheets');
    this.mkdir('app/controller');  
    this.mkdir('app/model');  
    this.mkdir('app/views');  
      
      
    
    this.copy('_app.js', 'app/app.js');
    this.copy('_server.js', 'app/server.js');
    this.copy('controller/_dashboard.js', 'app/controller/dashboard.js');
    this.copy('views/dashboard.jade', 'app/views/dashboard.jade');
    this.copy('views/layout.jade', 'app/views/layout.jade');
      
    this.copy('_bower.json', 'bower.json');
    this.copy('_package.json', 'package.json');  
      
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = YaapExpressGenerator;