import React from 'react';
import PropTypes from 'prop-types';

//import librarys
import { Card, Container, Row, Col } from 'react-bootstrap';

//import Components
import Table from './../Table/Table';

const DiaryConnections = ({ data }) => (
	<Card>
		<Card.Body className="px-0">
			<Container fluid>
				<Row className="mb-3">
					<Col>
						<h4>Conexiones de agenda para hoy</h4>
					</Col>
				</Row>
				<Row>
					<Col>
						<Table data={data} />
					</Col>
				</Row>
			</Container>
		</Card.Body>
	</Card>
);

DiaryConnections.propTypes = { data: PropTypes.array };

DiaryConnections.defaultProps = { data: [] };

export default DiaryConnections;
