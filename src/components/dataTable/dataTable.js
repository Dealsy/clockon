import React from 'react';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


class dataTable extends React.Component {
	render() {
		return (
			<div id='Table'>
				<Table bordered >
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Date</th>
							<th>Monday</th>
							<th>Tuesday</th>
							<th>Wednesday</th>
							<th>Thursday</th>
							<th>Friday</th>
							<th>Saturday</th>
							<th>Sunday</th>
							<th>Total Hours</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'>1</th>
							<td></td>
							<td>8</td>
							<td>8</td>
							<td>8</td>
							<td>8</td>
							<td>8</td>
							<td>8</td>
							<td>8</td>

						</tr>
					</tbody>
				</Table>

				<Pagination size='sm' aria-label='Page navigation example'>
					<PaginationItem>
						<PaginationLink previous href='#' />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href='#'>
					1
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href='#'>
					2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href='#'>
					3
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink next href='#' />
					</PaginationItem>
				</Pagination>
			</div>
		)
	}

}
export default dataTable;