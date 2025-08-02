import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import pluginOxlint from 'eslint-plugin-oxlint';

export default defineConfigWithVueTs(
  // 1. 先引入基础规则（低优先级）
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  ...pluginOxlint.configs['flat/recommended'],

  // 2. 全局忽略文件（不影响规则优先级）
  globalIgnores([
    '**/dist/**', 
    '**/dist-ssr/**', 
    '**/coverage/**',
    'node_modules/**' // 必须忽略依赖目录
  ]),

  // 3. 最后声明自定义规则（高优先级，覆盖前面的规则）
  {
    name: 'app/custom-rules',
    files: ['**/*.{ts,mts,tsx,vue}'], // 明确作用的文件类型
    rules: {
      // 强制关闭 any 检查（覆盖 ts 推荐配置）
      "@typescript-eslint/no-explicit-any": "off",
      // 强制关闭组件多单词命名检查（覆盖 vue 基础配置）
      'vue/multi-word-component-names': "off",
      
      // 可选：如果 oxlint 仍报类似错误，显式关闭其对应规则
      'oxlint/no-explicit-any': "off" // 若有此规则则关闭
    }
  }
);
