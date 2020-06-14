# web push with node


Use npm module web-push and Javascript Service Worker to implement push notifications.

the flow:
  - Ask user permission to recieve push notifications
  - Create an Express endpoint to recieve subscription object
  - Send push notification from Server
  - Magic- push notification recieved by client's browser

You need to generate Vapid Keys(only once)- the easiet way to do that is
installing web-push globally, which will give you access to cli command:

``` sh
web-push generate-vapid-keys 
```

keep the keys within environment variables and use them when needed.











