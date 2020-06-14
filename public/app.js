// import { sendNotification } from "web-push"

const publicVapidKey='YOUR PUBLIC VAPID KEY HERE'

//check for service worker
if('serviceWorker' in navigator)
{
    send().catch((e)=>{
        console.log(e)
    })
}

//register SW, register push, send push
 async function send(){

console.log('registering SW..')
const register= await navigator.serviceWorker.register('/worker.js')
console.log('service worker registered')

//register push
const subscription= await register.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey:urlB64ToUint8Array(publicVapidKey)
})

console.log('push registered')

//send push notification
console.log('sending push..')
await fetch('/subscribe',{
    method:'POST',
    body:JSON.stringify(subscription),
    headers:{
        'content-type':'application/json'
    }
})

console.log('push sent..')

}


//converting the public vapid key to use
const urlB64ToUint8Array = base64String => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };