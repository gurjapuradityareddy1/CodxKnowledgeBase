---
title: Publish a workflow
description: Publish a tested workflow and enable it to process live events.
---

# Publish a workflow

Publishing makes a workflow available to process live events.

Before publishing, test the workflow and verify that all integrations and credentials are configured correctly.

## Review the workflow

Before publishing, verify:

1. The trigger is correct.
2. Conditions match the intended events.
3. Actions target the correct services.
4. Connections use the expected accounts.
5. Variables resolve correctly.
6. Error handling is configured.

## Publish

Select **Publish**.

Codx creates a new workflow version and prepares it for execution.

The workflow moves through these states:

```text
Draft

  ↓

Testing

  ↓

Published

  ↓

Active