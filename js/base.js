/*
 * base
 * http://bigredswitch.com/
 *
 * Copyright 2011 Doug Lee
 * Dual licensed under the MIT or GPL Version 2 licenses
 * Date: Sat May 28, 2011
 *
 *
 * Portions from HTML5 Boilerplate
 * http://html5boilerplate.com/
 * Copyright Paul Irish
 * Dual licensed under MIT and GPL
 *
 */

(function () {

  // -------------------------------------------- CONSOLE PROOFING
  if (!window.console) {
    window.console = {};
    window.console.stack = [];
    window.console.log = function (val) {
      window.console.stack.push(val);
    }
  }
})();
