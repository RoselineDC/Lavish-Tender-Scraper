#!/bin/bash

set -x


if ! git config --global user.email > /dev/null; then
	    git config --global user.email "roseline.danga@gmail.com"
fi

if ! git config --global user.name > /dev/null; then
	    git config --global user.name "RoselineDC"
fi

if git diff --quiet && git diff --cached --quiet; then
	    echo "✅ Nothing to commit."
	        exit 0
fi

timestamp=$(date "+%Y-%m-%d %H:%M:%S")

git add .
git commit -m "modified by Roseline on $timestamp"

branch=$(git symbolic-ref --short HEAD)
git push origin "$branch"
