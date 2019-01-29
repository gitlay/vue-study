$(document).ready(function() {
	var chooseBtn = $(".choose-city");
	var nowProv
	var nowCity
	var nowArea
	chooseBtn.click(function(){
		var provinceList = $(".province-list");
		provinceList.fadeIn(300)
		var data = "data"
		$.ajax({
			url: './js/province.json',
			type: 'get',
			dataType: 'JSON',
			data: "",
			timeout:10000,
			success:function(res,status,xhr){
				var obj = JSON.parse(res)
				var plist = obj.province
				var node = $(".province-list .item-list")
				node.empty()
				for (var i = 0; i < plist.length; i++) {
					var item = '<div class="line" pid="'+plist[i].id+'">'+plist[i].name+'</div>'
					node.append(item)
				}
			},
			error:function(xhr,err,status){},
			complete:function(xhr,status){}
		})


		
	})
	var cityBtn = $(".province-list")
	cityBtn.delegate('.line', 'click', function() {
		var pid = $(this).attr('pid')
		nowProv = $(this).text()
		var data = {'pid':pid}
		var cityList = $(".city-list");
		cityList.fadeIn(300);
		$.ajax({
			url: './js/city.json',
			type: 'get',
			dataType: 'JSON',
			data: data,
			timeout:10000,
			success:function(res,status,xhr){
				var obj = JSON.parse(res)
				var clist = obj.city
				var node = $(".city-list .item-list")
				node.empty()
				for (var i = 0; i < clist.length; i++) {
					var item = '<div class="line" cid="'+clist[i].id+'">'+clist[i].name+'</div>'
					node.append(item)
				}
				var provinceInput = $('.provinceInput')
				provinceInput.val(pid)
			},
			error:function(xhr,err,status){},
			complete:function(xhr,status){}
		})
	});
	var areaBtn = $(".city-list")
	areaBtn.delegate('.line', 'click', function() {
		var cid = $(this).attr('cid')
		nowCity = $(this).text()
		var data = {'cid':cid}
		var areaList = $(".area-list");
		areaList.fadeIn(300);
		$.ajax({
			url: './js/area.json',
			type: 'get',
			dataType: 'JSON',
			data: data,
			timeout:10000,
			success:function(res,status,xhr){
				var obj = JSON.parse(res)
				var alist = obj.area
				var node = $(".area-list .item-list")
				node.empty()
				for (var i = 0; i < alist.length; i++) {
					var item = '<div class="line" aid="'+alist[i].id+'">'+alist[i].name+'</div>'
					node.append(item)
				}
				var cityInput = $('.cityInput')
				cityInput.val(cid)
			},
			error:function(xhr,err,status){},
			complete:function(xhr,status){}
		})
	});
	var enterBtn = $(".area-list")
	enterBtn.delegate('.line', 'click', function() {
		var that = $(this)
		var aid = that.attr('aid')
		nowArea = that.text()
		var areaInput = $('.areaInput')
		areaInput.val(aid)
		$(".province-list,.city-list,.area-list").fadeOut(300)
		var showChoose = $(".choose-city input")
		showChoose.val(nowProv+' '+nowCity+' '+nowArea)
	});
	var close = $(".close")
	close.click(function() {
		var index = close.index($(this))
		if (index == 2) {
			$(".area-list").fadeOut(300)
		}else if(index == 1){
			$(".city-list").fadeOut(300)
		}else if(index == 0){
			$(".province-list").fadeOut(300)
		}
	});


	function getIndexProvince(){
		$.ajax({
			url: './js/province.json',
			type: 'get',
			dataType: 'JSON',
			data: "",
			timeout:10000,
			success:function(res,status,xhr){
				var obj = JSON.parse(res)
				var plist = obj.province
				var node = $(".region_bom")
				node.empty()
				for (var i = 0; i < plist.length; i++) {
					var item = '<div class="line provinceList" pid="'+plist[i].id+'">'+plist[i].name+'</div>'
					node.append(item)
				}
			},
			error:function(xhr,err,status){},
			complete:function(xhr,status){}
		})
	}
	// getIndexProvince()
	$(".region_bom").delegate('.provinceList','click',function(){
		var pid = $(this).attr('pid')
		console.log(pid)
		var data = {'pid':pid}
		$.ajax({
			url: './js/city.json',
			type: 'get',
			dataType: 'JSON',
			data: data,
			timeout:10000,
			success:function(res,status,xhr){
				var obj = JSON.parse(res)
				var clist = obj.city
				var node = $(".region_bom")
				node.empty()
				for (var i = 0; i < clist.length; i++) {
					var item = '<div class="line cityList" cid="'+clist[i].id+'">'+clist[i].name+'</div>'
					node.append(item)
				}
			},
			error:function(xhr,err,status){},
			complete:function(xhr,status){}
		})
	})
	var indexCid
	$(".region_bom").delegate('.cityList','click',function(){
		indexCid = $(this).attr('cid')
		console.log(indexCid)
		var data = {'cid':indexCid}
		$.ajax({
			url: './js/area.json',
			type: 'get',
			dataType: 'JSON',
			data: data,
			timeout:10000,
			success:function(res,status,xhr){
				var obj = JSON.parse(res)
				var alist = obj.area
				var node = $(".region_bom")
				node.empty()
				for (var i = 0; i < alist.length; i++) {
					var item = '<div class="line areaList" cid="'+alist[i].id+'">'+alist[i].name+'</div>'
					node.append(item)
				}
			},
			error:function(xhr,err,status){},
			complete:function(xhr,status){}
		})
	})
	$(".region_bom").delegate('.areaList','click',function(){
		var cid = $(this).attr('aid')
		window.location.href = 'www.baidu.com?cid='+cid
	})
	$(".region_top li").click(function(){
		var this_id = $(this).attr('oid')
		if (this_id == "1") {
			var data = {'name':'123'}
			var url = "./js/province.json"
				$.ajax({
				url: url,
				type: 'get',
				dataType: 'JSON',
				data: data,
				timeout:10000,
				success:function(res,status,xhr){
					var obj = JSON.parse(res)
					var plist = obj.province
					var node = $(".region_bom")
					node.empty()
					for (var i = 0; i < plist.length; i++) {
						var item = '<div class="line provinceList" pid="'+plist[i].id+'">'+plist[i].name+'</div>'
						node.append(item)
					}
				},
				error:function(xhr,err,status){},
				complete:function(xhr,status){}
			})
		}else if(this_id == "2"){
			var url = "./js/city.json"
			var cid = indexCid
			if(indexCid){
				$.ajax({
					url: url,
					type: 'get',
					dataType: 'JSON',
					data: data,
					timeout:10000,
					success:function(res,status,xhr){
						var obj = JSON.parse(res)
						var clist = obj.city
						var node = $(".region_bom")
						node.empty()
						for (var i = 0; i < clist.length; i++) {
							var item = '<div class="line cityList" cid="'+clist[i].id+'">'+clist[i].name+'</div>'
							node.append(item)
						}
					},
					error:function(xhr,err,status){},
					complete:function(xhr,status){}
				})	
			}else {
				alert("12312312321")
			}
		}
	})
});