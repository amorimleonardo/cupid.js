# Cupid.JS

Cupid.js is a NodeJS bot for Tinder which automatically swipe right (like) people and send message to your matches until you find your soulmate :heart:

## How to use?

Download via `git`

```
git clone git@github.com:victorgutierre/cupid.js.git
```

Run `npm install` to install the dependencies

Edit the `secrets.js` file and put your facebook profile id and your access token

```javascript
let secrets = {
  facebook_id : 'YOUR FACEBOOK ID',
  facebook_token : 'FACEBOOK TOKEN'
};
```

The easiest way to get your facebook token is to go [here](https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token), log in and then pick the auth token out of the URL you are redirected to.

If you have a facebook username instead of id, you can find your id using this [website](http://findmyfbid.com/).

Then, close `secrets.js` file and run `node cupid.js` and you'll swipe everyone 25 miles around you :smiley: 


