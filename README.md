# Lecture Machine Learning

This repository contains information for the course **machine learning**
held in the master program *Informatik in den Ingenieurwissenschaften* at the University of Applied Sciences Berlin. This is work-in-progress. The structure, style and concept of the lecture was heavily inspired by the data science lecture of Christina Kratsch (https://chkra.github.io/ds-lecture/).

## Structure of the Repository

The repository is based on the Jekyll template [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) by Michael Rose. All technical folders originate from the template with possibly minimal aesthetic adjustments (e.g., code syntax highlighting).

The following folders contain the content:

* `/lectures` contains the entry pages and overviews for the theoretical content of the weekly lessons.
* `/modules` contains folders that are thematically separated into different topics. A weekly lesson can encompass several modules.
* `/workshops` contains practical tasks and materials for the weekly on-site group work.

## Generating Page Content

This page was created with Jekyll. The generated content is checked in. To prepare on a system that requires a current version of Ruby, execute the following:

```bash
# install gem manager, may need sudo
gem install bundler

# install all requirements listed in Gemfile
bundle install
```

To build and serve the solution, execute the following commands:

```bash
# build all pages
bundle exec jekyll build
# or build and serve all pages at a local webserver
bundle exec jekyll serve
```

## Copyright

All rights reserved | 2024 | KI Werkstatt @ HTW Berlin / CK.