- Create App
    > npx create-react-app disney_ui_clone
- Configured the tailwind
    > tailwind docs > Framework and guides > create react app
- Created the component folder inside the src
- created the Login,Header,Browse page
- Done routing the app.js file 
- Checked the routing


# Planing
- Building the routing inside the `app.js` 
    - installed: npm i -D react-router-dom
    - provide the appRouter to the RouterProvider 
- created the header page
- created the landing login page
- created the login form when use click the login btn changes to signup (one form with toggle option)
- validation for the form 
- firebase setup 
- enable authentication in firebase app 
    build > authentication > sign-in methods  if you want another provider there is new provider option is there

# Authentication
- using the firebase authentications
- follow the steps add the sdk in utils > firebase.js file
- VERY IMPORTANT TO WRITE THE PUBLIC FOLDER OF THE FIREBASE AS "build"
- Basically telling the firebase to use this folder for the deployment
- Done the signup sign in and signout  authentication
- used onAuthStateChanged for the track the change in the state of the authentication, whenever the user signin,signup or signout this function is called and is always better to write in one place(app.js)
- updated the store with the user name and photoURL and dispatch an action to store in redux store
- updated the signout feature signout btn show only when the 

# Redux store
- created the appStore
- created the userSlice
- provide to the appStore
- provide to the whole store, in app.js we are already using the dispatch function so we are calling the dispatch before providing to the app as a result we need to provide them to the root level that is index.js
- 





