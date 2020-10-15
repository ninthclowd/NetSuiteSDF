# NetSuiteSDF-CI Extension

## Introduction

This is a fork of https://github.com/christopherwxyz/NetSuiteSDF with support for 2020.2 authentication ids. Does not require an .sdf-cli file in your project

# Install

1. Download netsuitesdf-ci-0.0.1.vsix

2. `code --install-extension netsuitesdf-ci-0.0.1.vsix`

# Environment Setup

## To setup the `production` environment

1. `sdfcli authenticate -authid production`
2. A browser will open having you log into netsuite
3. Select `choose role` next to your production environment
4. Click `Allow`
5. Run `sdfcli manageauth -list` to verify the account was added

## To setup a `stage` environment

1. `sdfcli authenticate -authid stage`
2. A browser will open having you log into netsuite
3. Select `choose role` next to your stage environment
4. Click `Allow`
5. Run `sdfcli manageauth -list` to verify the account was added

After setup, verify the environments are accesible through the `SDF: Select Environment` vscode command (`Ctrl+Shift+P`)
