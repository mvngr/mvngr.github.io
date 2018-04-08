$(document).ready(function(){
	$('input#head').change(function(){
		change($(this))
	})
	$('input#body').change(function(){
		change($(this))
	})
	$('input#arms').change(function(){
		change($(this))
	})
	$('input#legs').change(function(){
		change($(this))
	})
	$('#rn').click(function(){
		change($('input#head').val(randomInteger(0,240)))
		change($('input#body').val(randomInteger(240,490)))
		change($('input#arms').val(randomInteger(250,550)))
		change($('input#legs').val(randomInteger(480,800)))
	});
});
function change(DOM){
	$('rect#' + $(DOM).attr('id') + 'cpr').attr('height', $(DOM).val())
	$(DOM).html($(DOM).html()) //upd
}
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand)
    return rand
}