# Capitol AI - React Demo

A simple React app that leverages Capitol AI components, giving you confidence in its reliability.

## Prerequisites

To interact with the Capitol AI backend, you’ll need [a valid API key](https://capitol-platform.capitol.ai/).

NOTE: The current version doesn’t support _React 19+_ — the latest supported version is _React 18.20_.

## Local Setup

1. Clone the repository:

```bash
git clone https://github.com/Faction-V/capitolai-demo-react
cd capitolai-demo-react
```

2. Set the following environment variables (use provided `.env.sample` as a template):

Create `.env` file inside `react-demo` folder:

- `VITE_API_URL`: The URL of the API to forward requests to.
- `VITE_API_DOMAIN`: The domain value to be included in the `X-Domain` header.
- `VITE_API_KEY`: The API key value to be included in the `X-API-Key` header.

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
