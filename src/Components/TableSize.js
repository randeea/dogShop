import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const styles = {
    root: {
        width: '100%',
        marginTop: 20,
        marginBottom:20,
        padding:40
    }
}

export default class TableSize extends Component {
    render() {
        let id = 0;
        function createData(sizes, length, weight, looks) {
            id += 1;
            return { id, sizes, length, weight, looks };
        };

        const rows = [
            createData('XSmall',' 9-16', '6-13', "Chihuahua, Terrier, Westie, Dachshund"),
            createData('Small', '16-20', '13-35', "Fox Terrier, Cocker Spaniel, Jack Russel"),
            createData('Medium', "19-24.5in", "33-55lb", "Border Collie, Small Boxer, Vizsla"),
            createData('Large', "24-27in", "53-83lb", "Labrador, Pointer, Large Vizsla"),
            createData('Xlarge', "27-29in", "77-94lb", "Rottweiler, WeimaranerRhodesian Ridgeback"),
        ];

        return(
            <Paper style={styles.root}>
                <h3>Make sure you got it suited:</h3>
                <Table style={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Sizes</TableCell>
                            <TableCell>Length (in)</TableCell>
                            <TableCell>Weight (lb)</TableCell>
                            <TableCell>Looks like a...</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                    {row.sizes}
                                    </TableCell>
                                    <TableCell >{row.length}</TableCell>
                                    <TableCell >{row.weight}</TableCell>
                                    <TableCell >{row.looks}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}