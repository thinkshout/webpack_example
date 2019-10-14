# Example Webpack Drupal theme

This is an example Drupal theme that uses Webpack, and is meant to accompany a
blog post that goes through its features.

## Installation

```bash
git clone git@github.com:thinkshout/webpack_example.git
cd webpack_example
npm install
```

## Use

```bash
# Start a production build and watch for changes.
npm run start
# Start a development build and watch for changes.
npm run start:dev
# Run a one-time production build.
npm run build
# Run a one-time development build.
npm run build:dev
```

If the `dist_dev` directory exists and your cache is clear, this theme will use
its contents instead of `dist`. The first time you run a development build you
may have to run rebuild caches to see your changes.
