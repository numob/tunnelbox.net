# Routing Traffic

Routing tells TunnelBox which local service should receive incoming traffic.

## Before You Configure Routes

Make sure:

- Your TunnelBox device is active
- A domain is already registered
- Your target local app is running and reachable on a local port

## Step 1: Select a Domain

1. In the console, open `Domains`.
2. Click the domain you want to configure.

## Step 2: Add a Route

1. Click `Add Route`.
2. Fill in the route fields (such as protocol, destination host, and port).
3. Save the route.

## Step 3: Test the Route

1. Open the public domain URL from an external network/device.
2. Confirm your app responds correctly.
3. If it fails, review [Troubleshooting](/docs/troubleshooting).

## Routing Example (HTTP)

- Domain: `demo.ingdns.net`
- Destination host: `127.0.0.1`
- Destination port: `3000`
- Result: Requests to `demo.ingdns.net` are forwarded to your local app on port `3000`

## Routing Best Practices

- Keep protocol choice aligned with service behavior.
- Document team route ownership to avoid accidental edits.
