---
title: Workspaces
description: Understand how Codx uses workspaces to organize workflows and resources.
---

# Workspaces

A workspace is an isolated environment for building and running Codx workflows.

Workspaces provide a boundary for workflows, connections, configuration, and access control.

## Workspace structure

A Codx organization can contain multiple workspaces.

```text
Organization
│
├── Development
│   ├── Workflows
│   ├── Connections
│   └── Secrets
│
├── Staging
│   ├── Workflows
│   ├── Connections
│   └── Secrets
│
└── Production
    ├── Workflows
    ├── Connections
    └── Secrets