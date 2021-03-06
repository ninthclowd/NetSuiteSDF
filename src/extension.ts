'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { NetSuiteSDF } from './netsuite-sdf';
import { SDFProvider } from './sdf-provider';
import { _importObject, _importObjectFolder, _refresh, _importFile } from './provider-commands';

export async function activate(context: vscode.ExtensionContext) {
  const netsuiteSdf = new NetSuiteSDF(context);

  const sdfProvider = new SDFProvider(netsuiteSdf);
  vscode.window.registerTreeDataProvider('netsuitesdf', sdfProvider);

  let importFolderFunc = _importObjectFolder(netsuiteSdf);
  let importObjectFunc = _importObject(netsuiteSdf);
  let importFileFunc = _importFile(netsuiteSdf);
  // let refreshFunc = _refresh(sdfProvider);
  let importFolder = vscode.commands.registerCommand('extension.importFolder', importFolderFunc);
  let importObject = vscode.commands.registerCommand('extension.importObject', importObjectFunc);
  let importFile = vscode.commands.registerCommand('extension.importFile', importFileFunc);
  // let refresh = vscode.commands.registerCommand('extension.refresh', refreshFunc);

  let addDependencies = vscode.commands.registerCommand(
    'extension.addDependencies',
    netsuiteSdf.addDependencies.bind(netsuiteSdf)
  );
  let authenticate = vscode.commands.registerCommand(
    'extension.authenticate',
    netsuiteSdf.authenticate.bind(netsuiteSdf)
  );
  let createResetDeploy = vscode.commands.registerCommand(
    'extension.createResetDeploy',
    netsuiteSdf.createResetDeploy.bind(netsuiteSdf)
  );
  let backupRestoreDeploy = vscode.commands.registerCommand(
    'extension.backupRestoreDeploy',
    netsuiteSdf.backupRestoreDeploy.bind(netsuiteSdf)
  );
  let addFileToDeploy = vscode.commands.registerCommand(
    'extension.addFileToDeploy',
    netsuiteSdf.addFileToDeploy.bind(netsuiteSdf)
  );
  let deploy = vscode.commands.registerCommand('extension.deploy', netsuiteSdf.deploy.bind(netsuiteSdf));
  let importBundle = vscode.commands.registerCommand(
    'extension.importBundle',
    netsuiteSdf.importBundle.bind(netsuiteSdf)
  );
  let importFiles = vscode.commands.registerCommand('extension.importFiles', netsuiteSdf.importFiles.bind(netsuiteSdf));
  let importObjects = vscode.commands.registerCommand(
    'extension.importObjects',
    netsuiteSdf.importObjects.bind(netsuiteSdf)
  );
  let listBundles = vscode.commands.registerCommand('extension.listBundles', netsuiteSdf.listBundles.bind(netsuiteSdf));
  let listConfiguration = vscode.commands.registerCommand(
    'extension.listConfiguration',
    netsuiteSdf.listConfiguration.bind(netsuiteSdf)
  );
  let listFiles = vscode.commands.registerCommand('extension.listFiles', netsuiteSdf.listFiles.bind(netsuiteSdf));
  let listMissingDependencies = vscode.commands.registerCommand(
    'extension.listMissingDependencies',
    netsuiteSdf.listMissingDependencies.bind(netsuiteSdf)
  );
  let listObjects = vscode.commands.registerCommand('extension.listObjects', netsuiteSdf.listObjects.bind(netsuiteSdf));
  let preview = vscode.commands.registerCommand('extension.preview', netsuiteSdf.preview.bind(netsuiteSdf));
  let refreshConfig = vscode.commands.registerCommand(
    'extension.refreshConfig',
    netsuiteSdf.refreshConfig.bind(netsuiteSdf)
  );
  let removeFolders = vscode.commands.registerCommand(
    'extension.removeFolders',
    netsuiteSdf.removeFolders.bind(netsuiteSdf)
  );
  let selectEnvironment = vscode.commands.registerCommand(
    'extension.selectEnvironment',
    netsuiteSdf.selectEnvironment.bind(netsuiteSdf)
  );
  let sync = vscode.commands.registerCommand('extension.sync', netsuiteSdf.sync.bind(netsuiteSdf));
  let update = vscode.commands.registerCommand('extension.update', netsuiteSdf.update.bind(netsuiteSdf));
  let updateCustomRecordWithInstances = vscode.commands.registerCommand(
    'extension.updateCustomRecordWithInstances',
    netsuiteSdf.updateCustomRecordWithInstances.bind(netsuiteSdf)
  );
  // let uploadFolders = vscode.commands.registerCommand(
  //   'extension.uploadFolders',
  //   netsuiteSdf.uploadFolders.bind(netsuiteSdf)
  // );
  let validate = vscode.commands.registerCommand('extension.validate', netsuiteSdf.validate.bind(netsuiteSdf));

  context.subscriptions.push(importFolder);
  context.subscriptions.push(importObject);
  context.subscriptions.push(importFile);
  // context.subscriptions.push(refresh);

  context.subscriptions.push(addDependencies);
  context.subscriptions.push(authenticate);
  context.subscriptions.push(createResetDeploy);
  context.subscriptions.push(backupRestoreDeploy);
  context.subscriptions.push(addFileToDeploy);
  context.subscriptions.push(deploy);
  context.subscriptions.push(importBundle);
  context.subscriptions.push(importFiles);
  context.subscriptions.push(importObjects);
  context.subscriptions.push(listBundles);
  context.subscriptions.push(listConfiguration);
  context.subscriptions.push(listFiles);
  context.subscriptions.push(listMissingDependencies);
  context.subscriptions.push(listObjects);
  context.subscriptions.push(preview);
  context.subscriptions.push(refreshConfig);
  context.subscriptions.push(removeFolders);
  context.subscriptions.push(selectEnvironment);
  context.subscriptions.push(sync);
  context.subscriptions.push(update);
  context.subscriptions.push(updateCustomRecordWithInstances);
  // context.subscriptions.push(uploadFolders);
  context.subscriptions.push(validate);
}

// this method is called when your extension is deactivated
export function deactivate() {}
