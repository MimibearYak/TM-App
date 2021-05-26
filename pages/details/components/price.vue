<template>
	<view class="">
		<view class="price-view">
			<view class="">当前价</view>
			<view class="price-list">
				<text>￥{{priceetc.Trueprice}}</text>
				<text class='scribing'>原价￥{{priceetc.Crossedprice}}</text>
			</view>
		</view>
		
		<view class="Discount-view">
			<text>{{priceetc.Goldcoin}}</text>
			<text>{{priceetc.integral}}</text>
		</view>
		
		<view class="price-Ttile">
			<view class="titleing">{{priceetc.title}}</view>
			<view class="price-Image" @click="parameFun(priceetc.id)">
				<image src="../../../static/details/canshu.svg" mode="widthFix"></image>
				<text>参数</text>
			</view>
		</view>
		<view class="Monthly">销量{{priceetc.sales_volume}}</view>
	</view>
</template>

<script>
	export default{
		props:{priceetc:Object},
		
		data(){
			
		},
		
		methods:{
			async parameFun(id){
				try{
					let parameter= await new this.Request(this.Urls.m().parameterurl+'?id='+id).medeget()
					console.log(parameter)
					this.$bus.$emit('parames',{show:true,data:parameter.data})
				}catch(e){
					console.log(e)
				}
			},
		}
	}
</script>

<style scoped lang='stylus'>
	.price-view
		display flex
		flex-direction column
		justify-content center
		height 120upx
		padding-left 20upx
		font-size 35upx
		color #fff
		background: linear-gradient(to right,#ff4400,#ff8000)
		.price-list
			display flex
			align-items center
			line-height 50upx
			text:nth-child(1)
				font-size 40upx 
				padding-left 10upx
			text:nth-child(2)
				font-size 25upx
			.scribing
				text-decoration line-through;
				color #b5b5b5 !important
				padding-left 7rpx
	.Discount-view
		display flex
		align-items center
		height 100upx
		padding 0 20upx
		font-size 25upx
		background #FFF
		text:nth-child(-n+2)
			height 30upx
			line-height 30upx
			text-align center
			padding 10upx
			margin-right 10upx
			border-radius 10upx
			background #ffeaef
		text:nth-child(3)
			flex 1
			text-align right
	.price-Ttile
		display flex
		align-items center
		height 100upx
		padding 0 20upx
		font-size 35upx
		background #fff
		.titleing
			flex 1
			overflow hidden
			text-overflow ellipsis
			display -webkit-box
			-webkit-line-clamp:2
			-webkit-box-orient:vertical
		.price-Image
			display flex
			flex-direction column
			justify-content center
			align-items flex-end
			width 150upx
			font-size 25upx
			image
				width 50upx
				height 50upx
				padding-bottom 5upx
	.Monthly
		display flex
		justify-content flex-end
		height 70upx
		line-height 70upx
		padding-right 20upx
		color #999
		font-size 25upx 
		background #fff	
</style>
