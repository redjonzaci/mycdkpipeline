import { Construct, Stage, StageProps } from '@aws-cdk/core';
import { AmplifyExportedBackend } from '@aws-amplify/cdk-exported-backend';
import * as path from 'path';

export class AmplifyStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    new AmplifyExportedBackend(this, 'amplifyExportedBackend', {
      amplifyEnvironment: 'main',
      path: path.resolve(__dirname, '..', '..', '..', 'amplify-export-g2mint'),
    });
  }
}
