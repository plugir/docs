---
id: login-attempts
title: Login Attempts
sidebar_label: Login Attempts
sidebar_position: 10
---


The Logs menu under the settings of **WP Secure** provides detailed logging information for successful and failed login attempts. It is divided into three tabs:

1. **Successful Login**
2. **Failed Login**
3. **Clear Logs**

### Successful Login

The **Successful Login** tab displays a log of all successful login attempts. This log is only visible if logging is enabled in the **Brute Force Protection** settings. The log includes the following details:
- **Username**: The username that was used to log in.
- **IP Address**: The IP address from which the login attempt was made.
- **User Agent**: Information about the browser and operating system used during the login attempt.
- **Login Time**: The exact time and date when the login occurred.

#### Importance of Successful Login Logs

- **Monitoring Access**: Keeping track of who logs into your site and when they do so helps in monitoring and securing access.
- **Security Audit**: Reviewing successful logins can help identify unauthorized access if login details were compromised.
- **User Behavior**: Understanding login patterns can help improve user experience and security measures.

### Failed Login

The **Failed Login** tab displays a log of all failed login attempts. Similar to the successful login logs, this is only visible if logging is enabled in the **Brute Force Protection** settings. The log includes the following details:
- **Username**: The username that was attempted for login.
- **IP Address**: The IP address from which the login attempt was made.
- **User Agent**: Information about the browser and operating system used during the login attempt.
- **Attempt Time**: The exact time and date when the login attempt occurred.
- **Attempt Count**: The number of failed attempts made by this user from the same IP address.

#### Importance of Failed Login Logs

- **Identifying Threats**: Monitoring failed login attempts helps in identifying potential brute force attacks and malicious activities.
- **Blocking Malicious IPs**: Repeated failed attempts from the same IP address can be flagged, and such IPs can be blocked to prevent further attacks.
- **Security Improvements**: Analyzing failed login attempts can help in understanding the patterns of attacks and improving overall security measures.

### Clear Logs

The **Clear Logs** tab provides two buttons:
- **Clear Successful Logs**: This button clears all logs of successful login attempts.
- **Clear Failed Logs**: This button clears all logs of failed login attempts.

#### Importance of Clearing Logs

- **Maintain Performance**: Regularly clearing logs helps maintain the performance of your website by preventing the database from becoming too large.
- **Data Privacy**: Clearing logs periodically can help in maintaining data privacy and compliance with data retention policies.
- **Reset Monitoring**: Clearing logs allows for a fresh start in monitoring login attempts, which can be useful after implementing new security measures.


:::tip[Pro Tip]
It is recommended to review and clear your logs regularly to ensure optimal performance and security monitoring.
:::

:::danger[Warning]
Ensure you review the logs thoroughly before clearing them, as this action is irreversible and you will lose all recorded data of login attempts.
:::
