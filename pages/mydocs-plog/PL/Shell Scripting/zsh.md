# zsh Notes

## oh-my-zsh

It comes with a lot of plugins and themes that can make your terminal experience much more powerful and enjoyable. To install it, run:

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

```

## Reverting back to previous config

```shell
cp ~/.zshrc ~/.zshrc.backup
cp ~/.zprofile ~/.zprofile.backup
cp ~/.p10k.zsh ~/.p10k.zsh.backup
cp ~/.zshenv ~/.zshenv.backup
```

- Install it

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

```

- To revert back later:

```shell
mv ~/.zshrc.backup ~/.zshrc
mv ~/.zprofile.backup ~/.zprofile
mv ~/.p10k.zsh.backup ~/.p10k.zsh
mv ~/.zshenv.backup ~/.zshenv
rm -rf ~/.oh-my-zsh
```
