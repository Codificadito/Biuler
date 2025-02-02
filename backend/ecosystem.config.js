module.exports = {
            apps: [{
                            name: "Biuler",
                            script: "/home/Biuler/backend/server.js",
                            args: "node server",
                            cwd: "/home/Biuler/backend",
                            watch: true,
                            ignore_watch: ["node_modules", "logs"],
                            exec_mode: "cluster",
                            instances: 1,
                            max_memory_restart: "100M",
                            autorestart: true,      // Asegura el reinicio automático
                            exp_backoff_restart_delay: 5000, // Retraso entre reinicios

                            env_production: {
                                                NODE_ENV: "production",
                                                PORT: 7000
                                            },
                            env_development: {
                                                NODE_ENV: "development",
                                                PORT: 7000
                                            }      
                        }]
}
