# Simple login form with ReactJS and SCSS
You can find it here: [login-form-silviya-stoyanova.vercel.app/login](https://login-form-silviya-stoyanova.vercel.app/login "Login form")

## Validation:
- Email should be valid.
- Password must be at least 3 symbols.

## Here is how I made it:
- First I created the file structure. 
- Then I added the components and their styles. 
- And finally I added some functionality like event handlers.

## File structure
```
📦login-form
 ┣  📂 build
 ┣  📂 node_modules
 ┣  📂 public
 ┃  ┃ 📜 index.html
 ┃  ┗ other public files 
 ┣  📂 src
 ┃  ┣ 📂 assets
 ┃  ┃ ┃ 📂 icons
 ┃  ┃ ┗ 📂 images
 ┃  ┣ 📂 scripts
 ┃  ┃ ┃ 📂 common-components
 ┃  ┃ ┃ 📂 constants
 ┃  ┃ ┗ 📂 login
 ┃  ┣ 📂 styles
 ┃  ┃ ┃ 📂 common-components
 ┃  ┃ ┃ 📂 constants
 ┃  ┃ ┃ 📜 breakpoints.scss
 ┃  ┃ ┗ 📜 variables.scss
 ┃  ┃ 📜 index.js
 ┃  ┃ 📜 index.css
 ┃  ┗ 📜 Login.js
 ┣  📜 .gitignore
 ┣  📜 package-lock.json
 ┣  📜 package.json
 ┗  📜 README.md
 ```