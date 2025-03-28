// Load the CMS configuration
const config = require("./config.yml");

// Check if we're in development
const isDev = process.env.NODE_ENV === "development";

// Enable local backend in development
if (isDev) {
	config.local_backend = true;
}

// Export the modified config
module.exports = config;
