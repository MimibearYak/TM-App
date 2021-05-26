<template>
	<view class="evaluate-view" v-if="comment[0].commlen>0">
		<view class="evaluate-top">
			<view class="">商品评价({{comment[0].commlen}})</view>
			<view class='evaluate-rig'>
				<text>查看全部</text>
				<image src='../../../static/details/quanbu.svg' mode="widthFix"></image>
			</view>
		</view>
		<view class='evaluate-class' v-if="comment[0].commtag.length>0">
			<block v-for="(item,index) in comment[0].commtag" :key='index'>
				<text>{{item.label}}({{item.num}})</text>
			</block>
		</view>
		<view class="evaluate-User">
			<block v-for="(item,index) in comment[0].parcontent" :key='index'>
				<view>
					<view class='USering'>
						<image :src='item.avatarUrl' mode="widthFix"></image>
						<text>{{item.nickName}}</text>
					</view>
					<view class='USering-text'>{{item.text}}</view>
					<view class='USering-time'>
						<text>{{item.time}}</text>
						<text>颜色:{{item.color}}</text>
						<text>尺码:{{item.size}}</text>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{comment:Array},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang='stylus'>
	.evaluate-view
		padding 20upx
		margin-top 20upx
		background #FFF
		.evaluate-top
			display flex
			justify-content space-between
			align-items center
			height 50upx
			font-size 30upx
			.evaluate-rig
				display flex
				align-items center
				image
					width 27upx
					height 27upx
					padding-left 20upx
		.evaluate-class
			display flex
			flex-wrap warn
			margin 15upx 0
			font-size 25upx
			text
				padding 15upx
				margin 0 14upx 14upx 0
				border-radius 50upx
				background #feecea
		.evaluate-User
			font-size 25upx
			color #999
			.USering
				display flex
				align-items center
				height 50upx
				image
					width 50upx
					height 50upx !important
					border-radius 50%
				text
					padding-left 10rpx
			.USering-text
				display flex
				overflow hidden
				line-height 40upx
				text-overflow ellipsis
				-webkit-line-clamp:2
				-webkit-box-orient:vertical
				color #333
			.USering-time
				display flex
				align-items center
				height 50upx
				text:nth-child(1)
					padding-right 10upx
					
</style>
