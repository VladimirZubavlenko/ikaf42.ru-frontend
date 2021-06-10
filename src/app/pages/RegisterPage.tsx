import * as React from 'react';
import RegisterContainer from '@app/register/RegisterContainer';

const RegisterPage: React.FC = () => {

	React.useEffect(() => {
		document.title = 'Кафедра 42 НИЯУ МИФИ | Регистрация';
	});

	return (
		<RegisterContainer/>
	);
};

export default RegisterPage;
