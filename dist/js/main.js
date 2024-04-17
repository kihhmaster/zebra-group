/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function() {

// import $ from "jquery";
// import Swiper from 'swiper/bundle';
// import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
// import gsap from "gsap";

/***/ }),

/***/ "./src/js/import/libs/jquery.marquee.min.js":
/*!**************************************************!*\
  !*** ./src/js/import/libs/jquery.marquee.min.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
  "use strict";

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.fn.marquee = function (options) {
    return this.each(function () {
      var o = $.extend({}, $.fn.marquee.defaults, options),
          $this = $(this),
          $marqueeWrapper,
          containerWidth,
          animationCss,
          verticalDir,
          elWidth,
          loopCount = 3,
          playState = "animation-play-state",
          css3AnimationIsSupported = false,
          _prefixedEvent = function _prefixedEvent(element, type, callback) {
        var pfx = ["webkit", "moz", "MS", "o", ""];

        for (var p = 0; p < pfx.length; p++) {
          if (!pfx[p]) type = type.toLowerCase();
          element.addEventListener(pfx[p] + type, callback, false);
        }
      },
          _objToString = function _objToString(obj) {
        var tabjson = [];

        for (var p in obj) {
          if (obj.hasOwnProperty(p)) {
            tabjson.push(p + ":" + obj[p]);
          }
        }

        tabjson.push();
        return "{" + tabjson.join(",") + "}";
      },
          _startAnimationWithDelay = function _startAnimationWithDelay() {
        $this.timer = setTimeout(animate, o.delayBeforeStart);
      },
          methods = {
        pause: function pause() {
          if (css3AnimationIsSupported && o.allowCss3Support) {
            $marqueeWrapper.css(playState, "paused");
          } else {
            if ($.fn.pause) {
              $marqueeWrapper.pause();
            }
          }

          $this.data("runningStatus", "paused");
          $this.trigger("paused");
        },
        resume: function resume() {
          if (css3AnimationIsSupported && o.allowCss3Support) {
            $marqueeWrapper.css(playState, "running");
          } else {
            if ($.fn.resume) {
              $marqueeWrapper.resume();
            }
          }

          $this.data("runningStatus", "resumed");
          $this.trigger("resumed");
        },
        toggle: function toggle() {
          methods[$this.data("runningStatus") === "resumed" ? "pause" : "resume"]();
        },
        destroy: function destroy() {
          clearTimeout($this.timer);
          $this.find("*").addBack().off();
          $this.html($this.find(".js-marquee:first").html());
        }
      };

      if (typeof options === "string") {
        if ($.isFunction(methods[options])) {
          if (!$marqueeWrapper) {
            $marqueeWrapper = $this.find(".js-marquee-wrapper");
          }

          if ($this.data("css3AnimationIsSupported") === true) {
            css3AnimationIsSupported = true;
          }

          methods[options]();
        }

        return;
      }

      var dataAttributes = {},
          attr;
      $.each(o, function (key) {
        attr = $this.attr("data-" + key);

        if (typeof attr !== "undefined") {
          switch (attr) {
            case "true":
              attr = true;
              break;

            case "false":
              attr = false;
              break;
          }

          o[key] = attr;
        }
      });

      if (o.speed) {
        o.duration = parseInt($this.width(), 10) / o.speed * 1e3;
      }

      verticalDir = o.direction === "up" || o.direction === "down";
      o.gap = o.duplicated ? parseInt(o.gap) : 0;
      $this.wrapInner('<div class="js-marquee"></div>');
      var $el = $this.find(".js-marquee").css({
        "margin-right": o.gap,
        float: "left"
      });

      if (o.duplicated) {
        $el.clone(true).appendTo($this);
      }

      $this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
      $marqueeWrapper = $this.find(".js-marquee-wrapper");

      if (verticalDir) {
        var containerHeight = $this.height();
        $marqueeWrapper.removeAttr("style");
        $this.height(containerHeight);
        $this.find(".js-marquee").css({
          float: "none",
          "margin-bottom": o.gap,
          "margin-right": 0
        });

        if (o.duplicated) {
          $this.find(".js-marquee:last").css({
            "margin-bottom": 0
          });
        }

        var elHeight = $this.find(".js-marquee:first").height() + o.gap;

        if (o.startVisible && !o.duplicated) {
          o._completeDuration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration;
          o.duration = parseInt(elHeight, 10) / parseInt(containerHeight, 10) * o.duration;
        } else {
          o.duration = (parseInt(elHeight, 10) + parseInt(containerHeight, 10)) / parseInt(containerHeight, 10) * o.duration;
        }
      } else {
        elWidth = $this.find(".js-marquee:first").width() + o.gap;
        containerWidth = $this.width();

        if (o.startVisible && !o.duplicated) {
          o._completeDuration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration;
          o.duration = parseInt(elWidth, 10) / parseInt(containerWidth, 10) * o.duration;
        } else {
          o.duration = (parseInt(elWidth, 10) + parseInt(containerWidth, 10)) / parseInt(containerWidth, 10) * o.duration;
        }
      }

      if (o.duplicated) {
        o.duration = o.duration / 2;
      }

      if (o.allowCss3Support) {
        var elm = document.body || document.createElement("div"),
            animationName = "marqueeAnimation-" + Math.floor(Math.random() * 1e7),
            domPrefixes = "Webkit Moz O ms Khtml".split(" "),
            animationString = "animation",
            animationCss3Str = "",
            keyframeString = "";

        if (elm.style.animation !== undefined) {
          keyframeString = "@keyframes " + animationName + " ";
          css3AnimationIsSupported = true;
        }

        if (css3AnimationIsSupported === false) {
          for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
              var prefix = "-" + domPrefixes[i].toLowerCase() + "-";
              animationString = prefix + animationString;
              playState = prefix + playState;
              keyframeString = "@" + prefix + "keyframes " + animationName + " ";
              css3AnimationIsSupported = true;
              break;
            }
          }
        }

        if (css3AnimationIsSupported) {
          animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s infinite " + o.css3easing;
          $this.data("css3AnimationIsSupported", true);
        }
      }

      var _rePositionVertically = function _rePositionVertically() {
        $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + elHeight + "px") + ")");
      },
          _rePositionHorizontally = function _rePositionHorizontally() {
        $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + elWidth + "px") + ")");
      };

      if (o.duplicated) {
        if (verticalDir) {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateY(0)");
          } else {
            $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? containerHeight + "px" : "-" + (elHeight * 2 - o.gap) + "px") + ")");
          }
        } else {
          if (o.startVisible) {
            $marqueeWrapper.css("transform", "translateX(0)");
          } else {
            $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? containerWidth + "px" : "-" + (elWidth * 2 - o.gap) + "px") + ")");
          }
        }

        if (!o.startVisible) {
          loopCount = 1;
        }
      } else if (o.startVisible) {
        loopCount = 2;
      } else {
        if (verticalDir) {
          _rePositionVertically();
        } else {
          _rePositionHorizontally();
        }
      }

      var animate = function animate() {
        if (o.duplicated) {
          if (loopCount === 1) {
            o._originalDuration = o.duration;

            if (verticalDir) {
              o.duration = o.direction === "up" ? o.duration + containerHeight / (elHeight / o.duration) : o.duration * 2;
            } else {
              o.duration = o.direction === "left" ? o.duration + containerWidth / (elWidth / o.duration) : o.duration * 2;
            }

            if (animationCss3Str) {
              animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
            }

            loopCount++;
          } else if (loopCount === 2) {
            o.duration = o._originalDuration;

            if (animationCss3Str) {
              animationName = animationName + "0";
              keyframeString = $.trim(keyframeString) + "0 ";
              animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
            }

            loopCount++;
          }
        }

        if (verticalDir) {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css("transform", "translateY(" + (o.direction === "up" ? 0 : "-" + elHeight + "px") + ")");
            }

            animationCss = {
              transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : 0) + ")"
            };
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
              }

              animationCss = {
                transform: "translateY(" + (o.direction === "up" ? "-" + elHeight + "px" : containerHeight + "px") + ")"
              };
              loopCount++;
            } else if (loopCount === 3) {
              o.duration = o._completeDuration;

              if (animationCss3Str) {
                animationName = animationName + "0";
                keyframeString = $.trim(keyframeString) + "0 ";
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
              }

              _rePositionVertically();
            }
          } else {
            _rePositionVertically();

            animationCss = {
              transform: "translateY(" + (o.direction === "up" ? "-" + $marqueeWrapper.height() + "px" : containerHeight + "px") + ")"
            };
          }
        } else {
          if (o.duplicated) {
            if (loopCount > 2) {
              $marqueeWrapper.css("transform", "translateX(" + (o.direction === "left" ? 0 : "-" + elWidth + "px") + ")");
            }

            animationCss = {
              transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : 0) + ")"
            };
          } else if (o.startVisible) {
            if (loopCount === 2) {
              if (animationCss3Str) {
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s " + o.delayBeforeStart / 1e3 + "s " + o.css3easing;
              }

              animationCss = {
                transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
              };
              loopCount++;
            } else if (loopCount === 3) {
              o.duration = o._completeDuration;

              if (animationCss3Str) {
                animationName = animationName + "0";
                keyframeString = $.trim(keyframeString) + "0 ";
                animationCss3Str = animationName + " " + o.duration / 1e3 + "s 0s infinite " + o.css3easing;
              }

              _rePositionHorizontally();
            }
          } else {
            _rePositionHorizontally();

            animationCss = {
              transform: "translateX(" + (o.direction === "left" ? "-" + elWidth + "px" : containerWidth + "px") + ")"
            };
          }
        }

        $this.trigger("beforeStarting");

        if (css3AnimationIsSupported) {
          $marqueeWrapper.css(animationString, animationCss3Str);
          var keyframeCss = keyframeString + " { 100%  " + _objToString(animationCss) + "}",
              $styles = $marqueeWrapper.find("style");

          if ($styles.length !== 0) {
            $styles.filter(":last").html(keyframeCss);
          } else {
            $("head").append("<style>" + keyframeCss + "</style>");
          }

          _prefixedEvent($marqueeWrapper[0], "AnimationIteration", function () {
            $this.trigger("finished");
          });

          _prefixedEvent($marqueeWrapper[0], "AnimationEnd", function () {
            animate();
            $this.trigger("finished");
          });
        } else {
          $marqueeWrapper.animate(animationCss, o.duration, o.easing, function () {
            $this.trigger("finished");

            if (o.pauseOnCycle) {
              _startAnimationWithDelay();
            } else {
              animate();
            }
          });
        }

        $this.data("runningStatus", "resumed");
      };

      $this.on("pause", methods.pause);
      $this.on("resume", methods.resume);

      if (o.pauseOnHover) {
        $this.on("mouseenter", methods.pause);
        $this.on("mouseleave", methods.resume);
      }

      if (css3AnimationIsSupported && o.allowCss3Support) {
        animate();
      } else {
        _startAnimationWithDelay();
      }
    });
  };

  $.fn.marquee.defaults = {
    allowCss3Support: true,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 1e3,
    direction: "left",
    duplicated: false,
    duration: 5e3,
    speed: 0,
    gap: 20,
    pauseOnCycle: false,
    pauseOnHover: false,
    startVisible: false
  };
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function() {

// import $ from "jquery";
// import Isotope from 'isotope-layout';

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/libs/jquery.marquee.min */ "./src/js/import/libs/jquery.marquee.min.js");
/* harmony import */ var _import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_import_libs_jquery_marquee_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_modules__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_index_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/index-page */ "./src/js/page/index-page.js");
/* harmony import */ var _page_index_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_index_page__WEBPACK_IMPORTED_MODULE_3__);
 // import "./import/libs/select2.min";





