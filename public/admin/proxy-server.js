const express = require("express");
const {createProxyMiddleware} = require("http-proxy-middleware");

const app = express();

// Proxy /api requests to Netlify
app.use(
	"/api",
	createProxyMiddleware({
		target: "https://api.netlify.com",
		changeOrigin: true,
		pathRewrite: {
			"^/api": "/api/v1",
		},
	})
);

// Proxy /identity requests to Netlify
app.use(
	"/identity",
	createProxyMiddleware({
		target: "https://identity.netlify.com",
		changeOrigin: true,
	})
);

// Serve static files from the current directory
app.use(express.static(__dirname));

const port = 8081;
app.listen(port, () => {
	console.log(`Proxy server running at http://localhost:${port}`);
});
