(function(window, undefined) {'use strict';
/*
 * The MIT License
 *
 * Copyright (c) 2015, Simon Buechi
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



angular.module('adf.widget.markdown', ['adf.provider', 'btford.markdown'])
  .config(["dashboardProvider", function(dashboardProvider){

    dashboardProvider
      .widget('markdown', angular.extend({
        title: 'Markdown',
        description: 'Display content in markdown notation',
        controller: 'markdownCtrl',
        templateUrl: '{widgetsPath}/markdown/view.html',
        edit: {
          templateUrl: '{widgetsPath}/markdown/edit.html',
          reload: false
        }
        }))
      .widget('markdownfile', angular.extend({
        title: 'Markdown File',
        description: 'Display content in markdown notation from file',
        controller: 'markdownfileCtrl',
        templateUrl: '{widgetsPath}/markdown/view-file.html',
        edit: {
          templateUrl: '{widgetsPath}/markdown/edit-file.html'
        }
        }));
  }])
  .controller('markdownCtrl', ["$scope", "config", function($scope, config){
    if (!config.content){
      config.content = '';
    }
    $scope.config = config;
  }])
  .controller('markdownfileCtrl', ["$scope", "config", function($scope, config){
    if (!config.url){
      config.url = '';
    } 
    $scope.config = config;
  }]);



angular.module("adf.widget.markdown").run(["$templateCache", function($templateCache) {$templateCache.put("{widgetsPath}/markdown/src/edit-file.html","<form role=form><div class=form-group><label for=content>Markdown file</label> <input type=url class=form-control id=url ng-model=config.url placeholder=\"Enter link to markdown file (.md)\"></div></form>");
$templateCache.put("{widgetsPath}/markdown/src/edit.html","<form role=form><div class=form-group><label for=content>Markdown content</label> <textarea id=content class=form-control rows=5 ng-model=config.content></textarea></div></form>");
$templateCache.put("{widgetsPath}/markdown/src/view-file.html","<div class=markdown btf-markdown ng-include=config.url></div>");
$templateCache.put("{widgetsPath}/markdown/src/view.html","<div class=markdown btf-markdown=config.content></div>");}]);})(window);