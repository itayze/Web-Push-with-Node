console.log('service worker loaded')

self.addEventListener('push',(e)=>{
    const data= e.data.json()
    console.log('push has been recieved..')
    self.registration.showNotification(data.title,{
        body:'notified',
        icon:'YOUR ICON URL HERE'
    })


})