# WXT Examples

To run an example, install dependencies, cd into the directory, and run the `wxt dev` command.

```sh
pnpm i

cd examples/vue-i18n
pnpm dev
```

Each example is also given it's own branch. To compare an example against a template (from `wxt init`), you can visit <https://github.com/wxt-dev/wxt-examples/compare> and compare the template branch against the example's branch.

For example, to compare the `vue-i18n` example against the `vue` template, visit <https://github.com/wxt-dev/wxt-examples/compare/vue...vue-i18n>. This will give you a line-by-line diff explaining why each change is important or what it accomplishes.

## Adding Examples

Examples should be very minimal. They should be a template with the minimal changes necessary to demonstrate 1 thing.

You can create a new example inside the `examples` directory like so:

```sh
# Create the project base
pnpx wxt@latest init examples/vanilla-i18n --template vanilla --pm pnpm

# Optionally, add a text description that will be displated first in the diff
touch examples/vanilla-i18n/.description.md
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
