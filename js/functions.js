
const newLocal = parcelRequire = (function (modules, cache, entry, globalName) {
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {

        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }
        if (previousRequire) {
          return previousRequire(name, true);
        }
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({
  "TNS6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports._getCache = exports._getSetter = exports._missingPlugin = exports._round = exports._roundModifier = exports._config = exports._ticker = exports._plugins = exports._checkPlugin = exports._replaceRandom = exports._colorStringFilter = exports._sortPropTweensByPriority = exports._forEachName = exports._removeLinkedListItem = exports._setDefaults = exports._relExp = exports._renderComplexString = exports._isUndefined = exports._isString = exports._numWithUnitExp = exports._numExp = exports._getProperty = exports.shuffle = exports.interpolate = exports.unitize = exports.pipe = exports.mapRange = exports.toArray = exports.splitColor = exports.clamp = exports.getUnit = exports.normalize = exports.snap = exports.random = exports.distribute = exports.wrapYoyo = exports.wrap = exports.Circ = exports.Expo = exports.Sine = exports.Bounce = exports.SteppedEase = exports.Back = exports.Elastic = exports.Strong = exports.Quint = exports.Quart = exports.Cubic = exports.Quad = exports.Linear = exports.Power4 = exports.Power3 = exports.Power2 = exports.Power1 = exports.Power0 = exports.default = exports.gsap = exports.PropTween = exports.TweenLite = exports.TweenMax = exports.Tween = exports.TimelineLite = exports.TimelineMax = exports.Timeline = exports.Animation = exports.GSCache = void 0;

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    var _config = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    }, _defaults = {
      duration: .5,
      overwrite: false,
      delay: 0
    }, _suppressOverwrites, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
      return typeof value === "string";
    }, _isFunction = function _isFunction(value) {
      return typeof value === "function";
    }, _isNumber = function _isNumber(value) {
      return typeof value === "number";
    }, _isUndefined = function _isUndefined(value) {
      return typeof value === "undefined";
    }, _isObject = function _isObject(value) {
      return typeof value === "object";
    }, _isNotFalse = function _isNotFalse(value) {
      return value !== false;
    }, _windowExists = function _windowExists() {
      return typeof window !== "undefined";
    }, _isFuncOrString = function _isFuncOrString(value) {
      return _isFunction(value) || _isString(value);
    }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () { },
      // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
      _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi, _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap;
      }, _missingPlugin = function _missingPlugin(property, value) {
        return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
      }, _warn = function _warn(message, suppress) {
        return !suppress && console.warn(message);
      }, _addGlobal = function _addGlobal(name, obj) {
        return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
      }, _emptyFunc = function _emptyFunc() {
        return 0;
      }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
        var target = targets[0], harnessPlugin, i;
        _isObject(target) || _isFunction(target) || (targets = [targets]);

        if (!(harnessPlugin = (target._gsap || {}).harness)) {
          // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
          i = _harnessPlugins.length;

          while (i-- && !_harnessPlugins[i].targetTest(target)) { }

          harnessPlugin = _harnessPlugins[i];
        }

        i = targets.length;

        while (i--) {
          targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
        }

        return targets;
      }, _getCache = function _getCache(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
      }, _getProperty = function _getProperty(target, property, v) {
        return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
      }, _forEachName = function _forEachName(names, func) {
        return (names = names.split(",")).forEach(func) || names;
      },
      //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
      _round = function _round(value) {
        return Math.round(value * 100000) / 100000 || 0;
      }, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
        var l = toFind.length, i = 0;

        for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) { }

        return i < l;
      }, _parseVars = function _parseVars(params, type, parent) {
        //reads the arguments passed to one of the key methods and figures out if the user is defining things with the OLD/legacy syntax where the duration is the 2nd parameter, and then it adjusts things accordingly and spits back the corrected vars object (with the duration added if necessary, as well as runBackwards or startAt or immediateRender). type 0 = to()/staggerTo(), 1 = from()/staggerFrom(), 2 = fromTo()/staggerFromTo()
        var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars;

        isLegacy && (vars.duration = params[1]);
        vars.parent = parent;

        if (type) {
          irVars = vars;

          while (parent && !("immediateRender" in irVars)) {
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
          }

          vars.immediateRender = _isNotFalse(irVars.immediateRender);
          type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
        }

        return vars;
      }, _lazyRender = function _lazyRender() {
        var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;

        _lazyLookup = {};
        _lazyTweens.length = 0;

        for (i = 0; i < l; i++) {
          tween = a[i];
          tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
      }, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
        _lazyTweens.length && _lazyRender();
        animation.render(time, suppressEvents, force);
        _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
      }, _numericIfPossible = function _numericIfPossible(value) {
        var n = parseFloat(value);
        return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
      }, _passThrough = function _passThrough(p) {
        return p;
      }, _setDefaults = function _setDefaults(obj, defaults) {
        for (var p in defaults) {
          p in obj || (obj[p] = defaults[p]);
        }

        return obj;
      }, _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
        for (var p in defaults) {
          p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
        }
      }, _merge = function _merge(base, toMerge) {
        for (var p in toMerge) {
          base[p] = toMerge[p];
        }

        return base;
      }, _mergeDeep = function _mergeDeep(base, toMerge) {
        for (var p in toMerge) {
          p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
        }

        return base;
      }, _copyExcluding = function _copyExcluding(obj, excluding) {
        var copy = {}, p;

        for (p in obj) {
          p in excluding || (copy[p] = obj[p]);
        }

        return copy;
      }, _inheritDefaults = function _inheritDefaults(vars) {
        var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;

        if (_isNotFalse(vars.inherit)) {
          while (parent) {
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
          }
        }

        return vars;
      }, _arraysMatch = function _arraysMatch(a1, a2) {
        var i = a1.length, match = i === a2.length;

        while (match && i-- && a1[i] === a2[i]) { }

        return i < 0;
      }, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }

        if (lastProp === void 0) {
          lastProp = "_last";
        }

        var prev = parent[lastProp], t;

        if (sortBy) {
          t = child[sortBy];

          while (prev && prev[sortBy] > t) {
            prev = prev._prev;
          }
        }

        if (prev) {
          child._next = prev._next;
          prev._next = child;
        } else {
          child._next = parent[firstProp];
          parent[firstProp] = child;
        }

        if (child._next) {
          child._next._prev = child;
        } else {
          parent[lastProp] = child;
        }

        child._prev = prev;
        child.parent = child._dp = parent;
        return child;
      }, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }

        if (lastProp === void 0) {
          lastProp = "_last";
        }

        var prev = child._prev, next = child._next;

        if (prev) {
          prev._next = next;
        } else if (parent[firstProp] === child) {
          parent[firstProp] = next;
        }

        if (next) {
          next._prev = prev;
        } else if (parent[lastProp] === child) {
          parent[lastProp] = prev;
        }

        child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
      }, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
        child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
        child._act = 0;
      }, _uncache = function _uncache(animation, child) {
        if (animation && (!child || child._end > animation._dur || child._start < 0)) {
          // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
          var a = animation;

          while (a) {
            a._dirty = 1;
            a = a.parent;
          }
        }

        return animation;
      }, _recacheAncestors = function _recacheAncestors(animation) {
        var parent = animation.parent;

        while (parent && parent.parent) {
          //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
          parent._dirty = 1;
          parent.totalDuration();
          parent = parent.parent;
        }

        return animation;
      }, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
        return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
      }, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
        return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
      },
      // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
      _animationCycle = function _animationCycle(tTime, cycleDuration) {
        var whole = Math.floor(tTime /= cycleDuration);
        return tTime && whole === tTime ? whole - 1 : whole;
      }, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
        return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
      }, _setEnd = function _setEnd(animation) {
        return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
      }, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
        // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
        var parent = animation._dp;

        if (parent && parent.smoothChildTiming && animation._ts) {
          animation._start = _round(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

          _setEnd(animation);

          parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
        }

        return animation;
      },
      /*
      _totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
          let cycleDuration = duration + repeatDelay,
              time = _round(clampedTotalTime % cycleDuration);
          if (time > duration) {
              time = duration;
          }
          return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
      },
      */
      _postAddChecks = function _postAddChecks(timeline, child) {
        var t;

        if (child._time || child._initted && !child._dur) {
          //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
          t = _parentToChildTotalTime(timeline.rawTime(), child);

          if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
            child.render(t, true);
          }
        } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


        if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
          //in case any of the ancestors had completed but should now be enabled...
          if (timeline._dur < timeline.duration()) {
            t = timeline;

            while (t._dp) {
              t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

              t = t._dp;
            }
          }

          timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
        }
      }, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
        child.parent && _removeFromParent(child);
        child._start = _round(position + child._delay);
        child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

        _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

        timeline._recent = child;
        skipChecks || _postAddChecks(timeline, child);
        return timeline;
      }, _scrollTrigger = function _scrollTrigger(animation, trigger) {
        return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
      }, _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
        _initTween(tween, totalTime);

        if (!tween._initted) {
          return 1;
        }

        if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
          _lazyTweens.push(tween);

          tween._lazy = [totalTime, suppressEvents];
          return 1;
        }
      }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
        var parent = _ref.parent;
        return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
      }, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
        var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart") ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;

        if (repeatDelay && tween._repeat) {
          tTime = _clamp(0, tween._tDur, totalTime);
          iteration = _animationCycle(tTime, repeatDelay);
          prevIteration = _animationCycle(tween._tTime, repeatDelay);
          tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

          if (iteration !== prevIteration) {
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
          }
        }

        if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
          if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
            return;
          }

          prevIteration = tween._zTime;
          tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

          suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

          tween.ratio = ratio;
          tween._from && (ratio = 1 - ratio);
          tween._time = 0;
          tween._tTime = tTime;
          suppressEvents || _callback(tween, "onStart");
          pt = tween._pt;

          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }

          tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
          tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
          tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

          if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);

            if (!suppressEvents) {
              _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

              tween._prom && tween._prom();
            }
          }
        } else if (!tween._zTime) {
          tween._zTime = totalTime;
        }
      }, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
        var child;

        if (time > prevTime) {
          child = animation._first;

          while (child && child._start <= time) {
            if (!child._dur && child.data === "isPause" && child._start > prevTime) {
              return child;
            }

            child = child._next;
          }
        } else {
          child = animation._last;

          while (child && child._start >= time) {
            if (!child._dur && child.data === "isPause" && child._start < prevTime) {
              return child;
            }

            child = child._prev;
          }
        }
      }, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
        var repeat = animation._repeat, dur = _round(duration) || 0, totalProgress = animation._tTime / animation._tDur;
        totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
        animation._dur = dur;
        animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
        totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
        skipUncache || _uncache(animation.parent, animation);
        return animation;
      }, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
        return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
      }, _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc
      }, _parsePosition = function _parsePosition(animation, position) {
        var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
          //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
          i, offset;

        if (_isString(position) && (isNaN(position) || position in labels)) {
          //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
          i = position.charAt(0);

          if (i === "<" || i === ">") {
            return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
          }

          i = position.indexOf("=");

          if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
          }

          offset = +(position.charAt(i - 1) + position.substr(i + 1));
          return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
        }

        return position == null ? clippedDuration : +position;
      }, _conditionalReturn = function _conditionalReturn(value, func) {
        return value || value === 0 ? func(value) : func;
      }, _clamp = function _clamp(min, max, value) {
        return value < min ? min : value > max ? max : value;
      }, getUnit = function getUnit(value) {
        if (typeof value !== "string") {
          return "";
        }

        var v = _unitExp.exec(value);

        return v ? value.substr(v.index + v[0].length) : "";
      },
      // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
      clamp = function clamp(min, max, value) {
        return _conditionalReturn(value, function (v) {
          return _clamp(min, max, v);
        });
      }, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
        return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
      }, _flatten = function _flatten(ar, leaveStrings, accumulator) {
        if (accumulator === void 0) {
          accumulator = [];
        }

        return ar.forEach(function (value) {
          var _accumulator;

          return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
        }) || accumulator;
      },
      //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
      toArray = function toArray(value, leaveStrings) {
        return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
      }, shuffle = function shuffle(a) {
        return a.sort(function () {
          return .5 - Math.random();
        });
      },
      // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
      //for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
      distribute = function distribute(v) {
        if (_isFunction(v)) {
          return v;
        }

        var vars = _isObject(v) ? v : {
          each: v
        },
          //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
          ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;

        if (_isString(from)) {
          ratioX = ratioY = {
            center: .5,
            edges: .5,
            end: 1
          }[from] || 0;
        } else if (!isDecimal && ratios) {
          ratioX = from[0];
          ratioY = from[1];
        }

        return function (i, target, a) {
          var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;

          if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

            if (!wrapAt) {
              max = -_bigNum;

              while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) { }

              wrapAt--;
            }

            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
            originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;

            for (j = 0; j < l; j++) {
              x = j % wrapAt - originX;
              y = originY - (j / wrapAt | 0);
              distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
              d > max && (max = d);
              d < min && (min = d);
            }

            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0; //unit

            ease = ease && l < 0 ? _invertEase(ease) : ease;
          }

          l = (distances[i] - distances.min) / distances.max || 0;
          return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
        };
      }, _roundModifier = function _roundModifier(v) {
        //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
        var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()

        return function (raw) {
          var n = Math.round(parseFloat(raw) / v) * v * p;
          return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
        };
      }, snap = function snap(snapTo, value) {
        var isArray = _isArray(snapTo), radius, is2D;

        if (!isArray && _isObject(snapTo)) {
          radius = isArray = snapTo.radius || _bigNum;

          if (snapTo.values) {
            snapTo = toArray(snapTo.values);

            if (is2D = !_isNumber(snapTo[0])) {
              radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
            }
          } else {
            snapTo = _roundModifier(snapTo.increment);
          }
        }

        return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
          is2D = snapTo(raw);
          return Math.abs(is2D - raw) <= radius ? is2D : raw;
        } : function (raw) {
          var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;

          while (i--) {
            if (is2D) {
              dx = snapTo[i].x - x;
              dy = snapTo[i].y - y;
              dx = dx * dx + dy * dy;
            } else {
              dx = Math.abs(snapTo[i] - x);
            }

            if (dx < min) {
              min = dx;
              closest = i;
            }
          }

          closest = !radius || min <= radius ? snapTo[closest] : raw;
          return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
        });
      }, random = function random(min, max, roundingIncrement, returnFunction) {
        return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
          return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
        });
      }, pipe = function pipe() {
        for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
          functions[_key] = arguments[_key];
        }

        return function (value) {
          return functions.reduce(function (v, f) {
            return f(v);
          }, value);
        };
      }, unitize = function unitize(func, unit) {
        return function (value) {
          return func(parseFloat(value)) + (unit || getUnit(value));
        };
      }, normalize = function normalize(min, max, value) {
        return mapRange(min, max, 0, 1, value);
      }, _wrapArray = function _wrapArray(a, wrapper, value) {
        return _conditionalReturn(value, function (index) {
          return a[~~wrapper(index)];
        });
      }, wrap = function wrap(min, max, value) {
        // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
        var range = max - min;
        return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
          return (range + (value - min) % range) % range + min;
        });
      }, wrapYoyo = function wrapYoyo(min, max, value) {
        var range = max - min, total = range * 2;
        return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
          value = (total + (value - min) % total) % total || 0;
          return min + (value > range ? total - value : value);
        });
      }, _replaceRandom = function _replaceRandom(value) {
        //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
        var prev = 0, s = "", i, nums, end, isArray;

        while (~(i = value.indexOf("random(", prev))) {
          end = value.indexOf(")", i);
          isArray = value.charAt(i + 7) === "[";
          nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
          s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
          prev = end + 1;
        }

        return s + value.substr(prev, value.length - prev);
      }, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
        var inRange = inMax - inMin, outRange = outMax - outMin;
        return _conditionalReturn(value, function (value) {
          return outMin + ((value - inMin) / inRange * outRange || 0);
        });
      }, interpolate = function interpolate(start, end, progress, mutate) {
        var func = isNaN(start + end) ? 0 : function (p) {
          return (1 - p) * start + p * end;
        };

        if (!func) {
          var isString = _isString(start), master = {}, p, i, interpolators, l, il;

          progress === true && (mutate = 1) && (progress = null);

          if (isString) {
            start = {
              p: start
            };
            end = {
              p: end
            };
          } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;

            for (i = 1; i < l; i++) {
              interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            }

            l--;

            func = function func(p) {
              p *= l;
              var i = Math.min(il, ~~p);
              return interpolators[i](p - i);
            };

            progress = end;
          } else if (!mutate) {
            start = _merge(_isArray(start) ? [] : {}, start);
          }

          if (!interpolators) {
            for (p in end) {
              _addPropTween.call(master, start, p, "get", end[p]);
            }

            func = function func(p) {
              return _renderPropTweens(p, master) || (isString ? start.p : start);
            };
          }
        }

        return _conditionalReturn(progress, func);
      }, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
        //used for nextLabel() and previousLabel()
        var labels = timeline.labels, min = _bigNum, p, distance, label;

        for (p in labels) {
          distance = labels[p] - fromTime;

          if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
          }
        }

        return label;
      }, _callback = function _callback(animation, type, executeLazyFirst) {
        var v = animation.vars, callback = v[type], params, scope;

        if (!callback) {
          return;
        }

        params = v[type + "Params"];
        scope = v.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

        return params ? callback.apply(scope, params) : callback.call(scope);
      }, _interrupt = function _interrupt(animation) {
        _removeFromParent(animation);

        animation.progress() < 1 && _callback(animation, "onInterrupt");
        return animation;
      }, _quickTween, _createPlugin = function _createPlugin(config) {
        config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

        var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function () {
          this._props = [];
        } : config,
          //in case someone passes in an object that's not a plugin, like CustomEase
          instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
          }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0
          };

        _wake();

        if (config !== Plugin) {
          if (_plugins[name]) {
            return;
          }

          _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


          _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


          _plugins[Plugin.prop = name] = Plugin;

          if (config.targetTest) {
            _harnessPlugins.push(Plugin);

            _reservedProps[name] = 1;
          }

          name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
        }

        _addGlobal(name, Plugin);

        config.register && config.register(gsap, Plugin, PropTween);
      },
      /*
       * --------------------------------------------------------------------------------------
       * COLORS
       * --------------------------------------------------------------------------------------
       */
      _255 = 255, _colorLookup = {
        aqua: [0, _255, _255],
        lime: [0, _255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _255],
        navy: [0, 0, 128],
        white: [_255, _255, _255],
        olive: [128, 128, 0],
        yellow: [_255, _255, 0],
        orange: [_255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_255, 0, 0],
        pink: [_255, 192, 203],
        cyan: [0, _255, _255],
        transparent: [_255, _255, _255, 0]
      }, _hue = function _hue(h, m1, m2) {
        h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
        return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
      }, splitColor = function splitColor(v, toHSL, forceAlpha) {
        var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;

        if (!a) {
          if (v.substr(-1) === ",") {
            //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
            v = v.substr(0, v.length - 1);
          }

          if (_colorLookup[v]) {
            a = _colorLookup[v];
          } else if (v.charAt(0) === "#") {
            if (v.length < 6) {
              //for shorthand like #9F0 or #9F0F (could have alpha)
              r = v.charAt(1);
              g = v.charAt(2);
              b = v.charAt(3);
              v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }

            if (v.length === 9) {
              // hex with alpha, like #fd5e53ff
              a = parseInt(v.substr(1, 6), 16);
              return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
            }

            v = parseInt(v.substr(1), 16);
            a = [v >> 16, v >> 8 & _255, v & _255];
          } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);

            if (!toHSL) {
              h = +a[0] % 360 / 360;
              s = +a[1] / 100;
              l = +a[2] / 100;
              g = l <= .5 ? l * (s + 1) : l + s - l * s;
              r = l * 2 - g;
              a.length > 3 && (a[3] *= 1); //cast as number

              a[0] = _hue(h + 1 / 3, r, g);
              a[1] = _hue(h, r, g);
              a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
              //if relative values are found, just return the raw strings with the relative prefixes in place.
              a = v.match(_numExp);
              forceAlpha && a.length < 4 && (a[3] = 1);
              return a;
            }
          } else {
            a = v.match(_strictNumExp) || _colorLookup.transparent;
          }

          a = a.map(Number);
        }

        if (toHSL && !wasHSL) {
          r = a[0] / _255;
          g = a[1] / _255;
          b = a[2] / _255;
          max = Math.max(r, g, b);
          min = Math.min(r, g, b);
          l = (max + min) / 2;

          if (max === min) {
            h = s = 0;
          } else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
          }

          a[0] = ~~(h + .5);
          a[1] = ~~(s * 100 + .5);
          a[2] = ~~(l * 100 + .5);
        }

        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }, _colorOrderData = function _colorOrderData(v) {
        // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
        var values = [], c = [], i = -1;
        v.split(_colorExp).forEach(function (v) {
          var a = v.match(_numWithUnitExp) || [];
          values.push.apply(values, a);
          c.push(i += a.length + 1);
        });
        values.c = c;
        return values;
      }, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
        var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;

        if (!colors) {
          return s;
        }

        colors = colors.map(function (color) {
          return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
        });

        if (orderMatchData) {
          d = _colorOrderData(s);
          c = orderMatchData.c;

          if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;

            for (; i < l; i++) {
              result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
          }
        }

        if (!shell) {
          shell = s.split(_colorExp);
          l = shell.length - 1;

          for (; i < l; i++) {
            result += shell[i] + colors[i];
          }
        }

        return result + shell[l];
      }, _colorExp = function () {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
          //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
          p;

        for (p in _colorLookup) {
          s += "|" + p + "\\b";
        }

        return new RegExp(s + ")", "gi");
      }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
        var combined = a.join(" "), toHSL;
        _colorExp.lastIndex = 0;

        if (_colorExp.test(combined)) {
          toHSL = _hslExp.test(combined);
          a[1] = _formatColors(a[1], toHSL);
          a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

          return true;
        }
      },
      /*
       * --------------------------------------------------------------------------------------
       * TICKER
       * --------------------------------------------------------------------------------------
       */
      _tickerActive, _ticker = function () {
        var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
          var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;

          elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
          _lastUpdate += elapsed;
          time = _lastUpdate - _startTime;
          overlap = time - _nextTime;

          if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
          }

          manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

          if (dispatch) {
            for (_i = 0; _i < _listeners.length; _i++) {
              // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
              _listeners[_i](time, _delta, frame, v);
            }
          }
        };

        _self = {
          time: 0,
          frame: 0,
          tick: function tick() {
            _tick(true);
          },
          deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
          },
          wake: function wake() {
            if (_coreReady) {
              if (!_coreInitted && _windowExists()) {
                _win = _coreInitted = window;
                _doc = _win.document || {};
                _globals.gsap = gsap;
                (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

                _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

                _raf = _win.requestAnimationFrame;
              }

              _id && _self.sleep();

              _req = _raf || function (f) {
                return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
              };

              _tickerActive = 1;

              _tick(2);
            }
          },
          sleep: function sleep() {
            (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
          },
          lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
          },
          fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
          },
          add: function add(callback) {
            _listeners.indexOf(callback) < 0 && _listeners.push(callback);

            _wake();
          },
          remove: function remove(callback) {
            var i;
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
          },
          _listeners: _listeners
        };
        return _self;
      }(), _wake = function _wake() {
        return !_tickerActive && _ticker.wake();
      },
      //also ensures the core classes are initialized.
      /*
      * -------------------------------------------------
      * EASING
      * -------------------------------------------------
      */
      _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
        //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
        var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;

        for (; i < l; i++) {
          val = split[i];
          index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
          parsedVal = val.substr(0, index);
          obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
          key = val.substr(index + 1).trim();
        }

        return obj;
      }, _valueInParentheses = function _valueInParentheses(value) {
        var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
        return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
      }, _configEaseFromString = function _configEaseFromString(name) {
        //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
        var split = (name + "").split("("), ease = _easeMap[split[0]];
        return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
      }, _invertEase = function _invertEase(ease) {
        return function (p) {
          return 1 - ease(1 - p);
        };
      },
      // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
      _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
        var child = timeline._first, ease;

        while (child) {
          if (child instanceof Timeline) {
            _propagateYoyoEase(child, isYoyo);
          } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) {
              _propagateYoyoEase(child.timeline, isYoyo);
            } else {
              ease = child._ease;
              child._ease = child._yEase;
              child._yEase = ease;
              child._yoyo = isYoyo;
            }
          }

          child = child._next;
        }
      }, _parseEase = function _parseEase(ease, defaultEase) {
        return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
      }, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
        if (easeOut === void 0) {
          easeOut = function easeOut(p) {
            return 1 - easeIn(1 - p);
          };
        }

        if (easeInOut === void 0) {
          easeInOut = function easeInOut(p) {
            return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
          };
        }

        var ease = {
          easeIn: easeIn,
          easeOut: easeOut,
          easeInOut: easeInOut
        }, lowercaseName;

        _forEachName(names, function (name) {
          _easeMap[name] = _globals[name] = ease;
          _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

          for (var p in ease) {
            _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
          }
        });

        return ease;
      }, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
        return function (p) {
          return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
        };
      }, _configElastic = function _configElastic(type, amplitude, period) {
        var p1 = amplitude >= 1 ? amplitude : 1,
          //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
          p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
            return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
          }, ease = type === "out" ? easeOut : type === "in" ? function (p) {
            return 1 - easeOut(1 - p);
          } : _easeInOutFromOut(easeOut);

        p2 = _2PI / p2; //precalculate to optimize

        ease.config = function (amplitude, period) {
          return _configElastic(type, amplitude, period);
        };

        return ease;
      }, _configBack = function _configBack(type, overshoot) {
        if (overshoot === void 0) {
          overshoot = 1.70158;
        }

        var easeOut = function easeOut(p) {
          return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
        }, ease = type === "out" ? easeOut : type === "in" ? function (p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);

        ease.config = function (overshoot) {
          return _configBack(type, overshoot);
        };

        return ease;
      }; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.














    // _weightedEase = ratio => {
    // 	let y = 0.5 + ratio / 2;
    // 	return p => (2 * (1 - p) * p * y + p * p);
    // },
    // a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
    // _weightedEaseStrong = ratio => {
    // 	ratio = .5 + ratio / 2;
    // 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
    // 		b = ratio - o,
    // 		c = ratio + o;
    // 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
    // };
    exports._ticker = _ticker;
    exports._colorStringFilter = _colorStringFilter;
    exports.splitColor = splitColor;
    exports.interpolate = interpolate;
    exports.mapRange = mapRange;
    exports._replaceRandom = _replaceRandom;
    exports.wrapYoyo = wrapYoyo;
    exports.wrap = wrap;
    exports.normalize = normalize;
    exports.unitize = unitize;
    exports.pipe = pipe;
    exports.random = random;
    exports.snap = snap;
    exports._roundModifier = _roundModifier;
    exports.distribute = distribute;
    exports.shuffle = shuffle;
    exports.toArray = toArray;
    exports.clamp = clamp;
    exports.getUnit = getUnit;
    exports._removeLinkedListItem = _removeLinkedListItem;
    exports._setDefaults = _setDefaults;
    exports._round = _round;
    exports._forEachName = _forEachName;
    exports._getProperty = _getProperty;
    exports._getCache = _getCache;
    exports._plugins = _plugins;
    exports._missingPlugin = _missingPlugin;
    exports._relExp = _relExp;
    exports._numWithUnitExp = _numWithUnitExp;
    exports._numExp = _numExp;
    exports._isUndefined = _isUndefined;
    exports._isString = _isString;
    exports._config = _config;

    _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
      var power = i < 5 ? i + 1 : i;

      _insertEase(name + ",Power" + (power - 1), i ? function (p) {
        return Math.pow(p, power);
      } : function (p) {
        return p;
      }, function (p) {
        return 1 - Math.pow(1 - p, power);
      }, function (p) {
        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
      });
    });

    _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

    _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

    (function (n, c) {
      var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
      };

      _insertEase("Bounce", function (p) {
        return 1 - easeOut(1 - p);
      }, easeOut);
    })(7.5625, 2.75);

    _insertEase("Expo", function (p) {
      return p ? Math.pow(2, 10 * (p - 1)) : 0;
    });

    _insertEase("Circ", function (p) {
      return -(_sqrt(1 - p * p) - 1);
    });

    _insertEase("Sine", function (p) {
      return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
    });

    _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

    _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
      config: function config(steps, immediateStart) {
        if (steps === void 0) {
          steps = 1;
        }

        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
        return function (p) {
          return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
        };
      }
    };
    _defaults.ease = _easeMap["quad.out"];

    _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
      return _callbackNames += name + "," + name + "Params,";
    });
    /*
     * --------------------------------------------------------------------------------------
     * CACHE
     * --------------------------------------------------------------------------------------
     */
    var GSCache = function GSCache(target, harness) {
      this.id = _gsID++;
      target._gsap = this;
      this.target = target;
      this.harness = harness;
      this.get = harness ? harness.get : _getProperty;
      this.set = harness ? harness.getSetter : _getSetter;
    };
    /*
     * --------------------------------------------------------------------------------------
     * ANIMATION
     * --------------------------------------------------------------------------------------
     */
    exports.GSCache = GSCache;

    var Animation = /*#__PURE__*/ function () {
      function Animation(vars, time) {
        var parent = vars.parent || _globalTimeline;
        this.vars = vars;
        this._delay = +vars.delay || 0;

        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
          // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
          this._rDelay = vars.repeatDelay || 0;
          this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }

        this._ts = 1;

        _setDuration(this, +vars.duration, 1, 1);

        this.data = vars.data;
        _tickerActive || _ticker.wake();
        parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
        vars.reversed && this.reverse();
        vars.paused && this.paused(true);
      }

      var _proto = Animation.prototype;

      _proto.delay = function delay(value) {
        if (value || value === 0) {
          this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
          this._delay = value;
          return this;
        }

        return this._delay;
      };

      _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
      };

      _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) {
          return this._tDur;
        }

        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
      };

      _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();

        if (!arguments.length) {
          return this._tTime;
        }

        var parent = this._dp;

        if (parent && parent.smoothChildTiming && this._ts) {
          _alignPlayhead(this, _totalTime);

          !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.


          //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
          while (parent.parent) {
            if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
              parent.totalTime(parent._tTime, true);
            }

            parent = parent.parent;
          }

          if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
            //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
            _addToTimeline(this._dp, this, this._start - this._delay);
          }
        }

        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
          // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
          this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause



          //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
          //   this._lock = 1;
          _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;


          //}
        }

        return this;
      };

      _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
      };

      _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
      };

      _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
      };

      _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;

        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
      } // potential future addition:
        ;

      _proto.timeScale = function timeScale(value) {
        if (!arguments.length) {
          return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        }

        if (this._rts === value) {
          return this;
        }

        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.


        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

        return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
      };

      _proto.paused = function paused(value) {
        if (!arguments.length) {
          return this._ps;
        }

        if (this._ps !== value) {
          this._ps = value;

          if (value) {
            this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

            this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
          } else {
            _wake();

            this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
          }
        }

        return this;
      };

      _proto.startTime = function startTime(value) {
        if (arguments.length) {
          this._start = value;
          var parent = this.parent || this._dp;
          parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
          return this;
        }

        return this._start;
      };

      _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
      };

      _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detatched parent

        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
      };

      _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();

        while (animation) {
          time = animation._start + time / (animation._ts || 1);
          animation = animation._dp;
        }

        return time;
      };

      _proto.repeat = function repeat(value) {
        if (arguments.length) {
          this._repeat = value === Infinity ? -2 : value;
          return _onUpdateTotalDuration(this);
        }

        return this._repeat === -2 ? Infinity : this._repeat;
      };

      _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
          this._rDelay = value;
          return _onUpdateTotalDuration(this);
        }

        return this._rDelay;
      };

      _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
          this._yoyo = value;
          return this;
        }

        return this._yoyo;
      };

      _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
      };

      _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
      };

      _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
      };

      _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
      };

      _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
      };

      _proto.resume = function resume() {
        return this.paused(false);
      };

      _proto.reversed = function reversed(value) {
        if (arguments.length) {
          !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

          return this;
        }

        return this._rts < 0;
      };

      _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
      };

      _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
      };

      _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;

        if (arguments.length > 1) {
          if (!callback) {
            delete vars[type];
          } else {
            vars[type] = callback;
            params && (vars[type + "Params"] = params);
            type === "onUpdate" && (this._onUpdate = callback);
          }

          return this;
        }

        return vars[type];
      };

      _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function (resolve) {
          var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
            var _then = self.then;
            self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

            _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
            resolve(f);
            self.then = _then;
          };

          if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
            _resolve();
          } else {
            self._prom = _resolve;
          }
        });
      };

      _proto.kill = function kill() {
        _interrupt(this);
      };

      return Animation;
    }();

    exports.Animation = Animation;

    _setDefaults(Animation.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: false,
      parent: null,
      _initted: false,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -_tinyNum,
      _prom: 0,
      _ps: false,
      _rts: 1
    });
    /*
     * -------------------------------------------------
     * TIMELINE
     * -------------------------------------------------
     */
    var Timeline = /*#__PURE__*/ function (_Animation) {
      _inheritsLoose(Timeline, _Animation);

      function Timeline(vars, time) {
        var _this;

        if (vars === void 0) {
          vars = {};
        }

        _this = _Animation.call(this, vars, time) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
      }

      var _proto2 = Timeline.prototype;

      _proto2.to = function to(targets, vars, position) {
        new Tween(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
        return this;
      };

      _proto2.from = function from(targets, vars, position) {
        new Tween(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
        return this;
      };

      _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        new Tween(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
        return this;
      };

      _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
      };

      _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition(this, position));
      } //ONLY for backward compatibility! Maybe delete?
        ;

      _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
      };

      _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
      };

      _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
      };

      _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;

        if (tTime !== this._tTime || force || crossingStart) {
          if (prevTime !== this._time && dur) {
            //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
            tTime += this._time - prevTime;
            totalTime += this._time - prevTime;
          }

          time = tTime;
          prevStart = this._start;
          timeScale = this._ts;
          prevPaused = !timeScale;

          if (crossingStart) {
            dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

            (totalTime || !suppressEvents) && (this._zTime = totalTime);
          }

          if (this._repeat) {
            //adjust the time for repeats and yoyos
            yoyo = this._yoyo;
            cycleDuration = dur + this._rDelay;

            if (this._repeat < -1 && totalTime < 0) {
              return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
            }

            time = _round(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

            if (tTime === tDur) {
              // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
              iteration = this._repeat;
              time = dur;
            } else {
              iteration = ~~(tTime / cycleDuration);

              if (iteration && iteration === tTime / cycleDuration) {
                time = dur;
                iteration--;
              }

              time > dur && (time = dur);
            }

            prevIteration = _animationCycle(this._tTime, cycleDuration);
            !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

            if (yoyo && iteration & 1) {
              time = dur - time;
              isYoyo = 1;
            }
            /*
            make sure children at the end/beginning of the timeline are rendered properly. If, for example,
            a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
            would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
            could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
            we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
            ensure that zero-duration tweens at the very beginning or end of the Timeline work.
            */
            if (iteration !== prevIteration && !this._lock) {
              var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
              iteration < prevIteration && (rewinding = !rewinding);
              prevTime = rewinding ? 0 : dur;
              this._lock = 1;
              this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
              !suppressEvents && this.parent && _callback(this, "onRepeat");
              this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

              if (prevTime !== this._time || prevPaused !== !this._ts) {
                return this;
              }

              dur = this._dur; // in case the duration changed in the onRepeat

              tDur = this._tDur;

              if (doesWrap) {
                this._lock = 2;
                prevTime = rewinding ? dur : -0.0001;
                this.render(prevTime, true);
                this.vars.repeatRefresh && !isYoyo && this.invalidate();
              }

              this._lock = 0;

              if (!this._ts && !prevPaused) {
                return this;
              } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


              _propagateYoyoEase(this, isYoyo);
            }
          }

          if (this._hasPause && !this._forcing && this._lock < 2) {
            pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));

            if (pauseTween) {
              tTime -= time - (time = pauseTween._start);
            }
          }

          this._tTime = tTime;
          this._time = time;
          this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

          if (!this._initted) {
            this._onUpdate = this.vars.onUpdate;
            this._initted = 1;
            this._zTime = totalTime;
            prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
          }

          !prevTime && (time || !dur && totalTime >= 0) && !suppressEvents && _callback(this, "onStart");

          if (time >= prevTime && totalTime >= 0) {
            child = this._first;

            while (child) {
              next = child._next;

              if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                if (child.parent !== this) {
                  // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                  return this.render(totalTime, suppressEvents, force);
                }

                child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

                if (time !== this._time || !this._ts && !prevPaused) {
                  //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                  pauseTween = 0;
                  next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

                  break;
                }
              }

              child = next;
            }
          } else {
            child = this._last;
            var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

            while (child) {
              next = child._prev;

              if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                if (child.parent !== this) {
                  // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                  return this.render(totalTime, suppressEvents, force);
                }

                child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

                if (time !== this._time || !this._ts && !prevPaused) {
                  //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                  pauseTween = 0;
                  next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

                  break;
                }
              }

              child = next;
            }
          }

          if (pauseTween && !suppressEvents) {
            this.pause();
            pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

            if (this._ts) {
              //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
              this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

              _setEnd(this);

              return this.render(totalTime, suppressEvents, force);
            }
          }

          this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
          if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
            (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

            if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
              _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

              this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
            }
          }
        }

        return this;
      };

      _proto2.add = function add(child, position) {
        var _this2 = this;

        _isNumber(position) || (position = _parsePosition(this, position));

        if (!(child instanceof Animation)) {
          if (_isArray(child)) {
            child.forEach(function (obj) {
              return _this2.add(obj, position);
            });
            return this;
          }

          if (_isString(child)) {
            return this.addLabel(child, position);
          }

          if (_isFunction(child)) {
            child = Tween.delayedCall(0, child);
          } else {
            return this;
          }
        }

        return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
      };

      _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) {
          nested = true;
        }

        if (tweens === void 0) {
          tweens = true;
        }

        if (timelines === void 0) {
          timelines = true;
        }

        if (ignoreBeforeTime === void 0) {
          ignoreBeforeTime = -_bigNum;
        }

        var a = [], child = this._first;

        while (child) {
          if (child._start >= ignoreBeforeTime) {
            if (child instanceof Tween) {
              tweens && a.push(child);
            } else {
              timelines && a.push(child);
              nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
            }
          }

          child = child._next;
        }

        return a;
      };

      _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;

        while (i--) {
          if (animations[i].vars.id === id) {
            return animations[i];
          }
        }
      };

      _proto2.remove = function remove(child) {
        if (_isString(child)) {
          return this.removeLabel(child);
        }

        if (_isFunction(child)) {
          return this.killTweensOf(child);
        }

        _removeLinkedListItem(this, child);

        if (child === this._recent) {
          this._recent = this._last;
        }

        return _uncache(this);
      };

      _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) {
          return this._tTime;
        }

        this._forcing = 1;

        if (!this._dp && this._ts) {
          //special case for the global timeline (or any other that has no parent or detached parent).
          this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        }

        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

        this._forcing = 0;
        return this;
      };

      _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
      };

      _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
      };

      _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
      };

      _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);

        while (child) {
          if (child._start === position && child.data === "isPause") {
            _removeFromParent(child);
          }

          child = child._next;
        }
      };

      _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;

        while (i--) {
          _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        }

        return this;
      };

      _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive),
          // a number is interpreted as a global time. If the animation spans
          children;

        while (child) {
          if (child instanceof Tween) {
            if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
              // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
              a.push(child);
            }
          } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
            a.push.apply(a, children);
          }

          child = child._next;
        }

        return a;
      } // potential future feature - targets() on timelines
        ;

      _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};

        var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, tween = Tween.to(tl, _setDefaults({
          ease: "none",
          lazy: false,
          immediateRender: false,
          time: endTime,
          overwrite: "auto",
          duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
          onStart: function onStart() {
            tl.pause();
            var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
          }
        }, vars));

        return immediateRender ? tween.render(0) : tween;
      };

      _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
          startAt: {
            time: _parsePosition(this, fromPosition)
          }
        }, vars));
      };

      _proto2.recent = function recent() {
        return this._recent;
      };

      _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) {
          afterTime = this._time;
        }

        return _getLabelInDirection(this, _parsePosition(this, afterTime));
      };

      _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) {
          beforeTime = this._time;
        }

        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
      };

      _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
      };

      _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) {
          ignoreBeforeTime = 0;
        }

        var child = this._first, labels = this.labels, p;

        while (child) {
          if (child._start >= ignoreBeforeTime) {
            child._start += amount;
            child._end += amount;
          }

          child = child._next;
        }

        if (adjustLabels) {
          for (p in labels) {
            if (labels[p] >= ignoreBeforeTime) {
              labels[p] += amount;
            }
          }
        }

        return _uncache(this);
      };

      _proto2.invalidate = function invalidate() {
        var child = this._first;
        this._lock = 0;

        while (child) {
          child.invalidate();
          child = child._next;
        }

        return _Animation.prototype.invalidate.call(this);
      };

      _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) {
          includeLabels = true;
        }

        var child = this._first, next;

        while (child) {
          next = child._next;
          this.remove(child);
          child = next;
        }

        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return _uncache(this);
      };

      _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;

        if (arguments.length) {
          return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        }

        if (self._dirty) {
          parent = self.parent;

          while (child) {
            prev = child._prev; //record it here in case the tween changes position in the sequence...

            child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

            start = child._start;

            if (start > prevStart && self._sort && child._ts && !self._lock) {
              //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
              self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

              _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
            } else {
              prevStart = start;
            }

            if (start < 0 && child._ts) {
              //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
              max -= start;

              if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                self._start += start / self._ts;
                self._time -= start;
                self._tTime -= start;
              }

              self.shiftChildren(-start, false, -1e999);
              prevStart = 0;
            }

            child._end > max && child._ts && (max = child._end);
            child = prev;
          }

          _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

          self._dirty = 0;
        }

        return self._tDur;
      };

      Timeline.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
          _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

          _lastRenderedFrame = _ticker.frame;
        }

        if (_ticker.frame >= _nextGCFrame) {
          _nextGCFrame += _config.autoSleep || 120;
          var child = _globalTimeline._first;
          if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }

            child || _ticker.sleep();
          }
        }
      };

      return Timeline;
    }(Animation);

    exports.TimelineLite = exports.TimelineMax = exports.Timeline = Timeline;

    _setDefaults(Timeline.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0
    });

    var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
      //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
      var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
      pt.b = start;
      pt.e = end;
      start += ""; //ensure values are strings

      end += "";

      if (hasRandom = ~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }

      if (stringFilter) {
        a = [start, end];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

        start = a[0];
        end = a[1];
      }

      startNums = start.match(_complexStringNumExp) || [];

      while (result = _complexStringNumExp.exec(end)) {
        endNum = result[0];
        chunk = end.substring(index, result.index);

        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(") {
          color = 1;
        }

        if (endNum !== startNums[matchIndex++]) {
          startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
            m: color && color < 4 ? Math.round : 0
          };
          index = _complexStringNumExp.lastIndex;
        }
      }

      pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

      pt.fp = funcParam;

      if (_relExp.test(end) || hasRandom) {
        pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
      }

      this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

      return pt;
    }, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
      _isFunction(end) && (end = end(index || 0, target, targets));
      var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;

      if (_isString(end)) {
        if (~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }

        if (end.charAt(1) === "=") {
          end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
        }
      }

      if (parsedStart !== end) {
        if (!isNaN(parsedStart * end)) {
          pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
          funcParam && (pt.fp = funcParam);
          modifier && pt.modifier(modifier, this, target);
          return this._pt = pt;
        }

        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
      }
    },
      //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
      _processVars = function _processVars(vars, index, target, targets, tween) {
        _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

        if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
          return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
        }

        var copy = {}, p;

        for (p in vars) {
          copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
        }

        return copy;
      }, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
        var plugin, pt, ptLookup, i;

        if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

          if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

            i = plugin._props.length;

            while (i--) {
              ptLookup[plugin._props[i]] = pt;
            }
          }
        }

        return plugin;
      }, _overwritingTween,
      //store a reference temporarily so we can avoid overwriting itself.
      _initTween = function _initTween(tween, time) {
        var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
        tl && (!keyframes || !ease) && (ease = "none");
        tween._ease = _parseEase(ease, _defaults.ease);
        tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

        if (yoyoEase && tween._yoyo && !tween._repeat) {
          //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
          yoyoEase = tween._yEase;
          tween._yEase = tween._ease;
          tween._ease = yoyoEase;
        }

        if (!tl) {
          //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
          harness = targets[0] ? _getCache(targets[0]).harness : 0;
          harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

          cleanVars = _copyExcluding(vars, _reservedProps);
          prevStartAt && prevStartAt.render(-1, true).kill();

          if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
              data: "isStart",
              overwrite: false,
              parent: parent,
              immediateRender: true,
              lazy: _isNotFalse(lazy),
              startAt: null,
              delay: 0,
              onUpdate: onUpdate,
              onUpdateParams: onUpdateParams,
              callbackScope: callbackScope,
              stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


            if (immediateRender) {
              if (time > 0) {
                autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
              } else if (dur && !(time < 0 && prevStartAt)) {
                time && (tween._zTime = time);
                return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
              }
            }
          } else if (runBackwards && dur) {
            //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
            if (prevStartAt) {
              !autoRevert && (tween._startAt = 0);
            } else {
              time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

              p = _setDefaults({
                overwrite: false,
                data: "isFromStart",
                //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                lazy: immediateRender && _isNotFalse(lazy),
                immediateRender: immediateRender,
                //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                stagger: 0,
                parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
              }, cleanVars);
              harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

              _removeFromParent(tween._startAt = Tween.set(targets, p));

              if (!immediateRender) {
                _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded

              } else if (!time) {
                return;
              }
            }
          }

          tween._pt = 0;
          lazy = dur && _isNotFalse(lazy) || lazy && !dur;

          for (i = 0; i < targets.length; i++) {
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

            index = fullTargets === targets ? i : fullTargets.indexOf(target);

            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
              tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

              plugin._props.forEach(function (name) {
                ptLookup[name] = pt;
              });

              plugin.priority && (hasPriority = 1);
            }

            if (!harness || harnessVars) {
              for (p in cleanVars) {
                if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                  plugin.priority && (hasPriority = 1);
                } else {
                  ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                }
              }
            }

            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

            if (autoOverwrite && tween._pt) {
              _overwritingTween = tween;

              _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0)); //Also make sure the overwriting doesn't overwrite THIS tween!!!


              overwritten = !tween.parent;
              _overwritingTween = 0;
            }

            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
          }

          hasPriority && _sortPropTweensByPriority(tween);
          tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
        }

        tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

        tween._onUpdate = onUpdate;
        tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
      }, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
        var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;

        if (!propertyAliases) {
          return vars;
        }

        copy = _merge({}, vars);

        for (p in propertyAliases) {
          if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i = aliases.length;

            while (i--) {
              copy[aliases[i]] = copy[p];
            }
          }
        }

        return copy;
      }, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
        return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
      }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
    /*
     * --------------------------------------------------------------------------------------
     * TWEEN
     * --------------------------------------------------------------------------------------
     */
    exports._checkPlugin = _checkPlugin;

    var Tween = /*#__PURE__*/ function (_Animation2) {
      _inheritsLoose(Tween, _Animation2);

      function Tween(targets, vars, time, skipInherit) {
        var _this3;

        if (typeof vars === "number") {
          time.duration = vars;
          vars = time;
          time = null;
        }

        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = _this3.parent, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

        _this3._overwrite = overwrite;

        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          vars = _this3.vars;
          tl = _this3.timeline = new Timeline({
            data: "nested",
            defaults: defaults || {}
          });
          tl.kill();
          tl.parent = tl._dp = _assertThisInitialized(_this3);
          tl._start = 0;

          if (keyframes) {
            _setDefaults(tl.vars.defaults, {
              ease: "none"
            });

            keyframes.forEach(function (frame) {
              return tl.to(parsedTargets, frame, ">");
            });
          } else {
            l = parsedTargets.length;
            staggerFunc = stagger ? distribute(stagger) : _emptyFunc;

            if (_isObject(stagger)) {
              //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
              for (p in stagger) {
                if (~_staggerTweenProps.indexOf(p)) {
                  staggerVarsToMerge || (staggerVarsToMerge = {});
                  staggerVarsToMerge[p] = stagger[p];
                }
              }
            }

            for (i = 0; i < l; i++) {
              copy = {};

              for (p in vars) {
                if (_staggerPropsToSkip.indexOf(p) < 0) {
                  copy[p] = vars[p];
                }
              }

              copy.stagger = 0;
              yoyoEase && (copy.yoyoEase = yoyoEase);
              staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
              curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

              copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
              copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

              if (!stagger && l === 1 && copy.delay) {
                // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                _this3._delay = delay = copy.delay;
                _this3._start += delay;
                copy.delay = 0;
              }

              tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
            }

            tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
          }

          duration || _this3.duration(duration = tl.duration());
        } else {
          _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        }

        if (overwrite === true && !_suppressOverwrites) {
          _overwritingTween = _assertThisInitialized(_this3);

          _globalTimeline.killTweensOf(parsedTargets);

          _overwritingTween = 0;
        }

        parent && _postAddChecks(parent, _assertThisInitialized(_this3));

        if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
          _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

          _this3.render(Math.max(0, -delay)); //in case delay is negative

        }

        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
      }

      var _proto3 = Tween.prototype;

      _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;

        if (!dur) {
          _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
          //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
          time = tTime;
          timeline = this.timeline;

          if (this._repeat) {
            //adjust the time for repeats and yoyos
            cycleDuration = dur + this._rDelay;

            if (this._repeat < -1 && totalTime < 0) {
              return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
            }

            time = _round(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

            if (tTime === tDur) {
              // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
              iteration = this._repeat;
              time = dur;
            } else {
              iteration = ~~(tTime / cycleDuration);

              if (iteration && iteration === tTime / cycleDuration) {
                time = dur;
                iteration--;
              }

              time > dur && (time = dur);
            }

            isYoyo = this._yoyo && iteration & 1;

            if (isYoyo) {
              yoyoEase = this._yEase;
              time = dur - time;
            }

            prevIteration = _animationCycle(this._tTime, cycleDuration);

            if (time === prevTime && !force && this._initted) {
              //could be during the repeatDelay part. No need to render and fire callbacks.
              return this;
            }

            if (iteration !== prevIteration) {
              timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

              if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

                this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
              }
            }
          }

          if (!this._initted) {
            if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
              this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

              return this;
            }

            if (dur !== this._dur) {
              // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
              return this.render(totalTime, suppressEvents, force);
            }
          }

          this._tTime = tTime;
          this._time = time;

          if (!this._act && this._ts) {
            this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

            this._lazy = 0;
          }

          this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

          if (this._from) {
            this.ratio = ratio = 1 - ratio;
          }

          time && !prevTime && !suppressEvents && _callback(this, "onStart");
          pt = this._pt;

          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }

          timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);

          if (this._onUpdate && !suppressEvents) {
            totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

            _callback(this, "onUpdate");
          }

          this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

          if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
            totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
            (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

            if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
              // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
              _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

              this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
            }
          }
        }

        return this;
      };

      _proto3.targets = function targets() {
        return this._targets;
      };

      _proto3.invalidate = function invalidate() {
        this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate();
        return _Animation2.prototype.invalidate.call(this);
      };

      _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) {
          vars = "all";
        }

        if (!targets && (!vars || vars === "all")) {
          this._lazy = this._pt = 0;
          return this.parent ? _interrupt(this) : this;
        }

        if (this.timeline) {
          var tDur = this.timeline.totalDuration();
          this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

          this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

          return this;
        }

        var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;

        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
          vars === "all" && (this._pt = 0);
          return _interrupt(this);
        }

        overwrittenProps = this._op = this._op || [];

        if (vars !== "all") {
          //so people can pass in a comma-delimited list of property names
          if (_isString(vars)) {
            p = {};

            _forEachName(vars, function (name) {
              return p[name] = 1;
            });

            vars = p;
          }

          vars = _addAliasesToVars(parsedTargets, vars);
        }

        i = parsedTargets.length;

        while (i--) {
          if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];

            if (vars === "all") {
              overwrittenProps[i] = vars;
              props = curLookup;
              curOverwriteProps = {};
            } else {
              curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
              props = vars;
            }

            for (p in props) {
              pt = curLookup && curLookup[p];

              if (pt) {
                if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                  _removeLinkedListItem(this, pt, "_pt");
                }

                delete curLookup[p];
              }

              if (curOverwriteProps !== "all") {
                curOverwriteProps[p] = 1;
              }
            }
          }
        }

        this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

        return this;
      };

      Tween.to = function to(targets, vars) {
        return new Tween(targets, vars, arguments[2]);
      };

      Tween.from = function from(targets, vars) {
        return new Tween(targets, _parseVars(arguments, 1));
      };

      Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween(callback, 0, {
          immediateRender: false,
          lazy: false,
          overwrite: false,
          delay: delay,
          onComplete: callback,
          onReverseComplete: callback,
          onCompleteParams: params,
          onReverseCompleteParams: params,
          callbackScope: scope
        });
      };

      Tween.fromTo = function fromTo(targets, fromVars, toVars) {
        return new Tween(targets, _parseVars(arguments, 2));
      };

      Tween.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween(targets, vars);
      };

      Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
      };

      return Tween;
    }(Animation);

    exports.TweenLite = exports.TweenMax = exports.Tween = Tween;

    _setDefaults(Tween.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0
    }); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)









    // _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
    // 	Tween.prototype[name] = function() {
    // 		let tl = new Timeline();
    // 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
    // 	}
    // });
    //for backward compatibility. Leverage the timeline calls.
    _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
      Tween[name] = function () {
        var tl = new Timeline(), params = _slice.call(arguments, 0);

        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
      };
    });
    /*
     * --------------------------------------------------------------------------------------
     * PROPTWEEN
     * --------------------------------------------------------------------------------------
     */
    var _setterPlain = function _setterPlain(target, property, value) {
      return target[property] = value;
    }, _setterFunc = function _setterFunc(target, property, value) {
      return target[property](value);
    }, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
      return target[property](data.fp, value);
    }, _setterAttribute = function _setterAttribute(target, property, value) {
      return target.setAttribute(property, value);
    }, _getSetter = function _getSetter(target, property) {
      return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
    }, _renderPlain = function _renderPlain(ratio, data) {
      return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
    }, _renderBoolean = function _renderBoolean(ratio, data) {
      return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
    }, _renderComplexString = function _renderComplexString(ratio, data) {
      var pt = data._pt, s = "";

      if (!ratio && data.b) {
        //b = beginning string
        s = data.b;
      } else if (ratio === 1 && data.e) {
        //e = ending string
        s = data.e;
      } else {
        while (pt) {
          s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

          pt = pt._next;
        }

        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
      }

      data.set(data.t, data.p, s, data);
    }, _renderPropTweens = function _renderPropTweens(ratio, data) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
      var pt = this._pt, next;

      while (pt) {
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
      }
    }, _killPropTweensOf = function _killPropTweensOf(property) {
      var pt = this._pt, hasNonDependentRemaining, next;

      while (pt) {
        next = pt._next;

        if (pt.p === property && !pt.op || pt.op === property) {
          _removeLinkedListItem(this, pt, "_pt");
        } else if (!pt.dep) {
          hasNonDependentRemaining = 1;
        }

        pt = next;
      }

      return !hasNonDependentRemaining;
    }, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
      data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
    }, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
      var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

      while (pt) {
        next = pt._next;
        pt2 = first;

        while (pt2 && pt2.pr > pt.pr) {
          pt2 = pt2._next;
        }

        if (pt._prev = pt2 ? pt2._prev : last) {
          pt._prev._next = pt;
        } else {
          first = pt;
        }

        if (pt._next = pt2) {
          pt2._prev = pt;
        } else {
          last = pt;
        }

        pt = next;
      }

      parent._pt = first;
    }; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


    exports._sortPropTweensByPriority = _sortPropTweensByPriority;
    exports._renderComplexString = _renderComplexString;
    exports._getSetter = _getSetter;

    var PropTween = /*#__PURE__*/ function () {
      function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;

        if (next) {
          next._prev = this;
        }
      }

      var _proto4 = PropTween.prototype;

      _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target

        this.tween = tween;
      };

      return PropTween;
    }(); //Initialization tasks


    exports.PropTween = PropTween;

    _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
      return _reservedProps[name] = 1;
    });

    _globals.TweenMax = _globals.TweenLite = Tween;
    _globals.TimelineLite = _globals.TimelineMax = Timeline;
    _globalTimeline = new Timeline({
      sortChildren: false,
      defaults: _defaults,
      autoRemoveChildren: true,
      id: "root",
      smoothChildTiming: true
    });
    _config.stringFilter = _colorStringFilter;
    /*
     * --------------------------------------------------------------------------------------
     * GSAP
     * --------------------------------------------------------------------------------------
     */
    var _gsap = {
      registerPlugin: function registerPlugin() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        args.forEach(function (config) {
          return _createPlugin(config);
        });
      },
      timeline: function timeline(vars) {
        return new Timeline(vars);
      },
      getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
      },
      getProperty: function getProperty(target, property, unit, uncache) {
        _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

        var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;

        unit === "native" && (unit = "");
        return !target ? target : !property ? function (property, unit, uncache) {
          return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      },
      quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);

        if (target.length > 1) {
          var setters = target.map(function (t) {
            return gsap.quickSetter(t, property, unit);
          }), l = setters.length;
          return function (value) {
            var i = l;

            while (i--) {
              setters[i](value);
            }
          };
        }

        target = target[0] || {};

        var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property,
          // in case it's an alias, like "rotate" for "rotation".
          setter = Plugin ? function (value) {
            var p = new Plugin();
            _quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
            p.render(1, p);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
          } : cache.set(target, p);

        return Plugin ? setter : function (value) {
          return setter(target, p, unit ? value + unit : value, cache, 1);
        };
      },
      isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
      },
      defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {});
      },
      config: function config(value) {
        return _mergeDeep(_config, value || {});
      },
      registerEffect: function registerEffect(_ref2) {
        var name = _ref2.name, effect = _ref2.effect, plugins = _ref2.plugins, defaults = _ref2.defaults, extendTimeline = _ref2.extendTimeline;
        (plugins || "").split(",").forEach(function (pluginName) {
          return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });

        _effects[name] = function (targets, vars, tl) {
          return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
        };

        if (extendTimeline) {
          Timeline.prototype[name] = function (targets, vars, position) {
            return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
          };
        }
      },
      registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
      },
      parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
      },
      getById: function getById(id) {
        return _globalTimeline.getById(id);
      },
      exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) {
          vars = {};
        }

        var tl = new Timeline(vars), child, next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

        _globalTimeline.remove(tl);

        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;

        while (child) {
          next = child._next;

          if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
            _addToTimeline(tl, child, child._start - child._delay);
          }

          child = next;
        }

        _addToTimeline(_globalTimeline, tl, 0);

        return tl;
      },
      utils: {
        wrap: wrap,
        wrapYoyo: wrapYoyo,
        distribute: distribute,
        random: random,
        snap: snap,
        normalize: normalize,
        getUnit: getUnit,
        clamp: clamp,
        splitColor: splitColor,
        toArray: toArray,
        mapRange: mapRange,
        pipe: pipe,
        unitize: unitize,
        interpolate: interpolate,
        shuffle: shuffle
      },
      install: _install,
      effects: _effects,
      ticker: _ticker,
      updateRoot: Timeline.updateRoot,
      plugins: _plugins,
      globalTimeline: _globalTimeline,
      core: {
        PropTween: PropTween,
        globals: _addGlobal,
        Tween: Tween,
        Timeline: Timeline,
        Animation: Animation,
        getCache: _getCache,
        _removeLinkedListItem: _removeLinkedListItem,
        suppressOverwrites: function suppressOverwrites(value) {
          return _suppressOverwrites = value;
        }
      }
    };

    _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
      return _gsap[name] = Tween[name];
    });

    _ticker.add(Timeline.updateRoot);

    _quickTween = _gsap.to({}, {
      duration: 0
    }); // ---- EXTRA PLUGINS --------------------------------------------------------

    var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
      var pt = plugin._pt;

      while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
        pt = pt._next;
      }

      return pt;
    }, _addModifiers = function _addModifiers(tween, modifiers) {
      var targets = tween._targets, p, i, pt;

      for (p in modifiers) {
        i = targets.length;

        while (i--) {
          pt = tween._ptLookup[i][p];

          if (pt && (pt = pt.d)) {
            if (pt._pt) {
              // is a plugin
              pt = _getPluginPropTween(pt, p);
            }

            pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
          }
        }
      }
    }, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
      return {
        name: name,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween) {
          tween._onInit = function (tween) {
            var temp, p;

            if (_isString(vars)) {
              temp = {};

              _forEachName(vars, function (name) {
                return temp[name] = 1;
              }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


              vars = temp;
            }

            if (modifier) {
              temp = {};

              for (p in vars) {
                temp[p] = modifier(vars[p]);
              }

              vars = temp;
            }

            _addModifiers(tween, vars);
          };
        }
      };
    }; //register core plugins


    var gsap = _gsap.registerPlugin({
      name: "attr",
      init: function init(target, vars, tween, index, targets) {
        var p, pt;

        for (p in vars) {
          pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
          pt && (pt.op = p);

          this._props.push(p);
        }
      }
    }, {
      name: "endArray",
      init: function init(target, value) {
        var i = value.length;

        while (i--) {
          this.add(target, i, target[i] || 0, value[i]);
        }
      }
    }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.


    exports.default = exports.gsap = gsap;
    Tween.version = Timeline.version = gsap.version = "3.6.0";
    _coreReady = 1;

    if (_windowExists()) {
      _wake();
    }

    var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
    exports.Circ = Circ;
    exports.Expo = Expo;
    exports.Sine = Sine;
    exports.Bounce = Bounce;
    exports.SteppedEase = SteppedEase;
    exports.Back = Back;
    exports.Elastic = Elastic;
    exports.Strong = Strong;
    exports.Quint = Quint;
    exports.Quart = Quart;
    exports.Cubic = Cubic;
    exports.Quad = Quad;
    exports.Linear = Linear;
    exports.Power4 = Power4;
    exports.Power3 = Power3;
    exports.Power2 = Power2;
    exports.Power1 = Power1;
    exports.Power0 = Power0;
  }, {}], "bp4Z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.checkPrefix = exports._createElement = exports._getBBox = exports.default = exports.CSSPlugin = void 0;

    var _gsapCore = require("./gsap-core.js");

    /*!
     * CSSPlugin 3.6.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
    */
    /* eslint-disable */
    var _win, _doc, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists = function _windowExists() {
      return typeof window !== "undefined";
    }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    }, _renderCSSProp = function _renderCSSProp(ratio, data) {
      return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
    }, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
      return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
    }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
      return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
    },
      //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
      _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
        var value = data.s + data.c * ratio;
        data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
      }, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
      }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
        return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
      }, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
        return target.style[property] = value;
      }, _setterCSSProp = function _setterCSSProp(target, property, value) {
        return target.style.setProperty(property, value);
      }, _setterTransform = function _setterTransform(target, property, value) {
        return target._gsap[property] = value;
      }, _setterScale = function _setterScale(target, property, value) {
        return target._gsap.scaleX = target._gsap.scaleY = value;
      }, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache.scaleX = cache.scaleY = value;
        cache.renderTransform(ratio, cache);
      }, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache[property] = value;
        cache.renderTransform(ratio, cache);
      }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement(type, ns) {
        var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

        return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
      }, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
        var cs = getComputedStyle(target);
        return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
      }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
        var e = element || _tempDiv, s = e.style, i = 5;

        if (property in s && !preferPrefix) {
          return property;
        }

        property = property.charAt(0).toUpperCase() + property.substr(1);

        while (i-- && !(_prefixes[i] + property in s)) { }

        return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
      }, _initCore = function _initCore() {
        if (_windowExists() && window.document) {
          _win = window;
          _doc = _win.document;
          _docElement = _doc.documentElement;
          _tempDiv = _createElement("div") || {
            style: {}
          };
          _tempDivStyler = _createElement("div");
          _transformProp = _checkPropPrefix(_transformProp);
          _transformOriginProp = _transformProp + "Origin";
          _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

          _supports3D = !!_checkPropPrefix("perspective");
          _pluginInitted = 1;
        }
      }, _getBBoxHack = function _getBBoxHack(swapIfPossible) {
        //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
        var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;

        _docElement.appendChild(svg);

        svg.appendChild(this);
        this.style.display = "block";

        if (swapIfPossible) {
          try {
            bbox = this.getBBox();
            this._gsapBBox = this.getBBox; //store the original

            this.getBBox = _getBBoxHack;
          } catch (e) { }
        } else if (this._gsapBBox) {
          bbox = this._gsapBBox();
        }

        if (oldParent) {
          if (oldSibling) {
            oldParent.insertBefore(this, oldSibling);
          } else {
            oldParent.appendChild(this);
          }
        }

        _docElement.removeChild(svg);

        this.style.cssText = oldCSS;
        return bbox;
      }, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
        var i = attributesArray.length;

        while (i--) {
          if (target.hasAttribute(attributesArray[i])) {
            return target.getAttribute(attributesArray[i]);
          }
        }
      }, _getBBox = function _getBBox(target) {
        var bounds;

        try {
          bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
        } catch (error) {
          bounds = _getBBoxHack.call(target, true);
        }

        bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

        return bounds && !bounds.width && !bounds.x && !bounds.y ? {
          x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
          y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0
        } : bounds;
      }, _isSVG = function _isSVG(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
      },
      //reports if the element is an SVG on which getBBox() actually works
      _removeProperty = function _removeProperty(target, property) {
        if (property) {
          var style = target.style;

          if (property in _transformProps && property !== _transformOriginProp) {
            property = _transformProp;
          }

          if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
              //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
              property = "-" + property;
            }

            style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
          } else {
            //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
            style.removeAttribute(property);
          }
        }
      }, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
        var pt = new _gsapCore.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
        plugin._pt = pt;
        pt.b = beginning;
        pt.e = end;

        plugin._props.push(property);

        return pt;
      }, _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1
      },
      //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
      _convertToUnit = function _convertToUnit(target, property, value, unit) {
        var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px",
          // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
          style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;

        if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
          return curValue;
        }

        curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
        isSVG = target.getCTM && _isSVG(target);

        if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
          px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
          return (0, _gsapCore._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
        }

        style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
        parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

        if (isSVG) {
          parent = (target.ownerSVGElement || {}).parentNode;
        }

        if (!parent || parent === _doc || !parent.appendChild) {
          parent = _doc.body;
        }

        cache = parent._gsap;

        if (cache && toPercent && cache.width && horizontal && cache.time === _gsapCore._ticker.time) {
          return (0, _gsapCore._round)(curValue / cache.width * amount);
        } else {
          (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
          parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

          parent.appendChild(_tempDiv);
          px = _tempDiv[measureProperty];
          parent.removeChild(_tempDiv);
          style.position = "absolute";

          if (horizontal && toPercent) {
            cache = (0, _gsapCore._getCache)(parent);
            cache.time = _gsapCore._ticker.time;
            cache.width = parent[measureProperty];
          }
        }

        return (0, _gsapCore._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
      }, _get = function _get(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore();

        if (property in _propertyAliases && property !== "transform") {
          property = _propertyAliases[property];

          if (~property.indexOf(",")) {
            property = property.split(",")[0];
          }
        }

        if (_transformProps[property] && property !== "transform") {
          value = _parseTransform(target, uncache);
          value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
        } else {
          value = target.style[property];

          if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
            value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0, _gsapCore._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
          }
        }

        return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
      }, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
        //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
        if (!start || start === "none") {
          // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
          var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);

          if (s && s !== start) {
            prop = p;
            start = s;
          } else if (prop === "borderColor") {
            start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
          }
        }

        var pt = new _gsapCore.PropTween(this._pt, target.style, prop, 0, 1, _gsapCore._renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
        pt.b = start;
        pt.e = end;
        start += ""; //ensure values are strings

        end += "";

        if (end === "auto") {
          target.style[prop] = end;
          end = _getComputedProperty(target, prop) || end;
          target.style[prop] = start;
        }

        a = [start, end];
        (0, _gsapCore._colorStringFilter)(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().

        start = a[0];
        end = a[1];
        startValues = start.match(_gsapCore._numWithUnitExp) || [];
        endValues = end.match(_gsapCore._numWithUnitExp) || [];

        if (endValues.length) {
          while (result = _gsapCore._numWithUnitExp.exec(end)) {
            endValue = result[0];
            chunk = end.substring(index, result.index);

            if (color) {
              color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
              color = 1;
            }

            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
              startNum = parseFloat(startValue) || 0;
              startUnit = startValue.substr((startNum + "").length);
              relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

              if (relative) {
                endValue = endValue.substr(2);
              }

              endNum = parseFloat(endValue);
              endUnit = endValue.substr((endNum + "").length);
              index = _gsapCore._numWithUnitExp.lastIndex - endUnit.length;

              if (!endUnit) {
                //if something like "perspective:300" is passed in and we must add a unit to the end
                endUnit = endUnit || _gsapCore._config.units[prop] || startUnit;

                if (index === end.length) {
                  end += endUnit;
                  pt.e += endUnit;
                }
              }

              if (startUnit !== endUnit) {
                startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
              } //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


              pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: relative ? relative * endNum : endNum - startNum,
                m: color && color < 4 || prop === "zIndex" ? Math.round : 0
              };
            }
          }

          pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
        } else {
          pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
        }

        _gsapCore._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

        this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

        return pt;
      }, _keywordToPercent = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
      }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
        var split = value.split(" "), x = split[0], y = split[1] || "50%";

        if (x === "top" || x === "bottom" || y === "left" || y === "right") {
          //the user provided them in the wrong order, so flip them
          value = x;
          x = y;
          y = value;
        }

        split[0] = _keywordToPercent[x] || x;
        split[1] = _keywordToPercent[y] || y;
        return split.join(" ");
      }, _renderClearProps = function _renderClearProps(ratio, data) {
        if (data.tween && data.tween._time === data.tween._dur) {
          var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;

          if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
          } else {
            props = props.split(",");
            i = props.length;

            while (--i > -1) {
              prop = props[i];

              if (_transformProps[prop]) {
                clearTransforms = 1;
                prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
              }

              _removeProperty(target, prop);
            }
          }

          if (clearTransforms) {
            _removeProperty(target, _transformProp);

            if (cache) {
              cache.svg && target.removeAttribute("transform");

              _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


              cache.uncache = 1;
            }
          }
        }
      },
      // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
      _specialProps = {
        clearProps: function clearProps(plugin, target, property, endValue, tween) {
          if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new _gsapCore.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;

            plugin._props.push(property);

            return 1;
          }
        }
        /* className feature (about 0.4kb gzipped).
        , className(plugin, target, property, endValue, tween) {
          let _renderClassName = (ratio, data) => {
                  data.css.render(ratio, data.css);
                  if (!ratio || ratio === 1) {
                      let inline = data.rmv,
                          target = data.t,
                          p;
                      target.setAttribute("class", ratio ? data.e : data.b);
                      for (p in inline) {
                          _removeProperty(target, p);
                      }
                  }
              },
              _getAllStyles = (target) => {
                  let styles = {},
                      computed = getComputedStyle(target),
                      p;
                  for (p in computed) {
                      if (isNaN(p) && p !== "cssText" && p !== "length") {
                          styles[p] = computed[p];
                      }
                  }
                  _setDefaults(styles, _parseTransform(target, 1));
                  return styles;
              },
              startClassList = target.getAttribute("class"),
              style = target.style,
              cssText = style.cssText,
              cache = target._gsap,
              classPT = cache.classPT,
              inlineToRemoveAtEnd = {},
              data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
              changingVars = {},
              startVars = _getAllStyles(target),
              transformRelated = /(transform|perspective)/i,
              endVars, p;
          if (classPT) {
              classPT.r(1, classPT.d);
              _removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
          }
          target.setAttribute("class", data.e);
          endVars = _getAllStyles(target, true);
          target.setAttribute("class", startClassList);
          for (p in endVars) {
              if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
                  changingVars[p] = endVars[p];
                  if (!style[p] && style[p] !== "0") {
                      inlineToRemoveAtEnd[p] = 1;
                  }
              }
          }
          cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
          if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
              style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
          }
          _parseTransform(target, true); //to clear the caching of transforms
          data.css = new gsap.plugins.css();
          data.css.init(target, changingVars, tween);
          plugin._props.push(...data.css._props);
          return 1;
        }
        */
      },
      /*
       * --------------------------------------------------------------------------------------
       * TRANSFORMS
       * --------------------------------------------------------------------------------------
       */
      _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
        return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
      }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
        var matrixString = _getComputedProperty(target, _transformProp);

        return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsapCore._numExp).map(_gsapCore._round);
      }, _getMatrix = function _getMatrix(target, force2D) {
        var cache = target._gsap || (0, _gsapCore._getCache)(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;

        if (cache.svg && target.getAttribute("transform")) {
          temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

          matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
          return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
        } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
          //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
          //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
          temp = style.display;
          style.display = "block";
          parent = target.parentNode;

          if (!parent || !target.offsetParent) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
            addedToDOM = 1; //flag

            nextSibling = target.nextSibling;

            _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

          }

          matrix = _getComputedTransformMatrixAsArray(target);
          temp ? style.display = temp : _removeProperty(target, "display");

          if (addedToDOM) {
            nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
          }
        }

        return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
      }, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
        var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;

        if (!originIsAbsolute) {
          bounds = _getBBox(target);
          xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
          yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
        } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
          //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
          x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
          y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
          xOrigin = x;
          yOrigin = y;
        }

        if (smooth || smooth !== false && cache.smooth) {
          tx = xOrigin - xOriginOld;
          ty = yOrigin - yOriginOld;
          cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
          cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
        } else {
          cache.xOffset = cache.yOffset = 0;
        }

        cache.xOrigin = xOrigin;
        cache.yOrigin = yOrigin;
        cache.smooth = !!smooth;
        cache.origin = origin;
        cache.originIsAbsolute = !!originIsAbsolute;
        target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

        if (pluginToAddPropTweensTo) {
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
        }

        target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
      }, _parseTransform = function _parseTransform(target, uncache) {
        var cache = target._gsap || new _gsapCore.GSCache(target);

        if ("x" in cache && !uncache && !cache.uncache) {
          return cache;
        }

        var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
        x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
        scaleX = scaleY = 1;
        cache.svg = !!(target.getCTM && _isSVG(target));
        matrix = _getMatrix(target, cache.svg);

        if (cache.svg) {
          t1 = !cache.uncache && target.getAttribute("data-svg-origin");

          _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
        }

        xOrigin = cache.xOrigin || 0;
        yOrigin = cache.yOrigin || 0;

        if (matrix !== _identity2DMatrix) {
          a = matrix[0]; //a11

          b = matrix[1]; //a21

          c = matrix[2]; //a31

          d = matrix[3]; //a41

          x = a12 = matrix[4];
          y = a22 = matrix[5]; //2D matrix

          if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));

            if (cache.svg) {
              x -= xOrigin - (xOrigin * a + yOrigin * c);
              y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix

          } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG; //rotationX

            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a12 * cos + a13 * sin;
              t2 = a22 * cos + a23 * sin;
              t3 = a32 * cos + a33 * sin;
              a13 = a12 * -sin + a13 * cos;
              a23 = a22 * -sin + a23 * cos;
              a33 = a32 * -sin + a33 * cos;
              a43 = a42 * -sin + a43 * cos;
              a12 = t1;
              a22 = t2;
              a32 = t3;
            } //rotationY


            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;

            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a * cos - a13 * sin;
              t2 = b * cos - a23 * sin;
              t3 = c * cos - a33 * sin;
              a43 = d * sin + a43 * cos;
              a = t1;
              b = t2;
              c = t3;
            } //rotationZ


            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;

            if (angle) {
              cos = Math.cos(angle);
              sin = Math.sin(angle);
              t1 = a * cos + b * sin;
              t2 = a12 * cos + a22 * sin;
              b = b * cos - a * sin;
              a22 = a22 * cos - a12 * sin;
              a = t1;
              a12 = t2;
            }

            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
              //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
              rotationX = rotation = 0;
              rotationY = 180 - rotationY;
            }

            scaleX = (0, _gsapCore._round)(Math.sqrt(a * a + b * b + c * c));
            scaleY = (0, _gsapCore._round)(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          }

          if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
          }
        }

        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
          if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
          } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
          }
        }

        cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
        cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
        cache.z = z + px;
        cache.scaleX = (0, _gsapCore._round)(scaleX);
        cache.scaleY = (0, _gsapCore._round)(scaleY);
        cache.rotation = (0, _gsapCore._round)(rotation) + deg;
        cache.rotationX = (0, _gsapCore._round)(rotationX) + deg;
        cache.rotationY = (0, _gsapCore._round)(rotationY) + deg;
        cache.skewX = skewX + deg;
        cache.skewY = skewY + deg;
        cache.transformPerspective = perspective + px;

        if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
          style[_transformOriginProp] = _firstTwoOnly(origin);
        }

        cache.xOffset = cache.yOffset = 0;
        cache.force3D = _gsapCore._config.force3D;
        cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
        cache.uncache = 0;
        return cache;
      }, _firstTwoOnly = function _firstTwoOnly(value) {
        return (value = value.split(" "))[0] + " " + value[1];
      },
      //for handling transformOrigin values, stripping out the 3rd dimension
      _addPxTranslate = function _addPxTranslate(target, start, value) {
        var unit = (0, _gsapCore.getUnit)(start);
        return (0, _gsapCore._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
      }, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
        cache.z = "0px";
        cache.rotationY = cache.rotationX = "0deg";
        cache.force3D = 0;

        _renderCSSTransforms(ratio, cache);
      }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
        var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
          var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;

          angle = parseFloat(rotationX) * _DEG2RAD;
          cos = Math.cos(angle);
          x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
          y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
          z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
        }

        if (transformPerspective !== _zeroPx) {
          transforms += "perspective(" + transformPerspective + _endParenthesis;
        }

        if (xPercent || yPercent) {
          transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
        }

        if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
          transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
        }

        if (rotation !== _zeroDeg) {
          transforms += "rotate(" + rotation + _endParenthesis;
        }

        if (rotationY !== _zeroDeg) {
          transforms += "rotateY(" + rotationY + _endParenthesis;
        }

        if (rotationX !== _zeroDeg) {
          transforms += "rotateX(" + rotationX + _endParenthesis;
        }

        if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
          transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
        }

        if (scaleX !== 1 || scaleY !== 1) {
          transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
        }

        target.style[_transformProp] = transforms || "translate(0, 0)";
      }, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
        var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;

        rotation = parseFloat(rotation);
        skewX = parseFloat(skewX);
        skewY = parseFloat(skewY);

        if (skewY) {
          //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
          skewY = parseFloat(skewY);
          skewX += skewY;
          rotation += skewY;
        }

        if (rotation || skewX) {
          rotation *= _DEG2RAD;
          skewX *= _DEG2RAD;
          a11 = Math.cos(rotation) * scaleX;
          a21 = Math.sin(rotation) * scaleX;
          a12 = Math.sin(rotation - skewX) * -scaleY;
          a22 = Math.cos(rotation - skewX) * scaleY;

          if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;

            if (skewY) {
              temp = Math.tan(skewY);
              temp = Math.sqrt(1 + temp * temp);
              a11 *= temp;
              a21 *= temp;
            }
          }

          a11 = (0, _gsapCore._round)(a11);
          a21 = (0, _gsapCore._round)(a21);
          a12 = (0, _gsapCore._round)(a12);
          a22 = (0, _gsapCore._round)(a22);
        } else {
          a11 = scaleX;
          a22 = scaleY;
          a21 = a12 = 0;
        }

        if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
          tx = _convertToUnit(target, "x", x, "px");
          ty = _convertToUnit(target, "y", y, "px");
        }

        if (xOrigin || yOrigin || xOffset || yOffset) {
          tx = (0, _gsapCore._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
          ty = (0, _gsapCore._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
        }

        if (xPercent || yPercent) {
          //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
          temp = target.getBBox();
          tx = (0, _gsapCore._round)(tx + xPercent / 100 * temp.width);
          ty = (0, _gsapCore._round)(ty + yPercent / 100 * temp.height);
        }

        temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
        target.setAttribute("transform", temp);
        forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
      }, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
        var cap = 360, isString = (0, _gsapCore._isString)(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;

        if (isString) {
          direction = endValue.split("_")[1];

          if (direction === "short") {
            change %= cap;

            if (change !== change % (cap / 2)) {
              change += change < 0 ? cap : -cap;
            }
          }

          if (direction === "cw" && change < 0) {
            change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
          } else if (direction === "ccw" && change > 0) {
            change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
          }
        }

        plugin._pt = pt = new _gsapCore.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
        pt.e = finalValue;
        pt.u = "deg";

        plugin._props.push(property);

        return pt;
      }, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
        //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
        var style = _tempDivStyler.style, startCache = target._gsap, exclude = "perspective,force3D,transformOrigin,svgOrigin", endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
        style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;"; //%-based translations will fail unless we set the width/height to match the original target (and padding/borders can affect it)

        style[_transformProp] = transforms;

        _doc.body.appendChild(_tempDivStyler);

        endCache = _parseTransform(_tempDivStyler, 1);

        for (p in _transformProps) {
          startValue = startCache[p];
          endValue = endCache[p];

          if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = (0, _gsapCore.getUnit)(startValue);
            endUnit = (0, _gsapCore.getUnit)(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new _gsapCore.PropTween(plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;

            plugin._props.push(p);
          }
        }

        _doc.body.removeChild(_tempDivStyler);
      }; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


    exports._getBBox = _getBBox;
    exports.checkPrefix = _checkPropPrefix;
    exports._createElement = _createElement;
    (0, _gsapCore._forEachName)("padding,margin,Width,Radius", function (name, index) {
      var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
        return index < 2 ? name + side : "border" + side + name;
      });

      _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
        var a, vars;

        if (arguments.length < 4) {
          // getter, passed target, property, and unit (from _get())
          a = props.map(function (prop) {
            return _get(plugin, prop, property);
          });
          vars = a.join(" ");
          return vars.split(a[0]).length === 5 ? a[0] : vars;
        }

        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function (prop, i) {
          return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
      };
    });
    var CSSPlugin = {
      name: "css",
      register: _initCore,
      targetTest: function targetTest(target) {
        return target.style && target.nodeType;
      },
      init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
        _pluginInitted || _initCore();

        for (p in vars) {
          if (p === "autoRound") {
            continue;
          }

          endValue = vars[p];

          if (_gsapCore._plugins[p] && (0, _gsapCore._checkPlugin)(p, vars, tween, index, target, targets)) {
            // plugins
            continue;
          }

          type = typeof endValue;
          specialProp = _specialProps[p];

          if (type === "function") {
            endValue = endValue.call(tween, index, target, targets);
            type = typeof endValue;
          }

          if (type === "string" && ~endValue.indexOf("random(")) {
            endValue = (0, _gsapCore._replaceRandom)(endValue);
          }

          if (specialProp) {
            specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
          } else if (p.substr(0, 2) === "--") {
            //CSS variable
            startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
            endValue += "";
            startUnit = (0, _gsapCore.getUnit)(startValue);
            endUnit = (0, _gsapCore.getUnit)(endValue);
            endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
            this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          } else if (type !== "undefined") {
            if (startAt && p in startAt) {
              // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
              startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
              p in _gsapCore._config.units && !(0, _gsapCore.getUnit)(startValue) && (startValue += _gsapCore._config.units[p]); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

              (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
            } else {
              startValue = _get(target, p);
            }

            startNum = parseFloat(startValue);
            relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
            relative && (endValue = endValue.substr(2));
            endNum = parseFloat(endValue);

            if (p in _propertyAliases) {
              if (p === "autoAlpha") {
                //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                  //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                  startNum = 0;
                }

                _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
              }

              if (p !== "scale" && p !== "transform") {
                p = _propertyAliases[p];
                ~p.indexOf(",") && (p = p.split(",")[0]);
              }
            }

            isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

            if (isTransformRelated) {
              if (!transformPropTween) {
                cache = target._gsap;
                cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

                smooth = vars.smoothOrigin !== false && cache.smooth;
                transformPropTween = this._pt = new _gsapCore.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

                transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
              }

              if (p === "scale") {
                this._pt = new _gsapCore.PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
                props.push("scaleY", p);
                p += "X";
              } else if (p === "transformOrigin") {
                endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

                if (cache.svg) {
                  _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                } else {
                  endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

                  endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

                  _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                }

                continue;
              } else if (p === "svgOrigin") {
                _applySVGOrigin(target, endValue, 1, smooth, 0, this);

                continue;
              } else if (p in _rotationalProperties) {
                _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

                continue;
              } else if (p === "smoothOrigin") {
                _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

                continue;
              } else if (p === "force3D") {
                cache[p] = endValue;
                continue;
              } else if (p === "transform") {
                _addRawTransformPTs(this, endValue, target);

                continue;
              }
            } else if (!(p in style)) {
              p = _checkPropPrefix(p) || p;
            }

            if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
              startUnit = (startValue + "").substr((startNum + "").length);
              endNum || (endNum = 0); // protect against NaN

              endUnit = (0, _gsapCore.getUnit)(endValue) || (p in _gsapCore._config.units ? _gsapCore._config.units[p] : startUnit);
              startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
              this._pt = new _gsapCore.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
              this._pt.u = endUnit || 0;

              if (startUnit !== endUnit) {
                //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                this._pt.b = startValue;
                this._pt.r = _renderCSSPropWithBeginning;
              }
            } else if (!(p in style)) {
              if (p in target) {
                //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                this.add(target, p, target[p], endValue, index, targets);
              } else {
                (0, _gsapCore._missingPlugin)(p, endValue);
                continue;
              }
            } else {
              _tweenComplexCSSString.call(this, target, p, startValue, endValue);
            }

            props.push(p);
          }
        }

        hasPriority && (0, _gsapCore._sortPropTweensByPriority)(this);
      },
      get: _get,
      aliases: _propertyAliases,
      getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = _propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0, _gsapCore._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0, _gsapCore._getSetter)(target, property);
      },
      core: {
        _removeProperty: _removeProperty,
        _getMatrix: _getMatrix
      }
    };
    exports.default = exports.CSSPlugin = CSSPlugin;
    _gsapCore.gsap.utils.checkPrefix = _checkPropPrefix;

    (function (positionAndScale, rotation, others, aliases) {
      var all = (0, _gsapCore._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
        _transformProps[name] = 1;
      });
      (0, _gsapCore._forEachName)(rotation, function (name) {
        _gsapCore._config.units[name] = "deg";
        _rotationalProperties[name] = 1;
      });
      _propertyAliases[all[13]] = positionAndScale + "," + rotation;
      (0, _gsapCore._forEachName)(aliases, function (name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
      });
    })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

    (0, _gsapCore._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
      _gsapCore._config.units[name] = "px";
    });

    _gsapCore.gsap.registerPlugin(CSSPlugin);
  }, { "./gsap-core.js": "TNS6" }], "TpQl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Power0", {
      enumerable: true,
      get: function () {
        return _gsapCore.Power0;
      }
    });
    Object.defineProperty(exports, "Power1", {
      enumerable: true,
      get: function () {
        return _gsapCore.Power1;
      }
    });
    Object.defineProperty(exports, "Power2", {
      enumerable: true,
      get: function () {
        return _gsapCore.Power2;
      }
    });
    Object.defineProperty(exports, "Power3", {
      enumerable: true,
      get: function () {
        return _gsapCore.Power3;
      }
    });
    Object.defineProperty(exports, "Power4", {
      enumerable: true,
      get: function () {
        return _gsapCore.Power4;
      }
    });
    Object.defineProperty(exports, "Linear", {
      enumerable: true,
      get: function () {
        return _gsapCore.Linear;
      }
    });
    Object.defineProperty(exports, "Quad", {
      enumerable: true,
      get: function () {
        return _gsapCore.Quad;
      }
    });
    Object.defineProperty(exports, "Cubic", {
      enumerable: true,
      get: function () {
        return _gsapCore.Cubic;
      }
    });
    Object.defineProperty(exports, "Quart", {
      enumerable: true,
      get: function () {
        return _gsapCore.Quart;
      }
    });
    Object.defineProperty(exports, "Quint", {
      enumerable: true,
      get: function () {
        return _gsapCore.Quint;
      }
    });
    Object.defineProperty(exports, "Strong", {
      enumerable: true,
      get: function () {
        return _gsapCore.Strong;
      }
    });
    Object.defineProperty(exports, "Elastic", {
      enumerable: true,
      get: function () {
        return _gsapCore.Elastic;
      }
    });
    Object.defineProperty(exports, "Back", {
      enumerable: true,
      get: function () {
        return _gsapCore.Back;
      }
    });
    Object.defineProperty(exports, "SteppedEase", {
      enumerable: true,
      get: function () {
        return _gsapCore.SteppedEase;
      }
    });
    Object.defineProperty(exports, "Bounce", {
      enumerable: true,
      get: function () {
        return _gsapCore.Bounce;
      }
    });
    Object.defineProperty(exports, "Sine", {
      enumerable: true,
      get: function () {
        return _gsapCore.Sine;
      }
    });
    Object.defineProperty(exports, "Expo", {
      enumerable: true,
      get: function () {
        return _gsapCore.Expo;
      }
    });
    Object.defineProperty(exports, "Circ", {
      enumerable: true,
      get: function () {
        return _gsapCore.Circ;
      }
    });
    Object.defineProperty(exports, "TweenLite", {
      enumerable: true,
      get: function () {
        return _gsapCore.TweenLite;
      }
    });
    Object.defineProperty(exports, "TimelineLite", {
      enumerable: true,
      get: function () {
        return _gsapCore.TimelineLite;
      }
    });
    Object.defineProperty(exports, "TimelineMax", {
      enumerable: true,
      get: function () {
        return _gsapCore.TimelineMax;
      }
    });
    Object.defineProperty(exports, "CSSPlugin", {
      enumerable: true,
      get: function () {
        return _CSSPlugin.CSSPlugin;
      }
    });
    exports.TweenMax = exports.default = exports.gsap = void 0;

    var _gsapCore = require("./gsap-core.js");

    var _CSSPlugin = require("./CSSPlugin.js");

    var gsapWithCSS = _gsapCore.gsap.registerPlugin(_CSSPlugin.CSSPlugin) || _gsapCore.gsap,
      // to protect from tree shaking
      TweenMaxWithCSS = gsapWithCSS.core.Tween;

    exports.TweenMax = TweenMaxWithCSS;
    exports.default = exports.gsap = gsapWithCSS;
  }, { "./gsap-core.js": "TNS6", "./CSSPlugin.js": "bp4Z" }], "aDqt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getText = getText;
    exports.splitInnerHTML = splitInnerHTML;
    exports.emojiSafeSplit = emojiSafeSplit;
    exports.emojiExp = void 0;

    /*!
     * strings: 3.6.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
    */
    /* eslint-disable */
    var _trimExp = /(^\s+|\s+$)/g;
    var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    exports.emojiExp = emojiExp;

    function getText(e) {
      var type = e.nodeType, result = "";

      if (type === 1 || type === 9 || type === 11) {
        if (typeof e.textContent === "string") {
          return e.textContent;
        } else {
          for (e = e.firstChild; e; e = e.nextSibling) {
            result += getText(e);
          }
        }
      } else if (type === 3 || type === 4) {
        return e.nodeValue;
      }

      return result;
    }

    function splitInnerHTML(element, delimiter, trim) {
      var node = element.firstChild, result = [];

      while (node) {
        if (node.nodeType === 3) {
          result.push.apply(result, emojiSafeSplit((node.nodeValue + "").replace(/^\n+/g, "").replace(/\s+/g, " "), delimiter, trim));
        } else if ((node.nodeName + "").toLowerCase() === "br") {
          result[result.length - 1] += "<br>";
        } else {
          result.push(node.outerHTML);
        }

        node = node.nextSibling;
      }

      return result;
    }
    /*
    //smaller kb version that only handles the simpler emoji's, which is often perfectly adequate.
    
    let _emoji = "[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D]|[\uD800-\uDBFF][\uDC00-\uDFFF]",
        _emojiExp = new RegExp(_emoji),
        _emojiAndCharsExp = new RegExp(_emoji + "|.", "g"),
        _emojiSafeSplit = (text, delimiter, trim) => {
            if (trim) {
                text = text.replace(_trimExp, "");
            }
            return ((delimiter === "" || !delimiter) && _emojiExp.test(text)) ? text.match(_emojiAndCharsExp) : text.split(delimiter || "");
        };
     */
    function emojiSafeSplit(text, delimiter, trim) {
      text += ""; // make sure it's cast as a string. Someone may pass in a number.

      if (trim) {
        text = text.replace(_trimExp, "");
      }

      if (delimiter && delimiter !== "") {
        return text.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(delimiter);
      }

      var result = [], l = text.length, i = 0, j, character;

      for (; i < l; i++) {
        character = text.charAt(i);

        if (character.charCodeAt(0) >= 0xD800 && character.charCodeAt(0) <= 0xDBFF || text.charCodeAt(i + 1) >= 0xFE00 && text.charCodeAt(i + 1) <= 0xFE0F) {
          //special emoji characters use 2 or 4 unicode characters that we must keep together.
          j = ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length || 2;
          character = text.substr(i, j);
          result.emoji = 1;
          i += j - 1;
        }

        result.push(character === ">" ? "&gt;" : character === "<" ? "&lt;" : character);
      }

      return result;
    }
  }, {}], "BtuU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.SplitText = void 0;

    var _strings = require("./utils/strings.js");

    /*!
     * SplitText: 3.6.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
    */
    /* eslint-disable */
    var _doc, _win, _coreInitted, _stripExp = /(?:\r|\n|\t\t)/g,
      //find carriage returns, new line feeds and double-tabs.
      _multipleSpacesExp = /(?:\s\s+)/g, _initCore = function _initCore() {
        _doc = document;
        _win = window;
        _coreInitted = 1;
      }, _bonusValidated = 1,
      //<name>SplitText</name>
      _getComputedStyle = function _getComputedStyle(element) {
        return _win.getComputedStyle(element);
      }, _isArray = Array.isArray, _slice = [].slice, _toArray = function _toArray(value, leaveStrings) {
        //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
        var type;
        return _isArray(value) ? value : (type = typeof value) === "string" && !leaveStrings && value ? _slice.call(_doc.querySelectorAll(value), 0) : value && type === "object" && "length" in value ? _slice.call(value, 0) : value ? [value] : [];
      }, _isAbsolute = function _isAbsolute(vars) {
        return vars.position === "absolute" || vars.absolute === true;
      },
      //some characters are combining marks (think diacritics/accents in European languages) which involve 2 or 4 characters that combine in the browser to form a single character. Pass in the remaining text and an array of the special characters to search for and if the text starts with one of those special characters, it'll spit back the number of characters to retain (often 2 or 4). Used in the specialChars features that was introduced in 0.6.0.
      _findSpecialChars = function _findSpecialChars(text, chars) {
        var i = chars.length, s;

        while (--i > -1) {
          s = chars[i];

          if (text.substr(0, s.length) === s) {
            return s.length;
          }
        }
      }, _divStart = " style='position:relative;display:inline-block;'", _cssClassFunc = function _cssClassFunc(cssClass, tag) {
        if (cssClass === void 0) {
          cssClass = "";
        }

        var iterate = ~cssClass.indexOf("++"), num = 1;

        if (iterate) {
          cssClass = cssClass.split("++").join("");
        }

        return function () {
          return "<" + tag + _divStart + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
        };
      }, _swapText = function _swapText(element, oldText, newText) {
        var type = element.nodeType;

        if (type === 1 || type === 9 || type === 11) {
          for (element = element.firstChild; element; element = element.nextSibling) {
            _swapText(element, oldText, newText);
          }
        } else if (type === 3 || type === 4) {
          element.nodeValue = element.nodeValue.split(oldText).join(newText);
        }
      }, _pushReversed = function _pushReversed(a, merge) {
        var i = merge.length;

        while (--i > -1) {
          a.push(merge[i]);
        }
      }, _isBeforeWordDelimiter = function _isBeforeWordDelimiter(e, root, wordDelimiter) {
        var next;

        while (e && e !== root) {
          next = e._next || e.nextSibling;

          if (next) {
            return next.textContent.charAt(0) === wordDelimiter;
          }

          e = e.parentNode || e._parent;
        }
      }, _deWordify = function _deWordify(e) {
        var children = _toArray(e.childNodes), l = children.length, i, child;

        for (i = 0; i < l; i++) {
          child = children[i];

          if (child._isSplit) {
            _deWordify(child);
          } else {
            if (i && child.previousSibling && child.previousSibling.nodeType === 3) {
              child.previousSibling.nodeValue += child.nodeType === 3 ? child.nodeValue : child.firstChild.nodeValue;
              e.removeChild(child);
            } else if (child.nodeType !== 3) {
              e.insertBefore(child.firstChild, child);
              e.removeChild(child);
            }
          }
        }
      }, _getStyleAsNumber = function _getStyleAsNumber(name, computedStyle) {
        return parseFloat(computedStyle[name]) || 0;
      }, _setPositionsAfterSplit = function _setPositionsAfterSplit(element, vars, allChars, allWords, allLines, origWidth, origHeight) {
        var cs = _getComputedStyle(element), paddingLeft = _getStyleAsNumber("paddingLeft", cs), lineOffsetY = -999, borderTopAndBottom = _getStyleAsNumber("borderBottomWidth", cs) + _getStyleAsNumber("borderTopWidth", cs), borderLeftAndRight = _getStyleAsNumber("borderLeftWidth", cs) + _getStyleAsNumber("borderRightWidth", cs), padTopAndBottom = _getStyleAsNumber("paddingTop", cs) + _getStyleAsNumber("paddingBottom", cs), padLeftAndRight = _getStyleAsNumber("paddingLeft", cs) + _getStyleAsNumber("paddingRight", cs), lineThreshold = _getStyleAsNumber("fontSize", cs) * (vars.lineThreshold || 0.2), textAlign = cs.textAlign, charArray = [], wordArray = [], lineArray = [], wordDelimiter = vars.wordDelimiter || " ", tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", lines = allLines && ~types.indexOf("lines") ? [] : null, words = ~types.indexOf("words"), chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), linesClass = vars.linesClass, iterateLine = ~(linesClass || "").indexOf("++"), spaceNodesToRemove = [], i, j, l, node, nodes, isChild, curLine, addWordSpaces, style, lineNode, lineWidth, offset;

        if (iterateLine) {
          linesClass = linesClass.split("++").join("");
        } //copy all the descendant nodes into an array (we can't use a regular nodeList because it's live and we may need to renest things)


        j = element.getElementsByTagName("*");
        l = j.length;
        nodes = [];

        for (i = 0; i < l; i++) {
          nodes[i] = j[i];
        } //for absolute positioning, we need to record the x/y offsets and width/height for every <div>. And even if we're not positioning things absolutely, in order to accommodate lines, we must figure out where the y offset changes so that we can sense where the lines break, and we populate the lines array.


        if (lines || absolute) {
          for (i = 0; i < l; i++) {
            node = nodes[i];
            isChild = node.parentNode === element;

            if (isChild || absolute || chars && !words) {
              offset = node.offsetTop;

              if (lines && isChild && Math.abs(offset - lineOffsetY) > lineThreshold && (node.nodeName !== "BR" || i === 0)) {
                //we found some rare occasions where a certain character like &#8209; could cause the offsetTop to be off by 1 pixel, so we build in a threshold.
                curLine = [];
                lines.push(curLine);
                lineOffsetY = offset;
              }

              if (absolute) {
                //record offset x and y, as well as width and height so that we can access them later for positioning. Grabbing them at once ensures we don't trigger a browser paint & we maximize performance.
                node._x = node.offsetLeft;
                node._y = offset;
                node._w = node.offsetWidth;
                node._h = node.offsetHeight;
              }

              if (lines) {
                if (node._isSplit && isChild || !chars && isChild || words && isChild || !words && node.parentNode.parentNode === element && !node.parentNode._isSplit) {
                  curLine.push(node);
                  node._x -= paddingLeft;

                  if (_isBeforeWordDelimiter(node, element, wordDelimiter)) {
                    node._wordEnd = true;
                  }
                }

                if (node.nodeName === "BR" && (node.nextSibling && node.nextSibling.nodeName === "BR" || i === 0)) {
                  //two consecutive <br> tags signify a new [empty] line. Also, if the entire block of content STARTS with a <br>, add a line.
                  lines.push([]);
                }
              }
            }
          }
        }

        for (i = 0; i < l; i++) {
          node = nodes[i];
          isChild = node.parentNode === element;

          if (node.nodeName === "BR") {
            if (lines || absolute) {
              node.parentNode && node.parentNode.removeChild(node);
              nodes.splice(i--, 1);
              l--;
            } else if (!words) {
              element.appendChild(node);
            }

            continue;
          }

          if (absolute) {
            style = node.style;

            if (!words && !isChild) {
              node._x += node.parentNode._x;
              node._y += node.parentNode._y;
            }

            style.left = node._x + "px";
            style.top = node._y + "px";
            style.position = "absolute";
            style.display = "block"; //if we don't set the width/height, things collapse in older versions of IE and the origin for transforms is thrown off in all browsers.

            style.width = node._w + 1 + "px"; //IE is 1px short sometimes. Avoid wrapping

            style.height = node._h + "px";
          }

          if (!words && chars) {
            //we always start out wrapping words in their own <div> so that line breaks happen correctly, but here we'll remove those <div> tags if necessary and re-nest the characters directly into the element rather than inside the word <div>
            if (node._isSplit) {
              node._next = j = node.nextSibling;
              node.parentNode.appendChild(node); //put it at the end to keep the order correct.

              while (j && j.nodeType === 3 && j.textContent === " ") {
                // if there are nodes that are just a space right afterward, go ahead and append them to the end so they're not out of order.
                node._next = j.nextSibling;
                node.parentNode.appendChild(j);
                j = j.nextSibling;
              }
            } else if (node.parentNode._isSplit) {
              node._parent = node.parentNode;

              if (!node.previousSibling && node.firstChild) {
                node.firstChild._isFirst = true;
              }

              if (node.nextSibling && node.nextSibling.textContent === " " && !node.nextSibling.nextSibling) {
                //if the last node inside a nested element is just a space (like T<span>nested </span>), remove it otherwise it'll get placed in the wrong order. Don't remove it right away, though, because we need to sense when words/characters are before a space like _isBeforeWordDelimiter(). Removing it now would make that a false negative.
                spaceNodesToRemove.push(node.nextSibling);
              }

              node._next = node.nextSibling && node.nextSibling._isFirst ? null : node.nextSibling;
              node.parentNode.removeChild(node);
              nodes.splice(i--, 1);
              l--;
            } else if (!isChild) {
              offset = !node.nextSibling && _isBeforeWordDelimiter(node.parentNode, element, wordDelimiter); //if this is the last letter in the word (and we're not breaking by lines and not positioning things absolutely), we need to add a space afterwards so that the characters don't just mash together

              node.parentNode._parent && node.parentNode._parent.appendChild(node);
              offset && node.parentNode.appendChild(_doc.createTextNode(" "));

              if (tag === "span") {
                node.style.display = "inline"; //so that word breaks are honored properly.
              }

              charArray.push(node);
            }
          } else if (node.parentNode._isSplit && !node._isSplit && node.innerHTML !== "") {
            wordArray.push(node);
          } else if (chars && !node._isSplit) {
            if (tag === "span") {
              node.style.display = "inline";
            }

            charArray.push(node);
          }
        }

        i = spaceNodesToRemove.length;

        while (--i > -1) {
          spaceNodesToRemove[i].parentNode.removeChild(spaceNodesToRemove[i]);
        }

        if (lines) {
          //the next 7 lines just give us the line width in the most reliable way and figure out the left offset (if position isn't relative or absolute). We must set the width along with text-align to ensure everything works properly for various alignments.
          if (absolute) {
            lineNode = _doc.createElement(tag);
            element.appendChild(lineNode);
            lineWidth = lineNode.offsetWidth + "px";
            offset = lineNode.offsetParent === element ? 0 : element.offsetLeft;
            element.removeChild(lineNode);
          }

          style = element.style.cssText;
          element.style.cssText = "display:none;"; //to improve performance, set display:none on the element so that the browser doesn't have to worry about reflowing or rendering while we're renesting things. We'll revert the cssText later.


          //we can't use element.innerHTML = "" because that causes IE to literally delete all the nodes and their content even though we've stored them in an array! So we must loop through the children and remove them.
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }

          addWordSpaces = wordDelimiter === " " && (!absolute || !words && !chars);

          for (i = 0; i < lines.length; i++) {
            curLine = lines[i];
            lineNode = _doc.createElement(tag);
            lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");

            if (linesClass) {
              lineNode.className = linesClass + (iterateLine ? i + 1 : "");
            }

            lineArray.push(lineNode);
            l = curLine.length;

            for (j = 0; j < l; j++) {
              if (curLine[j].nodeName !== "BR") {
                node = curLine[j];
                lineNode.appendChild(node);
                addWordSpaces && node._wordEnd && lineNode.appendChild(_doc.createTextNode(" "));

                if (absolute) {
                  if (j === 0) {
                    lineNode.style.top = node._y + "px";
                    lineNode.style.left = paddingLeft + offset + "px";
                  }

                  node.style.top = "0px";

                  if (offset) {
                    node.style.left = node._x - offset + "px";
                  }
                }
              }
            }

            if (l === 0) {
              //if there are no nodes in the line (typically meaning there were two consecutive <br> tags, just add a non-breaking space so that things display properly.
              lineNode.innerHTML = "&nbsp;";
            } else if (!words && !chars) {
              _deWordify(lineNode);

              _swapText(lineNode, String.fromCharCode(160), " ");
            }

            if (absolute) {
              lineNode.style.width = lineWidth;
              lineNode.style.height = node._h + "px";
            }

            element.appendChild(lineNode);
          }

          element.style.cssText = style;
        } //if everything shifts to being position:absolute, the container can collapse in terms of height or width, so fix that here.


        if (absolute) {
          if (origHeight > element.clientHeight) {
            element.style.height = origHeight - padTopAndBottom + "px";

            if (element.clientHeight < origHeight) {
              //IE8 and earlier use a different box model - we must include padding and borders
              element.style.height = origHeight + borderTopAndBottom + "px";
            }
          }

          if (origWidth > element.clientWidth) {
            element.style.width = origWidth - padLeftAndRight + "px";

            if (element.clientWidth < origWidth) {
              //IE8 and earlier use a different box model - we must include padding and borders
              element.style.width = origWidth + borderLeftAndRight + "px";
            }
          }
        }

        _pushReversed(allChars, charArray);

        words && _pushReversed(allWords, wordArray);

        _pushReversed(allLines, lineArray);
      }, _splitRawText = function _splitRawText(element, vars, wordStart, charStart) {
        var tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines",
          //words = (types.indexOf("words") !== -1),
          chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), wordDelimiter = vars.wordDelimiter || " ", space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ", wordEnd = "</" + tag + ">", wordIsOpen = 1, specialChars = vars.specialChars ? typeof vars.specialChars === "function" ? vars.specialChars : _findSpecialChars : null,
          //specialChars can be an array or a function. For performance reasons, we always set this local "specialChars" to a function to which we pass the remaining text and whatever the original vars.specialChars was so that if it's an array, it works with the _findSpecialChars() function.
          text, splitText, i, j, l, character, hasTagStart, testResult, container = _doc.createElement("div"), parent = element.parentNode;

        parent.insertBefore(container, element);
        container.textContent = element.nodeValue;
        parent.removeChild(element);
        element = container;
        text = (0, _strings.getText)(element);
        hasTagStart = text.indexOf("<") !== -1;

        if (vars.reduceWhiteSpace !== false) {
          text = text.replace(_multipleSpacesExp, " ").replace(_stripExp, "");
        }

        if (hasTagStart) {
          text = text.split("<").join("{{LT}}"); //we can't leave "<" in the string, or when we set the innerHTML, it can be interpreted as a node
        }

        l = text.length;
        splitText = (text.charAt(0) === " " ? space : "") + wordStart();

        for (i = 0; i < l; i++) {
          character = text.charAt(i);

          if (specialChars && (testResult = specialChars(text.substr(i), vars.specialChars))) {
            // look for any specialChars that were declared. Remember, they can be passed in like {specialChars:["मी", "पा", "है"]} or a function could be defined instead. Either way, the function should return the number of characters that should be grouped together for this "character".
            character = text.substr(i, testResult || 1);
            splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
            i += testResult - 1;
          } else if (character === wordDelimiter && text.charAt(i - 1) !== wordDelimiter && i) {
            splitText += wordIsOpen ? wordEnd : "";
            wordIsOpen = 0;

            while (text.charAt(i + 1) === wordDelimiter) {
              //skip over empty spaces (to avoid making them words)
              splitText += space;
              i++;
            }

            if (i === l - 1) {
              splitText += space;
            } else if (text.charAt(i + 1) !== ")") {
              splitText += space + wordStart();
              wordIsOpen = 1;
            }
          } else if (character === "{" && text.substr(i, 6) === "{{LT}}") {
            splitText += chars ? charStart() + "{{LT}}" + "</" + tag + ">" : "{{LT}}";
            i += 5;
          } else if (character.charCodeAt(0) >= 0xD800 && character.charCodeAt(0) <= 0xDBFF || text.charCodeAt(i + 1) >= 0xFE00 && text.charCodeAt(i + 1) <= 0xFE0F) {
            //special emoji characters use 2 or 4 unicode characters that we must keep together.
            j = ((text.substr(i, 12).split(_strings.emojiExp) || [])[1] || "").length || 2;
            splitText += chars && character !== " " ? charStart() + text.substr(i, j) + "</" + tag + ">" : text.substr(i, j);
            i += j - 1;
          } else {
            splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
          }
        }

        element.outerHTML = splitText + (wordIsOpen ? wordEnd : "");
        hasTagStart && _swapText(parent, "{{LT}}", "<"); //note: don't perform this on "element" because that gets replaced with all new elements when we set element.outerHTML.
      }, _split = function _split(element, vars, wordStart, charStart) {
        var children = _toArray(element.childNodes), l = children.length, absolute = _isAbsolute(vars), i, child;

        if (element.nodeType !== 3 || l > 1) {
          vars.absolute = false;

          for (i = 0; i < l; i++) {
            child = children[i];
            child._next = child._isFirst = child._parent = child._wordEnd = null;

            if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
              if (absolute && child.nodeType !== 3 && _getComputedStyle(child).display === "inline") {
                //if there's a child node that's display:inline, switch it to inline-block so that absolute positioning works properly (most browsers don't report offsetTop/offsetLeft properly inside a <span> for example)
                child.style.display = "inline-block";
                child.style.position = "relative";
              }

              child._isSplit = true;

              _split(child, vars, wordStart, charStart); //don't split lines on child elements

            }
          }

          vars.absolute = absolute;
          element._isSplit = true;
          return;
        }

        _splitRawText(element, vars, wordStart, charStart);
      };

    var SplitText = /*#__PURE__*/ function () {
      function SplitText(element, vars) {
        _coreInitted || _initCore();
        this.elements = _toArray(element);
        this.chars = [];
        this.words = [];
        this.lines = [];
        this._originals = [];
        this.vars = vars || {};
        _bonusValidated && this.split(vars);
      }

      var _proto = SplitText.prototype;

      _proto.split = function split(vars) {
        this.isSplit && this.revert();
        this.vars = vars = vars || this.vars;
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;

        var i = this.elements.length, tag = vars.tag ? vars.tag : vars.span ? "span" : "div", wordStart = _cssClassFunc(vars.wordsClass, tag), charStart = _cssClassFunc(vars.charsClass, tag), origHeight, origWidth, e; //we split in reversed order so that if/when we position:absolute elements, they don't affect the position of the ones after them in the document flow (shifting them up as they're taken out of the document flow).


        while (--i > -1) {
          e = this.elements[i];
          this._originals[i] = e.innerHTML;
          origHeight = e.clientHeight;
          origWidth = e.clientWidth;

          _split(e, vars, wordStart, charStart);

          _setPositionsAfterSplit(e, vars, this.chars, this.words, this.lines, origWidth, origHeight);
        }

        this.chars.reverse();
        this.words.reverse();
        this.lines.reverse();
        this.isSplit = true;
        return this;
      };

      _proto.revert = function revert() {
        var originals = this._originals;

        if (!originals) {
          throw "revert() call wasn't scoped properly.";
        }

        this.elements.forEach(function (e, i) {
          return e.innerHTML = originals[i];
        });
        this.chars = [];
        this.words = [];
        this.lines = [];
        this.isSplit = false;
        return this;
      };

      SplitText.create = function create(element, vars) {
        return new SplitText(element, vars);
      };

      return SplitText;
    }();

    exports.default = exports.SplitText = SplitText;
    SplitText.version = "3.6.0";
  }, { "./utils/strings.js": "aDqt" }], "ED4Q": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getRawPath = getRawPath;
    exports.copyRawPath = copyRawPath;
    exports.reverseSegment = reverseSegment;
    exports.convertToPath = convertToPath;
    exports.getRotationAtProgress = getRotationAtProgress;
    exports.sliceRawPath = sliceRawPath;
    exports.cacheRawPathMeasurements = cacheRawPathMeasurements;
    exports.subdivideSegment = subdivideSegment;
    exports.getPositionOnPath = getPositionOnPath;
    exports.transformRawPath = transformRawPath;
    exports.stringToRawPath = stringToRawPath;
    exports.bezierToPoints = bezierToPoints;
    exports.flatPointsToSegment = flatPointsToSegment;
    exports.pointsToSegment = pointsToSegment;
    exports.simplifyPoints = simplifyPoints;
    exports.getClosestData = getClosestData;
    exports.subdivideSegmentNear = subdivideSegmentNear;
    exports.rawPathToString = rawPathToString;

    /*!
     * paths 3.6.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
    */
    /* eslint-disable */
    var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i, _DEG2RAD = Math.PI / 180, _RAD2DEG = 180 / Math.PI, _sin = Math.sin, _cos = Math.cos, _abs = Math.abs, _sqrt = Math.sqrt, _atan2 = Math.atan2, _largeNum = 1e8, _isString = function _isString(value) {
      return typeof value === "string";
    }, _isNumber = function _isNumber(value) {
      return typeof value === "number";
    }, _isUndefined = function _isUndefined(value) {
      return typeof value === "undefined";
    }, _temp = {}, _temp2 = {}, _roundingNum = 1e5, _wrapProgress = function _wrapProgress(progress) {
      return Math.round((progress + _largeNum) % 1 * _roundingNum) / _roundingNum || (progress < 0 ? 0 : 1);
    },
      //if progress lands on 1, the % will make it 0 which is why we || 1, but not if it's negative because it makes more sense for motion to end at 0 in that case.
      _round = function _round(value) {
        return Math.round(value * _roundingNum) / _roundingNum || 0;
      }, _roundPrecise = function _roundPrecise(value) {
        return Math.round(value * 1e10) / 1e10 || 0;
      }, _splitSegment = function _splitSegment(rawPath, segIndex, i, t) {
        var segment = rawPath[segIndex], shift = t === 1 ? 6 : subdivideSegment(segment, i, t);

        if (shift && shift + i + 2 < segment.length) {
          rawPath.splice(segIndex, 0, segment.slice(0, i + shift + 2));
          segment.splice(0, i + shift);
          return 1;
        }
      }, _reverseRawPath = function _reverseRawPath(rawPath, skipOuter) {
        var i = rawPath.length;
        skipOuter || rawPath.reverse();

        while (i--) {
          rawPath[i].reversed || reverseSegment(rawPath[i]);
        }
      }, _copyMetaData = function _copyMetaData(source, copy) {
        copy.totalLength = source.totalLength;

        if (source.samples) {
          //segment
          copy.samples = source.samples.slice(0);
          copy.lookup = source.lookup.slice(0);
          copy.minLength = source.minLength;
          copy.resolution = source.resolution;
        } else if (source.totalPoints) {
          //rawPath
          copy.totalPoints = source.totalPoints;
        }

        return copy;
      },
      //pushes a new segment into a rawPath, but if its starting values match the ending values of the last segment, it'll merge it into that same segment (to reduce the number of segments)
      _appendOrMerge = function _appendOrMerge(rawPath, segment) {
        var index = rawPath.length, prevSeg = rawPath[index - 1] || [], l = prevSeg.length;

        if (index && segment[0] === prevSeg[l - 2] && segment[1] === prevSeg[l - 1]) {
          segment = prevSeg.concat(segment.slice(2));
          index--;
        }

        rawPath[index] = segment;
      }, _bestDistance;
    /* TERMINOLOGY
     - RawPath - an array of arrays, one for each Segment. A single RawPath could have multiple "M" commands, defining Segments (paths aren't always connected).
     - Segment - an array containing a sequence of Cubic Bezier coordinates in alternating x, y, x, y format. Starting anchor, then control point 1, control point 2, and ending anchor, then the next control point 1, control point 2, anchor, etc. Uses less memory than an array with a bunch of {x, y} points.
     - Bezier - a single cubic Bezier with a starting anchor, two control points, and an ending anchor.
     - the variable "t" is typically the position along an individual Bezier path (time) and it's NOT linear, meaning it could accelerate/decelerate based on the control points whereas the "p" or "progress" value is linearly mapped to the whole path, so it shouldn't really accelerate/decelerate based on control points. So a progress of 0.2 would be almost exactly 20% along the path. "t" is ONLY in an individual Bezier piece.
     */
    //accepts basic selector text, a path instance, a RawPath instance, or a Segment and returns a RawPath (makes it easy to homogenize things). If an element or selector text is passed in, it'll also cache the value so that if it's queried again, it'll just take the path data from there instead of parsing it all over again (as long as the path data itself hasn't changed - it'll check).
    function getRawPath(value) {
      value = _isString(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
      var e = value.getAttribute ? value : 0, rawPath;

      if (e && (value = value.getAttribute("d"))) {
        //implements caching
        if (!e._gsPath) {
          e._gsPath = {};
        }

        rawPath = e._gsPath[value];
        return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
      }

      return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString(value) ? stringToRawPath(value) : _isNumber(value[0]) ? [value] : value;
    } //copies a RawPath WITHOUT the length meta data (for speed)


    function copyRawPath(rawPath) {
      var a = [], i = 0;

      for (; i < rawPath.length; i++) {
        a[i] = _copyMetaData(rawPath[i], rawPath[i].slice(0));
      }

      return _copyMetaData(rawPath, a);
    }

    function reverseSegment(segment) {
      var i = 0, y;
      segment.reverse(); //this will invert the order y, x, y, x so we must flip it back.

      for (; i < segment.length; i += 2) {
        y = segment[i];
        segment[i] = segment[i + 1];
        segment[i + 1] = y;
      }

      segment.reversed = !segment.reversed;
    }

    var _createPath = function _createPath(e, ignore) {
      var path = document.createElementNS("http://www.w3.org/2000/svg", "path"), attr = [].slice.call(e.attributes), i = attr.length, name;
      ignore = "," + ignore + ",";

      while (--i > -1) {
        name = attr[i].nodeName.toLowerCase(); //in Microsoft Edge, if you don't set the attribute with a lowercase name, it doesn't render correctly! Super weird.

        if (ignore.indexOf("," + name + ",") < 0) {
          path.setAttributeNS(null, name, attr[i].nodeValue);
        }
      }

      return path;
    }, _typeAttrs = {
      rect: "rx,ry,x,y,width,height",
      circle: "r,cx,cy",
      ellipse: "rx,ry,cx,cy",
      line: "x1,x2,y1,y2"
    }, _attrToObj = function _attrToObj(e, attrs) {
      var props = attrs ? attrs.split(",") : [], obj = {}, i = props.length;

      while (--i > -1) {
        obj[props[i]] = +e.getAttribute(props[i]) || 0;
      }

      return obj;
    }; //converts an SVG shape like <circle>, <rect>, <polygon>, <polyline>, <ellipse>, etc. to a <path>, swapping it in and copying the attributes to match.


    function convertToPath(element, swap) {
      var type = element.tagName.toLowerCase(), circ = 0.552284749831, data, x, y, r, ry, path, rcirc, rycirc, points, w, h, x2, x3, x4, x5, x6, y2, y3, y4, y5, y6, attr;

      if (type === "path" || !element.getBBox) {
        return element;
      }

      path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
      attr = _attrToObj(element, _typeAttrs[type]);

      if (type === "rect") {
        r = attr.rx;
        ry = attr.ry || r;
        x = attr.x;
        y = attr.y;
        w = attr.width - r * 2;
        h = attr.height - ry * 2;

        if (r || ry) {
          //if there are rounded corners, render cubic beziers
          x2 = x + r * (1 - circ);
          x3 = x + r;
          x4 = x3 + w;
          x5 = x4 + r * circ;
          x6 = x4 + r;
          y2 = y + ry * (1 - circ);
          y3 = y + ry;
          y4 = y3 + h;
          y5 = y4 + ry * circ;
          y6 = y4 + ry;
          data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
        } else {
          data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
        }
      } else if (type === "circle" || type === "ellipse") {
        if (type === "circle") {
          r = ry = attr.r;
          rycirc = r * circ;
        } else {
          r = attr.rx;
          ry = attr.ry;
          rycirc = ry * circ;
        }

        x = attr.cx;
        y = attr.cy;
        rcirc = r * circ;
        data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
      } else if (type === "line") {
        data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2; //previously, we just converted to "Mx,y Lx,y" but Safari has bugs that cause that not to render properly when using a stroke-dasharray that's not fully visible! Using a cubic bezier fixes that issue.
      } else if (type === "polyline" || type === "polygon") {
        points = (element.getAttribute("points") + "").match(_numbersExp) || [];
        x = points.shift();
        y = points.shift();
        data = "M" + x + "," + y + " L" + points.join(",");

        if (type === "polygon") {
          data += "," + x + "," + y + "z";
        }
      }

      path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));

      if (swap && element.parentNode) {
        element.parentNode.insertBefore(path, element);
        element.parentNode.removeChild(element);
      }

      return path;
    } //returns the rotation (in degrees) at a particular progress on a rawPath (the slope of the tangent)


    function getRotationAtProgress(rawPath, progress) {
      var d = getProgressData(rawPath, progress >= 1 ? 1 - 1e-9 : progress ? progress : 1e-9);
      return getRotationAtBezierT(d.segment, d.i, d.t);
    }

    function getRotationAtBezierT(segment, i, t) {
      var a = segment[i], b = segment[i + 2], c = segment[i + 4], x;
      a += (b - a) * t;
      b += (c - b) * t;
      a += (b - a) * t;
      x = b + (c + (segment[i + 6] - c) * t - b) * t - a;
      a = segment[i + 1];
      b = segment[i + 3];
      c = segment[i + 5];
      a += (b - a) * t;
      b += (c - b) * t;
      a += (b - a) * t;
      return _round(_atan2(b + (c + (segment[i + 7] - c) * t - b) * t - a, x) * _RAD2DEG);
    }

    function sliceRawPath(rawPath, start, end) {
      end = _isUndefined(end) ? 1 : _roundPrecise(end) || 0; // we must round to avoid issues like 4.15 / 8 = 0.8300000000000001 instead of 0.83 or 2.8 / 5 = 0.5599999999999999 instead of 0.56 and if someone is doing a loop like start: 2.8 / 0.5, end: 2.8 / 0.5 + 1.

      start = _roundPrecise(start) || 0;
      var loops = Math.max(0, ~~(_abs(end - start) - 1e-8)), path = copyRawPath(rawPath);

      if (start > end) {
        start = 1 - start;
        end = 1 - end;

        _reverseRawPath(path);

        path.totalLength = 0;
      }

      if (start < 0 || end < 0) {
        var offset = Math.abs(~~Math.min(start, end)) + 1;
        start += offset;
        end += offset;
      }

      path.totalLength || cacheRawPathMeasurements(path);
      var wrap = end > 1, s = getProgressData(path, start, _temp, true), e = getProgressData(path, end, _temp2), eSeg = e.segment, sSeg = s.segment, eSegIndex = e.segIndex, sSegIndex = s.segIndex, ei = e.i, si = s.i, sameSegment = sSegIndex === eSegIndex, sameBezier = ei === si && sameSegment, wrapsBehind, sShift, eShift, i, copy, totalSegments, l, j;

      if (wrap || loops) {
        wrapsBehind = eSegIndex < sSegIndex || sameSegment && ei < si || sameBezier && e.t < s.t;

        if (_splitSegment(path, sSegIndex, si, s.t)) {
          sSegIndex++;

          if (!wrapsBehind) {
            eSegIndex++;

            if (sameBezier) {
              e.t = (e.t - s.t) / (1 - s.t);
              ei = 0;
            } else if (sameSegment) {
              ei -= si;
            }
          }
        }

        if (1 - (end - start) < 1e-5) {
          eSegIndex = sSegIndex - 1;
        } else if (!e.t && eSegIndex) {
          eSegIndex--;
        } else if (_splitSegment(path, eSegIndex, ei, e.t) && wrapsBehind) {
          sSegIndex++;
        }

        if (s.t === 1) {
          sSegIndex = (sSegIndex + 1) % path.length;
        }

        copy = [];
        totalSegments = path.length;
        l = 1 + totalSegments * loops;
        j = sSegIndex;
        l += (totalSegments - sSegIndex + eSegIndex) % totalSegments;

        for (i = 0; i < l; i++) {
          _appendOrMerge(copy, path[j++ % totalSegments]);
        }

        path = copy;
      } else {
        eShift = e.t === 1 ? 6 : subdivideSegment(eSeg, ei, e.t);

        if (start !== end) {
          sShift = subdivideSegment(sSeg, si, sameBezier ? s.t / e.t : s.t);
          sameSegment && (eShift += sShift);
          eSeg.splice(ei + eShift + 2);
          (sShift || si) && sSeg.splice(0, si + sShift);
          i = path.length;

          while (i--) {
            //chop off any extra segments
            (i < sSegIndex || i > eSegIndex) && path.splice(i, 1);
          }
        } else {
          eSeg.angle = getRotationAtBezierT(eSeg, ei + eShift, 0); //record the value before we chop because it'll be impossible to determine the angle after its length is 0!

          ei += eShift;
          s = eSeg[ei];
          e = eSeg[ei + 1];
          eSeg.length = eSeg.totalLength = 0;
          eSeg.totalPoints = path.totalPoints = 8;
          eSeg.push(s, e, s, e, s, e, s, e);
        }
      }

      path.totalLength = 0;
      return path;
    } //measures a Segment according to its resolution (so if segment.resolution is 6, for example, it'll take 6 samples equally across each Bezier) and create/populate a "samples" Array that has the length up to each of those sample points (always increasing from the start) as well as a "lookup" array that's broken up according to the smallest distance between 2 samples. This gives us a very fast way of looking up a progress position rather than looping through all the points/Beziers. You can optionally have it only measure a subset, starting at startIndex and going for a specific number of beziers (remember, there are 3 x/y pairs each, for a total of 6 elements for each Bezier). It will also populate a "totalLength" property, but that's not generally super accurate because by default it'll only take 6 samples per Bezier. But for performance reasons, it's perfectly adequate for measuring progress values along the path. If you need a more accurate totalLength, either increase the resolution or use the more advanced bezierToPoints() method which keeps adding points until they don't deviate by more than a certain precision value.


    function measureSegment(segment, startIndex, bezierQty) {
      startIndex = startIndex || 0;

      if (!segment.samples) {
        segment.samples = [];
        segment.lookup = [];
      }

      var resolution = ~~segment.resolution || 12, inc = 1 / resolution, endIndex = bezierQty ? startIndex + bezierQty * 6 + 1 : segment.length, x1 = segment[startIndex], y1 = segment[startIndex + 1], samplesIndex = startIndex ? startIndex / 6 * resolution : 0, samples = segment.samples, lookup = segment.lookup, min = (startIndex ? segment.minLength : _largeNum) || _largeNum, prevLength = samples[samplesIndex + bezierQty * resolution - 1], length = startIndex ? samples[samplesIndex - 1] : 0, i, j, x4, x3, x2, xd, xd1, y4, y3, y2, yd, yd1, inv, t, lengthIndex, l, segLength;
      samples.length = lookup.length = 0;

      for (j = startIndex + 2; j < endIndex; j += 6) {
        x4 = segment[j + 4] - x1;
        x3 = segment[j + 2] - x1;
        x2 = segment[j] - x1;
        y4 = segment[j + 5] - y1;
        y3 = segment[j + 3] - y1;
        y2 = segment[j + 1] - y1;
        xd = xd1 = yd = yd1 = 0;

        if (_abs(x4) < 1e-5 && _abs(y4) < 1e-5 && _abs(x2) + _abs(y2) < 1e-5) {
          //dump points that are sufficiently close (basically right on top of each other, making a bezier super tiny or 0 length)
          if (segment.length > 8) {
            segment.splice(j, 6);
            j -= 6;
            endIndex -= 6;
          }
        } else {
          for (i = 1; i <= resolution; i++) {
            t = inc * i;
            inv = 1 - t;
            xd = xd1 - (xd1 = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t);
            yd = yd1 - (yd1 = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t);
            l = _sqrt(yd * yd + xd * xd);

            if (l < min) {
              min = l;
            }

            length += l;
            samples[samplesIndex++] = length;
          }
        }

        x1 += x4;
        y1 += y4;
      }

      if (prevLength) {
        prevLength -= length;

        for (; samplesIndex < samples.length; samplesIndex++) {
          samples[samplesIndex] += prevLength;
        }
      }

      if (samples.length && min) {
        segment.totalLength = segLength = samples[samples.length - 1] || 0;
        segment.minLength = min;
        l = lengthIndex = 0;

        for (i = 0; i < segLength; i += min) {
          lookup[l++] = samples[lengthIndex] < i ? ++lengthIndex : lengthIndex;
        }
      } else {
        segment.totalLength = samples[0] = 0;
      }

      return startIndex ? length - samples[startIndex / 2 - 1] : length;
    }

    function cacheRawPathMeasurements(rawPath, resolution) {
      var pathLength, points, i;

      for (i = pathLength = points = 0; i < rawPath.length; i++) {
        rawPath[i].resolution = ~~resolution || 12; //steps per Bezier curve (anchor, 2 control points, to anchor)

        points += rawPath[i].length;
        pathLength += measureSegment(rawPath[i]);
      }

      rawPath.totalPoints = points;
      rawPath.totalLength = pathLength;
      return rawPath;
    } //divide segment[i] at position t (value between 0 and 1, progress along that particular cubic bezier segment that starts at segment[i]). Returns how many elements were spliced into the segment array (either 0 or 6)


    function subdivideSegment(segment, i, t) {
      if (t <= 0 || t >= 1) {
        return 0;
      }

      var ax = segment[i], ay = segment[i + 1], cp1x = segment[i + 2], cp1y = segment[i + 3], cp2x = segment[i + 4], cp2y = segment[i + 5], bx = segment[i + 6], by = segment[i + 7], x1a = ax + (cp1x - ax) * t, x2 = cp1x + (cp2x - cp1x) * t, y1a = ay + (cp1y - ay) * t, y2 = cp1y + (cp2y - cp1y) * t, x1 = x1a + (x2 - x1a) * t, y1 = y1a + (y2 - y1a) * t, x2a = cp2x + (bx - cp2x) * t, y2a = cp2y + (by - cp2y) * t;
      x2 += (x2a - x2) * t;
      y2 += (y2a - y2) * t;
      segment.splice(i + 2, 4, _round(x1a), //first control point
        _round(y1a), _round(x1), //second control point
        _round(y1), _round(x1 + (x2 - x1) * t), //new fabricated anchor on line
        _round(y1 + (y2 - y1) * t), _round(x2), //third control point
        _round(y2), _round(x2a), //fourth control point
        _round(y2a));
      segment.samples && segment.samples.splice(i / 6 * segment.resolution | 0, 0, 0, 0, 0, 0, 0, 0);
      return 6;
    } // returns an object {path, segment, segIndex, i, t}


    function getProgressData(rawPath, progress, decoratee, pushToNextIfAtEnd) {
      decoratee = decoratee || {};
      rawPath.totalLength || cacheRawPathMeasurements(rawPath);

      if (progress < 0 || progress > 1) {
        progress = _wrapProgress(progress);
      }

      var segIndex = 0, segment = rawPath[0], samples, resolution, length, min, max, i, t;

      if (!progress) {
        t = i = segIndex = 0;
        segment = rawPath[0];
      } else if (progress === 1) {
        t = 1;
        segIndex = rawPath.length - 1;
        segment = rawPath[segIndex];
        i = segment.length - 8;
      } else {
        if (rawPath.length > 1) {
          //speed optimization: most of the time, there's only one segment so skip the recursion.
          length = rawPath.totalLength * progress;
          max = i = 0;

          while ((max += rawPath[i++].totalLength) < length) {
            segIndex = i;
          }

          segment = rawPath[segIndex];
          min = max - segment.totalLength;
          progress = (length - min) / (max - min) || 0;
        }

        samples = segment.samples;
        resolution = segment.resolution; //how many samples per cubic bezier chunk

        length = segment.totalLength * progress;
        i = segment.lookup[~~(length / segment.minLength)] || 0;
        min = i ? samples[i - 1] : 0;
        max = samples[i];

        if (max < length) {
          min = max;
          max = samples[++i];
        }

        t = 1 / resolution * ((length - min) / (max - min) + i % resolution);
        i = ~~(i / resolution) * 6;

        if (pushToNextIfAtEnd && t === 1) {
          if (i + 6 < segment.length) {
            i += 6;
            t = 0;
          } else if (segIndex + 1 < rawPath.length) {
            i = t = 0;
            segment = rawPath[++segIndex];
          }
        }
      }

      decoratee.t = t;
      decoratee.i = i;
      decoratee.path = rawPath;
      decoratee.segment = segment;
      decoratee.segIndex = segIndex;
      return decoratee;
    }

    function getPositionOnPath(rawPath, progress, includeAngle, point) {
      var segment = rawPath[0], result = point || {}, samples, resolution, length, min, max, i, t, a, inv;

      if (progress < 0 || progress > 1) {
        progress = _wrapProgress(progress);
      }

      if (rawPath.length > 1) {
        //speed optimization: most of the time, there's only one segment so skip the recursion.
        length = rawPath.totalLength * progress;
        max = i = 0;

        while ((max += rawPath[i++].totalLength) < length) {
          segment = rawPath[i];
        }

        min = max - segment.totalLength;
        progress = (length - min) / (max - min) || 0;
      }

      samples = segment.samples;
      resolution = segment.resolution;
      length = segment.totalLength * progress;
      i = segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0;
      min = i ? samples[i - 1] : 0;
      max = samples[i];

      if (max < length) {
        min = max;
        max = samples[++i];
      }

      t = 1 / resolution * ((length - min) / (max - min) + i % resolution) || 0;
      inv = 1 - t;
      i = ~~(i / resolution) * 6;
      a = segment[i];
      result.x = _round((t * t * (segment[i + 6] - a) + 3 * inv * (t * (segment[i + 4] - a) + inv * (segment[i + 2] - a))) * t + a);
      result.y = _round((t * t * (segment[i + 7] - (a = segment[i + 1])) + 3 * inv * (t * (segment[i + 5] - a) + inv * (segment[i + 3] - a))) * t + a);

      if (includeAngle) {
        result.angle = segment.totalLength ? getRotationAtBezierT(segment, i, t >= 1 ? 1 - 1e-9 : t ? t : 1e-9) : segment.angle || 0;
      }

      return result;
    } //applies a matrix transform to RawPath (or a segment in a RawPath) and returns whatever was passed in (it transforms the values in the array(s), not a copy).


    function transformRawPath(rawPath, a, b, c, d, tx, ty) {
      var j = rawPath.length, segment, l, i, x, y;

      while (--j > -1) {
        segment = rawPath[j];
        l = segment.length;

        for (i = 0; i < l; i += 2) {
          x = segment[i];
          y = segment[i + 1];
          segment[i] = x * a + y * c + tx;
          segment[i + 1] = x * b + y * d + ty;
        }
      }

      rawPath._dirty = 1;
      return rawPath;
    } // translates SVG arc data into a segment (cubic beziers). Angle is in degrees.


    function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
      if (lastX === x && lastY === y) {
        return;
      }

      rx = _abs(rx);
      ry = _abs(ry);

      var angleRad = angle % 360 * _DEG2RAD, cosAngle = _cos(angleRad), sinAngle = _sin(angleRad), PI = Math.PI, TWOPI = PI * 2, dx2 = (lastX - x) / 2, dy2 = (lastY - y) / 2, x1 = cosAngle * dx2 + sinAngle * dy2, y1 = -sinAngle * dx2 + cosAngle * dy2, x1_sq = x1 * x1, y1_sq = y1 * y1, radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);

      if (radiiCheck > 1) {
        rx = _sqrt(radiiCheck) * rx;
        ry = _sqrt(radiiCheck) * ry;
      }

      var rx_sq = rx * rx, ry_sq = ry * ry, sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);

      if (sq < 0) {
        sq = 0;
      }

      var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt(sq), cx1 = coef * (rx * y1 / ry), cy1 = coef * -(ry * x1 / rx), sx2 = (lastX + x) / 2, sy2 = (lastY + y) / 2, cx = sx2 + (cosAngle * cx1 - sinAngle * cy1), cy = sy2 + (sinAngle * cx1 + cosAngle * cy1), ux = (x1 - cx1) / rx, uy = (y1 - cy1) / ry, vx = (-x1 - cx1) / rx, vy = (-y1 - cy1) / ry, temp = ux * ux + uy * uy, angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt(temp)), angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt(temp * (vx * vx + vy * vy)));

      isNaN(angleExtent) && (angleExtent = PI); //rare edge case. Math.cos(-1) is NaN.

      if (!sweepFlag && angleExtent > 0) {
        angleExtent -= TWOPI;
      } else if (sweepFlag && angleExtent < 0) {
        angleExtent += TWOPI;
      }

      angleStart %= TWOPI;
      angleExtent %= TWOPI;

      var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)), rawPath = [], angleIncrement = angleExtent / segments, controlLength = 4 / 3 * _sin(angleIncrement / 2) / (1 + _cos(angleIncrement / 2)), ma = cosAngle * rx, mb = sinAngle * rx, mc = sinAngle * -ry, md = cosAngle * ry, i;

      for (i = 0; i < segments; i++) {
        angle = angleStart + i * angleIncrement;
        x1 = _cos(angle);
        y1 = _sin(angle);
        ux = _cos(angle += angleIncrement);
        uy = _sin(angle);
        rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
      } //now transform according to the actual size of the ellipse/arc (the beziers were noramlized, between 0 and 1 on a circle).


      for (i = 0; i < rawPath.length; i += 2) {
        x1 = rawPath[i];
        y1 = rawPath[i + 1];
        rawPath[i] = x1 * ma + y1 * mc + cx;
        rawPath[i + 1] = x1 * mb + y1 * md + cy;
      }

      rawPath[i - 2] = x; //always set the end to exactly where it's supposed to be

      rawPath[i - 1] = y;
      return rawPath;
    } //Spits back a RawPath with absolute coordinates. Each segment starts with a "moveTo" command (x coordinate, then y) and then 2 control points (x, y, x, y), then anchor. The goal is to minimize memory and maximize speed.


    function stringToRawPath(d) {
      var a = (d + "").replace(_scientific, function (m) {
        var n = +m;
        return n < 0.0001 && n > -0.0001 ? 0 : n;
      }).match(_svgPathExp) || [],
        //some authoring programs spit out very small numbers in scientific notation like "1e-5", so make sure we round that down to 0 first.
        path = [], relativeX = 0, relativeY = 0, twoThirds = 2 / 3, elements = a.length, points = 0, errorMessage = "ERROR: malformed path: " + d, i, j, x, y, command, isRelative, segment, startX, startY, difX, difY, beziers, prevCommand, flag1, flag2, line = function line(sx, sy, ex, ey) {
          difX = (ex - sx) / 3;
          difY = (ey - sy) / 3;
          segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
        };

      if (!d || !isNaN(a[0]) || isNaN(a[1])) {
        console.log(errorMessage);
        return path;
      }

      for (i = 0; i < elements; i++) {
        prevCommand = command;

        if (isNaN(a[i])) {
          command = a[i].toUpperCase();
          isRelative = command !== a[i]; //lower case means relative
        } else {
          //commands like "C" can be strung together without any new command characters between.
          i--;
        }

        x = +a[i + 1];
        y = +a[i + 2];

        if (isRelative) {
          x += relativeX;
          y += relativeY;
        }

        if (!i) {
          startX = x;
          startY = y;
        } // "M" (move)


        if (command === "M") {
          if (segment) {
            if (segment.length < 8) {
              //if the path data was funky and just had a M with no actual drawing anywhere, skip it.
              path.length -= 1;
            } else {
              points += segment.length;
            }
          }

          relativeX = startX = x;
          relativeY = startY = y;
          segment = [x, y];
          path.push(segment);
          i += 2;
          command = "L"; //an "M" with more than 2 values gets interpreted as "lineTo" commands ("L").

          // "C" (cubic bezier)
        } else if (command === "C") {
          if (!segment) {
            segment = [0, 0];
          }

          if (!isRelative) {
            relativeX = relativeY = 0;
          } //note: "*1" is just a fast/short way to cast the value as a Number. WAAAY faster in Chrome, slightly slower in Firefox.


          segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
          i += 6; // "S" (continuation of cubic bezier)
        } else if (command === "S") {
          difX = relativeX;
          difY = relativeY;

          if (prevCommand === "C" || prevCommand === "S") {
            difX += relativeX - segment[segment.length - 4];
            difY += relativeY - segment[segment.length - 3];
          }

          if (!isRelative) {
            relativeX = relativeY = 0;
          }

          segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
          i += 4; // "Q" (quadratic bezier)
        } else if (command === "Q") {
          difX = relativeX + (x - relativeX) * twoThirds;
          difY = relativeY + (y - relativeY) * twoThirds;

          if (!isRelative) {
            relativeX = relativeY = 0;
          }

          relativeX += a[i + 3] * 1;
          relativeY += a[i + 4] * 1;
          segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
          i += 4; // "T" (continuation of quadratic bezier)
        } else if (command === "T") {
          difX = relativeX - segment[segment.length - 4];
          difY = relativeY - segment[segment.length - 3];
          segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
          i += 2; // "H" (horizontal line)
        } else if (command === "H") {
          line(relativeX, relativeY, relativeX = x, relativeY);
          i += 1; // "V" (vertical line)
        } else if (command === "V") {
          //adjust values because the first (and only one) isn't x in this case, it's y.
          line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
          i += 1; // "L" (line) or "Z" (close)
        } else if (command === "L" || command === "Z") {
          if (command === "Z") {
            x = startX;
            y = startY;
            segment.closed = true;
          }

          if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
            line(relativeX, relativeY, x, y);

            if (command === "L") {
              i += 2;
            }
          }

          relativeX = x;
          relativeY = y; // "A" (arc)
        } else if (command === "A") {
          flag1 = a[i + 4];
          flag2 = a[i + 5];
          difX = a[i + 6];
          difY = a[i + 7];
          j = 7;

          if (flag1.length > 1) {
            // for cases when the flags are merged, like "a8 8 0 018 8" (the 0 and 1 flags are WITH the x value of 8, but it could also be "a8 8 0 01-8 8" so it may include x or not)
            if (flag1.length < 3) {
              difY = difX;
              difX = flag2;
              j--;
            } else {
              difY = flag2;
              difX = flag1.substr(2);
              j -= 2;
            }

            flag2 = flag1.charAt(1);
            flag1 = flag1.charAt(0);
          }

          beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
          i += j;

          if (beziers) {
            for (j = 0; j < beziers.length; j++) {
              segment.push(beziers[j]);
            }
          }

          relativeX = segment[segment.length - 2];
          relativeY = segment[segment.length - 1];
        } else {
          console.log(errorMessage);
        }
      }

      i = segment.length;

      if (i < 6) {
        //in case there's odd SVG like a M0,0 command at the very end.
        path.pop();
        i = 0;
      } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
        segment.closed = true;
      }

      path.totalPoints = points + i;
      return path;
    } //populates the points array in alternating x/y values (like [x, y, x, y...] instead of individual point objects [{x, y}, {x, y}...] to conserve memory and stay in line with how we're handling segment arrays


    function bezierToPoints(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
      var x12 = (x1 + x2) / 2, y12 = (y1 + y2) / 2, x23 = (x2 + x3) / 2, y23 = (y2 + y3) / 2, x34 = (x3 + x4) / 2, y34 = (y3 + y4) / 2, x123 = (x12 + x23) / 2, y123 = (y12 + y23) / 2, x234 = (x23 + x34) / 2, y234 = (y23 + y34) / 2, x1234 = (x123 + x234) / 2, y1234 = (y123 + y234) / 2, dx = x4 - x1, dy = y4 - y1, d2 = _abs((x2 - x4) * dy - (y2 - y4) * dx), d3 = _abs((x3 - x4) * dy - (y3 - y4) * dx), length;

      if (!points) {
        points = [x1, y1, x4, y4];
        index = 2;
      }

      points.splice(index || points.length - 2, 0, x1234, y1234);

      if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
        length = points.length;
        bezierToPoints(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);
        bezierToPoints(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 2 + (points.length - length));
      }

      return points;
    }
    /*
    function getAngleBetweenPoints(x0, y0, x1, y1, x2, y2) { //angle between 3 points in radians
        var dx1 = x1 - x0,
            dy1 = y1 - y0,
            dx2 = x2 - x1,
            dy2 = y2 - y1,
            dx3 = x2 - x0,
            dy3 = y2 - y0,
            a = dx1 * dx1 + dy1 * dy1,
            b = dx2 * dx2 + dy2 * dy2,
            c = dx3 * dx3 + dy3 * dy3;
        return Math.acos( (a + b - c) / _sqrt(4 * a * b) );
    },
    */
    //pointsToSegment() doesn't handle flat coordinates (where y is always 0) the way we need (the resulting control points are always right on top of the anchors), so this function basically makes the control points go directly up and down, varying in length based on the curviness (more curvy, further control points)
    function flatPointsToSegment(points, curviness) {
      if (curviness === void 0) {
        curviness = 1;
      }

      var x = points[0], y = 0, segment = [x, y], i = 2;

      for (; i < points.length; i += 2) {
        segment.push(x, y, points[i], y = (points[i] - x) * curviness / 2, x = points[i], -y);
      }

      return segment;
    } //points is an array of x/y points, like [x, y, x, y, x, y]


    function pointsToSegment(points, curviness, cornerThreshold) {
      //points = simplifyPoints(points, tolerance);
      _abs(points[0] - points[2]) < 1e-4 && _abs(points[1] - points[3]) < 1e-4 && (points = points.slice(2)); // if the first two points are super close, dump the first one.

      var l = points.length - 2, x = +points[0], y = +points[1], nextX = +points[2], nextY = +points[3], segment = [x, y, x, y], dx2 = nextX - x, dy2 = nextY - y, closed = Math.abs(points[l] - x) < 0.001 && Math.abs(points[l + 1] - y) < 0.001, prevX, prevY, angle, slope, i, dx1, dx3, dy1, dy3, d1, d2, a, b, c;

      if (isNaN(cornerThreshold)) {
        cornerThreshold = Math.PI / 10;
      }

      if (closed) {
        // if the start and end points are basically on top of each other, close the segment by adding the 2nd point to the end, and the 2nd-to-last point to the beginning (we'll remove them at the end, but this allows the curvature to look perfect)
        points.push(nextX, nextY);
        nextX = x;
        nextY = y;
        x = points[l - 2];
        y = points[l - 1];
        points.unshift(x, y);
        l += 4;
      }

      curviness = curviness || curviness === 0 ? +curviness : 1;

      for (i = 2; i < l; i += 2) {
        prevX = x;
        prevY = y;
        x = nextX;
        y = nextY;
        nextX = +points[i + 2];
        nextY = +points[i + 3];

        if (x === nextX && y === nextY) {
          continue;
        }

        dx1 = dx2;
        dy1 = dy2;
        dx2 = nextX - x;
        dy2 = nextY - y;
        dx3 = nextX - prevX;
        dy3 = nextY - prevY;
        a = dx1 * dx1 + dy1 * dy1;
        b = dx2 * dx2 + dy2 * dy2;
        c = dx3 * dx3 + dy3 * dy3;
        angle = Math.acos((a + b - c) / _sqrt(4 * a * b)); //angle between the 3 points

        d2 = angle / Math.PI * curviness; //temporary precalculation for speed (reusing d2 variable)

        d1 = _sqrt(a) * d2; //the tighter the angle, the shorter we make the handles in proportion.

        d2 *= _sqrt(b);

        if (x !== prevX || y !== prevY) {
          if (angle > cornerThreshold) {
            slope = _atan2(dy3, dx3);
            segment.push(_round(x - _cos(slope) * d1), //first control point
              _round(y - _sin(slope) * d1), _round(x), //anchor
              _round(y), _round(x + _cos(slope) * d2), //second control point
              _round(y + _sin(slope) * d2));
          } else {
            slope = _atan2(dy1, dx1);
            segment.push(_round(x - _cos(slope) * d1), //first control point
              _round(y - _sin(slope) * d1));
            slope = _atan2(dy2, dx2);
            segment.push(_round(x), //anchor
              _round(y), _round(x + _cos(slope) * d2), //second control point
              _round(y + _sin(slope) * d2));
          }
        }
      }

      x !== nextX || y !== nextY || segment.length < 4 ? segment.push(_round(nextX), _round(nextY), _round(nextX), _round(nextY)) : segment.length -= 2;

      if (closed) {
        segment.splice(0, 6);
        segment.length = segment.length - 6;
      }

      return segment;
    } //returns the squared distance between an x/y coordinate and a segment between x1/y1 and x2/y2


    function pointToSegDist(x, y, x1, y1, x2, y2) {
      var dx = x2 - x1, dy = y2 - y1, t;

      if (dx || dy) {
        t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);

        if (t > 1) {
          x1 = x2;
          y1 = y2;
        } else if (t > 0) {
          x1 += dx * t;
          y1 += dy * t;
        }
      }

      return Math.pow(x - x1, 2) + Math.pow(y - y1, 2);
    }

    function simplifyStep(points, first, last, tolerance, simplified) {
      var maxSqDist = tolerance, firstX = points[first], firstY = points[first + 1], lastX = points[last], lastY = points[last + 1], index, i, d;

      for (i = first + 2; i < last; i += 2) {
        d = pointToSegDist(points[i], points[i + 1], firstX, firstY, lastX, lastY);

        if (d > maxSqDist) {
          index = i;
          maxSqDist = d;
        }
      }

      if (maxSqDist > tolerance) {
        index - first > 2 && simplifyStep(points, first, index, tolerance, simplified);
        simplified.push(points[index], points[index + 1]);
        last - index > 2 && simplifyStep(points, index, last, tolerance, simplified);
      }
    } //points is an array of x/y values like [x, y, x, y, x, y]


    function simplifyPoints(points, tolerance) {
      var prevX = parseFloat(points[0]), prevY = parseFloat(points[1]), temp = [prevX, prevY], l = points.length - 2, i, x, y, dx, dy, result, last;
      tolerance = Math.pow(tolerance || 1, 2);

      for (i = 2; i < l; i += 2) {
        x = parseFloat(points[i]);
        y = parseFloat(points[i + 1]);
        dx = prevX - x;
        dy = prevY - y;

        if (dx * dx + dy * dy > tolerance) {
          temp.push(x, y);
          prevX = x;
          prevY = y;
        }
      }

      temp.push(parseFloat(points[l]), parseFloat(points[l + 1]));
      last = temp.length - 2;
      result = [temp[0], temp[1]];
      simplifyStep(temp, 0, last, tolerance, result);
      result.push(temp[last], temp[last + 1]);
      return result;
    }

    function getClosestProgressOnBezier(iterations, px, py, start, end, slices, x0, y0, x1, y1, x2, y2, x3, y3) {
      var inc = (end - start) / slices, best = 0, t = start, x, y, d, dx, dy, inv;
      _bestDistance = _largeNum;

      while (t <= end) {
        inv = 1 - t;
        x = inv * inv * inv * x0 + 3 * inv * inv * t * x1 + 3 * inv * t * t * x2 + t * t * t * x3;
        y = inv * inv * inv * y0 + 3 * inv * inv * t * y1 + 3 * inv * t * t * y2 + t * t * t * y3;
        dx = x - px;
        dy = y - py;
        d = dx * dx + dy * dy;

        if (d < _bestDistance) {
          _bestDistance = d;
          best = t;
        }

        t += inc;
      }

      return iterations > 1 ? getClosestProgressOnBezier(iterations - 1, px, py, Math.max(best - inc, 0), Math.min(best + inc, 1), slices, x0, y0, x1, y1, x2, y2, x3, y3) : best;
    }

    function getClosestData(rawPath, x, y, slices) {
      //returns an object with the closest j, i, and t (j is the segment index, i is the index of the point in that segment, and t is the time/progress along that bezier)
      var closest = {
        j: 0,
        i: 0,
        t: 0
      }, bestDistance = _largeNum, i, j, t, segment;

      for (j = 0; j < rawPath.length; j++) {
        segment = rawPath[j];

        for (i = 0; i < segment.length; i += 6) {
          t = getClosestProgressOnBezier(1, x, y, 0, 1, slices || 20, segment[i], segment[i + 1], segment[i + 2], segment[i + 3], segment[i + 4], segment[i + 5], segment[i + 6], segment[i + 7]);

          if (bestDistance > _bestDistance) {
            bestDistance = _bestDistance;
            closest.j = j;
            closest.i = i;
            closest.t = t;
          }
        }
      }

      return closest;
    } //subdivide a Segment closest to a specific x,y coordinate


    function subdivideSegmentNear(x, y, segment, slices, iterations) {
      var l = segment.length, bestDistance = _largeNum, bestT = 0, bestSegmentIndex = 0, t, i;
      slices = slices || 20;
      iterations = iterations || 3;

      for (i = 0; i < l; i += 6) {
        t = getClosestProgressOnBezier(1, x, y, 0, 1, slices, segment[i], segment[i + 1], segment[i + 2], segment[i + 3], segment[i + 4], segment[i + 5], segment[i + 6], segment[i + 7]);

        if (bestDistance > _bestDistance) {
          bestDistance = _bestDistance;
          bestT = t;
          bestSegmentIndex = i;
        }
      }

      t = getClosestProgressOnBezier(iterations, x, y, bestT - 0.05, bestT + 0.05, slices, segment[bestSegmentIndex], segment[bestSegmentIndex + 1], segment[bestSegmentIndex + 2], segment[bestSegmentIndex + 3], segment[bestSegmentIndex + 4], segment[bestSegmentIndex + 5], segment[bestSegmentIndex + 6], segment[bestSegmentIndex + 7]);
      subdivideSegment(segment, bestSegmentIndex, t);
      return bestSegmentIndex + 6;
    }
    /*
    Takes any of the following and converts it to an all Cubic Bezier SVG data string:
    - A <path> data string like "M0,0 L2,4 v20,15 H100"
    - A RawPath, like [[x, y, x, y, x, y, x, y][[x, y, x, y, x, y, x, y]]
    - A Segment, like [x, y, x, y, x, y, x, y]
    
    Note: all numbers are rounded down to the closest 0.001 to minimize memory, maximize speed, and avoid odd numbers like 1e-13
    */
    function rawPathToString(rawPath) {
      if (_isNumber(rawPath[0])) {
        //in case a segment is passed in instead
        rawPath = [rawPath];
      }

      var result = "", l = rawPath.length, sl, s, i, segment;

      for (s = 0; s < l; s++) {
        segment = rawPath[s];
        result += "M" + _round(segment[0]) + "," + _round(segment[1]) + " C";
        sl = segment.length;

        for (i = 2; i < sl; i++) {
          result += _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i++]) + " " + _round(segment[i++]) + "," + _round(segment[i]) + " ";
        }

        if (segment.closed) {
          result += "z";
        }
      }

      return result;
    }
    /*
    // takes a segment with coordinates [x, y, x, y, ...] and converts the control points into angles and lengths [x, y, angle, length, angle, length, x, y, angle, length, ...] so that it animates more cleanly and avoids odd breaks/kinks. For example, if you animate from 1 o'clock to 6 o'clock, it'd just go directly/linearly rather than around. So the length would be very short in the middle of the tween.
    export function cpCoordsToAngles(segment, copy) {
        var result = copy ? segment.slice(0) : segment,
            x, y, i;
        for (i = 0; i < segment.length; i+=6) {
            x = segment[i+2] - segment[i];
            y = segment[i+3] - segment[i+1];
            result[i+2] = Math.atan2(y, x);
            result[i+3] = Math.sqrt(x * x + y * y);
            x = segment[i+6] - segment[i+4];
            y = segment[i+7] - segment[i+5];
            result[i+4] = Math.atan2(y, x);
            result[i+5] = Math.sqrt(x * x + y * y);
        }
        return result;
    }
    
    // takes a segment that was converted with cpCoordsToAngles() to have angles and lengths instead of coordinates for the control points, and converts it BACK into coordinates.
    export function cpAnglesToCoords(segment, copy) {
        var result = copy ? segment.slice(0) : segment,
            length = segment.length,
            rnd = 1000,
            angle, l, i, j;
        for (i = 0; i < length; i+=6) {
            angle = segment[i+2];
            l = segment[i+3]; //length
            result[i+2] = (((segment[i] + Math.cos(angle) * l) * rnd) | 0) / rnd;
            result[i+3] = (((segment[i+1] + Math.sin(angle) * l) * rnd) | 0) / rnd;
            angle = segment[i+4];
            l = segment[i+5]; //length
            result[i+4] = (((segment[i+6] - Math.cos(angle) * l) * rnd) | 0) / rnd;
            result[i+5] = (((segment[i+7] - Math.sin(angle) * l) * rnd) | 0) / rnd;
        }
        return result;
    }
    
    //adds an "isSmooth" array to each segment and populates it with a boolean value indicating whether or not it's smooth (the control points have basically the same slope). For any smooth control points, it converts the coordinates into angle (x, in radians) and length (y) and puts them into the same index value in a smoothData array.
    export function populateSmoothData(rawPath) {
        let j = rawPath.length,
            smooth, segment, x, y, x2, y2, i, l, a, a2, isSmooth, smoothData;
        while (--j > -1) {
            segment = rawPath[j];
            isSmooth = segment.isSmooth = segment.isSmooth || [0, 0, 0, 0];
            smoothData = segment.smoothData = segment.smoothData || [0, 0, 0, 0];
            isSmooth.length = 4;
            l = segment.length - 2;
            for (i = 6; i < l; i += 6) {
                x = segment[i] - segment[i - 2];
                y = segment[i + 1] - segment[i - 1];
                x2 = segment[i + 2] - segment[i];
                y2 = segment[i + 3] - segment[i + 1];
                a = _atan2(y, x);
                a2 = _atan2(y2, x2);
                smooth = (Math.abs(a - a2) < 0.09);
                if (smooth) {
                    smoothData[i - 2] = a;
                    smoothData[i + 2] = a2;
                    smoothData[i - 1] = _sqrt(x * x + y * y);
                    smoothData[i + 3] = _sqrt(x2 * x2 + y2 * y2);
                }
                isSmooth.push(smooth, smooth, 0, 0, smooth, smooth);
            }
            //if the first and last points are identical, check to see if there's a smooth transition. We must handle this a bit differently due to their positions in the array.
            if (segment[l] === segment[0] && segment[l+1] === segment[1]) {
                x = segment[0] - segment[l-2];
                y = segment[1] - segment[l-1];
                x2 = segment[2] - segment[0];
                y2 = segment[3] - segment[1];
                a = _atan2(y, x);
                a2 = _atan2(y2, x2);
                if (Math.abs(a - a2) < 0.09) {
                    smoothData[l-2] = a;
                    smoothData[2] = a2;
                    smoothData[l-1] = _sqrt(x * x + y * y);
                    smoothData[3] = _sqrt(x2 * x2 + y2 * y2);
                    isSmooth[l-2] = isSmooth[l-1] = true; //don't change indexes 2 and 3 because we'll trigger everything from the END, and this will optimize file size a bit.
                }
            }
        }
        return rawPath;
    }
    export function pointToScreen(svgElement, point) {
        if (arguments.length < 2) { //by default, take the first set of coordinates in the path as the point
            let rawPath = getRawPath(svgElement);
            point = svgElement.ownerSVGElement.createSVGPoint();
            point.x = rawPath[0][0];
            point.y = rawPath[0][1];
        }
        return point.matrixTransform(svgElement.getScreenCTM());
    }
    
    */
  }, {}], "b1Tg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.MorphSVGPlugin = void 0;

    var _paths = require("./utils/paths.js");

    /*!
     * MorphSVGPlugin 3.6.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
    */
    /* eslint-disable */
    var gsap, _toArray, _lastLinkedAnchor, _doc, _coreInitted, PluginClass, _getGSAP = function _getGSAP() {
      return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
    }, _isFunction = function _isFunction(value) {
      return typeof value === "function";
    }, _atan2 = Math.atan2, _cos = Math.cos, _sin = Math.sin, _sqrt = Math.sqrt, _PI = Math.PI, _2PI = _PI * 2, _angleMin = _PI * 0.3, _angleMax = _PI * 0.7, _bigNum = 1e20, _numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
      _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i, _commands = /[achlmqstvz]/i, _log = function _log(message) {
        return console && console.warn(message);
      }, _bonusValidated = 1,
      //<name>MorphSVGPlugin</name>
      _getAverageXY = function _getAverageXY(segment) {
        var l = segment.length, x = 0, y = 0, i;

        for (i = 0; i < l; i++) {
          x += segment[i++];
          y += segment[i];
        }

        return [x / (l / 2), y / (l / 2)];
      }, _getSize = function _getSize(segment) {
        //rough estimate of the bounding box (based solely on the anchors) of a single segment. sets "size", "centerX", and "centerY" properties on the bezier array itself, and returns the size (width * height)
        var l = segment.length, xMax = segment[0], xMin = xMax, yMax = segment[1], yMin = yMax, x, y, i;

        for (i = 6; i < l; i += 6) {
          x = segment[i];
          y = segment[i + 1];

          if (x > xMax) {
            xMax = x;
          } else if (x < xMin) {
            xMin = x;
          }

          if (y > yMax) {
            yMax = y;
          } else if (y < yMin) {
            yMin = y;
          }
        }

        segment.centerX = (xMax + xMin) / 2;
        segment.centerY = (yMax + yMin) / 2;
        return segment.size = (xMax - xMin) * (yMax - yMin);
      }, _getTotalSize = function _getTotalSize(rawPath, samplesPerBezier) {
        if (samplesPerBezier === void 0) {
          samplesPerBezier = 3;
        } //rough estimate of the bounding box of the entire list of Bezier segments (based solely on the anchors). sets "size", "centerX", and "centerY" properties on the bezier array itself, and returns the size (width * height)


        var j = rawPath.length, xMax = rawPath[0][0], xMin = xMax, yMax = rawPath[0][1], yMin = yMax, inc = 1 / samplesPerBezier, l, x, y, i, segment, k, t, inv, x1, y1, x2, x3, x4, y2, y3, y4;

        while (--j > -1) {
          segment = rawPath[j];
          l = segment.length;

          for (i = 6; i < l; i += 6) {
            x1 = segment[i];
            y1 = segment[i + 1];
            x2 = segment[i + 2] - x1;
            y2 = segment[i + 3] - y1;
            x3 = segment[i + 4] - x1;
            y3 = segment[i + 5] - y1;
            x4 = segment[i + 6] - x1;
            y4 = segment[i + 7] - y1;
            k = samplesPerBezier;

            while (--k > -1) {
              t = inc * k;
              inv = 1 - t;
              x = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t + x1;
              y = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t + y1;

              if (x > xMax) {
                xMax = x;
              } else if (x < xMin) {
                xMin = x;
              }

              if (y > yMax) {
                yMax = y;
              } else if (y < yMin) {
                yMin = y;
              }
            }
          }
        }

        rawPath.centerX = (xMax + xMin) / 2;
        rawPath.centerY = (yMax + yMin) / 2;
        rawPath.left = xMin;
        rawPath.width = xMax - xMin;
        rawPath.top = yMin;
        rawPath.height = yMax - yMin;
        return rawPath.size = (xMax - xMin) * (yMax - yMin);
      }, _sortByComplexity = function _sortByComplexity(a, b) {
        return b.length - a.length;
      }, _sortBySize = function _sortBySize(a, b) {
        var sizeA = a.size || _getSize(a), sizeB = b.size || _getSize(b);

        return Math.abs(sizeB - sizeA) < (sizeA + sizeB) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : sizeB - sizeA; //if the size is within 10% of each other, prioritize position from left to right, then top to bottom.
      }, _offsetSegment = function _offsetSegment(segment, shapeIndex) {
        var a = segment.slice(0), l = segment.length, wrap = l - 2, i, index;
        shapeIndex = shapeIndex | 0;

        for (i = 0; i < l; i++) {
          index = (i + shapeIndex) % wrap;
          segment[i++] = a[index];
          segment[i] = a[index + 1];
        }
      }, _getTotalMovement = function _getTotalMovement(sb, eb, shapeIndex, offsetX, offsetY) {
        var l = sb.length, d = 0, wrap = l - 2, index, i, x, y;
        shapeIndex *= 6;

        for (i = 0; i < l; i += 6) {
          index = (i + shapeIndex) % wrap;
          y = sb[index] - (eb[i] - offsetX);
          x = sb[index + 1] - (eb[i + 1] - offsetY);
          d += _sqrt(x * x + y * y);
        }

        return d;
      }, _getClosestShapeIndex = function _getClosestShapeIndex(sb, eb, checkReverse) {
        //finds the index in a closed cubic bezier array that's closest to the angle provided (angle measured from the center or average x/y).
        var l = sb.length, sCenter = _getAverageXY(sb),
          //when comparing distances, adjust the coordinates as if the shapes are centered with each other.
          eCenter = _getAverageXY(eb), offsetX = eCenter[0] - sCenter[0], offsetY = eCenter[1] - sCenter[1], min = _getTotalMovement(sb, eb, 0, offsetX, offsetY), minIndex = 0, copy, d, i;

        for (i = 6; i < l; i += 6) {
          d = _getTotalMovement(sb, eb, i / 6, offsetX, offsetY);

          if (d < min) {
            min = d;
            minIndex = i;
          }
        }

        if (checkReverse) {
          copy = sb.slice(0);
          (0, _paths.reverseSegment)(copy);

          for (i = 6; i < l; i += 6) {
            d = _getTotalMovement(copy, eb, i / 6, offsetX, offsetY);

            if (d < min) {
              min = d;
              minIndex = -i;
            }
          }
        }

        return minIndex / 6;
      }, _getClosestAnchor = function _getClosestAnchor(rawPath, x, y) {
        //finds the x/y of the anchor that's closest to the provided x/y coordinate (returns an array, like [x, y]). The bezier should be the top-level type that contains an array for each segment.
        var j = rawPath.length, closestDistance = _bigNum, closestX = 0, closestY = 0, segment, dx, dy, d, i, l;

        while (--j > -1) {
          segment = rawPath[j];
          l = segment.length;

          for (i = 0; i < l; i += 6) {
            dx = segment[i] - x;
            dy = segment[i + 1] - y;
            d = _sqrt(dx * dx + dy * dy);

            if (d < closestDistance) {
              closestDistance = d;
              closestX = segment[i];
              closestY = segment[i + 1];
            }
          }
        }

        return [closestX, closestY];
      }, _getClosestSegment = function _getClosestSegment(bezier, pool, startIndex, sortRatio, offsetX, offsetY) {
        //matches the bezier to the closest one in a pool (array) of beziers, assuming they are in order of size and we shouldn't drop more than 20% of the size, otherwise prioritizing location (total distance to the center). Extracts the segment out of the pool array and returns it.
        var l = pool.length, index = 0, minSize = Math.min(bezier.size || _getSize(bezier), pool[startIndex].size || _getSize(pool[startIndex])) * sortRatio,
          //limit things based on a percentage of the size of either the bezier or the next element in the array, whichever is smaller.
          min = _bigNum, cx = bezier.centerX + offsetX, cy = bezier.centerY + offsetY, size, i, dx, dy, d;

        for (i = startIndex; i < l; i++) {
          size = pool[i].size || _getSize(pool[i]);

          if (size < minSize) {
            break;
          }

          dx = pool[i].centerX - cx;
          dy = pool[i].centerY - cy;
          d = _sqrt(dx * dx + dy * dy);

          if (d < min) {
            index = i;
            min = d;
          }
        }

        d = pool[index];
        pool.splice(index, 1);
        return d;
      }, _subdivideSegmentQty = function _subdivideSegmentQty(segment, quantity) {
        var tally = 0, max = 0.999999, l = segment.length, newPointsPerSegment = quantity / ((l - 2) / 6), ax, ay, cp1x, cp1y, cp2x, cp2y, bx, by, x1, y1, x2, y2, i, t;

        for (i = 2; i < l; i += 6) {
          tally += newPointsPerSegment;

          while (tally > max) {
            //compare with 0.99999 instead of 1 in order to prevent rounding errors
            ax = segment[i - 2];
            ay = segment[i - 1];
            cp1x = segment[i];
            cp1y = segment[i + 1];
            cp2x = segment[i + 2];
            cp2y = segment[i + 3];
            bx = segment[i + 4];
            by = segment[i + 5];
            t = 1 / ((Math.floor(tally) || 1) + 1); //progress along the bezier (value between 0 and 1)

            x1 = ax + (cp1x - ax) * t;
            x2 = cp1x + (cp2x - cp1x) * t;
            x1 += (x2 - x1) * t;
            x2 += (cp2x + (bx - cp2x) * t - x2) * t;
            y1 = ay + (cp1y - ay) * t;
            y2 = cp1y + (cp2y - cp1y) * t;
            y1 += (y2 - y1) * t;
            y2 += (cp2y + (by - cp2y) * t - y2) * t;
            segment.splice(i, 4, ax + (cp1x - ax) * t, //first control point
              ay + (cp1y - ay) * t, x1, //second control point
              y1, x1 + (x2 - x1) * t, //new fabricated anchor on line
              y1 + (y2 - y1) * t, x2, //third control point
              y2, cp2x + (bx - cp2x) * t, //fourth control point
              cp2y + (by - cp2y) * t);
            i += 6;
            l += 6;
            tally--;
          }
        }

        return segment;
      }, _equalizeSegmentQuantity = function _equalizeSegmentQuantity(start, end, shapeIndex, map, fillSafe) {
        //returns an array of shape indexes, 1 for each segment.
        var dif = end.length - start.length, longer = dif > 0 ? end : start, shorter = dif > 0 ? start : end, added = 0, sortMethod = map === "complexity" ? _sortByComplexity : _sortBySize, sortRatio = map === "position" ? 0 : typeof map === "number" ? map : 0.8, i = shorter.length, shapeIndices = typeof shapeIndex === "object" && shapeIndex.push ? shapeIndex.slice(0) : [shapeIndex], reverse = shapeIndices[0] === "reverse" || shapeIndices[0] < 0, log = shapeIndex === "log", eb, sb, b, x, y, offsetX, offsetY;

        if (!shorter[0]) {
          return;
        }

        if (longer.length > 1) {
          start.sort(sortMethod);
          end.sort(sortMethod);
          offsetX = longer.size || _getTotalSize(longer); //ensures centerX and centerY are defined (used below).

          offsetX = shorter.size || _getTotalSize(shorter);
          offsetX = longer.centerX - shorter.centerX;
          offsetY = longer.centerY - shorter.centerY;

          if (sortMethod === _sortBySize) {
            for (i = 0; i < shorter.length; i++) {
              longer.splice(i, 0, _getClosestSegment(shorter[i], longer, i, sortRatio, offsetX, offsetY));
            }
          }
        }

        if (dif) {
          if (dif < 0) {
            dif = -dif;
          }

          if (longer[0].length > shorter[0].length) {
            //since we use shorter[0] as the one to map the origination point of any brand new fabricated segments, do any subdividing first so that there are more points to choose from (if necessary)
            _subdivideSegmentQty(shorter[0], (longer[0].length - shorter[0].length) / 6 | 0);
          }

          i = shorter.length;

          while (added < dif) {
            x = longer[i].size || _getSize(longer[i]); //just to ensure centerX and centerY are calculated which we use on the next line.

            b = _getClosestAnchor(shorter, longer[i].centerX, longer[i].centerY);
            x = b[0];
            y = b[1];
            shorter[i++] = [x, y, x, y, x, y, x, y];
            shorter.totalPoints += 8;
            added++;
          }
        }

        for (i = 0; i < start.length; i++) {
          eb = end[i];
          sb = start[i];
          dif = eb.length - sb.length;

          if (dif < 0) {
            _subdivideSegmentQty(eb, -dif / 6 | 0);
          } else if (dif > 0) {
            _subdivideSegmentQty(sb, dif / 6 | 0);
          }

          if (reverse && fillSafe !== false && !sb.reversed) {
            (0, _paths.reverseSegment)(sb);
          }

          shapeIndex = shapeIndices[i] || shapeIndices[i] === 0 ? shapeIndices[i] : "auto";

          if (shapeIndex) {
            //if start shape is closed, find the closest point to the start/end, and re-organize the bezier points accordingly so that the shape morphs in a more intuitive way.
            if (sb.closed || Math.abs(sb[0] - sb[sb.length - 2]) < 0.5 && Math.abs(sb[1] - sb[sb.length - 1]) < 0.5) {
              if (shapeIndex === "auto" || shapeIndex === "log") {
                shapeIndices[i] = shapeIndex = _getClosestShapeIndex(sb, eb, !i || fillSafe === false);

                if (shapeIndex < 0) {
                  reverse = true;
                  (0, _paths.reverseSegment)(sb);
                  shapeIndex = -shapeIndex;
                }

                _offsetSegment(sb, shapeIndex * 6);
              } else if (shapeIndex !== "reverse") {
                if (i && shapeIndex < 0) {
                  //only happens if an array is passed as shapeIndex and a negative value is defined for an index beyond 0. Very rare, but helpful sometimes.
                  (0, _paths.reverseSegment)(sb);
                }

                _offsetSegment(sb, (shapeIndex < 0 ? -shapeIndex : shapeIndex) * 6);
              } //otherwise, if it's not a closed shape, consider reversing it if that would make the overall travel less

            } else if (!reverse && (shapeIndex === "auto" && Math.abs(eb[0] - sb[0]) + Math.abs(eb[1] - sb[1]) + Math.abs(eb[eb.length - 2] - sb[sb.length - 2]) + Math.abs(eb[eb.length - 1] - sb[sb.length - 1]) > Math.abs(eb[0] - sb[sb.length - 2]) + Math.abs(eb[1] - sb[sb.length - 1]) + Math.abs(eb[eb.length - 2] - sb[0]) + Math.abs(eb[eb.length - 1] - sb[1]) || shapeIndex % 2)) {
              (0, _paths.reverseSegment)(sb);
              shapeIndices[i] = -1;
              reverse = true;
            } else if (shapeIndex === "auto") {
              shapeIndices[i] = 0;
            } else if (shapeIndex === "reverse") {
              shapeIndices[i] = -1;
            }

            if (sb.closed !== eb.closed) {
              //if one is closed and one isn't, don't close either one otherwise the tweening will look weird (but remember, the beginning and final states will honor the actual values, so this only affects the inbetween state)
              sb.closed = eb.closed = false;
            }
          }
        }

        if (log) {
          _log("shapeIndex:[" + shapeIndices.join(",") + "]");
        }

        start.shapeIndex = shapeIndices;
        return shapeIndices;
      }, _pathFilter = function _pathFilter(a, shapeIndex, map, precompile, fillSafe) {
        var start = (0, _paths.stringToRawPath)(a[0]), end = (0, _paths.stringToRawPath)(a[1]);

        if (!_equalizeSegmentQuantity(start, end, shapeIndex || shapeIndex === 0 ? shapeIndex : "auto", map, fillSafe)) {
          return; //malformed path data or null target
        }

        a[0] = (0, _paths.rawPathToString)(start);
        a[1] = (0, _paths.rawPathToString)(end);

        if (precompile === "log" || precompile === true) {
          _log('precompile:["' + a[0] + '","' + a[1] + '"]');
        }
      }, _offsetPoints = function _offsetPoints(text, offset) {
        if (!offset) {
          return text;
        }

        var a = text.match(_numExp) || [], l = a.length, s = "", inc, i, j;

        if (offset === "reverse") {
          i = l - 1;
          inc = -2;
        } else {
          i = ((parseInt(offset, 10) || 0) * 2 + 1 + l * 100) % l;
          inc = 2;
        }

        for (j = 0; j < l; j += 2) {
          s += a[i - 1] + "," + a[i] + " ";
          i = (i + inc) % l;
        }

        return s;
      },
      //adds a certain number of points while maintaining the polygon/polyline shape (so that the start/end values can have a matching quantity of points to animate). Returns the revised string.
      _equalizePointQuantity = function _equalizePointQuantity(a, quantity) {
        var tally = 0, x = parseFloat(a[0]), y = parseFloat(a[1]), s = x + "," + y + " ", max = 0.999999, newPointsPerSegment, i, l, j, factor, nextX, nextY;
        l = a.length;
        newPointsPerSegment = quantity * 0.5 / (l * 0.5 - 1);

        for (i = 0; i < l - 2; i += 2) {
          tally += newPointsPerSegment;
          nextX = parseFloat(a[i + 2]);
          nextY = parseFloat(a[i + 3]);

          if (tally > max) {
            //compare with 0.99999 instead of 1 in order to prevent rounding errors
            factor = 1 / (Math.floor(tally) + 1);
            j = 1;

            while (tally > max) {
              s += (x + (nextX - x) * factor * j).toFixed(2) + "," + (y + (nextY - y) * factor * j).toFixed(2) + " ";
              tally--;
              j++;
            }
          }

          s += nextX + "," + nextY + " ";
          x = nextX;
          y = nextY;
        }

        return s;
      }, _pointsFilter = function _pointsFilter(a) {
        var startNums = a[0].match(_numExp) || [], endNums = a[1].match(_numExp) || [], dif = endNums.length - startNums.length;

        if (dif > 0) {
          a[0] = _equalizePointQuantity(startNums, dif);
        } else {
          a[1] = _equalizePointQuantity(endNums, -dif);
        }
      }, _buildPointsFilter = function _buildPointsFilter(shapeIndex) {
        return !isNaN(shapeIndex) ? function (a) {
          _pointsFilter(a);

          a[1] = _offsetPoints(a[1], parseInt(shapeIndex, 10));
        } : _pointsFilter;
      }, _parseShape = function _parseShape(shape, forcePath, target) {
        var isString = typeof shape === "string", e, type;

        if (!isString || _selectorExp.test(shape) || (shape.match(_numExp) || []).length < 3) {
          e = _toArray(shape)[0];

          if (e) {
            type = (e.nodeName + "").toUpperCase();

            if (forcePath && type !== "PATH") {
              //if we were passed an element (or selector text for an element) that isn't a path, convert it.
              e = (0, _paths.convertToPath)(e, false);
              type = "PATH";
            }

            shape = e.getAttribute(type === "PATH" ? "d" : "points") || "";

            if (e === target) {
              //if the shape matches the target element, the user wants to revert to the original which should have been stored in the data-original attribute
              shape = e.getAttributeNS(null, "data-original") || shape;
            }
          } else {
            _log("WARNING: invalid morph to: " + shape);

            shape = false;
          }
        }

        return shape;
      },
      //adds an "isSmooth" array to each segment and populates it with a boolean value indicating whether or not it's smooth (the control points have basically the same slope). For any smooth control points, it converts the coordinates into angle (x, in radians) and length (y) and puts them into the same index value in a smoothData array.
      _populateSmoothData = function _populateSmoothData(rawPath, tolerance) {
        var j = rawPath.length, limit = 0.2 * (tolerance || 1), smooth, segment, x, y, x2, y2, i, l, a, a2, isSmooth, smoothData;

        while (--j > -1) {
          segment = rawPath[j];
          isSmooth = segment.isSmooth = segment.isSmooth || [0, 0, 0, 0];
          smoothData = segment.smoothData = segment.smoothData || [0, 0, 0, 0];
          isSmooth.length = 4;
          l = segment.length - 2;

          for (i = 6; i < l; i += 6) {
            x = segment[i] - segment[i - 2];
            y = segment[i + 1] - segment[i - 1];
            x2 = segment[i + 2] - segment[i];
            y2 = segment[i + 3] - segment[i + 1];
            a = _atan2(y, x);
            a2 = _atan2(y2, x2);
            smooth = Math.abs(a - a2) < limit;

            if (smooth) {
              smoothData[i - 2] = a;
              smoothData[i + 2] = a2;
              smoothData[i - 1] = _sqrt(x * x + y * y);
              smoothData[i + 3] = _sqrt(x2 * x2 + y2 * y2);
            }

            isSmooth.push(smooth, smooth, 0, 0, smooth, smooth);
          } //if the first and last points are identical, check to see if there's a smooth transition. We must handle this a bit differently due to their positions in the array.


          if (segment[l] === segment[0] && segment[l + 1] === segment[1]) {
            x = segment[0] - segment[l - 2];
            y = segment[1] - segment[l - 1];
            x2 = segment[2] - segment[0];
            y2 = segment[3] - segment[1];
            a = _atan2(y, x);
            a2 = _atan2(y2, x2);

            if (Math.abs(a - a2) < limit) {
              smoothData[l - 2] = a;
              smoothData[2] = a2;
              smoothData[l - 1] = _sqrt(x * x + y * y);
              smoothData[3] = _sqrt(x2 * x2 + y2 * y2);
              isSmooth[l - 2] = isSmooth[l - 1] = true; //don't change indexes 2 and 3 because we'll trigger everything from the END, and this will optimize file size a bit.
            }
          }
        }

        return rawPath;
      }, _parseOriginFactors = function _parseOriginFactors(v) {
        var a = v.trim().split(" "), x = ~v.indexOf("left") ? 0 : ~v.indexOf("right") ? 100 : isNaN(parseFloat(a[0])) ? 50 : parseFloat(a[0]), y = ~v.indexOf("top") ? 0 : ~v.indexOf("bottom") ? 100 : isNaN(parseFloat(a[1])) ? 50 : parseFloat(a[1]);
        return {
          x: x / 100,
          y: y / 100
        };
      }, _shortAngle = function _shortAngle(dif) {
        return dif !== dif % _PI ? dif + (dif < 0 ? _2PI : -_2PI) : dif;
      }, _morphMessage = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.", _tweenRotation = function _tweenRotation(start, end, i, linkedPT) {
        var so = this._origin,
          //starting origin
          eo = this._eOrigin,
          //ending origin
          dx = start[i] - so.x, dy = start[i + 1] - so.y, d = _sqrt(dx * dx + dy * dy),
          //length from starting origin to starting point
          sa = _atan2(dy, dx), angleDif, _short;

        dx = end[i] - eo.x;
        dy = end[i + 1] - eo.y;
        angleDif = _atan2(dy, dx) - sa;
        _short = _shortAngle(angleDif); //in the case of control points, we ALWAYS link them to their anchor so that they don't get torn apart and rotate the opposite direction. If it's not a control point, we look at the most recently linked point as long as they're within a certain rotational range of each other.

        if (!linkedPT && _lastLinkedAnchor && Math.abs(_short + _lastLinkedAnchor.ca) < _angleMin) {
          linkedPT = _lastLinkedAnchor;
        }

        return this._anchorPT = _lastLinkedAnchor = {
          _next: this._anchorPT,
          t: start,
          sa: sa,
          //starting angle
          ca: linkedPT && _short * linkedPT.ca < 0 && Math.abs(_short) > _angleMax ? angleDif : _short,
          //change in angle
          sl: d,
          //starting length
          cl: _sqrt(dx * dx + dy * dy) - d,
          //change in length
          i: i
        };
      }, _initCore = function _initCore(required) {
        gsap = _getGSAP();
        PluginClass = PluginClass || gsap && gsap.plugins.morphSVG;

        if (gsap && PluginClass) {
          _toArray = gsap.utils.toArray;
          _doc = document;
          PluginClass.prototype._tweenRotation = _tweenRotation;
          _coreInitted = 1;
        } else if (required) {
          _log("Please gsap.registerPlugin(MorphSVGPlugin)");
        }
      };

    var MorphSVGPlugin = {
      version: "3.6.0",
      name: "morphSVG",
      rawVars: 1,
      // otherwise "render" would be interpreted as a function-based value.
      register: function register(core, Plugin) {
        gsap = core;
        PluginClass = Plugin;

        _initCore();
      },
      init: function init(target, value, tween, index, targets) {
        _coreInitted || _initCore(1);

        if (!value) {
          _log("invalid shape");

          return false;
        }

        _isFunction(value) && (value = value.call(tween, index, target, targets));
        var type, p, pt, shape, isPoly, shapeIndex, map, startSmooth, endSmooth, start, end, i, j, l, startSeg, endSeg, precompiled, sData, eData, originFactors, useRotation, offset;

        if (typeof value === "string" || value.getBBox || value[0]) {
          value = {
            shape: value
          };
        } else if (typeof value === "object") {
          // if there are any function-based values, parse them here (and make a copy of the object so we're not modifying the original)
          type = {};

          for (p in value) {
            type[p] = _isFunction(value[p]) && p !== "render" ? value[p].call(tween, index, target, targets) : value[p];
          }

          value = type;
        }

        var cs = target.nodeType ? window.getComputedStyle(target) : {}, fill = cs.fill + "", fillSafe = !(fill === "none" || (fill.match(_numExp) || [])[3] === "0" || cs.fillRule === "evenodd"), origins = (value.origin || "50 50").split(",");
        type = (target.nodeName + "").toUpperCase();
        isPoly = type === "POLYLINE" || type === "POLYGON";

        if (type !== "PATH" && !isPoly && !value.prop) {
          _log("Cannot morph a <" + type + "> element. " + _morphMessage);

          return false;
        }

        p = type === "PATH" ? "d" : "points";

        if (!value.prop && !_isFunction(target.setAttribute)) {
          return false;
        }

        shape = _parseShape(value.shape || value.d || value.points || "", p === "d", target);

        if (isPoly && _commands.test(shape)) {
          _log("A <" + type + "> cannot accept path data. " + _morphMessage);

          return false;
        }

        shapeIndex = value.shapeIndex || value.shapeIndex === 0 ? value.shapeIndex : "auto";
        map = value.map || MorphSVGPlugin.defaultMap;
        this._prop = value.prop;
        this._render = value.render || MorphSVGPlugin.defaultRender;
        this._apply = "updateTarget" in value ? value.updateTarget : MorphSVGPlugin.defaultUpdateTarget;
        this._rnd = Math.pow(10, isNaN(value.precision) ? 2 : +value.precision);
        this._tween = tween;

        if (shape) {
          this._target = target;
          precompiled = typeof value.precompile === "object";
          start = this._prop ? target[this._prop] : target.getAttribute(p);

          if (!this._prop && !target.getAttributeNS(null, "data-original")) {
            target.setAttributeNS(null, "data-original", start); //record the original state in a data-original attribute so that we can revert to it later.
          }

          if (p === "d" || this._prop) {
            start = (0, _paths.stringToRawPath)(precompiled ? value.precompile[0] : start);
            end = (0, _paths.stringToRawPath)(precompiled ? value.precompile[1] : shape);

            if (!precompiled && !_equalizeSegmentQuantity(start, end, shapeIndex, map, fillSafe)) {
              return false; //malformed path data or null target
            }

            if (value.precompile === "log" || value.precompile === true) {
              _log('precompile:["' + (0, _paths.rawPathToString)(start) + '","' + (0, _paths.rawPathToString)(end) + '"]');
            }

            useRotation = (value.type || MorphSVGPlugin.defaultType) !== "linear";

            if (useRotation) {
              start = _populateSmoothData(start, value.smoothTolerance);
              end = _populateSmoothData(end, value.smoothTolerance);

              if (!start.size) {
                _getTotalSize(start); //adds top/left/width/height values

              }

              if (!end.size) {
                _getTotalSize(end);
              }

              originFactors = _parseOriginFactors(origins[0]);
              this._origin = start.origin = {
                x: start.left + originFactors.x * start.width,
                y: start.top + originFactors.y * start.height
              };

              if (origins[1]) {
                originFactors = _parseOriginFactors(origins[1]);
              }

              this._eOrigin = {
                x: end.left + originFactors.x * end.width,
                y: end.top + originFactors.y * end.height
              };
            }

            this._rawPath = target._gsRawPath = start;
            j = start.length;

            while (--j > -1) {
              startSeg = start[j];
              endSeg = end[j];
              startSmooth = startSeg.isSmooth || [];
              endSmooth = endSeg.isSmooth || [];
              l = startSeg.length;
              _lastLinkedAnchor = 0; //reset; we use _lastLinkedAnchor in the _tweenRotation() method to help make sure that close points don't get ripped apart and rotate opposite directions. Typically we want to go the shortest direction, but if the previous anchor is going a different direction, we override this logic (within certain thresholds)

              for (i = 0; i < l; i += 2) {
                if (endSeg[i] !== startSeg[i] || endSeg[i + 1] !== startSeg[i + 1]) {
                  if (useRotation) {
                    if (startSmooth[i] && endSmooth[i]) {
                      //if BOTH starting and ending values are smooth (meaning control points have basically the same slope), interpolate the rotation and length instead of the coordinates (this is what makes things smooth).
                      sData = startSeg.smoothData;
                      eData = endSeg.smoothData;
                      offset = i + (i === l - 4 ? 7 - l : 5); //helps us accommodate wrapping (like if the end and start anchors are identical and the control points are smooth).

                      this._controlPT = {
                        _next: this._controlPT,
                        i: i,
                        j: j,
                        l1s: sData[i + 1],
                        l1c: eData[i + 1] - sData[i + 1],
                        l2s: sData[offset],
                        l2c: eData[offset] - sData[offset]
                      };
                      pt = this._tweenRotation(startSeg, endSeg, i + 2);

                      this._tweenRotation(startSeg, endSeg, i, pt);

                      this._tweenRotation(startSeg, endSeg, offset - 1, pt);

                      i += 4;
                    } else {
                      this._tweenRotation(startSeg, endSeg, i);
                    }
                  } else {
                    pt = this.add(startSeg, i, startSeg[i], endSeg[i]);
                    pt = this.add(startSeg, i + 1, startSeg[i + 1], endSeg[i + 1]) || pt;
                  }
                }
              }
            }
          } else {
            pt = this.add(target, "setAttribute", target.getAttribute(p) + "", shape + "", index, targets, 0, _buildPointsFilter(shapeIndex), p);
          }

          if (useRotation) {
            this.add(this._origin, "x", this._origin.x, this._eOrigin.x);
            pt = this.add(this._origin, "y", this._origin.y, this._eOrigin.y);
          }

          if (pt) {
            this._props.push("morphSVG");

            pt.end = shape;
            pt.endProp = p;
          }
        }

        return _bonusValidated;
      },
      render: function render(ratio, data) {
        var rawPath = data._rawPath, controlPT = data._controlPT, anchorPT = data._anchorPT, rnd = data._rnd, target = data._target, pt = data._pt, s, space, easeInOut, segment, l, angle, i, j, x, y, sin, cos, offset;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }

        if (ratio === 1 && data._apply) {
          pt = data._pt;

          while (pt) {
            if (pt.end) {
              if (data._prop) {
                target[data._prop] = pt.end;
              } else {
                target.setAttribute(pt.endProp, pt.end); //make sure the end value is exactly as specified (in case we had to add fabricated points during the tween)
              }
            }

            pt = pt._next;
          }
        } else if (rawPath) {
          //rotationally position the anchors
          while (anchorPT) {
            angle = anchorPT.sa + ratio * anchorPT.ca;
            l = anchorPT.sl + ratio * anchorPT.cl; //length

            anchorPT.t[anchorPT.i] = data._origin.x + _cos(angle) * l;
            anchorPT.t[anchorPT.i + 1] = data._origin.y + _sin(angle) * l;
            anchorPT = anchorPT._next;
          } //smooth out the control points


          easeInOut = ratio < 0.5 ? 2 * ratio * ratio : (4 - 2 * ratio) * ratio - 1;

          while (controlPT) {
            i = controlPT.i;
            segment = rawPath[controlPT.j];
            offset = i + (i === segment.length - 4 ? 7 - segment.length : 5); //accommodates wrapping around of smooth points, like if the start and end anchors are on top of each other and their handles are smooth.

            angle = _atan2(segment[offset] - segment[i + 1], segment[offset - 1] - segment[i]); //average the angles

            sin = _sin(angle);
            cos = _cos(angle);
            x = segment[i + 2];
            y = segment[i + 3];
            l = controlPT.l1s + easeInOut * controlPT.l1c; //length

            segment[i] = x - cos * l;
            segment[i + 1] = y - sin * l;
            l = controlPT.l2s + easeInOut * controlPT.l2c;
            segment[offset - 1] = x + cos * l;
            segment[offset] = y + sin * l;
            controlPT = controlPT._next;
          }

          target._gsRawPath = rawPath;

          if (data._apply) {
            s = "";
            space = " ";

            for (j = 0; j < rawPath.length; j++) {
              segment = rawPath[j];
              l = segment.length;
              s += "M" + (segment[0] * rnd | 0) / rnd + space + (segment[1] * rnd | 0) / rnd + " C";

              for (i = 2; i < l; i++) {
                //this is actually faster than just doing a join() on the array, possibly because the numbers have so many decimal places
                s += (segment[i] * rnd | 0) / rnd + space;
              }
            }

            if (data._prop) {
              target[data._prop] = s;
            } else {
              target.setAttribute("d", s);
            }
          }
        }

        data._render && rawPath && data._render.call(data._tween, rawPath, target);
      },
      kill: function kill(property) {
        this._pt = this._rawPath = 0;
      },
      getRawPath: _paths.getRawPath,
      stringToRawPath: _paths.stringToRawPath,
      rawPathToString: _paths.rawPathToString,
      pathFilter: _pathFilter,
      pointsFilter: _pointsFilter,
      getTotalSize: _getTotalSize,
      equalizeSegmentQuantity: _equalizeSegmentQuantity,
      convertToPath: function convertToPath(targets, swap) {
        return _toArray(targets).map(function (target) {
          return (0, _paths.convertToPath)(target, swap !== false);
        });
      },
      defaultType: "linear",
      defaultUpdateTarget: true,
      defaultMap: "size"
    };
    exports.default = exports.MorphSVGPlugin = MorphSVGPlugin;
    _getGSAP() && gsap.registerPlugin(MorphSVGPlugin);
  }, { "./utils/paths.js": "ED4Q" }], "YQkw": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;

    var _gsap = require("gsap");

    var _SplitText = require("gsap/SplitText");

    var _MorphSVGPlugin = require("gsap/MorphSVGPlugin");

    _gsap.gsap.registerPlugin(_MorphSVGPlugin.MorphSVGPlugin);

    _gsap.gsap.registerPlugin(_SplitText.SplitText);

    var pre_tl = _gsap.gsap.timeline({
      paused: true
    });

    var preTitle_tl = _gsap.gsap.timeline({
      paused: true,
      repeat: -1
    });

    var init = function init() {
      document.querySelectorAll('.pre__title').forEach(function (el) {
        var text = new _SplitText.SplitText(el, {
          type: "words,chars"
        });
        var chars = text.chars;
        preTitle_tl //.add((el => { console.log(el); el.classList.add('visible'); })
          .set(el, {
            display: 'block'
          }).from(".pre__container .container", {
            duration: 0.1,
            autoAlpha: 1
          }).from(chars, {
            duration: 0.6,
            autoAlpha: 0,
            y: '50%',
            ease: "power2.out",
            stagger: 0.01
          }).to(chars, {
            duration: 0.6,
            autoAlpha: 0,
            y: '-50%',
            ease: "power2.in",
            stagger: 0.01
          }, '+=0.8').set(el, {
            display: 'none'
          });
      });
      preTitle_tl.play();
      pre_tl.to(".pre__container", {
        autoAlpha: 0,
        duration: 0.8
      }).to(".pre__bg1", {
        morphSVG: ".pre__bg2",
        duration: 1,
        ease: "power4.in"
      }).to(".pre__bg1", {
        morphSVG: ".pre__bg3",
        duration: 0.4,
        ease: "power2.out"
      }).to('.pre', {
        autoAlpha: 0,
        duration: 0.1
      }, '+=1').addLabel("introRemoved");
    };

    var close = function close() {
      pre_tl.tweenFromTo(0, "introRemoved");
      preTitle_tl.pause();
    };

    init();
    window.addEventListener('load', function () {
      setTimeout(function () {
        close();
      }, 6000);
    });
    var _default = {
      init: init,
      close: close
    };
    exports.default = _default;
  }, { "gsap": "TpQl", "gsap/SplitText": "BtuU", "gsap/MorphSVGPlugin": "b1Tg" }]
}, {}, ["YQkw"], null);
//# sourceMappingURL=../pre.a68522a0.js.map