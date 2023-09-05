
const f1=document.querySelector('form')
const f2=document.querySelector('input')

f1.addEventListener('submit',(e)=>{
    e.preventDefault()
    var location=f2.value
    fetch('http://localhost:3000/weather?search='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                
                document.querySelector("#ans1").innerHTML="The given location "+location+" have latitude "+data.ans.location.lat+" and longitude "+data.ans.location.lon+" with temperature of "+data.ans.current.temperature+".C"
                document.querySelector("#ans2").innerHTML="Weather description : "+data.ans.current.weather_descriptions[0]
                
            }
        })
    })
})

