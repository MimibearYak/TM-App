<template>
	<view class="" v-if='couponif'>
		<view class="Coupon-yin anim" :catchtouchmove='true' @click="hideCou"></view>
		<view class="Coupon-view coup-anim">
			<view class="Coupon-title">产品参数</view>
			<block v-for="(item,index) in paramedata" :key='index'>
				<div class='parame-view'>
					<div class='parame-left'>{{item.title}}</div>
					<div class='parame-right'>{{item.label}}</div>
				</div>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				//参数展示标记
				couponif:false,
				//传过来的参数数据
				paramedata:[],
				
			}
		},
		created(){
			this.$bus.$on('parames',res=>{
				console.log(res)
				let {show,data}=res
				this.couponif=show
				this.paramedata=data
			})
		},
		methods:{
			hideCou(){
				this.couponif=false
			}
		}
	}
</script>

<style scoped lang='stylus'>
	.parame-view
		display flex
		justify-content flex-start
		font-size 28rpx
		border-bottom 1px solid #F0F0F0
		height 100upx
		line-height 100upx 
		.parame-left
			width 120upx
			padding-right 25upx
		.parame-right
			flex 1
</style>
