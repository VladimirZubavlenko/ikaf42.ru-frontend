import * as React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import TelegramIcon from '@material-ui/icons/Telegram';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) => ({
	firstCardRoot: {
		backgroundColor: theme.palette.primary.main,
		marginTop: '80px',
	},
	secondCardRoot: {
		marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
	},
	icon: {
		height: 70,
		width: 70,
	},
	white: {
		color: 'white',
	},
	root: {
		textAlign: 'center',
		margin: '80px 60px 60px',
	},
	root2: {
		display: 'flex',
		flexDirection: 'column',
	},
	statsItem: {
		alignItems: 'center',
		display: 'flex',
	},
	statsIcon: {
		marginRight: theme.spacing(1),
	},
}));

export const Support: React.FC = () => {

	const classes = useStyles();

	return (
		<Container maxWidth='sm'>
			<Card
				className={classes.firstCardRoot}
			>
				<CardContent>

					<div style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
						<Typography
							className={classes.white}
							align="center"
							variant="h4"
						>
              Вам нужна наша помощь?
						</Typography>

						<Typography
							className={classes.white}
							align="center"
							variant="body1"
						>
             Обратитесь в нашу службу поддержки, если у вас возникли трудности с работой в приложении.
              Система разработана командой разработчиков кафедры №42 «Криптология и кибербезопасность».
						</Typography>
					</div>
				</CardContent>
			</Card>

			<Card
				className={classes.secondCardRoot}
			>
				<CardContent>
					<Box
						display="flex"
						justifyContent="start"
						mb={3}
					>
						<PhoneIcon
							className={classes.icon}
							style={{ marginRight: '20px' }}
						/>
						<StyledDiv>
							<Typography
								align="left"
								color="textPrimary"
								variant="h5"
							>
                  Номер телефона
							</Typography>
							<Typography
								align="left"
								color="textSecondary"
								variant="body1"
							>
								<StyledLink href="tel:+74957885699p9642" color="inherit">
                  +7 (495) 788 56 99 доб. 9642
								</StyledLink>

							</Typography>
						</StyledDiv>
					</Box>

					<Box
						display="flex"
						justifyContent="start"
						mb={3}
					>
						<MailIcon
							className={classes.icon}
							style={{ marginRight: '20px' }}
						/>
						<StyledDiv>
							<Typography
								align="left"
								color="textPrimary"
								variant="h5"
							>
                Почта
							</Typography>
							<Typography
								align="left"
								color="textSecondary"
								variant="body1"
							>
								<StyledLink href="mailto:admin@ikaf42.ru" color="inherit">
                  admin@ikaf42.ru
								</StyledLink>
							</Typography>
						</StyledDiv>
					</Box>

					<Box
						display="flex"
						justifyContent="start"
						mb={3}
					>
						<TelegramIcon
							className={classes.icon}
							style={{ marginRight: '20px' }}
						/>
						<StyledDiv>
							<Typography
								align="left"
								color="textPrimary"
								variant="h5"
							>
                Telegram
							</Typography>
							<Typography
								align="left"
								color="textSecondary"
								variant="body1"
							>
								<StyledLink href="https://t.me/meloman42" target="_blank" color="inherit">
                  @meloman42
								</StyledLink>

							</Typography>
						</StyledDiv>
					</Box>

				</CardContent>
			</Card>

		</Container>
	);
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size .3s;
    :hover {
    background-size: 100% 1px;
    }
`;
