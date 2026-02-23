# TCP for Beginners

TCP (Transmission Control Protocol) is a low-level network protocol used by many applications that need reliable data delivery.
Unlike HTTP, TCP is not tied to web semantics like URLs or methods; it just provides a reliable byte stream between two endpoints.

## Quick Mental Model

- TCP creates a connection between a client and a server.
- Data is delivered in order.
- Lost packets are retransmitted automatically.
- The connection stays open until one side closes it.

## Where TCP Is Used

- Databases (for example, PostgreSQL and MySQL).
- SSH connections.
- Many custom backend protocols.
- Some game and IoT services.

## TCP vs HTTP (Beginner View)

- TCP: Transport layer protocol (moves bytes reliably).
- HTTP: Application protocol (defines request/response rules) that usually runs on top of TCP.

## Ports and Endpoints

- A service listens on a TCP port (for example, `5432` for PostgreSQL).
- Clients connect to `host:port`.
- If the port is not reachable, the connection fails.

## When to Use TCP Tunneling

- You need secure remote access to non-HTTP services.
- You are exposing internal tools that use raw TCP protocols.
- You need stable, long-lived connections.

## How This Works in TunnelBox

_TODO: Add TunnelBox-specific TCP tunnel setup, security model, and operational limits._
