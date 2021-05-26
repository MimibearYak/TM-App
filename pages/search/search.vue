<template>
	<view class="">
		<view class="search-cont">
			<view class="search">
				<input type="text" placeholder-class="inputclass" confirm-type=
				"search" focus="true" placeholder="请输入关键字" v-model="searchdata"
				@confirm="onKeyInput"/>
			</view>
			<view class="search-code" @click="seArch">
				搜索
			</view>
		</view>
		<view class="search-history" v-if="ifhistory">
			<view class="search-title">
				<view class="">最近搜索</view>
				<view class="" @click="removeStorage()">
					<image src="../../static/search/searchend.svg" mode="widthFix"></image>
				</view>
			</view>
			<view class="menu-block">
				<block v-for="(item,index) in setdata" :key='index'>
					<view class="" @click="menubtn(item)">{{item}}</view>
				</block>
			</view>
		</view>
	<!-- 	<view class="search-history" v-if='!ifhistory'>
			<text class='histext'>没有搜索历史哦！</text>
		</view> -->
		
		<commodity :commdata="commdata" v-if="!searchno"></commodity>
		<loader-on ref='loadon'></loader-on>	
		<view class="empty-cart" v-if="searchno">
			<image src="../../static/search/sousuono.svg" mode="widthFix"></image>
			<text>抱歉! 在暂无相关商品</text>
		</view>
		
	</view>
</template>

<script>
	import Commodity from '../components/commodity.vue'
	var {log}=console
	export default{
		data(){
			return{
				//search value
				searchdata:'',
				//search history
				ifhistory:false,
				//search history data
				setdata:[],
				//search page
				pageid:0,
				//search result
				commdata:[],
				//no search
				searchno:false,
				//searchkey最后一次搜索 点击history作用
				searchkey:'',
				
			}
		},
		components:{
			Commodity,
		},
		created(){
			this.setStorage()
		},
		methods:{
			//search button
			/**
			 * searchdata input v-m
			 * 点击拿到input value 搜索让history隐藏 
			 * 执行getStorage存入storage
			 * */
			seArch(){
				if(this.searchdata!=''){
					this.ifhistory=false
					this.pageid=0
					this.getStorage(this.searchdata)
					this.searchData(this.searchdata)
					// this.setStorage()
				}
			},
			//同上键盘监听
			onKeyInput(e){
				let searchkey=e.detail.value
				if(searchkey!=''){
					this.ifhistory=false
					this.pageid=0
					this.getStorage(this.searchdata)
					this.searchData(searchkey)
					// this.setStorage()
				}
				
			},
			getStorage(searchkey){
				let seararray=uni.getStorageSync('search_key')||[]
				seararray.unshift(searchkey)
				uni.setStorageSync('search_key',seararray)
			},
			/**
			 * setdata history unique
			 * 获取Storage search_key 值 去重唯一
			 * 长度0 history隐藏 否则显示
			 * history 赋值
			 * */
			setStorage(){
				let setdata=uni.getStorageSync('search_key')
				let setdataArr=Array.from(new Set(setdata))
				log(setdataArr)
				if(setdataArr.length===0){
					this.ifhistory=false 
				}else{
					this.setdata=setdataArr
					this.ifhistory=true
				}
			},
			//删除Storage history 重新赋值
			removeStorage(){
				uni.removeStorageSync('search_key')
				this.setStorage()
			},
			//request interface Search for Products
			async searchData(searchkey,arg='001'){
				this.searchkey=searchkey
				const keys='?keyword='+searchkey+'&'+'page='+this.pageid
				try{
					let searchCommodity= await new this.Request(this.Urls.m().searchUrl+keys).medeget()
					if(arg=='002'){//下拉
						if(searchCommodity.data.length===0){//下拉合并
							this.$refs.loadon.loAd({whether:true,tips:'没有了.没有了.没有了',picture:false})
						}else{
							this.commdata=[...this.commdata,...searchCommodity.data]
						}
					}else{// no down
						this.$refs.loadon.loAd({whether:false})
						if(searchCommodity.data.length===0){
							this.searchno=true
						}else{
							this.searchno=false
							this.commdata=searchCommodity.data
						}
					}
				}catch(e){
					
				}
			},
			menubtn(item){
				this.ifhistory=false
				this.searchdata=item
				this.pageid=0
				this.searchData(this.searchdata)
			},
			onReachBottom(){
				this.$refs.loadon.loAd({whether:true})
				this.pageid++
				this.searchData(this.searchkey,'002')
			}
		}
	}  
</script>

<style scoped lang='stylus'>
	.histext
		font-size 30upx
		color #ccc
	.search-cont
		display flex
		justify-content space-between
		align-items center
		height 70upx
		padding 30upx 0
		background #f8f8f8
		.search
			display flex
			flex-direction row
			width 100%
			height 70upx
			line-height 70upx
			margin-left 20upx
			background #fff
			border-radius 20upx
			input
				width 100%
				height 70upx
				line-height 70upx
				padding-left 30upx
				font-size 30upx
				color #666
		.search-code
			width 150upx
			height 50upx
			font-size 30upx
			text-align center
	.search-history
		margin 20upx
		.search-title
			display flex
			justify-content space-between
			align-items center
			height 60upx
			line-height 60upx
			font-size 30upx
			font-weight block
			image
				display block
				width 36upx
				height 36upx
		.menu-block
			display flex
			flex-direction row
			justify-content flex-start
			flex-wrap wrap
			view
				font-size 27upx
				text-align center
				padding 10upx
				margin 20upx 20upx 0 0
				border-radius 6upx
				background #f7f8fa
				color #292c33
</style>

