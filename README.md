## About this test

To see this test working, clone the repository, type `npm install` from the root folder and then type `npm start`.

### The test

The app has only one view that renders a left menu for the contacts and search bar and a main section for the contact details which by default shows the first contact in the list.

### Technologies used

For this test I chose to use [React](https://reactjs.org/) for it is the JavaScript tool in which I have more knowledge and experience.

I used [Redux](https://redux.js.org/) because having a global state can be really useful when handling data that should be available and modified by more than one component and because I believe it is the tool that is used used with [React](https://reactjs.org/) most often.

At the beginning I added the React Router, but removed it later for the view never switches the component and the changes you see are only coming from the state and props.

For fetching the information from the URL I used [axios](https://github.com/axios/axios).

### Success

All the functionalities that were added to the app are working as expected. 

### Challenges

I don't have much experience using Redux and it was a good practice.

I also haven't worked much with tests so I had to do some research on that. I tried testing the asynchronous behaviour with redux-mock-store and moxios but I was not able to make it work. Also, couldn't test any of the conditional rendering which is most of the app.

### What to improve

There are always things that you want to improve when developing something. For example I want to add more tests, async tests, split the actions and reducers into different files.

The CSS can be improved as well. The transition between the Contacts List and Contact Details could be improved a lot by using some animations..

### Additional notes

I tried adding a default avatar for those images that threw a 403 from AWS but the link was there and I didn't want to spend more time on the test to find some way of handling that error.
