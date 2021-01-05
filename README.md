# password-generator



Notes:

First things first, what is a Readonly id? Readonly means you can't modify the text in any way. So a readonly id makes it impossible for me to copy/paste from the password generator box. I assume that after we have generated the password we should be able to cut/paste things. 

The textarea tag is also new. Seems to be mostly used with forms to set a specific height/width and can contain an infinite amount of characters. 

Added some JS for grabbing upper and lower case letters. Want to write one for numbers next. Numbers, done. Now on to special characters. Not as straightforward as grabbing a charCode this time because they are all over the chart. If I did it the way I'm currently doing it, then it's way too complicated. I'm going to look around for an easier solution. 

Found a solution for my special characters. Made them into a variable as a string, then wrote math to grab a random character from that string. 