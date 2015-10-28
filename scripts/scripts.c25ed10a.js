"use strict";angular.module("myWebsiteApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/responsive",{templateUrl:"views/responsive.html",controller:"RespCtrl",controllerAs:"responsive"}).otherwise({redirectTo:"/"})}]),angular.module("myWebsiteApp").controller("MainCtrl",function(){this.awesomeThings=[{name:"HTML"},{name:"CSS"},{name:"Javascript"},{name:"Jquery"},{name:"Mustache"},{name:"PHP"},{name:"React"},{name:"Angular"}]}),angular.module("myWebsiteApp").controller("AboutCtrl",function(){this.awesomeThings=[{name:"HTML"},{name:"CSS"},{name:"Javascript"},{name:"Jquery"},{name:"Mustache"}]}),angular.module("myWebsiteApp").controller("RespCtrl",function(){this.awesomeThings=[{imageSrc:"module_Desktop.png"},{imageSrc:"modules_Mobile.png"}]}),angular.module("myWebsiteApp").run(["$templateCache",function(a){a.put("views/about.html",'<p>This is the about view.....</p> <div ng-controller="AboutCtrl as about"> <div ng-repeat="skill in about.awesomeThings"> {{skill.name}} </div> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Tejaswini Beerapu</h1> <h2>I build Websites!</h2> <p class="lead"> </p> </div> <div class="col-md-12"> <div class="introSection"> <div class="shape2"> <img src="images/tjsp.652d3e6a.png" alt="my avatar" class="avatar"> </div> <div class="intro"> <p> Hi! My name is <strong>Tejaswini Beerapu</strong>. I am a UI Engineer at Orbitz. I have 4+ years of experience working with a wide range of back-end and front-end technologies. In recent times, I have mainly been working on the front-end and I enjoy writing clean HTML,CSS and Javascript code. Due to my passiogn for technology, I\'ve got my hands dirty working with React, Angular and Node. I love learning new things everyday and coding! </p> </div> </div> </div> <div class="col-md-12" ng-controller="MainCtrl as main"> <div> <a href="/tjSite/#/responsive"><h4>Responsive Design</h4></a> <p> The Web is at our finger tips today. We not only stay in touch with friends and family but we book travel, order food, find our way around the city and manage a good chunk of our daily lives through multiple devices. </p> <p> In the past two years, I have immensely worked on making web pages responsive. I build using a grid system. I have experience working with custom grid systems and bootstrap. I’ve resolved multiple issues when it comes to layouts and graceful degradation</p> <img class="logos" src="images/logos.86e52510.jpg"> <h4>Front End Development</h4> <div class="frontEndInfo"> <p>I have used the following technologies to write front end code </p> <ul class="skillsList"> <li class="skillItem" ng-repeat="skill in main.awesomeThings"> <div class="arrow-right"></div>{{skill.name}} </li> </ul> </div> </div> <div class="col-md-12"> </div> </div> <div class="col-md-4"> </div>'),a.put("views/responsive.html",'<div class="responsiveWork" ng-controller="RespCtrl as responsive"> <h4> Responsive Modules on Orbitz Landing Pages</h4> <div ng-repeat="work in responsive.awesomeThings"> <img src="images/{{work.imageSrc}}"> </div> </div>')}]);