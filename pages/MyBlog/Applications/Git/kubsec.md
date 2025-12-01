# kubsec & git tricks

```shell
REPO_MOTHER: https://github.com/bbmorten/mydocs-kubsec.git
REPO_SYNC: https://github.com/kubsec/kubsec-workflow-partial-test.git
REPO_TEMP: https://github.com/kubsec/mydocs-kubsec-org.git
REPO_FORKED: https://github.com/student/kubsec-workflow-partial-test.git
```

## Ana Repo

Tüm değişiklikler burada yapılacak öncelikli olarak. REPO_TEMP'e manuel kopyalama olacak. REPO_SYNC'e aktarılmak istenilenler ise /docs/SecTraining dizininden kopyalanıyor

## Sync Repo

Student repoyu replace edecek repo. Otomatik olarak REPO_MOTHER'dan oluşturuluyor.
**sync-org.yml** dosyası kullanılıyor. **kubsec** accountunda yaratılan PAT'ın **sync-org.yml** içinde kullanılan **ORG_PUSH_TOKEN**'a kopyalanması lazım.

```shell
REPO_SYNC=https://github.com/kubsec/kubsec-workflow-partial-test.git

```

```yaml
name: Sync to kubsec/kubsec-workflow-partial-test

on:
  push:
    branches:
      - main

jobs:
  sync:
    name: Sync selected files to Org Repo
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source repo
        uses: actions/checkout@v3

      - name: Copy selected files to a clean directory
        run: |
          mkdir -p sync-dir/docs
          cp -r docs/SecTraining/* sync-dir/docs/
          cp -r README.md sync-dir/
          cp  README.md sync-dir/docs/index.md
          cp -r docker-compose.yml sync-dir/
          cp -r mkdocs.yml sync-dir/
          cp -r requirements.txt sync-dir/
          cp -r .pages sync-dir/
          cp -r mkdocs.Dockerfile sync-dir/
          cp -r material sync-dir/

      - name: Initialize and commit in sync-dir
        run: |
          cd sync-dir
          git init
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add .
          git commit -m "Automated sync from bbmorten/mydocs-kubsec on $(date +'%Y-%m-%d %H:%M:%S')"

      - name: Push to kubsec/kubsec-workflow-partial-test
        env:
          TARGET_REPO: https://kubsec:${{ secrets.ORG_PUSH_TOKEN }}@github.com/kubsec/kubsec-workflow-partial-test.git
        run: |
          cd sync-dir
          git branch -M main
          git push --force "$TARGET_REPO" main


```

##  Temporary Repo

Geçici öğrenci reposu. Sync Repo'daki çalışmalar bitene kadar

```shell
REPO_TEMP=https://github.com/kubsec/mydocs-kubsec-org.git

```

## Öğrenci değişiklik önerileri

Bir öğrenci Sync repoda bir değişiklik önermek istiyorsa sırasıyla aşağıdaki işlemleri yapmalıdır.

### Step 1 - Fork

Öğrenci kendi accountuna REPO_SYNC'i fork etmeli.

###  Step 3 - Update your local git remotes

- Clone your forked repo to local
- Daha sonra yeni bir branch yaratıp, örneğin **my-feature-branch** değişiklikleri bu branch üzerinde yapmalıdır.

```shell
git clone REPO_FORKED
cd kubsec-workflow-partial-test

# Rename the current origin (kubsec's repo) to upstream
git remote rename origin upstream

# Add your own fork as origin
git remote add origin REPO_FORKED

# Check

git remote -v
```

###  Step 3 - Push it for consideration (student)

```shell
git checkout -b my-feature-branch # create branch
git add .
git commit -m "Describe what this change does"
git push origin my-feature-branch
```

Sonra gidip öğrenci kendi accountunda branch üzerinden pull request yaratmalıdır.

###  Step 4 - Repo Owner

Uygun görürse merge eder kubsec organization içinde.
