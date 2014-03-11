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
      type: 'string',
      name: 'restOnly',
      pattern: /rest|jade/,
      message: 'Rest only (rest) or server-side rendering with Jade (jade)?',
      default: 'rest'
    }];

    this.prompt(prompts, function (props) {
      
      this.restOnly = props.restOnly === 'rest';

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/model');
    this.mkdir('app/public/images');
    this.mkdir('app/public/javascripts');
    this.mkdir('app/public/stylesheets');
      
      
    this.template('_app.js', 'app/app.js');
    this.template('_server.js', 'app/server.js');
    this.template('_config.json', 'app/config.json');
      
    this.template('controller/_dashboard.js', 'app/controller/dashboard.js');
    
    if (!this.restOnly){
        this.copy('views/dashboard.jade', 'app/views/dashboard.jade');
        this.copy('views/layout.jade', 'app/views/layout.jade');
    } else {
        this.copy('public/index.html', 'app/public/index.html');
        this.copy('public/javascripts/application.js', 'app/public/javascripts/application.js');
    }
    
    this.copy('service/messageService.js', 'app/service/messageService.js');
    this.copy('public/images/yeoman.png', 'app/public/images/yeoman.png');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json'); 
    this.copy('bowerrc', '.bowerrc'); 
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});



module.exports = YaapExpressGenerator;