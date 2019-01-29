$(document).ready(function() {
	var deleteBtn = $('.bd .Sfinde_OrderTop img')
	deleteBtn.click(function(){
		var that = $(this).parents('.Sfinde_OrderTop')
		var oid = that.attr('oid');
		var data = {'oid':oid}
		$.ajax({
			url: 'APIpath',
			type: 'POST',
			dataType: 'JSON',
			data: data,
			timeout:10000,
			success:function(res,status,xhr){
				console.log(res)
				if (res.code == ?) {
					that.parents('li').remove()
				}
			},
			error:function(xhr,err,status){},
			complete:function(xhr,status){}
		})
	})
});