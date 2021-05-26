<template>
	<view class="Purchase-view">
		<view class="pur-flex">
			<!-- //left -->
			<view class="pur-left widthing">
				<view class="pur-top ellipsis">
					<text>{{recommend[0].title}}</text>
					<text>{{recommend[0].lable}}</text>
				</view>
				<view class="pur-img">
					<block v-for="(item,index) in recommend[0].image" :key='index'>
						<view class="">
							<image :src="item.img" mode="widthFix"></image>
						</view>
					</block>
				</view>
			</view>
			<!-- //right -->
			<view class="pur-right widthing">
				<view class="pur-right-top" style="border-bottom: 1rpx solid #f1f1f1;">
					<view class="pur-top two ellipsis">
						<text class='pl5'>{{recommend[1].title}}</text>
						<text>{{recommend[1].lable}}</text>
					</view>
					<view class="pur-right-img">
						<block v-for="(item,index) in recommend[1].image" :key='index'>
							<view class="">
								<image :src="item.img" mode="widthFix"></image>
							</view>
						</block>
					</view>
				</view>
				<!-- //Rbottom -->
				<view class="">
					<view class="pur-top three ellipsis">
						<text class='pl5'>{{recommend[2].title}}</text>
						<text>{{recommend[2].lable}}</text>
					</view>
					<view class="pur-right-img">
						<block v-for="(item,index) in recommend[2].image" :key='index'>
							<view class="">
								<image :src="item.img" mode="widthFix"></image>
							</view>
						</block>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{recommend:Array},
		mounted(){
			
		},
		data(){
			return{
				
			}
		},
		methods:{
			
		},
	}
</script>

<style scoped lang='stylus'>
	.ellipsis
		overflow:hidden;
		text-overflow:ellipsis; 
		white-space:nowrap; 
	.pl5
		padding 0 10upx 0 10upx
	.widthing
		width 50%
		box-sizing border-box
	.two
		text:nth-child(2)
			color #ff7594 !important
	.three
		text:nth-child(2)
			color #96b06f !important
	.Purchase-view
		background #FFF
		margin 0 10upx
		border-radius 10upx
		.pur-flex
			display flex
			align-items center
			.pur-left
				border-right 1rpx solid #f1f1f1
				.pur-top
					display flex
					align-items center
					height 50upx
					padding-left 9upx
					text
						margin-bottom 16upx
					:nth-child(1)
						font-size 30upx
						font-weight bold
					:nth-child(2)
						font-size 24upx
						color red
						padding-left 10upx
				.pur-img
					display flex
					flex-wrap wrap
					view
						display flex
						justify-content center
						align-items center
						width 50%
						height 164upx
						image
							width 150upx
							height 150upx !important
						:nth-child(n+3)
							padding-top 50upx
			.pur-right
				display flex
				flex-wrap wrap
				view
					width 100%
				.pur-right-img
					display flex
					align-items center
					view
						display flex
						align-items center
						justify-content center
						width 50%
						height 150upx
						image
							width 120upx
							height 120upx
</style>
