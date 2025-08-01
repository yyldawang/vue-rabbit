if (!process.env.npm_config_user_agent?.includes('pnpm')) {
  console.error('\x1b[31mError: 请使用 pnpm 安装依赖，不支持 npm 或 yarn!\x1b[0m')
  console.error('\x1b[33m正确命令: pnpm install\x1b[0m')
  process.exit(1)
}
