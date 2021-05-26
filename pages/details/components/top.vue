<template>
	 <view class="">
			<view class="navs-view">
				<view class="navs-image"
					:style="'height:'+topheight.height+'px;'"
				>
					<image src="../../../static/details/fanhuihei.png" mode="widthFix"></image>
				</view>
				
				<view class="navs">
					<block v-for="(item,index) in navalue" :key='index'>
						<view class="navs-nav" :class='{vavactivetext:index==num}' 
						:style=" 'height:'+topheight.height+'px;'
						+'line-height:'+topheight.height+'px;' " @click="navbtn(index)">
							{{item.name}}
						</view>
					</block>
				</view>
				
				<view class="" style="width: 20px; padding-right: 20rpx;">
					
				</view>
			</view>
	 </view>
</template>

<script>
	
	export default{
		props:{topheight:Object},
		data(){
			return{
				num:0,
				navalue:[
					{
						'name':'商品',
					},
					{
						'name':'评价',
					},
					{
						'name':'详情',
					},
				]
			}
		},
		methods:{
			navbtn(index){
				this.num=index
			}
		}
	}
</script>

<style scoped lang='stylus'>
	.vavactivetext
		border-bottom 5upx solid #3d3b32
	.navs-view
		display flex
		justify-content space-between
		align-items center
		.navs-image
			display flex
			align-items center
			width 20px
			padding-left 20rpx
			image
				width 20px
				height 20px
		.navs
			display flex
			justify-content center
			align-self center
			.navs-nav
				width 100upx
				font-size 30upx
				text-align center
				color #464230
</style>
