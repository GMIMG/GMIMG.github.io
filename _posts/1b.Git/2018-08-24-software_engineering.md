---
title: Git
category: Git
tags:
  - Git
---

# Software Engineering

## DevOps

개발과 운영을 통합해서 효율적으로 관리한다.

python pep8외우기


JMLAPTOP@GMINGLG MINGW64 ~
$ cd git_practice

JMLAPTOP@GMINGLG MINGW64 ~/git_practice (cs)
$ cd git_practice-1
bash: cd: git_practice-1: No such file or directory

JMLAPTOP@GMINGLG MINGW64 ~/git_practice (cs)
$ cd git-practice-1

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git branch
* master

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git init
Reinitialized existing Git repository in C:/Users/JMLAPTOP/git_practice/git-practice-1/.git/

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git branch
* master

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git branch cs

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git branch
  cs
* master

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ vim hell.py

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git add hell.py

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git commit -m "add if"
[master f84e2b5] add if
 1 file changed, 2 insertions(+), 1 deletion(-)

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git push origin cs
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/GMINIG/git-practice-1.git
 * [new branch]      cs -> cs

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git checkout
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git checkout cs
Switched to branch 'cs'

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (cs)
$ git branch master
fatal: A branch named 'master' already exists.

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (cs)
$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (master)
$ git checkout cs
Switched to branch 'cs'

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (cs)
$ vim hell.py

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (cs)
$ git add hell.py

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (cs)
$ git commit -m "add if by jimin"
[cs 4c3a48d] add if by jimin
 1 file changed, 2 insertions(+), 1 deletion(-)

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (cs)
$ git push origin cs
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 301 bytes | 150.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/GMINIG/git-practice-1.git
   5f469ea..4c3a48d  cs -> cs

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (cs)
$ git branch
* cs
  master

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (cs)
$ pyenv
bash: pyenv: command not found

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (cs)
$ ^C

JMLAPTOP@GMINGLG MINGW64 ~/git_practice/git-practice-1 (cs)
$
