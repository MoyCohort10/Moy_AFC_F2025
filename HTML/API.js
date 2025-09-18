alert("hello")

//https://dog.ceo/api/breeds/image/random this is the complete URL

let btn = document.getElementsByTagName("button")[0]
let image= document.getElementsByTagName("img")[0]

const BASE_URL = "https://dog.ceo/dog-api/"

btn.addEventListener("click",()=> {
    console.log("hello")
    let route = "/breeds/image/random"
    let endpoint = `${BASE_URL}${route}`
    console.log(endpoint)
    fetch(endpoint)
        .then((response)=>{
            if(response.ok){
                //parse the response
                let result= response.json()
                return result
            }else{
                throw new Error("Colby broke it!!!!!")
            }
        })
        .then((parsedData)=>{
            console.log("parsed data", parsedData.message)
            image.setAttribute("src",parsedData.message)
        })
        .catch((errors)=>{
            console.log("Errors",errors)
        })
})


