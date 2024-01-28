import type { Config } from './config.interface';
// import * as packageJSON from '../../../package.json';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Template Service API',
    description: 'Tempalte Service for OET platform',
    version: '' /* + (process.env.RELEASE_TAG || packageJSON.version)*/,
    path: 'docs',
  },
};

export default (): Config => config;
