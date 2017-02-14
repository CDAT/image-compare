# image-compare: A Simple Package for Comparing Images

This project provides a few components that combine together to provide a command-line utility for viewing the difference between two images.

## Installation:

Available through anaconda:

```
conda install -c uvcdat image-compare
```

## Development:

To be able to modify the package, you'll need a copy of `nodejs` and `npm` installed (it's available through conda-forge if you're into that kind of thing– `conda install -c conda-forge nodejs`).

After you've installed nodejs and npm (npm comes along for the ride with nodejs installs), you need to install the dependencies for the javascript frontend.

`npm install`

If you want to work on the frontend, you can use the `npm run develop` script to have the JavaScript automatically rebuilt whenever you make changes, and you can use the "test.html" page to view those changes.

If you want to work on the backend, you can just do `python setup.py install`, which should fetch the dependencies (`jinja2`), recompile the javascript in a minified form, and install it all into an egg in your current python. At that point, there are three main options:

# Usage:

There are three main ways to use this library:

## API-based method

There's a programmable interface for working with the package:

```
import image_compare
f1 = "img1.png"
f2 = "img2.png"
out_file = "/tmp/quicktest.html"
image_compare.compare(f1, f2, out_file) # generate the HTML at out_file's path
```

You can also fetch the raw javascript to dump into your own file, if you so choose:

```
import image_compare
js = image_compare.script_data() # returns unicode string of the JS file
```

## Tempfile interactive method

There's a function that will use an interactive prompt to generate a tempfile for comparing the images, open it in a web browser, and then clean up the tempfile once you are done looking at it:

```
import image_compare
f1 = "img1.png"
f2 = "img2.png"
image_capture.view_images(f1, f2)
```

which will print out "Press enter to end viewing..." and open your web browser to a tempfile that has the diff page.

## Command Line Interface

There's also a script included that provides a simple CLI for doing the tempfile interactive method:

```
$ compare_images img1.png img2.png
Press enter to end viewing...
```
