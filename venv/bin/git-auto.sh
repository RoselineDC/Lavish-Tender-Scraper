#!/bin/bash

set -x

# Set Git user info if not already set
if ! git config --global user.email > /dev/null; then
    git config --global user.email "roseline.danga@gmail.com"
fi

if ! git config --global user.name > /dev/null; then
    git config --global user.name "RoselineDC"
fi

# Exit if no changes to commit
if git diff --quiet && git diff --cached --quiet; then
    echo "✅ Nothing to commit."
    exit 0
fi

# Add and commit changes with timestamped message
timestamp=$(date "+%Y-%m-%d %H:%M:%S")
git add .
git commit -m "modified by Roseline on $timestamp"

# Get current branch and push
branch=$(git symbolic-ref --short HEAD)
git push origin "$branch"
