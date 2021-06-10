import * as React from 'react';
import { AuthorizationContainer } from '@app/auth/AuthorizationContainer';

const AuthPage: React.FC = () => {

	React.useEffect(() => {
		document.title = 'Кафедра 42 НИЯУ МИФИ | Авторизация';
	});

	return <AuthorizationContainer />;
};

export default AuthPage;
