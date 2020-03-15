# 3.6 Debugging Practice

## Do this first

1. Run `npm install`
2. Run `npm start`
3. Open Visual Studio Code to this folder

## The assignment - what you need to do

1. The goal of this guided practice is to use the Array.map() function to create React components.  

2. The training wheels are off for this one!  In the data.js file, you'll find an array containing information for instagram posts.  Each "post" contains an image, and then a list of comments.  Each "comment" object contains a "user" and a "comment".

3. You will need to create two new components from scratch: a "Post" component, and a "Comment" component to display the data from data.js.  It should look like a cheap instagram clone.  Check out this image from my solution.

4.  Here's what my solution looks like (https://imgur.com/a/9XmKWs3).  

5.  This will be tricky!  You'll be working mostly independently, and will have to debug on your own.  Make sure to start with a working page, add a small change, SAVE, and check if your change worked.  Finding an error after a small change is MUCH easier than after a large change.

## Do this after

1. Run `git commit -m "Updated the application to search Giphy for dog gifs and display them."`
   1. Feel free to get creative with this message. It's for your benefit.
1. Run `git push`

If anything goes wrong here, please ask for assistance.

------

# First time here? Do the following.

## Ensure you've got the prerequisites

1. Open a `terminal`
2. Type `npm --version`
   1. If it prints a number, skip down to [Then do this](#Then-do-this)
   2. If it returns an error, install NodeJs version 10 from here ([Windows](https://nodejs.org/dist/latest-v10.x/node-v10.19.0-x64.msi), [Mac](https://nodejs.org/dist/latest-v10.x/node-v10.19.0.pkg), [Linux](https://nodejs.org/dist/latest-v10.x/node-v10.19.0-linux-x64.tar.gz))

## Then do this

1. DO NOT FORK
1. Clone this repository onto your computer
   1. Click the green 'Clone or Download' button
   1. Copy the link
   1. Open a Terminal
   1. Navigate (using `cd`) to a directory where you keep your code
      1. ie. If you keep your code in the `Dev` directory, type `cd Dev`
   1. Type `git clone` followed by the link you copied
2. Navigate to your cloned directory using `cd CN-Guided-Practice`
3. Run `npm install`
4. Run `node scripts/initialize.js`
5. Follow the instructions

------

# How to switch to a different Guided Practice

1. Run `node scripts/guided-practice.js`
2. Type in the name of the guided practice.
   1. If you are unsure of the name, ask your instructor or check the session agenda.
3. Read the `README` file for the guided practice
