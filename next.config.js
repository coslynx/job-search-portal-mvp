/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  if (phase === 'production') {
    return {
      ...defaultConfig,
      reactStrictMode: true,
      swcMinify: true,
      images: {
        domains: ['images.example.com'], // Allow images from specific domains
        loader: 'cloudinary', // Use cloudinary image loader
        formats: ['image/webp'], // Prioritize WebP for image formats
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Define image sizes for optimization
      },
      experimental: {
        appDir: true, // Enable the new App directory for improved routing and performance
      },
      // Set up your custom environment variables
      env: {
        API_URL: process.env.API_URL,
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
      },
    };
  }

  return {
    ...defaultConfig,
    reactStrictMode: true, // Enables strict mode for additional checks
    swcMinify: true, // Enables a fast and efficient compiler for production
    images: {
      domains: ['images.example.com'], // Allow images from specific domains
      loader: 'cloudinary', // Use cloudinary image loader
      formats: ['image/webp'], // Prioritize WebP for image formats
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Define image sizes for optimization
    },
    // Other custom configurations here
    experimental: {
      appDir: true, // Enable the new App directory for improved routing and performance
    },
  };
};

module.exports = nextConfig;