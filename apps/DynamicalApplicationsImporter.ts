//

import {ISidebarApp} from 'src/loader/TypedAppsLoader';
import {newBuiltinApp, newDynamicalApp} from 'src/loader/DynamicalAppConstructor';
import {SidebarApplications} from 'src/graphic/applications/DynamicalApplicationsImporter';
import {URM} from 'src/graphic/resources/resources';
import {AppNoting} from './AppNoting';
import {R} from './DynamicalApplications.resources';

const newApp = newDynamicalApp;
const withApp = newBuiltinApp;

// @ts-ignore
// @see https://webpack.js.org/guides/public-path
__webpack_public_path__ = URM.pathPrefixDynamicalImports;
// @see https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
const appMuilibDemo = newApp(R.muilib, () => import(/* webpackChunkName: "AppMuiLibDemo" */'./AppMuiLibDemoHome'));
const appNoting = withApp(R.noting, AppNoting);

export const DynamicalDemoApplications: ISidebarApp[] = [
	appMuilibDemo,
	appNoting,
	...SidebarApplications,
];
