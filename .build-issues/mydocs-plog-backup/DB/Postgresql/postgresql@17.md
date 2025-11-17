# PostgreSQL 17 Installation

## Installation with brew

```shell
brew install postgresql@17
# username is `whoami` password is blank
echo 'export PATH="/opt/homebrew/opt/postgresql@17/bin:$PATH"' >> ~/.zshrc
brew services start postgresql@17
psql postgres
\password bulent # ......sOp...0_
CREATE USER postgres WITH SUPERUSER PASSWORD '......sOp...0_';
```

## Normal Login

```shell
psql -U bulent -W -d postgres
CREATE USER postgres WITH SUPERUSER PASSWORD '......sOp...0_';
```
