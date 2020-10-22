import React from 'react';
import PropTypes from 'prop-types';

//import librarys
import { ProgressBar } from 'react-bootstrap';

const GoalChildren = ({ title, min, max }) => (
	<div className="">
		<div className="d-flex justify-content-between">
			<p className="mb-1">{title}</p>
			<p className="mb-1">{`${min}/${max}`}</p>
		</div>
		<ProgressBar
			animated
			variant="info"
			now={(min / max) * 100}
		/>
	</div>
);

GoalChildren.propTypes = {
	title: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
};

GoalChildren.defaultProps = {
	title: 'Leads obtenidos',
	min: 100,
	max: 1000,
};

export default GoalChildren;
