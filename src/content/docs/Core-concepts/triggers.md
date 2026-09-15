---
title: Triggers
description: Learn how Codx starts workflow executions.
---

# Triggers

A trigger determines when Codx starts a workflow.

Every workflow has a trigger.

## Trigger types

Codx can support several trigger patterns.

### Webhook triggers

A webhook starts a workflow when another service sends an HTTP request.

```text
External service
      ↓
POST /webhooks/abc123
      ↓
Codx
      ↓
Workflow