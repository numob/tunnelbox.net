# Troubleshooting

Use this page to diagnose common setup and connectivity issues.

## Device Does Not Show as Online

Checklist:

- Confirm power is connected.
- Confirm Ethernet is connected to an active router/switch port.
- Wait 1-2 minutes after boot.
- Refresh the console dashboard.

If still offline, reboot the device once and recheck.

## Domain Is Registered but Not Reachable

Checklist:

- Verify domain status in the console.
- Confirm a route exists for that domain.
- Confirm target service is running locally.
- Confirm route points to correct host/port.

## Route Exists but Service Returns Errors

Checklist:

- Test the service directly on local network first.
- Confirm the correct protocol is selected (HTTP, HTTP/2, or TCP).
- Check application logs for 4xx/5xx errors.
- Confirm the service is bound to the expected interface/port.

## HTTPS or Certificate Issues

Checklist:

- Verify domain registration completed successfully.
- Wait briefly for provisioning if setup is recent.
- Retry from a private/incognito browser window.

## Intermittent Connection Problems

Checklist:

- Check local network stability.
- Reduce frequent route changes during active testing.
- Verify the local service is not restarting/crashing.

## When to Escalate

Collect this information before contacting support:

- Device ID
- Domain name
- Route configuration summary
- Approximate timestamp of failure
- Relevant app/log error messages
