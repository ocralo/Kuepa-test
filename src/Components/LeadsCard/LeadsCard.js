import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeadsCard.module.scss';

//import librarys
import { Card, Container, Row, Col } from 'react-bootstrap';

//import Asssets
import TelephoneSvg from './../../Assets/img/telephone.svg';
import CommentSvg from './../../Assets/img/comment.svg';

/**
 * 
 * @param {*} param0 
 */
const LeadsCard = ({
	classCard,
	title,
	phoneCount,
	commentCount,
}) => (
	<Card className="shadow-sm h-100">
		<Card.Body>
			<Container fluid>
				<Row>
					<Col>
						<div className={styles[classCard]}>
							<div>
								<p>{phoneCount + commentCount}</p>
							</div>
						</div>
					</Col>
					<Col>
						<h6>{title}</h6>
						<h6>
							<img
								src={TelephoneSvg}
								alt="telefono"
								className="mr-2"
								width="20"
							/>
							{phoneCount}
						</h6>
						<h6>
							<img
								src={CommentSvg}
								alt="comentario"
								className="mr-2"
								width="20"
							/>
							{commentCount}
						</h6>
					</Col>
				</Row>
			</Container>
		</Card.Body>
	</Card>
);

LeadsCard.propTypes = {
	classCard: PropTypes.string,
	title: PropTypes.string,
	phoneCount: PropTypes.number,
	commentCount: PropTypes.number,
};

LeadsCard.defaultProps = {
	classCard: 'card_color',
	title: 'Leads de primer contacto',
	phoneCount: 15,
	commentCount: 15,
};

export default LeadsCard;
