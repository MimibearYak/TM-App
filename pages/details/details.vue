<template>
	<view class="">
		<view class="header-fixed backno" v-show="showAbs">
		<view class="status_bar" :style=" 'height:'+topheight.top+'px;' "></view>
		<view class="navs-image"
			:style="'height:'+topheight.height+'px;'"
			>
			<image src="../../static/details/fanhuibai.jpg" mode="widthFix"></image>
		</view>
		</view>
		<view class="header-fixed backyes" v-show="!showAbs" :style="{opacity:styleObject}">
			<view class="status_bar" :style=" 'height:'+topheight.top+'px;' "></view>
			<Top :topheight='topheight'></Top>
		</view>
		<!-- 子组件含有视频播放无法播放 -->
<!-- 		:indecator-dos 是否显示面板指示点
		:interval 自动切换时间间隔
		:duration 滑动动画时长	
		:indicator-color 指示点颜色
		:indicator-active-color 选中指示颜色
		@change current 改变时会触发 change 事件， -->
		<view class="" style="">
			<swiper :indicator-dots='dost' :interval='3000' :duration='1000'
			indicator-color="rgba(216,216,216)" indecatpr-active-color="#7a7a7a"
			@change='bannerfun'
			>
				<block v-for="(iteming,index) in imagetext[0].media" :key='index'>
					<swiper-item class='swiper-video' v-if="iteming.video!=''">
						<view class="video-btn">
							<view >
								<!-- object-fit 当视频大小与 video 容器大小不一致时视频的表现形式。
								contain：包含，fill：填充，cover：覆盖
								:show-center-play-btn 是否显示视频中间的播放按钮
								:enable-progress-gesture 是否开启控制进度的手势
								:controls 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）
								@ended 当播放到末尾时触发 ended 事件 -->
								<video id='myVideo'
								 :src="iteming.video"
								 object-fit='cover'
								 :show-center-play-btn='false'
								 :enable-progress-gesture='false'
								 :controls="contimg"
								 @play="playFun()"
								 @pause="pauseFun()"
								 @ended="endedFun()"
								 ></video>
							</view>
							<view class="video-img" @tap="videoPlay()" v-show="startVideo">
								<image src="../../static/details/bofang.svg" mode="widthFix"></image>
							</view>
						</view>
					</swiper-item>
					<block>
						<swiper-item v-for="(item,index1) in iteming.imgArray" :key='index1'>
							<view class="">
								<image class='imageurl' :src="item" mode="aspectFill" @click='previmg(index1,iteming.imgArray)'></image>
							</view>
						</swiper-item>
					</block>
				</block>
			</swiper>
		</view>
		<Price :priceetc='priceetc'></Price>
		<!-- 参数 -->
		<Parame></Parame>
		<!-- 评价 -->
		<Evaluate :comment='comment'></Evaluate>
	</view>
</template>

<script>
	import Top from './components/top.vue'
	import Price from './components/price.vue'
	import Parame from './components/parame.vue'
	import Evaluate from './components/evaluate.vue'
	var {log}=console
	const {Login} =require('../../public/logic.js')
	export default{
		data(){
			return{
				//s
				topheight:{},
				//capsule show 
				showAbs:true,
				//show opacity
				styleObject:0,
				//video context
				videoplay:{},
				//play btn show
				startVideo:true,
				//视频控件
				contimg:false,
				//图片视频数据
				imagetext:[],
				//面板指示点
				dost:true,
				//商品标题价格.
				priceetc:{},
				//评价
				comment:[],
				
				
				
			}
		},
		components:{
			Top,
			Price,
			Parame,
			Evaluate,
		},
		created() {
			this.topheight= uni.getMenuButtonBoundingClientRect()
			console.log(this.topheight)
		},
		mounted(){
			this.videoplay=uni.createVideoContext('myVideo')
		},
		onLoad(){
			//5f8bbf2823954733542169a1 5f8bbf3c23954733542169a4
			this.detRequest('5f8bbf2823954733542169a1')
		},
		onPageScroll(e){
			console.log(e)
			this.handleScroll(e.scrollTop)
		},
		methods:{
			handleScroll(num){
				if(num>90){
					let opacity=num/300
					opacity=opacity>1?1:opacity
					this.showAbs=false
					this.styleObject=opacity
				}else{
					this.showAbs=true
				}
			},
			videoPlay(){
				setTimeout(()=>{
					this.videoplay.play()
				},200)
			},
			playFun(){
					this.startVideo=false
					this.contimg=true
					this.dost=false
			},
			pauseFun(){
				this.startVideo=true
				this.contimg=false
				this.dost=true
			},
			endedFun(){
				this.startVideo=true
				this.contimg=false
				this.dost=true
			},
			bannerfun(){
				this.videoplay.pause()
			},
			//commodity detail
			async detRequest(id){
					let introduce=new this.Request(this.Urls.m().introduceUrl+'?id='+id).medeget()
					let wxcommnt=new this.Request(this.Urls.m().wxcommnt+'?id='+id).medeget()
				try{
					let res=await Promise.all([introduce,wxcommnt])
					log(res)
					this.imagetext=res[0].data
					//没有视频指示点视频控件隐藏
					let mendata=res[0].data[0]
					let describe=mendata.describe
					describe['id']=mendata.id
					this.priceetc=describe
					//评价
					this.comment=res[1].data
					this.truevideo=mendata.media[0].video
					// this.dost=this.truevideo==''?true:false
					log(this.imagetext)
				}catch(e){
					log(e)
				}
			},
			previmg(index,imgArray){
				log(index)
				log(imgArray)
				new Login(index,imgArray).previewImg()
			}
		},
	}
</script>

<style scoped lang='stylus'>
	page
		background #f2f2f2
	.backyes
		background #f8f8f8
	.backno
		background none
	.imageurl
		width 100%
		height 700upx !important
	.header-fixed
		position fixed
		top 0
		left 0
		right 0
		z-index 2
		.status_bar
			width 100%
		.navs-image
			display flex
			align-items center
			padding-left 20upx
			image
				width 28px
				height 28px
				border-radius 50%
	swiper
		height 700upx !important
		.swiper-video
			height 700upx
			background #4CD964
			.video-btn
				height 700upx
				position relative
				video
					width 100%
					height 700upx
				.video-img
					width 90upx
					height 90upx
					position absolute
					bottom 0
					left 50%
					top 50%
					transform translateX(-50%) translateY(-50%)
					image
						width 90upx
						height 90upx
						z-index 999
						border 2px solid #fff
						border-radius 50%
		
</style>
