# HTTP for Beginners

HTTP (Hypertext Transfer Protocol) is the standard way web clients and servers communicate.
When you open a website in your browser, your browser sends an HTTP request and the server sends back an HTTP response.

## Quick Mental Model

- Client: Browser, mobile app, script, or API tool.
- Server: Your app running locally or in the cloud.
- Request: "Please give me this resource."
- Response: "Here is the data" (or an error).

## Common HTTP Methods

- `GET`: Read data.
- `POST`: Create or submit data.
- `PUT`: Replace data.
- `PATCH`: Update part of data.
- `DELETE`: Remove data.

## Common Status Codes

- `200 OK`: Request succeeded.
- `201 Created`: New resource created.
- `400 Bad Request`: Client sent invalid input.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Authenticated but not allowed.
- `404 Not Found`: Resource does not exist.
- `500 Internal Server Error`: Server-side failure.

## Why Developers Use HTTP

- Web apps and APIs are built on it.
- Easy to inspect with browser devtools, Postman, or `curl`.
- Works well for request/response style systems.

## Beginner Example

Request:

```http
GET /api/users HTTP/1.1
Host: example.com
```

Response:

```http
HTTP/1.1 200 OK
Content-Type: application/json

[{"id":1,"name":"Alex"}]
```

## How This Works in TunnelBox

_TODO: Add TunnelBox-specific HTTP flow and setup notes._
