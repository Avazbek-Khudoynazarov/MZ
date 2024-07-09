module.exports = {
  apps: [
    {
      name: "react-app",
      script: "npx",
      args: "serve -s build -l 3000",
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
