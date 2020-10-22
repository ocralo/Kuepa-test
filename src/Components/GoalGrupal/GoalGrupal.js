import React from 'react';

//import librarys
import { Card, Container, Row, Col } from 'react-bootstrap';

//import components
import GoalChildren from './../GoalChildren/GoalChildren';

const GoalGrupal = () => (
	<Card className="shadow-sm">
		<Card.Body>
			<Container fluid>
				<Row>
					<Col>
						<h4 className="mb-1">Meta Grupal</h4>
					</Col>
				</Row>
				<Row className="mb-2">
					<Col>
						<GoalChildren
							title={'Leads obtenidos'}
							min={100}
							max={1000}
						></GoalChildren>
					</Col>
				</Row>
				<Row className="mb-2">
					<Col>
						<GoalChildren
							title={'Leads obtenidos'}
							min={500}
							max={1000}
						></GoalChildren>
					</Col>
				</Row>
			</Container>
		</Card.Body>
	</Card>
);

export default GoalGrupal;
