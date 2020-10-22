import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';

//import librarys
import { Table as TableB } from 'react-bootstrap';

//import Asssets
import TelephoneSvg from './../../Assets/img/telephone.svg';
import CommentSvg from './../../Assets/img/comment.svg';

const Table = ({ data }) => {
	return (
		<div className={styles.Table}>
			<TableB responsive="xl">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Accion</th>
						<th>Estado</th>
						<th>Contacto</th>
					</tr>
				</thead>
				<tbody>
					{data.map((value) => {
						return (
							<tr key={value.account_id}>
								<td>
									<p>{value.name}</p>
								</td>
								<td>
									<h6>
										<b>Llamar</b>
									</h6>
									<p>Descuento temporada</p>
								</td>
								<td>
									<div className="d-flex justify-content-center w-100">
										<div
											className={
												Math.random() >= 0.5
													? styles.StateTrue
													: styles.StateFalse
											}
										></div>
									</div>
								</td>
								<td>
									<div className="d-flex justify-content-center">
										<img
											src={TelephoneSvg}
											alt="comentario"
											className="mr-2"
											width="15"
										/>
										<img
											src={CommentSvg}
											alt="comentario"
											className="mr-2"
											width="15"
										/>
									</div>
								</td>
							</tr>
						);
					})}
					{/* <tr>
					<td>
						<p>Andres Camilo Melo Vargas</p>
					</td>
					<td>
						<h6>
							<b>Llamar</b>
						</h6>
						<p>Descuento temporada</p>
					</td>
					<td>
						<div className="d-flex justify-content-center w-100">
							<div className={styles.State}></div>
						</div>
					</td>
					<td>
						<div className="d-flex justify-content-center">
							<img
								src={TelephoneSvg}
								alt="comentario"
								className="mr-2"
								width="15"
							/>
							<img
								src={CommentSvg}
								alt="comentario"
								className="mr-2"
								width="15"
							/>
						</div>
					</td>
				</tr> */}
				</tbody>
			</TableB>
		</div>
	);
};

Table.propTypes = { data: PropTypes.array };

Table.defaultProps = { data: [] };

export default Table;
