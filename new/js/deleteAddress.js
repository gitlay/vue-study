$(document).ready(function() {
	var Address_bomRight = $(".Address_bomRight em")
	Address_bomRight.click(function(){
		var that = $(this)
		var index = Address_bomRight.index(that)
		var aid = that.attr('aid');
		console.log(aid)
		var data = {'aid':aid}
		$.ajax({
			url: '/path/to/file',
			type: 'POST',
			dataType: 'JSON',
			data: data,
			timeout:10000,
			success:function(res,status,xhr){
				var code = res.code
				if (code == ?) {
					var par = that.parents("li")
					par.remove()
				}
			},
			error:function(xhr,err,status){},
			complete:function(xhr,status){}
		})
	})
});