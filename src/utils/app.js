const request=require('request')
const yargs=require('yargs')
var url='http://api.weatherstack.com/current?access_key=164890d8405cff58a14de573b1b8863a&query='

var tempurl=url


var url1='http://us1.locationiq.com/v1/search?key=pk.63917e3e9c736eb305aaa56b57aae3e8&q='
var temp=url1
//geocoding

const findweather=(arg,callback1,callback2)=>{
    temp=url1
    url1+=arg
    url1+="&format=json"
    callback1(url1,callback2)
}
const geocode=(val,res)=>{findweather(val,(url1,callback)=>{
    request({url:url1,json:true},(error,response)=>{
        try{
            
            var lat=response.body[0].lat
            var lon=response.body[0].lon
            lat=lat.toString()
            lon=lon.toString()
            url=tempurl
            url+=lat
            url+=','
            url+=lon
            request({url:url,json:true},(error,response)=>{
                if(error || response.length==0){
                    return res.send({error:'Non available place entered'})
                }
                callback(response.body,res)
                
            })
        }catch(e){
            return res.send({error:'Non available place entered'})
        }
    })
},(ans,res)=>{
    
    return res.send({
        ans
    })
})}

module.exports={
    geocode:geocode
}