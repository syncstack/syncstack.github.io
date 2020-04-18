---
id: syncstack-configuration
title: Configuration
sidebar_label: SyncStack Configuration
---
Syncstack is configurable through a configuration file, various command-line flags, and environment variables.
## Member flags

### node-name
+ Human-readable name for this member.

### bind-url
+ Human-readable name for this member.

### advertise-url
+ Human-readable name for this member.

### log-level
+ Human-readable name for this member.

### log-destination
+ Human-readable name for this member.

### directory
+ Human-readable name for this member.

### in-memory
+ Human-readable name for this member.

### backup-dir
+ Human-readable name for this member.

## Sample Syncstack config file
```jsx
[node]
node-name = node-1
bind-url = tcp://node-1@127.0.0.1:8080 tcp://node-1@127.0.0.1:8081
advertise-url = tcp://node-1@127.0.0.1:8080 tcp://node-1@127.0.0.1:8081
log-level = INFO
log-destination = stdout
directory = ../../storage/node-1
in-memory = true
backup-dir = ./

[cluster]
name = cluster
max-size = 1gb
backup = true
node-url = tcp://node-1@127.0.0.1:8080 tcp://node-2@127.0.0.1:8082

[advanced]
io-buf-size = 32768
log-page-count = 5
log-page-size = 1gb
```