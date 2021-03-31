import { TableRow, TableCell } from '@material-ui/core'
import React from 'react'

type Props = {
    row: any;
}

export const Row = (props: Props) => {

    const { row } = props;

    return (

        <TableRow key={row.id}>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
        </TableRow>

    )
}
