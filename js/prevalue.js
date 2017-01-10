$.fn.prevalue = function(option){
    var item = $.extend({
          value: false
        , end: false
    }, option);
    if(this.is('[this-status="on"]'))return;
    this.each(function(e, f){
        var t = $(f)
        , valor = (typeof option==='string') ? option : (item.value||t.attr('data-prevalue'))
        , id = t.attr('id') ? t.attr('id') : 'fake_id_'+Date.now()
        , classe = f.classList.value
        , form = t.closest('form')
        , divInput = $('<span class="prevalue-input prevalue-content" contenteditable="true" />')
        , wrapInput = $('<span class="prevalue-wrap '+classe+'">')
        , textPrevalue = $('<label for="'+id+'" class="prevalue-value">'+valor+'</label>');
        ;
        t.attr('this-status', 'on').wrap(wrapInput).attr('id',id).addClass('prevalue-hidden').removeClass(classe).before(divInput).after(textPrevalue);
        divInput.on('keyup', function(e){
            t.val(this.textContent);
        });
        t.on('focus', function(g){
            $(this).parent().children('.prevalue-content').trigger('focus');
        });
        if(item.end){
            divInput.parent().addClass('prevalue-input-end');
        } else {
            divInput.css({paddingLeft: (f.nextElementSibling.clientWidth)+'px'});
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