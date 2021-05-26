<template>
	<view class="">
		<view class="list-top">
			<view class="list-text">
				<text></text>
				<text>天猫板单</text>
				<text>闭着眼睛跟榜买</text>
			</view>
			<view class="list-view">
				<block v-for="(item,index) in billboard" :key='index'>
					<view class="menb">
						<image :src="item.image" mode="aspectFill"></image>	
						<text>{{item.title}}</text>
						<text>{{item.want}}想要</text>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{billboard:Array},
		data(){
			return{
				
			}
		},
	}
</script>

<style scoped lang='stylus'>
	.list-top
		margin 20upx 10upx
		.list-text
			display flex
			align-items center
			height 70rpx
			text:nth-of-type(1)
				background #2C405A
				width 10upx
				height 40upx
			text
			  :nth-of-type(2)
					font-size 30upx
					font-weight bold
					padding-left 5upx
				:nth-of-type(3)
					font-size 24upx
					color #999
					padding-left 10upx
		.list-view
			height 400rpx
			background #fff
			border-radius 9rpx
			display flex
			flex-wrap wrap
			.menb
				width 33.333%
				display flex
				flex-direction column
				justify-content center
				align-items center
				padding-bottom 2rpx
				box-sizing border-box
			.menb:nth-child(-n+3)
					border-bottom 1rpx solid #F1F1F1
				:nth-child(2)
					border-left 1rpx solid #f1f1f1
					border-right 1rpx solid #f1f1f1
				:nth-child(5)
					border-left 1rpx solid #F1F1F1
					border-right 1rpx solid #f1f1f1
				image
					width 80rpx
					height 100rpx !important
					padding-bottom 4rpx
				text:nth-of-type(1)
					font-size 28rpx
				text:nth-of-type(2)
					font-size 20rpx
					color #fe0024

</style>
