# vevf2-2022-verkefni1

So Imma be real with im kinda stupid no-where in the assignment did it say to use express but I did, and now I'm having trouble getting it to work on netlify.
There is a package netlify-lambda and netlify-cli that are supposed to be able to help with this but I cant find a version of either of those packages with >10 vulnerabilities.
---so I made a jank dist-gen script that starts the server gets all the pages and writes them to ./dist (and fixes the links).
I tried to set it up so that netlify would automatically run it when changes are commited but I get access denided (I guess they dont want people running random scripts on there machines or I did something horably wrong)---

So I made an amazing script that worked perfectly the first time AND set it up with netlify to run when the repo is updated.


npm install
npm run lint
node src/server.js
