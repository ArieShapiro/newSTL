module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '05f4ab4b89f3f5cb64fac8ad7da0ac9d'),
    },
  },
});
