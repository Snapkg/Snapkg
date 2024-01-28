
<h1 align="center">
  <br>
  Snapkg
  <br>
</h1>

<h4 align="center">A package manager for Berkeley's <a href="http://snap.berkeley.edu/" target="_blank">Snap!</a> programming language.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#contribution-guidelines">Contribution Guidelines</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://svgsilh.com/svg_v2/3283713-00bcd4.svg)

<sup>(placeholder banner)</sup>

> **Note:**
> *This project is still in early development, so some features may not work as advertised.*

## Key Features

* **Package management** - Add and remove custom Snap! blocks with ease.
  - Packages can be installed from a local or remote source.
* **Dependency resolution** - When installing a new package, Snapkg will automatically install any other required packages for you!
* **Automatic package updates** - Use Snapkg to receive the latest block updates from Snapkg developers and maintainers.
* **Easy to install and use!!**

## How To Use

The first step in using Snapkg is to actually install it. The easiest and recommended way is to use the 📦**Snapkg Installer** block which will install the latest version of the other Snapkg blocks and initialize the Snapkg database.

### Installing Snapkg with the 📦**Snapkg Installer** block

* Download the Snapkg Installer block.xml file
* Drag and drop the downloaded block.xml file to a new Snap! project
* Open the new "Snapkg" category in the block pallet and click on the 📦**Snapkg Installer** block to install Snapkg.

### Adding a repository
Once Snapkg is installed, you can add the Snapkg repository. This will be your trusted source for custom Snapkg packages. To do this, you can click on the new 📦**Add repository from [URL]** block under the Snapkg category in the block pallet.

### Updating repositories
In order to receive the latest information from the available packages in your repositories, you will next need to click on the 📦**Update repositories** block. It's recommended to run this block anytime you're planning on adding new packages to your project or updating existing packages.

### Listing available packages
Once your local repositories are up-to-date, you can browse the list of available packages using the 📦**List available packages** block.

> **Tip:**
> You can browse to a package's "provides" field to see the specs of the blocks a package provides.

### Installing or updating a package
Once you've found a package that you'd like to install, you can install it by using the 📦**Install package by [Name]** block. Simply enter the name of the package that you'd like to install (or update) and run the block to install the package.

### Uninstalling a package
If you decide later that you no longer need a package that you installed, you can use the 📦**Uninstall package by [Name]** block. Entering the name of a package will allow you to uninstall a Snapkg package.

## Contribution Guidelines

There are several ways to contribute to the Snapkg project, but before we get in, there are a few general guidelines that should be followed.

* You *must* be the sole owner of any submissions

* Javascript blocks should not exist in the "default" repository due to their security concerns.

* A task should be created in the Github issue tracker for the following:
 
  - Before a new package is added to a repository
  - Major schema changes
  - Major Bugs, feature enhancements, etc.

* Tasks created in the issue tracker should remain open until a package has it's first release in it's production repository or until the Bug, feature enhancement, etc. has been resolved/completed.

* Commits should be clear and concise and should reference a Github issue number if feasible.

Below are just a few of the ways that you can help with the project:

* **Package Development**

  - Package development involves developing and updating a package's sources (xml).
  - Package developers should work with package maintainers when updating a package.

* **Package Maintainence**

  - Package maintainence includes keeping a package's index.json up-to-date.

* **Core Development**

  - Core development is the development of Snapkg itself.
  - It includes designing and maintaining the Snapkg package and repository schemas.

* **Documentation**

  - Documentation includes creating/editing Wikis, README's, and tutorials.

* **Community Engagement**

  - Engaging with the community by helping new users on the issue tracker and Snap! forums is a great way to promote Snapkg.

* **Testing/QA**

  - Testing Snapkg and it's packages is one way to ensure a smooth experience for end-users.
  - Issues should be reported in the issue tracker.

* **Snapkg Repo Maintainers**

  - These are the people who are responsible for maintining this repo on GitHub.

# License
GNU General Public License v3.0 or later

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.