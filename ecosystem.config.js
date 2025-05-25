module.exports = {
  apps: [
    {
      name: 'zhubao', // 应用程序名称
      port: '3000', // 监听端口
      instances: 'max', // 应用实例数
      autorestart: true, // 自动重启
      watch: false, // 监控文件变动
      exec_mode: 'cluster',
      cwd: './web-zhubao', // 指定运行环境目录
      script: 'npm', // 主脚本
      args: 'start'
    },
  ],
};