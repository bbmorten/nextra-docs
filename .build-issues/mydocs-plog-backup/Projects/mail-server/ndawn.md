# ndawn Mail Server Implementation

##  Mail Server host installation Setup for Ubuntu (not implemented)

Setting up a secure mail server on Ubuntu 22.04 involves several components. Here's a step-by-step guide to setting up a secure mail server using **Postfix** (SMTP server), **Dovecot** (IMAP/POP3 server), and **Let's Encrypt** for SSL/TLS encryption.

### Overview

1. **Postfix**: Acts as the SMTP server to send emails.
2. **Dovecot**: Provides IMAP and POP3 services to receive and access emails.
3. **Let’s Encrypt**: Provides SSL/TLS certificates to secure email communications.
4. **SpamAssassin and ClamAV** (optional): Help filter spam and detect viruses.

### Step 1: Install Required Packages

Update the system and install Postfix, Dovecot, and Certbot (for SSL certificates).

```bash
sudo apt update
sudo apt install postfix dovecot-core dovecot-imapd dovecot-pop3d certbot python3-certbot-nginx -y
```

### Step 2: Configure Postfix

1. **Postfix Basic Configuration**:

   During installation, you’ll be prompted to configure the "General type of mail configuration." Select **Internet Site** and set the system mail name (e.g., your domain like `mail.example.com`).

2. **Edit Postfix Configuration**:

   Open the Postfix configuration file:

   ```bash
   sudo nano /etc/postfix/main.cf
   ```

   Modify or add the following lines:

   ```plaintext
   myhostname = mail.example.com  # Replace with your domain
   mydomain = example.com         # Replace with your domain
   myorigin = $mydomain
   inet_interfaces = all
   inet_protocols = ipv4
   mydestination = $myhostname, localhost.$mydomain, localhost
   home_mailbox = Maildir/
   smtpd_tls_cert_file=/etc/letsencrypt/live/mail.example.com/fullchain.pem
   smtpd_tls_key_file=/etc/letsencrypt/live/mail.example.com/privkey.pem
   smtpd_use_tls=yes
   smtpd_tls_auth_only=yes
   smtpd_tls_security_level=may
   smtp_tls_security_level=may
   smtp_tls_note_starttls_offer=yes
   ```

   Save and close the file.

3. **Configure Postfix Authentication**:

   To secure email relay with SMTP authentication, open `/etc/postfix/master.cf`:

   ```bash
   sudo nano /etc/postfix/master.cf
   ```

   Uncomment the following lines to enable submission (port 587) with TLS:

   ```plaintext
   submission inet n       -       y       -       -       smtpd
       -o syslog_name=postfix/submission
       -o smtpd_tls_security_level=encrypt
       -o smtpd_sasl_auth_enable=yes
       -o smtpd_client_restrictions=permit_sasl_authenticated,reject
   ```

   Save and close the file.

4. **Restart Postfix**:

   ```bash
   sudo systemctl restart postfix
   ```

### Step 3: Configure Dovecot

1. **Edit Dovecot Configuration**:

   Open the Dovecot configuration file:

   ```bash
   sudo nano /etc/dovecot/dovecot.conf
   ```

   Add or modify the following lines:

   ```plaintext
   protocols = imap pop3 lmtp
   mail_location = maildir:~/Maildir
   ```

2. **Configure SSL in Dovecot**:

   Open `/etc/dovecot/conf.d/10-ssl.conf`:

   ```bash
   sudo nano /etc/dovecot/conf.d/10-ssl.conf
   ```

   Modify it to use Let’s Encrypt certificates:

   ```plaintext
   ssl = required
   ssl_cert = </etc/letsencrypt/live/mail.example.com/fullchain.pem
   ssl_key = </etc/letsencrypt/live/mail.example.com/privkey.pem
   ```

3. **Enable Authentication**:

   Open `/etc/dovecot/conf.d/10-auth.conf`:

   ```bash
   sudo nano /etc/dovecot/conf.d/10-auth.conf
   ```

   Ensure `disable_plaintext_auth` is set to `yes` to enforce SSL:

   ```plaintext
   disable_plaintext_auth = yes
   auth_mechanisms = plain login
   ```

4. **Restart Dovecot**:

   ```bash
   sudo systemctl restart dovecot
   ```

### Step 4: Obtain an SSL Certificate with Let’s Encrypt

Run Certbot to get an SSL certificate for your mail server:

```bash
sudo certbot certonly --standalone -d mail.example.com
```

This will automatically place the certificate files in `/etc/letsencrypt/live/mail.example.com/`.

### Step 5: Configure Firewall

Allow necessary ports for mail services:

```bash
sudo ufw allow 25/tcp    # SMTP
sudo ufw allow 587/tcp   # SMTP submission
sudo ufw allow 993/tcp   # IMAP over SSL
sudo ufw allow 995/tcp   # POP3 over SSL
```

### Step 6: Set Up Spam and Virus Filtering (Optional)

For added security and spam protection, you may want to install **SpamAssassin** and **ClamAV**.

1. **Install SpamAssassin and ClamAV**:

   ```bash
   sudo apt install spamassassin clamav clamav-daemon -y
   ```

2. **Enable SpamAssassin**:

   ```bash
   sudo systemctl enable spamassassin
   sudo systemctl start spamassassin
   ```

