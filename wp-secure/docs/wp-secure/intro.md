---
id: intro
title: WP Secure -  Ultimate WordPress Security Plugin
sidebar_label: Introduction
sidebar_position: 1
---



**WP Secure** is a comprehensive security plugin designed to fortify your WordPress site against various threats and vulnerabilities. Packed with an array of features, **WP Secure** provides robust protection, making it easy to secure your site without requiring deep technical knowledge. Here’s a detailed look at what **WP Secure** offers:

## Key Features

### General Settings

1. **Remove WordPress Version**: Hide the WordPress version number from the source code to prevent attackers from identifying potential vulnerabilities.

2. **Disable File Edit**: Prevent users from editing theme and plugin files through the WordPress dashboard, reducing the risk of malicious code injection.

3. **Remove RSS Feeds**: Disable RSS feeds to prevent content scraping and unauthorized data access.

4. **Remove REST API Links**: Restrict access to the REST API to protect your site's data from unauthorized requests.

5. **Remove oEmbed Links**: Disable oEmbed links to prevent third-party content embedding vulnerabilities.

6. **Remove RSD Link**: Remove the Really Simple Discovery (RSD) link to obscure information about your WordPress setup.

### Admin Login URL

1. **Custom Login URL**:
   Change the default WordPress login URL to reduce the risk of brute force attacks targeting the wp-login.php endpoint.

### Brute Force Protection

1. **Login Logging**:
   - **Enable Successful Login Logging**: Monitor and log all successful login attempts for security auditing.
   - **Enable Failed Login Logging**: Track failed login attempts to identify potential brute force attacks.

2. **Login Attempt Limit**: Set a limit on the number of login attempts to prevent brute force attacks.

3. **Lockout Duration**: Specify the duration for which users are locked out after exceeding the login attempt limit.

4. **Whitelisted IPs**: Allow only specific IP addresses to access your site, reducing unauthorized access.

5. **IP Blacklisting**: Block known malicious IP addresses to protect your site from potential threats.

### Security Headers

1. **Enforce SSL**: Force all traffic to use HTTPS, ensuring encrypted communication between your site and its visitors.

2. **Content Security Policy (CSP)**:  Control which resources can be loaded by your site, protecting against cross-site scripting (XSS) and other attacks.

3. **X-Content-Type-Options**: Prevent browsers from MIME-sniffing, reducing the risk of drive-by downloads.

4. **X-Frame-Options**: Protect against clickjacking by controlling how your site can be framed.

5. **X-XSS-Protection**: Enable the browser's XSS filter to block malicious scripts.

6. **Strict-Transport-Security (HSTS)**: Force HTTPS connections to your site to prevent protocol downgrade attacks.

7. **Referrer-Policy**: Control how much referrer information is sent with requests, protecting against referrer-based attacks.

8. **Permissions-Policy**: Manage permissions for features like camera, microphone, and geolocation to enhance privacy and security.

### Database Settings

1. **Change Database Prefix**: Modify the default database table prefix to improve security by making SQL injection attacks more difficult.

### .htaccess Security

1. **Protect .htaccess & .htpasswd**: Deny access to sensitive .htaccess and .htpasswd files.

2. **Disable Directory Indexing**: Prevent directory listing if no index file is present.

3. **Limit Login Attempts**: Restrict the number of login attempts to prevent brute force attacks.

4. **Block Bad Bots**: Block known bad bots from accessing your site.

5. **Disable XML-RPC**: Disable XML-RPC functionality to prevent specific types of attacks.

6. **Prevent Image Hotlinking**: Stop other sites from displaying your images without permission.

7. **Set Security Headers**: Add security headers to your .htaccess file for additional protection.

8. **Restrict Access to wp-config.php**: Deny access to the wp-config.php file for added security.

9. **Block Access to WP-Content and WP-Includes**: Restrict access to sensitive directories to protect your site’s core files.

### Session Timeout

1. **Enable Session Timeout**: Automatically log out inactive users after a specified period to prevent unauthorized access.

2. **Timeout Duration**: Set the duration for inactivity before logging out the user.

### Logs

1. **Successful Login Logs**: View logs of all successful login attempts.

2. **Failed Login Logs**: View logs of all failed login attempts to identify potential security threats.

3. **Clear Logs**: Easily clear successful and failed login logs.

### Tools

1. **Password Strength Tool**:
   - Generate strong passwords and check their strength.
   - Evaluate password strength against brute force attacks and display estimated time to crack.

## Benefits

**WP Secure** makes securing your WordPress site straightforward and efficient. With features like login attempt limiting, security headers, database prefix modification, and detailed logging, it offers a robust security solution. The plugin is designed to be user-friendly, allowing users to enhance their site’s security with minimal effort.

### Advantages

- **Comprehensive Security**: Protects against a wide range of threats, including brute force attacks, XSS, clickjacking, and more.
- **User-Friendly Interface**: Easy-to-use settings and options make it accessible for users of all technical levels.
- **Regular Updates**: Keeps your site secure with up-to-date security practices.
- **Customizable Options**: Tailor the security settings to fit your specific needs.

### Disadvantages

- **Potential for Misconfiguration**: Incorrect settings can lead to issues like locked-out users or broken site functionality.
- **Performance Impact**: Some security features may slightly affect site performance.

**WP Secure** provides a robust and user-friendly way to secure your WordPress site. By leveraging its comprehensive features, you can protect your site from various threats and ensure a secure environment for your users.
