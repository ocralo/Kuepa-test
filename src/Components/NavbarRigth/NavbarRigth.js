import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NavbarRigth.module.scss';

//import components
import CardPerson from './../CardPerson/CardPerson';

//import assets
import leftArrowSvg from './../../Assets/img/left-arrow.svg';
import RightArrowSvg from './../../Assets/img/right-arrow.svg';

const NavbarRigth = ({ data }) => {
	const [FlagNavbar, setFlagNavbar] = useState(false);
	const getRandomArbitrary = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};
	return (
		<div
			className={`${styles.NavbarRigth} ${
				FlagNavbar ? styles.NavbarRigthActivate : ''
			}`}
		>
			<div className={styles.NavbarRigthIcon}>
				<img
					src={FlagNavbar ? RightArrowSvg : leftArrowSvg}
					className={styles.NavbarImgIcon}
					alt=""
					width="20"
					onClick={() => {
						setFlagNavbar(!FlagNavbar);
					}}
				/>
			</div>
			<div
				className={`${styles.NavbarRigthContent} ${
					FlagNavbar ? 'overflow-auto' : ''
				} `}
			>
				{data.map((value) => {
					return (
						<CardPerson
							key={value.account_id}
							id={value.account_id}
							type={getRandomArbitrary(0, 3)}
							name={value.name}
							time={'6 min ago'}
						></CardPerson>
					);
				})}
				<CardPerson></CardPerson>
			</div>
		</div>
	);
};

NavbarRigth.propTypes = { data: PropTypes.array };

NavbarRigth.defaultProps = { data: [] };

export default NavbarRigth;
