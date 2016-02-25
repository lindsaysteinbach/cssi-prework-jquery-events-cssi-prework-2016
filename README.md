# jQuery Event Listeners

## Objectives
+ Explain what an event listener is and how it's used
+ Implement an event listener

## Intro

When you're procrastinating of Facebook, almost every action you take, leads the page to respond in someway.
For example, as soon as your cursor moves into the new post text box, the cursor changes from an arrow to an I. As soon as you click into the new post text box, a variety of new buttons appear -to attatch a picture of your lunch or a link to a politically charged article you only read halfway.  Recenlty, even just hovering over a video in your newsfeed will cause it to play automatically. These actions can happen because Javascript code is "listening" to an event taken by a user, and responding with an action.

The code written to trigger the action is called an **event listener** or **event handler**

## Event Handler Syntax
In JavaScript, events are user actions such as mouse clicks, key presses, or window resizing. We can define code that will be run when those events happen.

After an event happens, we can  bind - or connect - a function to be called by the browser whenever that event happens. 

The browser listens for and event, and then handles it, or responds, using an event handler. 

In the example below, lets pretend we wanted to do something everytime the user clicked on a header.

```js
$("h1").click(action);
```

* `$("h1")` - the *listener* - uses the selector syntax `$()` to get all the `<h1>` elements
* `click` - the *event* we are responding to
* `action` - the *handler* - or what we want our response to be


More generically, let's set up an event handler to pay attention or listen to an `h1` tag by using .on():

```js
$('h1').on("eventname" function(){
    //action you want taken
});
```

In this case, "eventname" - could be "click" as before, or it could be any of the events listed in the jQuery Documentation (linked in the Resources section below). With the `on` function, we can include more than one eventname.

```js
$('p').on("dblclick keypress", function(){})`.
```

Broadly `.click(action)`is just a shortcut for `.on("click", action)`. Now that we understand the syntax, let's look at the two main components of event handlers. The event (what the user does) and the handler (how the browser responds).

##Events - What The Browser Listens For
Facbook pages don't just randomly play videos or arbitrarily show pop-up windows with how many people have liked your posts. These pages wait for a certain event from the user to trigger and response. In this section, we'll expose some common events. 

### Responding to the User's Mouse
Mouse events include click, dblClick, mousemove, mouseover, and mouseout. The code below will show an alert when the user's mouse enters into the element with the id mousetrap and another alert when the mouse leaves.
```js
$("#mousetrap").mouseover(function(){
        alert("Welcome");
    });
$("#mousetrap").mouseout(function(){
        alert("Don't Leave!");
    });
```
### Responding to the User's Keyboard
The `keypress` event keeps track of every time a key on the keyboard is pressed (excluding ALT, CTRL, SHIFT, ESC). It's important to note that `keypress` isn't covered by browser specifications, so it's behavior isn't guaranteed.

`keydown` tracks every time a key is pressed down on the keyboard, and the `keyup` checks every time a key press is released. You can look up keyCodes in the Resources section at the end of this Readme.

```js
$(document).on('keypress', function(key) {
  if(key.keyCode == 13){
      alert('You have pressed Enter');
  }
});
```

Notice that the jQuery selector is `document`. This means that any time a key is pressed, the alert will appear. If you want to check if the cursor is in a particular area (like an input field) then you would just need to change the selector.


### Submit

The `submit` event submits a form. Let's set up our submit event so that only submits the form if a certain value has been entered in the text field:

```js
$("form").on("submit", function() {
    alert('Thanks for completing yet another survey!');
});
```

In the example above, we are using the `submit` event. We use the HTML `form` as our selector to bind the event on. 

###Document Ready 
We often only want to run our JavaScript when the page has finished loading. Just like we can bind functions to events triggered by the user, we can run certain functions when the document is ready.

```js
$( document ).ready(function() {
  // Here are all the functions that
  // will be run when the document is ready.
});
```


##Event Handlers - How the Browser Responds
Once we have declared what events the browswer should be listening for and tied them to certain elements in the DOM, we need to write functions for how the broswer should response. In most of the examples above, we have included an anonymous function called a callback function, but it is much better practice to use a named function.

#### Callback Functions 

An anonymous function in an event handler with  `function(){}` as the parameter. It's anonymous because we create it without giving it a name. As you've seen, the code for the function will go in between the curly brackets. This is a common pattern, called a callback function.

```js
$("h1").click(function(){
    alert("You clicked a header");
});
```

Using callback functions creates unstructured code that is difficult do debug and lacks any ability for abstraction. Abstraction is  programming jargon for chunkability. Remember, the reason we create functions in the first place is so we can resuse them - which we can't do with anonymous functions.  

#### Named Function as Event Handlers
A better alternative to callback functions is simply defining a function prior to using it in an event handler. Then that function can be passed as a parameter when we call the event:

```js
function tellUsWeClicked () {
    alert("You clicked a header");
}

$("h1").click(tellUsWeClicked);
```    
This style of coding improves readability and allows functions to be reused in other handlers. 

## The $(this) Selector
With event handlers, there is a special selector, $(this), which accesses the element that fired the event. 

```js
$("img").click(function(){
    $(this).fadeOut();
});
```
Here, the $(this) refers to the image that was just clicked.  After the user clicks on an image, then that image and only that image will fade out. Any other images on the page will remain unchanged.

##Chaining Methods
Up until this point we've been writing jQuery statements one at a time. However, there's a convenient way to do multiple things to an element without writing so much code - you can chain multiple commands together.

For example, if we wanted an element to turn blue, and then move up and down we could write it this way:

```js
$(this).css("color", "blue");
$(this).slideUp(2000);
$(this).slideDown(2000);
```

This works, but we're repeating the lookup for the HTML element with the ID of stuff multiple times. 

Instead we can do this:

```js
$(this).css("color", "blue").slideUp(2000).slideDown(2000);
```

Here, we've chained the methods by simply adding the next one to the end of the chain.

## Instructions 

You will write your code in `js/events.js`. You will want to define your functions outside of the document ready, and call them inside of this. This way, your tests will run as expected and you can test your code in the browser as well.

+ Define a function `getIt` that does not accept a parameter. The function should bind a `click` event to the `p` tag. When the paragraph is clicked, the function should alert `"Hey!"`.

+ Define a function `frameIt` that does not accept a parameter. The function should bind a `load` event that adds the class `tasty` to the image to add a red frame to the image.

+ Define a function `pressIt` that does not accept a parameter. The function should bind a `keydown` event to the input field of the form that alerts a user when they have pressed the `g` key.

+ Define a function `submitIt` that does not accept a parameter. The function should alert `"your form is going to be submitted now"`. And then `return;`.

## Resources

There are many many more jQuery events. Take a look at the docs to learn about all of them!

+ [Browser Events](https://api.jquery.com/category/events/browser-events/)
+ [ASCII Key Values](http://keycode.info/)

