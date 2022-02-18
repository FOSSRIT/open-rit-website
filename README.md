# Open@RIT Website Source

This is the source code to the Open@RIT website currently hosted at
[openr.it][1].  It is meant to be built using Jekyll and Sass, with no need for
extra plugins.

## Directory Structure

Most of the pages in the site are simply markdown files and directories.  The locations of these markdown files relative to the project root corresponds directly to the location of the page in the final site.  For example, the `/about/evaluating` page is generated from the file at `:/about/evaluating.html`.  Some other files and directories are present which play an important role, however.  Some of the most important are:

### `/assets/`

This contains any non-page assets.  For the most part, these are static assets that are copied 1:1 into the final site.  The one exception to this is the stylesheet, which is fed to Sass for preprossesing before being copied.

### `/_data/`

Data and lists used to create several elements of the site.  Notable inclusions are the nav structure of the site and a list of fellows used to generate the widget on the landing page.

### `/_includes/`

Components which are referenced in other pages.  For example, the "quick links" widget you can see on the About page has an `aside.html` file in the includes folder, which is referenced in order to generate the widget.

### `/_layouts/`

The boilerplate HTML present on every page.  This is things like the banner, navigation, footer, and sidenav.

## Development & Deployment

Install Jekyll on your system, or from the local repository.  On Linux, the latter can be accomplished using the commands

```bash
bundle install
```

A local webserver can now be created using the command

```bash
bundle exec jekyll serve
```

Or if you're using a system-wide Jekyll install, such as one from a package repo, run just

```bash
jekyll serve
```

A build for deployment can be created using

```
jekyll build

# or

bundle exec jekyll build
```

Please configure your webserver to serve files such as `/about.html` under `/about` and `/about/` in addition to `/about.html`.  For the webserver Caddy, this can be acheived with the addition of the lines

```Caddyfile
try_files {path}.html {path}
```

[1]: https://openr.it/
