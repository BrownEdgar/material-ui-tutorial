import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { Stack, Typography } from '@mui/material';
import { deepPurple, brown, deepOrange, orange, purple, lightGreen, blueGrey, grey } from '@mui/material/colors';
import "./App.css";
//https://mui.com/customization/default-theme/?expand-path=$.palette
// About <Stack> => https://mui.com/components/stack/#main-content
// React SyntheticEvent => https://ru.reactjs.org/docs/events.html
//MUI all colors list => https://mui.com/customization/color/#main-content

export default function App() {
	const [bgColor, setBgolor] = React.useState(grey[50])
	const [color, setColor] = React.useState(null)
	const handeleMouseEvent = (e, type) => {
		console.log({ e, type });
		if (type === "#3e2723") { // brown[900] === "#3e2723"
			setColor( "white");
		}
		setBgolor(color => type);
	}

	React.useEffect(() => {
		console.log("effect")
	}, [color]);
	const resetValues = () => {
		setColor( null);
		setBgolor(grey[50]);
	}
	return (
		<Box sx={{
			flexGrow: 1,
			display: 'flex',
			flexDirection: "column",
			backgroundColor: bgColor,
			width: 750,
			height: 400,
			boxShadow: 15,
			borderRadius: '8px',
			maxWidth: { xs: 320, md: 800 },
			p: 1,
			alignItems: "flex-start",
			justifyContent: "flex-start",
			mx: "auto",
			my: 5,
			p: 6,
			color: color ? color : grey[900]
			// '&:hover': {
			// 	backgroundColor: 'primary.main',
			// 	opacity: [0.9, 0.8, 0.7],
			// },
		}}>
			<Typography variant="h2" align="left" gutterBottom>
				Material Ui example
			</Typography>
			<Typography variant="body1">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam earum adipisci id molestias modi? Minima eveniet dignissimos voluptatem odio vero illo sunt aut voluptate porro!
			</Typography>

			<Stack direction="row" spacing={2} py={2} >
				<Button
					variant="contained"
					color='warning'
					onMouseEnter={(e) => handeleMouseEvent(e, orange[400])}
					onMouseOut={() => resetValues()}>
					deepPurple
				</Button>
				<Button
					variant="contained"
					color='success'
					onMouseEnter={(e) => handeleMouseEvent(e, lightGreen[800])}
					onMouseOut={() => resetValues()}>
					lightGreen
				</Button>
				<Button
					variant="contained"
					sx={{ backgroundColor: brown[900] }}
					onMouseEnter={(e) => handeleMouseEvent(e, brown[900])}
					onMouseOut={() => resetValues()}>
					brown
				</Button>
				<Button
					variant="contained"
					sx={{ backgroundColor: blueGrey[600] }}
					onMouseEnter={(e) => handeleMouseEvent(e, blueGrey[600])}
					onMouseOut={() => resetValues()}>
					blueGrey
				</Button>
			</Stack>

		</Box>
	);
}
