# WXT Examples

To run an example, install dependencies, cd into the directory, and run the `wxt dev` command.

```sh
pnpm i

cd examples/vue-i18n
pnpm dev
```

Each example is compared against it's relevant template, and it's README is generated based on the diff between the template and example.

## Adding Examples

Examples should be based off a template and be as minimal as possible. Do not delete any of the files created by the template if unnecessary.

You can create a new example inside the `examples` directory like so:

```sh
# Create the project base
pnpx wxt@latest init examples/vanilla-i18n --template vanilla --pm pnpm

# Add a README template where the example is explained
touch examples/vanilla-i18n/README.template.md
```

- `--template vanilla`: When listed on <https://wxt.dev/examples.html>, this is the template whose diff will be compared against
- `examples/vanilla-i18n`: Make sure to create the example in the examples directory, and prefix the name with the template it's based off of
- `--pm pmpm`: Use `pnpm` for the package manager to be consistent with this repo. Since we're in a PNPM workspace, the diffs will never display lockfile changes.

Other examples:

```sh
pnpx wxt@latest init examples/vue-content-script-ui --template vue --pm pnpm
pnpx wxt@latest init examples/vanilla-tailwind --template vanilla --pm pnpm
pnpx wxt@latest init examples/react-options-page --template react --pm pnpm
```

## Generating README

To generate your example's README, run:

```sh
# Update templates and generate READMEs
pnpm -w generate

# Skip updating templates, just generate READMEs
pnpm -w dev:generate
```

This will take your template file, add diffs/file changes to it, and write a new `README.md`.

Your `README.template.md` file should be styled as a walkthrough, referencing individual files as you implement the example. See `examples/vue-i18n/README.template.md` for an example.

You template can list a few template varialbes that will be replaced when generating the example's README.

- `{{base}}`: Replaced with information about which WXT template the example is based off of
- `{{filename}}`: Replaced with the filename and diff/contents of the specified file
