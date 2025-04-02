# Capitol AI - React Demo

A simple React app that leverages Capitol AI components, giving you confidence in its reliability.

## Prerequisites

To interact with the Capitol AI backend, you’ll need [a valid API key](https://capitol-platform.capitol.ai/).

Currently, API calls go through a proxy server, which requires you to run an additional instance of that service. While this requirement will be removed in the future, it’s necessary for now. To make setup easier, we’ve provided a Docker Compose file — check the instructions below for details.

The current version doesn’t support React 19+ — the latest supported version is React 18.20.

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/Faction-V/capitolai-demo-react
cd capitolai-demo-react
```

2. Set the following environment variables (use provided `.env.sample` as templates):

In the root folder (you'll need API key details you get):

- `API_URL`: The URL of the API to forward requests to (e.g., `https://example.com`).
- `DOMAIN`: The domain value to be included in the `X-Domain` header.
- `API_KEY`: The API key value to be included in the `X-API-Key` header.

Create another `.env` file inside `react-demo` folder (you can copy sample file as is, no changes needed if you keep the Docker port the same):

```bash
VITE_API_URL=http://localhost:8000
```

3. Run the Docker instance for the proxy service:

```bash
docker compose up
```

4. Install the required dependencies and run the app:

```bash
cd react-demo
npm install
npm run dev
```

5. Go to the URL that appears in the terminal (usually - http://localhost:5173/)

## Documentation

You can find the official docs [here](https://www.npmjs.com/package/@capitol.ai/react).

## License

This project is licensed under the MIT License.
