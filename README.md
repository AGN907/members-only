# Members-only
Site to post messages, unsigned and non-members users can't see who wrote the messages. Only the members can see the author of the messages and only the admin can delete any message.

Built with:
- Node.js
- Express.js
- Passport.js
- Pug.js

## Requirements
- **Node.js**
- **Git**

## Usage 

First make sure you create a .env file and put this into it:
```
MONGODB_URI="YOUR_MONGODB_CONNECTION"
SESSION_SECRET="YOUR_SECRET_KEY" # any random key will do
```

Clone the repo
```
git clone https://github.com/AGN907/members-only.git
cd members-only
```

Next install all the packages
```
npm install
```

Run the app
```
npm run dev
```
