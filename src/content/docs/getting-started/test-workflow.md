---
title: Test your workflow
description: Validate workflow logic and inspect individual steps before publishing.
---

# Test your workflow

Testing lets you validate workflow behavior before enabling it in a production environment.

A test run executes the workflow using sample or captured input.

## Run a test

Open your workflow and select **Test**.

Codx displays the available trigger inputs.

For the GitHub workflow, a test payload might look like:

```json
{
  "action": "opened",
  "issue": {
    "number": 142,
    "title": "Payment webhook failing",
    "priority": "high"
  },
  "repository": {
    "full_name": "acme/payments"
  }
}