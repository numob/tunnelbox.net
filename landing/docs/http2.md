# HTTP/2 for Beginners

HTTP/2 is a newer version of HTTP designed to make web communication faster and more efficient.
It keeps the same core concepts as HTTP (requests and responses), but changes how data is sent over the connection.

## What Makes HTTP/2 Different

- Multiplexing: Multiple requests/responses can share one connection at the same time.
- Header compression: Repeated headers are compressed to reduce bandwidth.
- Binary framing: Data is sent in a compact binary format instead of plain text.

## Why It Matters

- Pages and APIs can load faster, especially when many assets are requested.
- Less overhead from opening many separate connections.
- Better performance on high-latency networks.

## HTTP vs HTTP/2 (Beginner View)

- HTTP/1.1: Often uses multiple connections and can be slower with many requests.
- HTTP/2: Uses one connection more efficiently with parallel streams.

## Is It Secure by Default?

HTTP/2 itself does not mean encrypted traffic by default, but in practice browsers typically use HTTP/2 over TLS (`https`).

## When to Use HTTP/2

- You serve web frontends with many assets (JS, CSS, images).
- You want better throughput and reduced latency.
- Your clients and infrastructure support it.

## How This Works in TunnelBox

_TODO: Add TunnelBox-specific HTTP/2 support details, routing behavior, and requirements._