/***/ }),

/***/ "./src/js/page/index-page.js":
/*!***********************************!*\
  !*** ./src/js/page/index-page.js ***!
  \***********************************/
/***/ (function() {

// import $ from "jquery";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import MotionPathPlugin from "gsap/MotionPathPlugin";
// import ScrollToPlugin from "gsap/ScrollToPlugin";
// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);
// gsap.registerPlugin(ScrollToPlugin);
document.addEventListener("DOMContentLoaded", function () {
  var titleParsing = document.querySelectorAll(".js-title__parsing");

  function parsingByLetters() {
    titleParsing.forEach(function (item) {
      var itemText = item.textContent;

      if (itemText !== "") {
        var itemNewText = itemText.trim().split('').map(function (s) {
          return "<span>".concat(s, "</span>");
        }).join('');
        item.innerHTML = itemNewText;
      }

      return;
    });
  }

  parsingByLetters();
  var titleAnimation1 = document.getElementById("title__animation--1");
  var titleAnimation2 = document.getElementById("title__animation--2");

  function titleAnimation(item) {
    if (item !== null) {
      (function () {
        var list = item.querySelectorAll("span");

        var _loop = function _loop(i) {
          setTimeout(function () {
            list[i].classList.add('active');
          }, 100 * i);
        };

        for (var i = 0; i < list.length; i++) {
          _loop(i);
        }
      })();
    }
  }

  function counterOperation(element, duration) {
    var animationDuration = duration;
    var countElement = element; // let animateCountUp = element

    var frameDuration = 1000 / 60;
    var totalFrames = Math.round(animationDuration / frameDuration);

    var easeOutQuad = function easeOutQuad(t) {
      return t * (2 - t);
    };

    var animateCountUp = function animateCountUp(el) {
      var frame = 0;
      var countTo = parseInt(el.innerHTML, 10);
      var counter = setInterval(function () {
        frame++;
        var progress = easeOutQuad(frame / totalFrames);
        var currentCount = Math.round(countTo * progress);

        if (parseInt(el.innerHTML, 10) !== currentCount) {
          el.innerHTML = currentCount;
        }

        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    };

    countElement.forEach(animateCountUp);
  }

  function startCounter(item, time) {
    var counterList = item;
    var counterTime = time;
    counterOperation(counterList, counterTime);
  }

  var timerStart = document.querySelectorAll(".energy__quantity__timer");
  var energyBtn = document.querySelector("#energy__btn .btn__animation");
  var energyWindmill = document.querySelector(".js-energy__windmill");
  energyBtn.addEventListener("click", function (e) {
    var el = e.currentTarget.parentNode;
    var elBtn = el.querySelector(".btn__animation");
    el.classList.add("disabled");
    energyWindmill.classList.add("active");
    elBtn.setAttribute('disabled', ''); // let el = findparentClass(e.target, 'btn')
    // let parent = target.parentElement

    setTimeout(function () {
      energyWindmill.classList.remove("active");
      el.classList.remove("disabled");
      elBtn.removeAttribute('disabled', '');
    }, 6000);
    console.log(elBtn);
  });

  function energyStarAnimate() {
    titleAnimation(titleAnimation1);
    setTimeout(function () {
      var energyQuantityTimer = document.querySelector(".energy__quantity__timer");
      energyQuantityTimer.classList.add("active");
      startCounter(timerStart, 2100);
    }, 1500);
    setTimeout(function () {
      titleAnimation(titleAnimation2);
    }, 1800);
  }

  energyStarAnimate();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug"] = self["webpackChunkgulp_pug"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map