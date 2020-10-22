import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardPerson.module.scss';

//import librarys
import { Card } from 'react-bootstrap';

//import Asssets
import TelephoneCircleSvg from './../../Assets/img/telephoneCircle.svg';
import EmailSvg from './../../Assets/img/email.svg';
import WhatsappSvg from './../../Assets/img/whatsapp.svg';
import FacebookSvg from './../../Assets/img/facebook.svg';

const icons = [
	TelephoneCircleSvg,
	EmailSvg,
	WhatsappSvg,
	FacebookSvg,
];
const iconsNumber = ['Phone', 'Email', 'Whatsapp', 'Facebook'];

const CardPerson = ({ type, name, time }) => (
	<Card className={`m-1 mb-3 ${styles.CardPerson}`}>
		<Card.Header className="p-1" as="div">
			<img
				src={icons[type]}
				alt=""
				className="mr-1"
				width="15"
			/>
			{iconsNumber[type]}
		</Card.Header>
		<Card.Body className="p-1">
			<h6>{name}</h6>
			<p className="text-muted mb-0">{time}</p>
		</Card.Body>
	</Card>
);

CardPerson.propTypes = {
	type: PropTypes.number,
	name: PropTypes.string,
	time: PropTypes.string,
};

CardPerson.defaultProps = {
	type: 1,
	name: 'NN',
	time: 'not data',
};

export default CardPerson;
