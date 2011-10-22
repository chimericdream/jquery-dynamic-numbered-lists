;(function($, window, document, undefined) {
    var pluginName = 'dynumlist',
        defaults = {
            start: 1
        },
        size = 0;

    function Plugin(element, options, size) {
        this.element   = element;
        this.options   = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name     = pluginName;
        
        this.init(size);
    }

    Plugin.prototype.init = function(size) {
        var nextstart = this.options['start'];
        nextstart += size;
        $(this.element).attr('start', nextstart);
    };

    Plugin.prototype.getSize = function() {
        return $(this.element).children().size();
    };

    $.fn.dynumlist = function(options) {
        var size = 0;
        
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                var list = new Plugin(this, options, size);
                $.data(this, 'plugin_' + pluginName, list);
                
                size += list.getSize();
            }
        });
    };
})(jQuery, window, document);