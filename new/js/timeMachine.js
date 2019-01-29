$(document).ready(function() {
	var date = new Date()
	var year = date.getFullYear()
	var month = date.getMonth()+1
	var day = date.getDate()
	var week = date.getDay()
	var dateList = new Array()
	var today = year+'年'+month+'月'+day+'日'
	var hour = date.getHours()+1
	dateList.push(today)
	$("#picktime").val(today+' '+hour+':00')
	var dateNumber
	for (var i = 1; i < 7; i++) {
		if (month==1||month==3||month==5||month==7||month==8||month==10||month==12) {
			if (day+1>31) {
				day = day+1 -31
				month = month+1
				if (month+1>12) {
					month = month-12
					year = year+1
				}
			}else{
				day = day+1
			}
		}else if (month==4||month==6||month==9||month==11) {
			if (day+1>30) {
				day = day+1 - 30
				month = month+1
			}else{
				day = day+1
			}
		}else if(month == 2){
			if (year%4!=0) {
				if (day+1>28) {
					day = day+1-28
					month = month+1
				}else{
					day = day+1
				}
			}else if (year%4 == 0) {
				if (day+1>29) {
					day = day+1-29
					month = month+1
				}else{
					day = day+1
				}
			}
		}
		dateNumber  = year+'年'+month+'月'+day+'日'
		dateList.push(dateNumber)
	}
	for (var i = 0; i < dateList.length; i++) {
		var choose_box = $(".left-choose-box .choose-box")
		if (i==0) {
			var item = '<div class="date-line" id="date-selected">'+dateList[i]+'</div>'
		}else{
			var item = '<div class="date-line">'+dateList[i]+'</div>'
		}
		choose_box.append(item)
	}
	var left_choose_box = $(".left-choose-box .choose-box")
	left_choose_box.delegate('.date-line', 'click', function() {
		var that = $(this)
		that.attr('id', 'date-selected').siblings('.date-line').attr('id', '');
	});
	var time_select = $('.time-line')
	time_select.click(function() {
		var that = $(this)
		that.attr('id', 'time-selected').siblings('.time-line').attr('id', '');
	});
	var cancel = $(".cancel")
	cancel.click(function(){
		var timeMachine = $(".timeMachine")
		timeMachine.fadeOut(300)
		var date_line = $('.date-line')
		date_line.eq(0).attr('id', 'time-selected').siblings('.date-line').attr('id', '');
		var time_line = $('.time-line')
		time_line.eq(0).attr('id', 'time-selected').siblings('.date-line').attr('id', '');
	});
	var enter = $(".enter")
	enter.click(function() {
		var date_choose = $("#date-selected").text()
		var time_choose = $("#time-selected").text()
		$("#picktime").val(date_choose+" "+time_choose)
		var timeMachine = $(".timeMachine")
		timeMachine.fadeOut(300)
	})
	var choose_btn = $('.choose-time')
	choose_btn.click(function() {
		console.log($(this))
		var timeMachine = $(".timeMachine")
		timeMachine.fadeIn(300);
	});
});