//

import {IDynamicalApp} from 'src/loader/TypedAppsLoader';
import {newDynamicalApp} from 'src/loader/DynamicalAppConstructor';
import {DynamicalApplications} from 'src/graphic/applications/DynamicalApplicationsImporter';
import {URM} from 'src/graphic/resources/resources';
import {R} from './DynamicalApplications.resources';

const newApp = newDynamicalApp;

// @ts-ignore
// @see https://webpack.js.org/guides/public-path
__webpack_public_path__ = URM.pathPrefixDynamicalImports;
// @see https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
const appMuilibDemo = newApp(R.muilib, () => import(/* webpackChunkName: "AppMuiLibDemo" */'./AppMuiLibDemoHome'));
const appNoting = newApp(R.noting, () => import(/* webpackChunkName: "AppNoting" */'./AppNoting'));

export const DynamicalDemoApplications: IDynamicalApp[] = [
	appMuilibDemo,
	appNoting,
];
