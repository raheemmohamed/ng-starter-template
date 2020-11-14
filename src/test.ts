// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

/**
 * If you want to write unit test for specific compoent or service use below one to achieve
 */
const firstpageComponent = require.context(
  './',
  true,
  /first-page.component\.spec\.ts$/
);
firstpageComponent.keys().map(firstpageComponent);

/**
 * If you want to write unit test for specific service follow this to achieve
 */
const dashboardService = require.context(
  './',
  true,
  /dashboard.service\.spec\.ts$/
);
dashboardService.keys().map(dashboardService);
