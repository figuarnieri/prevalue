$.fn.prevalue = function(option){
    var item = $.extend({
          value: false
        , end: false
    }, option);
    this.each(function(e, f){
        var t = $(f)
        , valor = (typeof option==='string') ? option : (item.value||t.attr('data-prevalue')) 
        , id = t.attr('id')
        , form = t.closest('form');
        ;
        if(id.trim().length===0){
            id = 'fake_id_'+Date.now();
            t.attr('id', id);
        }
        t.wrap('<span class="'+f.classList+'">').removeAttr('class data-prevalue').addClass('prevalue-input').before('<label for="'+id+'" class="prevalue-value">'+valor+'</label>').parent().addClass('prevalue-wrap');
        t.css({paddingLeft: (f.previousElementSibling.clientWidth)+'px'});
        if(item.end){
            var label = $(f.previousElementSibling);
            t.css({paddingLeft: 0}).addClass('prevalue-hidden').removeClass('prevalue-input');
            label.before('<div class="prevalue-input prevalue-end-input" contenteditable="true" />').parent().addClass('prevalue-end');
            label.prev().on('input', function(g){
                /@/i.test(item.value) ? t.val(this.innerHTML+item.value) : t.val(this.innerHTML);
            });
            t.on('focus', function(g){
                $(this).parent().children('.prevalue-input').trigger('focus');
            })
        }
        if(/^((ht|f)tp(|s)):/gmi.test(item.value)){
            if(!form.hasClass('prevalue-form')){
                form.addClass('prevalue-form');
                form.on('submit', function(g){
                    t.prev().addClass('prevalue-hidden');
                    t.css({paddingLeft: 0}).val(item.value+f.value);
                })
            }
        }
    });
};
$(function(){
    $('[data-prevalue]').each(function(e, f){
        $(f).prevalue({value: f.dataset.prevalue});
    });
    $('[data-prevalue-end]').each(function(e, f){
        $(f).prevalue({value: f.dataset.prevalueEnd, end: true});
    });
})