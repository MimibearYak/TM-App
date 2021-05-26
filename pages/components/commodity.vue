<template>
	<view class="comm-view">
		<block v-for="(item,index) in commdata" :key='index'>
			<view class="comm-card">
				<view class="comm-img">
					<image :src="item.image" mode=""></image>
				</view>
				<view class="comm-title">
					{{item.title}}
				</view>
				<view class="comm-left">
					<text>{{item.freight}}</text>
					<text>预计{{item.Duration}}h发货</text>
				</view>
				<view class="comm-right">
					￥{{item.Price}}
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props:{
			commdata:Array
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang='stylus'>
	.comm-view
		display flex
		flex-wrap wrap
		padding 0 5rpx
		.comm-card
			width calc(50% - 5rpx*2)
			margin 5rpx
			background #fff
			border-radius 10upx
			.comm-img
				height 450rpx
				image
					width 100%
					height 450rpx
					border-top-left-radius 10upx
					border-top-right-radius 10upx
			.comm-title
				display -webkit-box
				-webkit-line-clamp 2
				-webkit-box-orient vertical
				height 100rpx
				line-height 50rpx
				padding-left 10rpx
				font-size 28rpx
				overflow hidden
				text-overflow ellipsis
			.comm-left
				display flex
				align-items center
				height 50rpx
				padding-left 10rpx
				font-size 20rpx
				text-align center
				text
					padding 3rpx 4rpx
					border-radius 10rpx
				text:nth-of-type(1)
						margin-right 10rpx
						border 2rpx solid #1183e6
						color #1183E6
				text:nth-of-type(2)
						border 2rpx solid red 
						color red
			.comm-right
				height 50rpx
				line-height 50rpx
				padding-left 10rpx
				font-size 30rpx
				font-weight bold
				color #f3022f
				
</style>
