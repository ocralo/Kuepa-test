import React from 'react';
import styles from './NavbarLeft.module.scss';
//import componenets to library
import { Nav, Button } from 'react-bootstrap';

//import assets
import HomeSvg from './../../Assets/img/home.svg';
import ChecklistSvg from './../../Assets/img/checklist.svg';
import ListSvg from './../../Assets/img/list.svg';
import ChatSvg from './../../Assets/img/chat.svg';
import UserSvg from './../../Assets/img/user.svg';

const NavbarLeft = () => (
	<div className={styles.NavbarLeft}>
		<img
			src="http://www.kuepa.com/COV2/assets/img/logo.png"
			alt=""
			className="mb-4 tex-center mt-4 pl-2"
			width="80"
		/>
		<div className="d-flex flex-column justify-content-between h-75">
			<div>
				<Nav
					className="flex-column"
					variant="pills"
					defaultActiveKey="/home"
				>
					<Nav.Item>
						<Nav.Link eventKey="link-1">
							<img
								src={HomeSvg}
								className={``}
								width="25"
								alt=""
							/>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="/home">
							<img
								src={ChecklistSvg}
								className={``}
								width="25"
								alt=""
							/>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="link-2">
							<img
								src={ListSvg}
								className={``}
								width="25"
								alt=""
							/>
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
			<div className="d-flex flex-column justify-content-center align-items-center pb-4">
				<Button variant="outline-warning my-2">
					<img src={ChatSvg} className={``} width="25" alt="" />
				</Button>
				<img src={UserSvg} width="50" alt="" />
			</div>
		</div>
	</div>
);

export default NavbarLeft;
