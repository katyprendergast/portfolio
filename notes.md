To run: gulp dev
Animate: https://animate.style/
Templates: https://www.npmjs.com/package/gulp-file-include
To build: gulp build

When opening terminal, to find the root directory:

`cmd + t` new tab

`cmd + arrows` switch tab

`cd`

`ls` list whats in the directory

then `cd portfolio`

tab will autocomplete if there is enough information to do so.

`code .` will open the current folder in code

To commit:

`git status`

you will see all changed files / new files in red

to add all run `git add .`

you can run git status again to see the added files in green, if you do not want to add them all you can
do `git add filepath` <-- you can copy it from the git status screen and paste it in for each file

then to commit do `git commit -m 'type the message for the commit here'`

then `git push origin master`

TLDR;

`git status` = show the changes

`git add`= git file/files the commit we are going to do

`git commit -m` = save the commit with some text describing what you have changed, good for restoring.

`git push origin master` = push this commit from origin (this computer) to branch master, you only have master
at the moment

if at any point before doing a commit you can restore a file by doing `git checkout <filepath>` e.g src/pages/dbc.html

`git reset --hard` will reset the whole project from the last push

`git log` will show in the terminal what has been committed recently

`CTRL + C` to stop server

`gulp build` to add images etc from src to dist folder, then run `gulp dev` again to restart the server
