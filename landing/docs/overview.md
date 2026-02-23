# What Is TunnelBox?

TunnelBox is a hardware tunneling gateway that helps you expose local services to the public internet.
It is designed to reduce networking complexity while keeping security and reliability in focus.

## Why TunnelBox?

Many tunneling workflows require manual setup, CLI tooling, and network troubleshooting.
TunnelBox is built to simplify that process:

- Minimal setup steps
- Managed domain and TLS workflows
- A dashboard-driven experience

## Who Is TunnelBox For?

TunnelBox is useful for:

- Beginners learning how public endpoints work
- Developers testing webhooks and API integrations
- Teams running internal tools or demos
- Startups exposing staging services quickly
- Exposing your AI models to the public internet

## Core Concepts

- `Device`: Your physical TunnelBox hardware.
- `Domain`: Public hostname mapped to your service.
- `Route`: Rule that forwards traffic from a domain/path to a local port.
- `Protocol`: The service type (HTTP, HTTP/2, TCP).

## Typical Setup Flow

1. Connect and activate your TunnelBox device.
2. Register one or more domains.
3. Add routes from domain traffic to local services.
4. Verify reachability from outside your local network.

## Supported Protocols

- [HTTP](/docs/http)
- [HTTP/2](/docs/http2)
- [TCP](/docs/tcp)

## What to Read Next

1. [Registering a TunnelBox](/docs/tunnelbox)
2. [Registering Domains](/docs/domain)
3. [Routing Traffic](/docs/routing)
4. [Troubleshooting](/docs/troubleshooting)
