//fetch("https://jsonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email")
const statusRef = document.querySelector(".subscription")
const videoRef = document.querySelector(".showvid")

//1. Then
fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    return response.json()
}).then(data => {
    console.log(data)
    emailRef.innerHTML = data.emailRef
})

//2. Async/Await
async function main(){
    const resp  = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await resp.json()
    console.log(data)
    emailRef.innerHTML = data.email
}

main()

function getSubscriptionStatus(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP")
        }, 2000)
    })
}

//getSubscriptionStatus().then(response => console.log(response))
async function main2() {
    const status = await getSubscriptionStatus()
    statusRef.innerHTML = status
}
main2()

function getVideo(subcriptionStatus){
    return new Promise((resolve, reject) => {
        if(subcriptionStatus === "VIP"){
            resolve("show video")
        }
        else if(subcriptionStatus === "FREE"){
            resolve("show trailer")
        }
        else{
            reject("no video")
        }
    })
}

async function main3(){
    const status = await getSubscriptionStatus()
    try{
        console.log(await getVideo(status))
    }
    catch(e){
        console.log(e)
        videoRef.innerHTML = e
    }
}

main3()