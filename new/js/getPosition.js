$(document).ready(function() {
	var getPostion = document.getElementById('getPostion')
	function getLocation (){
		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(showPosition)
		}else{
			console.log(1231231213321321)
		}
	}
	function showPosition(position){
		var x = position.coords.latitude
		var y = position.coords.longitude
		console.log(x+" "+y)
		$.ajax({
			url: '/path/to/file',
			type: 'POST',
			dataType: 'JSON',
			data: data,
			timeout:10000,
			success:function(res,status,xhr){
				var code = res.code
				// if (code == ?) {
				// 	console.log(res)
				// }
			},
			error:function(xhr,err,status){},
			complete:function(xhr,status){}
		})
	}
	getLocation()
});