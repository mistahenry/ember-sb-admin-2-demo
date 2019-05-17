# Steps to integrate a bootstrap theme into ember in the context of [sb-admin-2](https://startbootstrap.com/themes/sb-admin-2/)

1. `ember new bootstrap-example --yarn`
2. `ember install ember-cli-sass` (I then removed `app.css`)
3. `ember install ember-bootstrap`
  - its worth noting that this step added `@import "ember-bootstrap/bootstrap";` automatically to my `app.scss` file.
4. copied the whole `scss` dir containing all scss files from the theme into `vendor/sb-admin-2/scss`
5. Cleaned up the imports inside the main `sb-admin-2.scss` since it contained references to its own path to `bootstrap.scss`
6. added this `scss` dir to my `ember-cli-build.js` `sassOptions` `includePaths` array:

    ```
    sassOptions: {
      includePaths: [
        'vendor/sb-admin-2/scss',
      ]
    }
    ```
7. Copy and pasted their login markup (inside of the body) into my some route template (in my case the `application.hbs` template b/c this isn't a real project). 
    - I needed to then add a class to the body so I did this:
    
        ```
        activate(){
           this._super(...arguments);
           document.body.classList.add('bg-gradient-primary');
        }
        ```