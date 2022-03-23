# make tumblr posts readable

My friend sends me tumblr posts. They use 10% of the width of the screen and are filled with themes, cursor animations and everything under the sun.

I just want to make them readble.

usage:

`https://fn.mchang.xyz/tumblr/?url=POST_URL_HERE`

Example:
`https://fn.mchang.xyz/tumblr/?url=https://pudge.corgiaddict.com/post/119694932680`


## bookmarklet
```javascript
javascript:(function(){window.open('https://fn.mchang.xyz/tumblr/?url='+document.URL)})();
```