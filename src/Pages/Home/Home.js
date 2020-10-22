import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
//import librarys
import {
	Row,
	Col,
	Form,
	FormControl,
	InputGroup,
	Button,
	Spinner,
} from 'react-bootstrap';

//import components
import NavbarRigth from './../../Components/NavbarRigth/NavbarRigth';
import GoalCircularProgress from './../../Components/GoalCircularProgress/GoalCircularProgress';
import GoalGrupal from './../../Components/GoalGrupal/GoalGrupal';
import DailyPlan from './../../Components/DailyPlan/DailyPlan';
import DiaryConnections from './../../Components/DiaryConnections/DiaryConnections';

//import Assets
import FilterSvg from './../../Assets/img/filter.svg';

const Home = () => {
	const [DataUser, setDataUser] = useState({
		data: [],
		state: false,
	});

	useEffect(() => {
		getDataAppi(
			'https://api.opendota.com/api/proPlayers',
			setDataUser,
			DataUser
		);
	}, []);

	const getDataAppi = async (url, setState, state) => {
		const response = await fetch(url)
			.then((response) => response.json())
			.then((data) => setState({ ...state, data, state: true }))
			.catch((error) => setState({ ...state, state: false }));
		return response;
	};
	return (
		<div className="d-flex justify-content-between w-100">
			<div className={`mt-4 px-5 ${styles.HomeContent}`}>
				<Row className="justify-content-between">
					<Col md={5} sm={6}>
						<Form>
							<InputGroup className="mb-3">
								<FormControl
									placeholder="Search"
									aria-describedby="search"
								/>
								<InputGroup.Append>
									<Button variant="outline-secondary">
										<img src={FilterSvg} width="15" alt="" />
									</Button>
								</InputGroup.Append>
							</InputGroup>
						</Form>
					</Col>
					<Col md={4} sm={6}>
						<Form className="w-100">
							<input
								type="date"
								id="start"
								name="trip-start"
								defaultValue="2018-07-22"
								min="2015-01-01"
								max="2018-07-22"
								className="w-100"
							/>
						</Form>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col>
						<h1>Hola, Jorge</h1>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col md={6}>
						<GoalCircularProgress />
					</Col>
					<Col md={4}>
						<GoalGrupal />
					</Col>
				</Row>
				<Row className="mb-4">
					<Col md={5}>
						{DataUser.state ? (
							<DiaryConnections data={DataUser.data} />
						) : (
							<Spinner animation="border" variant="warning" />
						)}
					</Col>
					<Col md={7}>
						<DailyPlan />
					</Col>
				</Row>
			</div>
			<NavbarRigth data={DataUser.data} />
		</div>
	);
};

export default Home;
