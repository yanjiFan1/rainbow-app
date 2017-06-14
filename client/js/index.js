rainbow = new Vue({
  	el: '#room',
  	delimiters: ['${', '}'],
  	data: {
  		// 直播间id
  		live_id:'',
  		accid:'4246291',
  		live_account:'',
  		live_token:'',
  		roomid:'8898958',
  		// 用户卡片显示
    	cardDisplay:false,
        // 玩法介绍
        introDisplay:false,
        // 下载广告
        adDisplay:true,
    	// 直播结束
    	is_live_end:false,
    	game:{
    		showTip:false,
    		showClock:false,
    		tipClass:'',
    		tip:'',
    		time:5,
    		poker_group:[false,false,false],
    		mask:[false,false,false],
    	}
  	},
  	mounted:function(){
  		this.$nextTick(function () {
  			var _this = this;
  			// 获取直播间数据
  			$.ajax({
                method: "GET",
                url: "/api/rainbow/liveDetail",
                dataType: 'json',
                data: {
                	liveId:_this.getQueryString('liveId'),
   					// userId:2
                },
                success: function(data) {
                    // _this.roomid = data.object.info.chat_room_id;
                    // _this.accid = data.object.info.userId;
                },
                error: function(a, b, c) {
                    console.log("接口出问题啦");
                }
            });
  		})
  	},
  	methods: {
  		// 获取url参数
        getQueryString:function(name){
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return unescape(r[2]);
            }
            return null;
        },
  		// 用户卡片
    	showCard:function(id){
    		this.cardDisplay = true;
    	},
    	// 关闭弹框
    	closeCard:function(){
    		this.cardDisplay = false;      		
    	},
        // 显示玩法介绍
        showIntro:function(){
            this.introDisplay = true;
        },
        // 关闭玩法介绍
        closeIntro:function(){
            this.introDisplay = false;
        },
        // 关闭下载
        closeAd:function(){
            this.adDisplay = false;
        }
  	}
})