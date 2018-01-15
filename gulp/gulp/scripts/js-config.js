'use strict';

const config = require('../gulp-config');
const path = require('path');

module.exports = {
	"js": {
		"qgov-environment": [
			path.resolve(config.src.script, 'lib/modernizr.custom.55956.js'),
			path.resolve(config.src.script, 'jquery.debug.js'),
			path.resolve(config.src.script, 'jquery.migrate.js'),
			path.resolve(config.src.script, 'qgov-environment.js'),
		],

		"loader": [
			path.resolve(config.src.script, 'loader.js'),
		],

		"qgov": [
			"bower_components/generate-id/dist/generate-id.js",
			"bower_components/purl/purl.js",
			path.resolve(config.src.script, 'lib/jquery.history.js'),
			"bower_components/jquery.scrollTo/jquery.scrollTo.js",
			path.resolve(config.src.script, 'jquery.keyboard-focus.js'),
			path.resolve(config.src.script, 'lib/jquery.aria.js'),
			path.resolve(config.src.script, 'jquery.aria.key-nav.js'),
			path.resolve(config.src.script, 'jquery.aria.labelledby.js'),
			path.resolve(config.src.script, 'lib/jquery.accessibleText.js'),
			path.resolve(config.src.script, 'jquery.resize-events.js'),
			path.resolve(config.src.script, 'jquery.frag-linx.js'),
			path.resolve(config.src.script, 'lib/jquery.butterfly.js'),
			path.resolve(config.src.script, 'lib/tabs/jquery.mousewheel.min.js'),
			path.resolve(config.src.script, 'lib/tabs/jquery.slidetabs.min.js'),
			"bower_components/relevance/dist/relevance.js",
			path.resolve(config.src.script, 'lib/jquery.relevance.legacy-API.js'),
			"bower_components/qgovau-jquery.autocomplete/src/autocomplete.js",
			path.resolve(config.src.node_modules, 'mustache/mustache.min.js'),
			path.resolve(config.src.script, 'forms/autocomplete.js'),
			path.resolve(config.src.script, 'utils/qg-error-handler.js'),
			path.resolve(config.src.script, 'qgov-core.js')
		],

		"qgov-index": [
			path.resolve(config.src.script, 'jquery.smartresize.js'),
			path.resolve(config.src.script, 'jquery.flex-grid.js'),
			path.resolve(config.src.script, 'jquery.linked-up.js'),
			path.resolve(config.src.script, 'page-model/ia-highlight.js'),
			path.resolve(config.src.script, 'jquery.got-style.js'),
			path.resolve(config.src.script, 'jquery.compact.js'),
			path.resolve(config.src.script, 'jquery.compact.slider.js'),
			path.resolve(config.src.script, 'jquery.compact.slideshow.js'),
			path.resolve(config.src.script, 'jquery.shorter-list.js'),
			path.resolve(config.src.script, 'jquery.compact.init.js'),
			path.resolve(config.src.script, 'jquery.slide-runner.js'),
			path.resolve(config.src.script, 'jquery.section-runner.js'),
			path.resolve(config.src.script, 'template/initialise-index.js')
		],

		"qgov-large-app": [
			path.resolve(config.src.script, 'page-model/large-applications.js')
		],

		"qgov-misc": [
			path.resolve(config.src.script, 'jquery.forms.js'),
			path.resolve(config.src.script, 'pattern/scrollable.js'),
			path.resolve(config.src.script, 'jquery.status.js'),
			path.resolve(config.src.script, 'jquery.linked-up.js')
		],

		"qgov-maps": [
			path.resolve(config.src.script, 'lib/maps/markerclusterer.js'),
			"bower_components/jquery-jsonp/src/jquery.jsonp.js",
			"bower_components/history.js/scripts/bundled-uncompressed/html4+html5/jquery.history.js",
			path.resolve(config.src.script, 'utils/data.js'),
			"bower_components/markdown/lib/markdown.js",
			path.resolve(config.src.script, 'utils/template.js'),
			path.resolve(config.src.script, 'lib/jquery.pajinate.js'),
			path.resolve(config.src.script, 'pattern/qgov-maps.js')
		],

		"qgov-maps-counters": [
			path.resolve(config.src.script, 'lib/maps/markerclusterer.js'),
			path.resolve(config.src.script, 'pattern/qgov-maps-counters.js')
		],

		"qgov-counters": [
			path.resolve(config.src.script, 'lib/maps/markerclusterer.js'),
			"bower_components/jquery-jsonp/src/jquery.jsonp.js",
			path.resolve(config.src.script, 'utils/data.js'),
			path.resolve(config.src.script, 'lib/jquery.pajinate.js'),
			"bower_components/markdown/lib/markdown.js",
			path.resolve(config.src.script, 'utils/template.js'),
			path.resolve(config.src.script, 'pattern/qgov-counters.js')
		],

		"qgov-view-result": [
			"bower_components/jquery-jsonp/src/jquery.jsonp.js",
			path.resolve(config.src.script, 'utils/data.js'),
			"bower_components/markdown/lib/markdown.js",
			path.resolve(config.src.script, 'utils/template.js'),
			path.resolve(config.src.script, 'pattern/qgov-view-result.js')
		],

		"qgov-maps-directory": [
			"bower_components/jQuery.XDomainRequest/jQuery.XDomainRequest.js",
			"bower_components/markdown/lib/markdown.js",
			path.resolve(config.src.script, 'utils/template.js'),
			"bower_components/jquery-jsonp/src/jquery.jsonp.js",
			path.resolve(config.src.script, 'utils/data.js'),
			"bower_components/json3/lib/json3.js",
			"bower_components/history.js/scripts/bundled-uncompressed/html4+html5/jquery.history.js",
			"bower_components/leaflet/dist/leaflet-src.js",
			"bower_components/leaflet.markerclusterer/dist/leaflet.markercluster-src.js",
			"bower_components/leaflet.fullscreen/Control.FullScreen.js",
			path.resolve(config.src.script, 'jquery.status.js'),
			path.resolve(config.src.script, 'lib/jquery.pajinate.js'),
			path.resolve(config.src.script, 'pattern/qgov-maps-directory.js')
		],

		"init": [
			"bower_components/doubletaptogo/index.js",
			path.resolve(config.src.script, 'template/layout.js'),
			path.resolve(config.src.script, 'jquery.flowt.js'),
			path.resolve(config.src.script, 'jquery.expandable-content.js'),
			path.resolve(config.src.script, 'template/nav-section.js'),
			path.resolve(config.src.script, 'jquery.compact-form-labels.js'),
			path.resolve(config.src.script, 'template/initialise.js'),
			path.resolve(config.src.script, 'template/column-heights.js'),
			path.resolve(config.src.script, 'jquery.figures.js'),
			path.resolve(config.src.script, 'document-links.js'),
			path.resolve(config.src.script, 'template/page-options.js'),
			path.resolve(config.src.script, 'licence.js'),
			path.resolve(config.src.script, 'template/print-link-urls.js'),
			path.resolve(config.src.script, 'jquery.fat-footer.js'),
			"bower_components/jquery.cookie/jquery.cookie.js",
			path.resolve(config.src.script, 'pattern/tabs.js')
		],

		"placeholders": [
			"bower_components/placeholders/lib/utils.js",
			"bower_components/placeholders/lib/main.js",
			"bower_components/placeholders/lib/adapters/placeholders.jquery.js"
		],

		"ie-layout": [
			path.resolve(config.src.script, 'oldIE.js'),
			"bower_components/placeholders/lib/utils.js",
			"bower_components/placeholders/lib/main.js",
			"bower_components/placeholders/lib/adapters/placeholders.jquery.js",
			path.resolve(config.src.script, 'jquery.resize-events.js'),
			path.resolve(config.src.script, 'lib/jquery.transformer-layout.js'),
			path.resolve(config.src.script, 'max-width-ie6.js'),
			"bower_components/excanvas/silverlight/excanvas.js"
		],

		"qgov-video": [
			path.resolve(config.src.script, 'lib/adobe.detect-flash.js'),
			path.resolve(config.src.script, 'lib/jquery-ui-1.8.2.core.widget.mouse.slider.js'),
			path.resolve(config.src.script, 'pattern/video.js')
		],

		"qgov-forms": [
			"bower_components/html5-constraint-validation-API/dist/html5.constraintValidationAPI.js",
			path.resolve(config.src.script, 'lib/forms/form-validation.js'),
			path.resolve(config.src.script, 'form-validation-xor.js'),
			path.resolve(config.src.script, 'jquery.forms.required.js'),
			path.resolve(config.src.script, 'lib/forms/jquery.simplyCountable.js'),
			path.resolve(config.src.script, 'forms/word-count-validation.js'),
			path.resolve(config.src.script, 'forms/file-size-validation.js'),
			path.resolve(config.src.script, 'initialise-forms.js'),
			path.resolve(config.src.script, 'qg-date.js')
		],

		"before-after": [
			path.resolve(config.src.script, 'lib/jquery.beforeafter-1.3.js'),
			path.resolve(config.src.script, 'pattern/beforeafter.js')
		],

		"section-runner": [
			path.resolve(config.src.script, 'jquery.smartresize.js'),
			path.resolve(config.src.script, 'jquery.section-runner.js')
		],

		"slide-runner": [
			path.resolve(config.src.script, 'jquery.smartresize.js'),
			path.resolve(config.src.script, 'jquery.slide-runner.js')
		],

		"slideshow": [
			path.resolve(config.src.script, 'jquery.got-style.js'),
			path.resolve(config.src.script, 'jquery.compact.js'),
			path.resolve(config.src.script, 'jquery.compact.slideshow.js'),
			path.resolve(config.src.script, 'jquery.compact.slideshow.init.js')
		],

		"minicart": [
			path.resolve(config.src.script, 'pattern/minicart.js')
		],

		"data": [
			"bower_components/jquery-jsonp/src/jquery.jsonp.js",
			path.resolve(config.src.script, 'utils/data.js'),
			path.resolve(config.src.script, 'jquery.shorter-list.js'),
			"bower_components/markdown/lib/markdown.js",
			path.resolve(config.src.script, 'utils/template.js'),
			"bower_components/flot/jquery.flot.js",
			"bower_components/flot.orderBars/index.js",
			"bower_components/flot/jquery.flot.categories.js",
			"bower_components/flot/jquery.flot.pie.js",
			"bower_components/raphael/raphael.js",
			"bower_components/justgage-official/justgage.js",
			path.resolve(config.src.script, 'pattern/data.js')
		],

		"countdown-timer": [
			path.resolve(config.src.script, 'utils/template.js'),
			path.resolve(config.src.script, 'pattern/countdown-timer.js')
		],

		"click-to-chat": [
			path.resolve(config.src.script, 'contact/click-to-chat.js'),
			path.resolve(config.src.script, 'lib/contact/zoho.js')
		],

		"customer-satisfaction-survey": [
			path.resolve(config.src.script, 'analytics/customer-satisfaction-survey.js')
		],

		"data-tables": [
			path.resolve(config.src.script, 'lib/jquery.dataTables.js'),
			path.resolve(config.src.script, 'pattern/data-tables.js')
		],

		"jquery.flot": [
			"bower_components/flot/jquery.flot.js",
			"bower_components/flot/jquery.flot.time.js",
			"bower_components/flot/jquery.flot.symbol.js"
		],
		"qg-xml-reader": [
			path.resolve(config.src.script, 'qg-xml-reader.js')
		],
		"qg-loan-calculator": [
			path.resolve(config.src.script, 'qg-loan-calculator.js')
		],
		"qg-social-media": [
			path.resolve(config.src.script, 'qg-social-media.js')
		],
		"qg-quick-exit": [
			path.resolve(config.src.script, 'qg-quick-exit.js')
		],
		"qg-print-guide": [
			path.resolve(config.src.script, 'qg-print-guide.js')
		],
		"qgov-autocomplete-address": [
			path.resolve(config.src.script, 'pattern/qgov-autocomplete-address.js')
		]
	},
	"jsLibs": [
		path.resolve(config.src.script, 'lib/jquery-1.4.4.min.js'),
		path.resolve(config.src.script, 'lib/jquery-1.7.1.min.js'),
		path.resolve(config.src.script, 'lib/jquery-1.7.2.min.js'),
		path.resolve(config.src.script, 'lib/jquery-1.10.2.min.js'),
		path.resolve(config.src.script, 'lib/jquery-1.11.2.min.js'),
		path.resolve(config.src.script, 'lib/jquery-2.1.3.min.js'),
		path.resolve(config.src.script, 'lib/jquery-migrate-1.2.1.min.js'),
		path.resolve(config.src.script, 'lib/jquery-ui-1.8.13-min.js')
	],
	"footable": [	//TODO: investigate if redundant and delete
		path.resolve(config.src.node_modules, 'footable/js/footable.js'),
		path.resolve(config.src.node_modules, 'footable/js/footable.sort.js'),
		path.resolve(config.src.node_modules, 'footable/js/footable.filter.js'),
		path.resolve(config.src.node_modules, 'footable/js/footable.paginate.js'),
		path.resolve(config.src.node_modules, 'footable/js/footable.plugin.template.js')
	]
};