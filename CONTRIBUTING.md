# Contributing to the OVO plugins for Backstage

The following plugins are built by OVO for our engineers - however we also believe these can be valuable to others
so we are sharing as part of our commitment to Backstage and Open Source Software.

In general, we aim to stick as closely as possible to the [contribution guidelines which apply to the Backstage project](https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md). If something is not covered in this document, please assume that the appropriate Backstage guideline will apply.

## Types of Contributions

We believe everyone comes to work to do their best work - but we also recognise that others can add value and help us improve our plugins - so contributions are always welcome.

### Report bugs

If you have found a bug please raise an issue [here](https://github.com/ovotech/ovo-backstage-plugins/issues).

### Fix bugs or build new features

If you would like to help fix a known issue - or add a new feature to an existing plugin then please check the issues.

### Submit feedback

We welcome feedback in everything that we do - should you wish to share please raise [an issue](https://github.com/ovotech/ovo-backstage-plugins/issues).

If you are proposing a feature:

- Explain in detail how it would work.
- Explain the wider context about what you are trying to achieve.
- Keep the scope as narrow as possible, to make it easier to implement.
- Remember that this is a volunteer-driven project, and that contributions are welcome :)

### Write E2E tests

As the number of plugins included in this repository increases, so does importance of good E2E tests which will make sure everything runs as it is expected. In order to contribute to this, very important aspect, of this repository, we urge you to follow guidelines below:

E2E tests are integrated under `/packages/app/cypress` folder where you will find specific E2E test for every plugin under `/packages/app/cypress/integrations`. This means you should follow that pattern and add tests in appropriate plugin test files. We would also encourage you to add more fixtures under `/packages/app/cypress/fixtures`. For testing purposes you can use `test-entity.yaml` file which can be found under `/packages/entities`, which we have created especially for this purpose.

## Coding Guidelines

We use the backstage-cli to build, serve, lint, test and package all the plugins.

As such, the [same coding guidelines as in Backstage repository mostly apply](https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md#coding-guidelines).

## Creating Changesets

We use [changesets](https://github.com/atlassian/changesets) in order to prepare releases. To make the process of generating releases easy, please include changesets with your pull request. This will result in a every package affected by a change getting a proper version number and an entry in its `CHANGELOG.md.

### When to use a changeset?

Any time a patch, minor, or major change aligning to [Semantic Versioning](https://semver.org) is made to any published package in `plugins/`, a changeset should be used.
In general, changesets are not needed for the documentation, build utilities or similar.

### How to create a changeset

1. Run `yarn changeset`
2. Select which packages you want to include a changeset for
3. Select impact of change that you're introducing, using `minor` for breaking changes and `patch` otherwise.
4. Explain your changes in the generated changeset. See [examples of well written changesets](https://backstage.io/docs/getting-started/contributors#writing-changesets).
5. Add generated changeset to Git
6. Push the commit with your changeset to the branch associated with your PR

For more information, checkout [adding a changeset](https://github.com/atlassian/changesets/blob/master/docs/adding-a-changeset.md) documentation in the changesets repository.

## Releasing Plugins and Packages

Please include changeset files your pull requests if you would like them to be released. To create a changeset file run `yarn changeset` and commit the resulting file to the pull request.

After merging a changeset file to main, a subsequent pull request is created automatically that makes the actual version bumps of the plugins/packages based on the changeset files. When this pull request is merged, the plugins and packages are automatically published to npm.

## Thank you to the Backstage Community

We have taken the examples of Backstage and RoadieHQ in how we have structured this repository, and in how we use Changesets and other build features to help build and publish our plugins.
