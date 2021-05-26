<template>
	<view class="swiper-top">
		<view class="">
			<swiper class="swiper" autoplay='true' :circular='true'
			 :interval='2000'	:duration='1000' @change="swiperFun">
				<block v-for="(item,index) in bannerdata" :key='index'>
					<swiper-item>
						<view class="swiper-item">
							<image :src="item.image" mode="widthFix"></image>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="instruct-view">
			<block v-for="(item,index) in bannerdata" :key='index'>
				<view class="instruct" :class="{active:index===num}"></view>
			</block>
		</view>
	</view>
</template>

<script>

	export default{
		props:{
			bannerdata:Array//super data banner data
		},
		data(){
			return{
				num:0
			}
		},
		created(){
			
		},
		methods:{
			// async banner(){
			// 	//恶心写法
			// 	// console.log(new request(urls.m().bannerget).medeget())
			// 	// new request(urls.m().bannerget).medeget().then(res=>{
			// 	// 	console.log(res)
			// 	// 	this.bannerdata=res.data
			// 	// }).catch(err=>{
			// 	// 	console.log(err)
			// 	// })
			// 	try{
			// 		let data=await 
			// 		this.bannerdata=data.data
			// 	}catch(e){
			// 		console.log(e)
			// 	}
			// },
			swiperFun(current){				
				//bannner index
				this.num=current.detail.current
			}
		}
	}
</script>

<style scoped lang="stylus">
	.active
		background #fff !important
	.swiper-top
		position relative
		height 250upx
		margin 20upx 10upx
		border-radius 10upx
		.swiper
			height 250upx !important
			background yellow
			border-radius 10upx
			overflow hidden
			.swiper-item
				height 250upx !important
				overflow hidden
				image
					width 100%
					height 250upx !important
					border-radius 10upx
		.instruct-view
			display flex
			justify-content center
			position absolute
			bottom 10upx
			left 0
			width 100%
			.instruct
				background #4e90a6
				height 10upx
				width 30upx
				border-radius 50upx
				margin 0 10upx
</style>
