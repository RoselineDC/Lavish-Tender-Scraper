#!/bin/bash

echo "🔥 git-auto.sh triggered at $(date)"

# Uncomment this for debugging if needed
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
if [ $? -ne 0 ]; then
  echo "⚠️ No commit created, exiting."
  exit 0
fi

branch=$(git symbolic-ref --short HEAD)

# Check if the remote branch exists before pushing
if git ls-remote --exit-code --heads origin "$branch" > /dev/null; then
  git push origin "$branch"
else
  echo "❌ Remote branch '$branch' does not exist. Run:"
  echo "   git push --set-upstream origin $branch"
fi

echo "🌟 git-auto.sh completed at $(date)"