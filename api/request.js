const url ='https://meituan.thexxdd.cn/api/'

 const urls= class{
	constructor() {
		
	}
	static m(){
		//banner
		let bannerget =`${url}getbanner`
		// recomment
		let getrecommurl=`${url}recom`
		//榜单
		let billboardurl=`${url}billboard`
		//card
		let commodcradurl=`${url}commodcrad`
		//commodity search
		let searchUrl=`${url}search`
		//commodity detail
		let introduceUrl= `${url}introduce` 
		//parames
		let parameterurl= `${url}parameter`
		//商品评价
		let wxcommnt=`${url}wxcommnt`
		return {
			bannerget,
			getrecommurl,
			billboardurl,
			commodcradurl,
			searchUrl,
			introduceUrl,
			parameterurl,
			wxcommnt,
			
		}
	}
	
}
export default urls