<template>
	<view class="content">
		<view>
			<Search></Search>
			<Swipers :bannerdata=bannerdata></Swipers>
			<Purchase :recommend=recommend></Purchase>
			<List :billboard=billboard></List>
			<Commodity :commdata=commdata></Commodity>
			<loader-on ref='loadon'></loader-on>
		</view>
	</view>
</template>

<script>
	import Search from './component/search.vue'
	import Swipers from './component/swiper.vue'
	import Purchase from './component/purchase.vue'
	import List from './component/list.vue'
	import Commodity from '../components/commodity.vue'
	export default{
		data(){
			return{
				//banner
				bannerdata:[],
				//recommend
				recommend:[],
				//板单
				billboard:[],
				//card
				commdata:[],
				pageid:0,
			}
		},
		mounted(){
			this.indexRequest()
		},
		methods:{
			async indexRequest(){
				let banner=new this.Request(this.Urls.m().bannerget).medeget()
				let recomm=new this.Request(this.Urls.m().getrecommurl).medeget()
				let billboard=new this.Request(this.Urls.m().billboardurl).medeget()
				//card
				let commodcrad=new this.Request(this.Urls.m().commodcradurl+'?page='+this.pageid).medeget()
				try{
					//同时并发请求
					let res=await Promise.all([banner,recomm,billboard,commodcrad])
					console.log(res)
					//banner data 
					this.bannerdata=res[0].data
					this.recommend=res[1].data
					this.billboard=res[2].data
					this.commdata=res[3].data
				}catch(e){
					
				}
			},
			async pullUp(){
				try{
					let commodcrad=await new this.Request(this.Urls.m().commodcradurl+'?page='+this.pageid).medeget()
					console.log('到底了')
					console.log(commodcrad)
					if(commodcrad.data.length==0){
						this.$refs.loadon.loAd({whether:true,tips:'已经没有啦~~',picture:false})
					}else{
						this.commdata=[...this.commdata,...commodcrad.data]
					}
				}catch(e){
					
				}
			}
		},
		components:{
			Search,
			Swipers,
			Purchase,
			List,
			Commodity,
			
		},
		onReachBottom(){
			this.$refs.loadon.loAd({whether:true})
			this.pageid++
			this.pullUp()
		}
	}
</script>

<style scoped lang='stylus'>
	page
		background-color #f4f4f4
</style>
