import path from 'node:path';
import { GitDiffFile } from './parse-git-diff';

export function serializeDiff(diff: GitDiffFile): string {
  const ext = path.extname(diff.newPath).substring(1); // json, ts, etc...

  console.log(diff.changes.length === 0 ? diff : '');
  if (diff.changes[0].code === '--- /dev/null') {
    // New file, no need for a diff
    const code = diff.changes
      .slice(3)
      .map((change) => change.diff ?? change.code)
      .map((line) => line.substring(1))
      .join('\n');
    return `###### ${diff.newPath}\n\n\`\`\`${ext}\n${code}\n\`\`\``;
  }

  const code = diff.changes
    .slice(2)
    .map((change) => change.diff ?? change.code)
    .join('\n');
  return [`###### ${diff.newPath}\n\n\`\`\`diff\n${code}\n\`\`\``].join('\n\n');
}