3. **Update ClamAV Database**:

   ```bash
   sudo freshclam
   ```

4. **Restart ClamAV**:

   ```bash
   sudo systemctl restart clamav-daemon
   ```

### Step 7: Test Your Mail Server

- **Use an Email Client** (e.g., Thunderbird, Outlook) to test sending and receiving emails.
- **IMAP/POP3 Configuration**:
    - IMAP: `mail.example.com:993` (SSL)
    - POP3: `mail.example.com:995` (SSL)
    - SMTP: `mail.example.com:587` (TLS)

### Summary

1. **Install and configure Postfix** for SMTP.
2. **Configure Dovecot** for IMAP and POP3.
3. **Secure your server with Let’s Encrypt** SSL certificates.
4. **Allow necessary ports** in the firewall.
5. Optionally, **add spam and virus filtering** with SpamAssassin and ClamAV.

This setup should provide a secure and reliable mail server on Ubuntu 22.04. Let me know if you need further customization for any particular use case!

## Containerized Version (not implemented)

To containerize your mail server setup on Docker (Ubuntu), we’ll create a `docker-compose.yml` file that includes **Postfix** and **Dovecot** as services, each running in its own container. We’ll also configure Let’s Encrypt certificates for SSL and map all necessary ports.

### Step 1: Create a `docker-compose.yml` File

Here’s a sample `docker-compose.yml` file to run the mail server (Postfix and Dovecot) in containers with necessary ports mapped. This configuration assumes you’re using **Certbot** to obtain SSL certificates on the host machine and mount those certificates into the containers.

```yaml
version: '3.7'

services:
  postfix:
    image: catatnight/postfix
    container_name: postfix
    environment:
      - maildomain=example.com                # Replace with your domain
      - smtp_user=user@example.com:password   # Replace with a valid user and password
    volumes:
      - ./data/mail:/var/mail
      - /etc/letsencrypt/live/example.com:/etc/ssl/certs:ro  # Mount Let's Encrypt certs
    ports:
      - "25:25"    # SMTP
      - "587:587"  # SMTP Submission (with TLS)
    restart: unless-stopped
    networks:
      - mailnet

  dovecot:
    image: tvial/docker-mailserver
    container_name: dovecot
    environment:
      - SSL_TYPE=letsencrypt
      - DMS_SSL_CERT_PATH=/etc/ssl/certs/fullchain.pem
      - DMS_SSL_KEY_PATH=/etc/ssl/certs/privkey.pem
      - MAIL_USER=user@example.com
    volumes:
      - ./data/mail:/var/mail
      - /etc/letsencrypt/live/example.com:/etc/ssl/certs:ro  # Mount Let's Encrypt certs
    ports:
      - "993:993"  # IMAP with SSL
      - "995:995"  # POP3 with SSL
    restart: unless-stopped
    networks:
      - mailnet

networks:
  mailnet:
    driver: bridge
```

### Step 2: Set Up Let’s Encrypt Certificates

To use SSL certificates from Let’s Encrypt, you can run Certbot on the host machine and mount the certificate directory into the Docker containers. Follow these steps:

1. **Install Certbot** on the host:

   ```bash
   sudo apt update
   sudo apt install certbot
   ```

2. **Generate Certificates** for your mail server domain:

   ```bash
   sudo certbot certonly --standalone -d example.com
   ```

3. **Renew Certificates Automatically**:
   Certbot automatically sets up a cron job to renew certificates. You can verify with:

   ```bash
   sudo certbot renew --dry-run
   ```

### Step 3: Customize Environment Variables

Update the `maildomain`, `smtp_user`, and `MAIL_USER` environment variables in the `docker-compose.yml` file:

- `maildomain`: Replace with your domain (e.g., `example.com`).
- `smtp_user`: Set a valid user with the format `username@example.com:password`.
- `MAIL_USER`: Set this to match the user you’ve defined for Postfix.

### Step 4: Directory Structure

To keep data persistent, ensure your directory structure matches the volume mappings in `docker-compose.yml`. Here’s a suggested structure:

```plaintext
project-root/
├── data/
│   └── mail/                   # Mail data for both Postfix and Dovecot
└── docker-compose.yml          # The Docker Compose file
```

### Step 5: Start the Mail Server

1. **Navigate to the Project Directory**:

   ```bash
   cd /path/to/project-root
   ```

2. **Run Docker Compose**:

   ```bash
   docker-compose up -d
   ```

   This will start both `postfix` and `dovecot` containers with the necessary port mappings.

### Step 6: Verify and Test

1. **Email Client Setup**:
   - **SMTP**: `example.com:587` (TLS)
   - **IMAP**: `example.com:993` (SSL)
   - **POP3**: `example.com:995` (SSL)

2. **Check Container Logs**:
   Monitor the logs to verify that Postfix and Dovecot are running properly:

   ```bash
   docker-compose logs postfix
   docker-compose logs dovecot
   ```

### Additional Notes

- **Firewall Configuration**: Ensure your host firewall allows traffic on ports 25, 587, 993, and 995.
- **Certificate Renewal**: As certificates renew on the host machine, Docker will automatically use the updated certificates on restart. Schedule a periodic restart or use Docker secrets to refresh certificates without needing a full restart.

This configuration provides a secure and containerized mail server with SSL encryption for both SMTP and IMAP/POP3. Let me know if you need further customization!
