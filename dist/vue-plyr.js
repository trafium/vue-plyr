'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Plyr = _interopDefault(require('plyr'));
var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.js'));

//
var script = {
  name: 'vue-plyr',
  props: {
    /** Options object for plyr config. **/
    options: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    },

    /** Array of events to emit from the plyr object **/
    emit: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      player: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.player = new Plyr(this.$el.firstChild, this.opts);
    this.$emit('player', this.player);
    this.emit.forEach(function (element) {
      _this.player.on(element, _this.emitPlayerEvent);
    });
  },
  beforeDestroy: function beforeDestroy() {
    try {
      this.player.destroy();
    } catch (e) {
      if (!(this.opts.hideYouTubeDOMError && e.message === 'The YouTube player is not attached to the DOM.')) {
        console.error(e);
      }
    }
  },
  methods: {
    emitPlayerEvent: function emitPlayerEvent(event) {
      this.$emit(event.type, event);
    }
  },
  computed: {
    opts: function opts() {
      var options = this.options;

      if (!this.options.hasOwnProperty('hideYouTubeDOMError')) {
        options.hideYouTubeDOMError = true;
      }

      return options;
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

var VuePlyr = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

var Components = {
  VuePlyr: VuePlyr
};
var VuePlyrPlugin = {
  install: function install(Vue, options) {
    Object.keys(Components).forEach(function (component) {
      Vue.component(Components[component].name, Components[component]);
    });
  }
}; // Credit to https://github.com/irazasyed for this auto Vue.use() when
// installing from unpkg or similar.

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePlyrPlugin);
}

exports.VuePlyr = VuePlyr;
exports.VuePlyrPlugin = VuePlyrPlugin;
exports.default = VuePlyrPlugin;
