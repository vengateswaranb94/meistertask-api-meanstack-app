# meistertask-api-meanstack-app
Implement Meistertask API with Angular JS as Frontend

# Instructions

Before you access Meistertask API, you need to authenticate using Mindmeister API, 
Signup with your Gmail address in URL: https://www.mindmeister.com/api & Get personal access token here

Update it in src/app/config/credentials.json

(i.e)
curl -H "Authorization: Bearer <ACCESS_TOKEN>" https://www.mindmeister.com/api/v2/users/me

Then you receive sample JSON output as:-

```json
{  
   "id":11111111,
   "firstname":"firstname",
   "lastname":"lastname",
   "email":"firstnamelastname@gmail.com",
   "created_at":"2018-12-07T03:46:21.000Z",
   "preferred_language":"en",
   "allowed_maps_count":3,
   "name":"firstname lastname",
   "channel_url":"https://www.mindmeister.com/users/channel/11111111",
   "person":{  
      "id":22222222
   },
   "has2FA":false,
   "avatar":{  
      "thumb":"https://lh6.googleusercontent.com/-Guzlb3nd3WY/AAAAAAAAAAI/AAAAAAAAAAc/7VvhT9TUUyPy/photo.jpg",
      "original":"https://lh6.googleusercontent.com/-Guzlb3nd3WY/AAAAAAAAAAI/AAAAAAAAAAc/7VvhT9TUUyPy/photo.jpg"
   },
   "isAnonymous":false,
   "activated":true,
   "displayName":"firstname",
   "lastName":"lastname",
   "image":"https://lh6.googleusercontent.com/-Guzlb3nd3WY/AAAAAAAAAAI/AAAAAAAAAAc/7VvhT9TUUyPy/photo.jpg"
}
```

# Want to access more, Official documentations can be found in below URL's

Mindmeister API: https://developers.mindmeister.com
Meistertask API: https://developers.meistertask.com