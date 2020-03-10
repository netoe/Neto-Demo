//

import {ISidebarApp} from 'src/loader/TypedSidebarApps';
import {newBuiltinApp, newDynamicalApp} from 'src/loader/SidebarAppsConstructor';
import {SidebarApplications} from 'src/graphic/applications/SidebarApplicationsImporter';
import {URM} from 'src/graphic/resources/resources';
import {AppDemos} from './AppDemos';
import {AppMilestones} from './AppMilestones';
import {AppNoting} from './AppNoting';
import {R} from './SidebarApplications.resources';

const newApp = newDynamicalApp;
const withApp = newBuiltinApp;

// @ts-ignore
// @see https://webpack.js.org/guides/public-path
__webpack_public_path__ = URM.pathPrefixDynamicalImports;
// @see https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
const appDemos = withApp(R.demos, AppDemos);
const appMilestones = withApp(R.milestones, AppMilestones);
const appMuilibDemo = newApp(R.muilib, () => import(/* webpackChunkName: "AppMuiLibDemo" */'./AppMuiLibDemoHome'));
const appNoting = withApp(R.noting, AppNoting);

export const DemoSidebarApplications: ISidebarApp[] = [
	appDemos,
	appMilestones,
	appMuilibDemo,
	appNoting,
	...SidebarApplications,
];
