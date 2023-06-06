# Natours Project

## Think &#8592; Build &#8592; Architect

### Think

<strong>Think</strong> about the layout of your webpage or web app before writing code.

#### Component-Driven Design

-   <strong>Modular building blocks</strong> that make up interfaces;
-   Held together by the <strong>layout</strong> of the page;
-   <strong>Re-useable</strong> across a project, and between different projects;
-   <strong>Independent</strong>, allowing us to use them anywhere on the page.

### Build

<strong>Build</strong> your layout in HTML and CSS with a consistent structure for naming classes.

#### BEM

-   <strong>B</strong>lock <strong>E</strong>lement <strong>M</strong>modifier

##### Low-specificity BEM selectors:

```javascript
.block {}
.block__element{}
.block__element--modifier{}
```

-   <strong>BLOCK</strong>: standalone component that is meaningful on its own.
-   <strong>ELEMENT</strong>: part of a block that has no standalone menaing.
-   <strong>MODIFIER</strong>: a different version of a block or an element.

### Architect

Create a logical <strong>architecture</strong> for your CSS with files and folders.

### 7-1 CSS Architecture with Sass

7 different folders for partial Sass files (e.g., `_base.scss`), and 1 main Sass file to import all other files into a
compiled CSS stylesheet. This architecture is used for larger, multi-page web apps.

#### The 7 Folders

-   `base/`
    -   basic project definitions
-   `components/`
    -   one file for each component
-   `layout/`
    -   overall layout of the project
-   `pages/`
    -   styles for specific pages of the project
-   `themes/`
    -   for implementing different visual themes
-   `abstracts/`
    -   code that doesn't output any CSS, such as variables or mixins
-   `vendors/`
    -   3rd party CSS

```sh
sass/
 |
 |--base/
     |--_animations.scss
     |--_base.scss
     |--_typography.scss
     |--_utilities.scss
 |
 |--
```
