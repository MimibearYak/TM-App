const request =class{
	constructor(url,arg) {
	  this.url=url
		this.arg=arg
	}
	modepost(){
		return new Promise((resolve,reject)=>{
			uni.request({
				url:this.url,
				method:'POST',
				data:this.arg,
			}).then(res=>{
				resolve(res[1].data)
			}).catch(err=>{
				reject(err)
			})
		})
	}
	medeget(){
		return new Promise((resolve,reject)=>{
			uni.request({
				url:this.url,
				
			}).then(res=>{
				resolve(res[1].data)
			}).catch(err=>{
				reject(err)
			})
		})
	}
}
export default request