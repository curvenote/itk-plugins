import { defineConfig } from 'tsup';
import path from 'node:path';
import { promises as fs } from 'node:fs';

const plugins = ['dist/itk.plugin.mjs'];
const targets = ['.'];

export default defineConfig({
  entry: ['src/itk.plugin.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['esm'],
  dts: true,
  outExtension() {
    return {
      js: '.mjs',
    };
  },
  async onSuccess() {
    console.log('🤖 Copying plugins to targets...');
    for (const target of targets) {
      await fs.mkdir(target, { recursive: true });
    }

    await Promise.all(
      plugins.map(async (plugin) => {
        return Promise.all(
          targets.map(async (target) => {
            const dest = path.join(target, path.basename(plugin));
            await fs.copyFile(plugin, dest);
            console.log(`🤖 Copied ${plugin} to ${dest}`);
          })
        );
      })
    );
  },
});
