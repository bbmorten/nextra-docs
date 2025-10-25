# curl examples

## Self-signed certificate server connection

The error indicates that `curl` is rejecting the SSL certificate because it's self-signed. Here are a few ways to handle this:

### 1. **Allow Insecure Connections (Not Recommended for Production)**

You can bypass SSL verification by adding the `-k` or `--insecure` flag:

```sh
curl -k https://your-url.com
```

This allows `curl` to connect despite an untrusted certificate.

### 2. **Specify a Custom CA Certificate (Recommended for Self-Signed Certificates)**

If you're using a self-signed certificate, you should provide the CA certificate that signed it:

```sh
curl --cacert /path/to/your/ca.crt https://your-url.com
```

Make sure `/path/to/your/ca.crt` is the correct certificate used to sign the server certificate.

### 3. **Disable SSL Verification in `.curlrc` (Not Recommended)**

You can globally disable SSL verification by adding this line to your `~/.curlrc` file:

```
insecure
```

This is useful for testing but should be avoided in secure environments.

### 4. **Add the Self-Signed Certificate to Your System’s Trusted Certificates**

On **Linux**, you can add the certificate to the system's CA store:

#### Debian/Ubuntu

```sh
sudo cp /path/to/your/ca.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

#### RHEL/CentOS

```sh
sudo cp /path/to/your/ca.crt /etc/pki/ca-trust/source/anchors/
sudo update-ca-trust
```

On **macOS**, use:

```sh
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain /path/to/your/ca.crt
```

After adding the certificate, try running `curl` again.

### 5. **Check OpenSSL and CA Bundle**

Run the following to check the CA bundle used by `curl`:

```sh
openssl s_client -connect your-url.com:443 -CAfile /etc/ssl/certs/ca-certificates.crt
```

If the certificate is missing, you might need to update the CA bundle:

```sh
sudo apt update && sudo apt install --reinstall ca-certificates
```

If this issue occurs while using an API, consider configuring the API server to use a certificate signed by a trusted Certificate Authority (CA) instead of a self-signed one.

Let me know if you need help debugging further! 🚀
