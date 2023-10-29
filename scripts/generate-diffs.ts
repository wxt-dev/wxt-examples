import YAML from 'yaml';
import fs from 'node:fs/promises';
import path from 'node:path';
import { execaCommand } from 'execa';

const skipPullTemplates = process.env.SKIP_PULL_TEMPLATES === 'true';

console.log();
console.log('Generate Template Diffs');
console.log();

interface Config {
  examplesDir: string;
  template: {
    names: string[];
    generate: string;
  };
}
const config: Config = YAML.parse(
  await fs.readFile('diff.config.yml', 'utf-8'),
);
const getExamplePath = (name: string) => path.resolve(config.examplesDir, name);
const getTemplatePath = (name: string) =>
  path.resolve(config.examplesDir, '.' + name);

// Find examples

console.log('Finding examples...');
await fs.mkdir(config.examplesDir, { recursive: true });
const examples = (await fs.readdir(config.examplesDir))
  .map((name) => ({
    name,
    path: getExamplePath(name),
  }))
  .filter((example) => !example.name.startsWith('.'));
examples.forEach((example) => {
  console.log(`  - ${example.name}`);
});
console.log(`${examples.length} examples`);

// Create template directories

const templates = config.template.names.map((name) => ({
  name,
  path: getTemplatePath(name),
}));

if (!skipPullTemplates) {
  console.log();
  console.log('Deleting old templates...');
  await Promise.allSettled(
    templates.map(async (template) => {
      await fs.rm(template.path, { force: true });
    }),
  );

  console.log();
  console.log('Recreating templates...');
  await Promise.all(
    templates.map(async (template) => {
      const command = config.template.generate.replaceAll(
        '{{name}}',
        template.name,
      );
      console.log(`  - ${command}`);
      await execaCommand(command, { cwd: config.examplesDir });
    }),
  );
}

// Update branches

const newBranches = [...templates, ...examples]
  .map((item) => ({ ...item, branch: item.name }))
  .sort((l, r) => l.name.toLowerCase().localeCompare(r.name.toLowerCase()));

console.log(newBranches);
