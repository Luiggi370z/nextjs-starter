module.exports = {
  // Check Typescript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) =>
    `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' --file ')}`,

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};
