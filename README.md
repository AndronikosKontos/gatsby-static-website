# Create a static website using GatsbyJS and deploy it to surge.sh using Gitlab CI

This repository is used to test the capabilities of Gitlab CI/CD. A demo website is created using https://www.gatsbyjs.com/ which is then deployed to https://surge.sh/

The .gitlab-ci.yml file contains the following:

1) Specifies that the pipeline will use a Docker image with Node.js installed.
2) Defines the different stages of the CI/CD pipeline: build, test, deploy to staging, deploy to production, and production tests.
3) Caches the node_modules/ directory to speed up the build process.
4) Runs specific jobs only in main and merge requests.
5) Deploys the Gatsby.js website to staging and production environments using the Surge.sh service.
6) Runs tests (before and after deploying to production).