<template>
	<view class="search-view">
		<view class="search-men">
			<image src="/static/search/logo.png" mode="widthFix"></image>
		</view>
		<view class="search-ing" @click="searCh()">
			<image src="/static/search/sousuo.png" mode="widthFix"></image>
			<input type="text" placeholder="搜索商品" disabled="" />
		</view>
		<view class="search-men">
			<image src="/static/search/saoma.png"></image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			searCh(){
				uni.navigateTo({
					url:'../search/search'
				})
			}
		}
		
	}
</script>

<style scoped lang="stylus">
	.search-view
		display flex
		justify-content space-between
		align-items center
		height 100upx
		background #fe001d
		image
			width 50upx
			height 50upx
		.search-ing
			display flex;
			flex-direction row
			flex 1
			position relative
			background #FFFFFF
			height 70upx
			border-radius 50upx
			input
				height 70upx
				line-height 70upx
				width 100%
				font-size 30upx
				color #b2b2b2
				padding-left 80upx
			image
				width 35upx
				height 35upx
				position absolute
				left 30upx
				align-self center
		.search-men
			width 50upx
			height 50upx
			padding 0 20upx
</style>
