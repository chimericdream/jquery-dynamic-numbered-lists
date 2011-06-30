(function( $ ){
    $.fn.dynumlist = function( options ) {

        var settings = {
            'start' : 1
        };

        if ( options ) {
            $.extend( settings, options );
        }

        var nextstart = settings['start'];
        var size = 0;

        return this.each(function() {
            nextstart += size;
            $(this).attr('start', nextstart);
            size = $(this).children().size();
        });
    };
})( jQuery );