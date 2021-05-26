<template>
	<view class="loading-men" v-if="loading">
		<image src="../../static/loading/loadtmall.gif"  mode="widthFix" v-if="picture"></image>
		<text>{{tips}}</text>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				loading:false,
				picture:true,
				tips:'不玩命加载~~'
			}
		},
		methods:{
			loAd(value){
				let{whether=false,tips='不玩命加载~~',picture=true}=value
				this.loading=whether
				this.picture=picture
				this.tips=tips
			}
		}
	}
</script>

<style scoped lang='stylus'>
	.loading-men
		display flex
		flex-direction column
		justify-content center
		align-items center
		width 200rpx
		height 100upx
		margin 0 auto
		font-size 20rpx
		color #A7A7A7
		image
			display block
			width 60rpx
			height 80upx
		
</style>
