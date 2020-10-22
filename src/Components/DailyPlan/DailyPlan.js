import React from 'react';

//import librarys
import { Container, Row, Col } from 'react-bootstrap';

//import components
import LeadsCard from './../LeadsCard/LeadsCard';

const DailyPlan = () => (
	<Container>
		<Row>
			<Col>
				<h4>Tu plan de hoy</h4>
			</Col>
			<Col>
				<p className="text-right">
					Ir a la gestion de llamados <b>{'>'}</b>
				</p>
			</Col>
		</Row>
		<Row>
			<Col md={6} className="mb-4">
				<LeadsCard title={'Leads de primer contacto'} />
			</Col>
			<Col md={6} className="mb-4">
				<LeadsCard
					classCard={'card_color-2'}
					phoneCount={5}
					commentCount={15}
					title={'Leads por confirmar cita'}
				/>
			</Col>
			<Col md={6} className="mb-4">
				<LeadsCard
					classCard={'card_color-3'}
					title={'Leads de último intento'}
					phoneCount={50}
					commentCount={15}
				/>
			</Col>
		</Row>
	</Container>
);

export default DailyPlan;
