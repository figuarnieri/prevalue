(function($){
    $.fn.prevalue = function(prevalue){
        $(this).each(function(e, f){
            var valor = prevalue||f.getAttribute('data-prevalue')
            , id = f.id
            , style = f.classList
            ;
            console.log(style.value);
            $(f).wrap('<span class="'+style+'">').removeAttr('class').addClass('prevalue-input').before('<label for="'+id+'" class="prevalue-value">'+valor+'</label>').parent().addClass('prevalue-wrap');
            $(f).css({paddingLeft: (f.previousElementSibling.clientWidth-1)+'px'});
        });
    }
})(jQuery)