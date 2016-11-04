$.fn.prevalue = function(option){
    var item = $.extend({
          value: false
        , end: false
    }, option);
    this.each(function(e, f){
        var valor = (typeof option==='string') ? option : (item.value||f.getAttribute('data-prevalue')) 
        , id = f.id
        ;
        if(id.trim().length===0){
            id = 'fake_id_'+Date.now();
            f.id = id;
        }
        $(f).wrap('<span class="'+f.classList+'">').removeAttr('class data-prevalue').addClass('prevalue-input').before('<label for="'+id+'" class="prevalue-value">'+valor+'</label>').parent().addClass('prevalue-wrap');
        $(f).css({paddingLeft: (f.previousElementSibling.clientWidth)+'px'});
        if(item.end){
            var label = $(f.previousElementSibling);
            $(f).css({paddingLeft: 0}).addClass('prevalue-hidden').removeClass('prevalue-input');
            label.before('<div class="prevalue-input prevalue-end-input" contenteditable="true" />').parent().addClass('prevalue-end');
            label.prev().on('input', function(g){
                $(f).val(this.innerHTML+item.value)
            });
            $(f).on('focus', function(g){
                $(this).parent().children('.prevalue-input').trigger('focus');
            })
        }
    });
};
$(function(){
    document.querySelectorAll('[data-prevalue]').forEach(function(e, f){
        $(e).prevalue({value: e.dataset.prevalue});
    });
    document.querySelectorAll('[data-prevalue-end]').forEach(function(e, f){
        $(e).prevalue({value: e.dataset.prevalueEnd, end: true});
    });
})