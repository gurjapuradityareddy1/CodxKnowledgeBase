---
title: first-workflow
description: Create a workflow that reacts to a GitHub issue and sends a Slack notification.
---

# Build your first workflow

In this guide, you'll build a workflow that sends a Slack notification whenever a high-priority GitHub issue is created.

The workflow will look like this:

```text
GitHub issue created

        │

        ▼

   Codx trigger

        │

        ▼

 Check issue priority

        │

        ▼

 Priority = high?

      /       \

    No         Yes

    │           │

    ▼           ▼

   End     Slack message