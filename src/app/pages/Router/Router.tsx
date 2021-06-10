import * as React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes, RoutesNames } from '@app/common/enums/routes';
import { IStateProps } from '@app/pages/Router/RouterContainer';
import AuthPage from '@app/pages/AuthPage';
import RegisterPage from '@app/pages/RegisterPage';
import MainPage from '@app/pages/MainPage';
import PapersPage from '@app/pages/PapersPage';
import WorkCardPage from '@app/pages/WorkCardPage';
import SupportPage from '@app/pages/SupportPage';
import SettingsPage from '@app/pages/SettingsPage';
import ErrorPage from '@app/pages/Error';
import VacancyPage from '@app/pages/VacancyPage';

// const MainPage = React.lazy(() => import('./MainPage'));
// const AuthPage = React.lazy(() => import('./AUthPage'));
// const RegisterPage = React.lazy(() => import('./RegisterPage'));
// const PapersPage = React.lazy(() => import('./PapersPage'));
// const SupportPage = React.lazy(() => import('./SupportPage'));
// const FormPage = React.lazy(() => import('./FormPage'));
// const Error = React.lazy(() => import('./Error'));

export const Router: React.FC<IStateProps> = ({ isAuth }) =>
	<Switch>
		<Route
			name={RoutesNames.AUTH}
			path={Routes.AUTH}
			component={() => !isAuth ? <AuthPage/> : <Redirect to={Routes.ROOT}/>}
			exact={true}
		/>
		<Route
			name={RoutesNames.REGISTER}
			path={Routes.REGISTER}
			component={() => !isAuth ? <RegisterPage/> : <Redirect to={Routes.ROOT}/>}
			exact={true}
		/>
		<Route
			name={RoutesNames.ROOT}
			path={Routes.ROOT}
			component={() => isAuth ? <MainPage/> : <Redirect to={Routes.AUTH}/>}
			exact={true}
		/>
		<Route
			name={RoutesNames.PAPERS}
			path={Routes.PAPERS}
			component={() => isAuth ? <PapersPage/> : <Redirect to={Routes.AUTH}/>}
			exact={true}
		/>
		<Route
			name={RoutesNames.FORM}
			path={Routes.FORM}
			component={() => isAuth ? <WorkCardPage/> : <Redirect to={Routes.AUTH}/>}
			exact={true}
		/>
		<Route
			name={RoutesNames.VACANCY}
			path={Routes.VACANCY}
			component={() => isAuth ? <VacancyPage/> : <Redirect to={Routes.AUTH}/>}
			exact={true}
		/>
		<Route
			name={RoutesNames.SUPPORT}
			path={Routes.SUPPORT}
			component={() => isAuth ? <SupportPage/> : <Redirect to={Routes.AUTH}/>}
			exact={true}
		/>
		<Route
			name={RoutesNames.SETTINGS}
			path={Routes.SETTINGS}
			component={() => isAuth ? <SettingsPage/> : <Redirect to={Routes.AUTH}/>}
			exact={true}
		/>
		<Route
			component={ErrorPage}
		/>
		<Redirect to={Routes.ERROR}/>
	</Switch>;

