# Fixing GitHub 403 Permission Error Using SSH

## Problem
When running:

```bash
git push

remote: Permission to MYHEAT-Choose-Life/Direct-Link.git denied to noluzar.
fatal: unable to access 'https://github.com/MYHEAT-Choose-Life/Direct-Link.git/': The requested URL returned error: 403

ssh-keygen -t ed25519 -C "your_email@example.com"
Your identification has been saved in /c/Users/YourUser/.ssh/id_ed25519
Your public key has been saved in /c/Users/YourUser/.ssh/id_ed25519.pub

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

cat ~/.ssh/id_ed25519.pub

git remote set-url origin git@github.com:MYHEAT-Choose-Life/Direct-Link.git

ssh -T git@github.com

Hi <username>! You've successfully authenticated.

git push
