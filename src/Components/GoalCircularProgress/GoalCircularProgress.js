import React from 'react';
import PropTypes from 'prop-types';
import styles from './GoalCircularProgress.module.scss';

//import librarys
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

const GoalCircularProgress = ({ value, max }) => (
	<Card className="shadow-sm h-100">
		<Card.Body className="px-0">
			<Container fluid>
				<Row>
					<Col lg={3} md={5} sm={6}>
						<CircularProgressbar
							className={styles.progressBar}
							value={value}
							text={`${value}%`}
						/>
					</Col>
					<Col lg={9} md={7} sm={6}>
						<Container fluid className="p-0">
							<Row>
								<Col>
									<Container fluid className="p-0">
										<Row>
											<Col md={6}>
												<h6 className="text-justify">
													Leads obtenidos
												</h6>
											</Col>
											<Col md={6}>
												<h6>{`${value}/${max}`}</h6>
											</Col>
										</Row>
										<Row>
											<Col md={6}>
												<h6 className="text-justify">
													Matriculas Finalizadas
												</h6>
											</Col>
											<Col md={6}>
												<h6>{`${value}/${max}`}</h6>
											</Col>
										</Row>
									</Container>
								</Col>
								<Col>
									<Container fluid className="p-0">
										<Row>
											<Col md={6}>
												<h6>Cola de llamados</h6>
											</Col>
											<Col md={6}>
												<h6>50/100</h6>
											</Col>
										</Row>
									</Container>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</Card.Body>
	</Card>
);

GoalCircularProgress.propTypes = {
	value: PropTypes.number,
	max: PropTypes.number,
};

GoalCircularProgress.defaultProps = { value: 1, max: 10 };

export default GoalCircularProgress;
