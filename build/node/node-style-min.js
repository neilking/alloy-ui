/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0PR1
build: nightly
*/
YUI.add("node-style",function(A){(function(C){var B=["getStyle","getComputedStyle","setStyle","setStyles"];C.Node.importMethod(C.DOM,B);C.NodeList.importMethod(C.Node.prototype,B);})(A);},"3.2.0PR1",{requires:["dom-style","node-base"]});