import React, { useState } from 'react'
import { Cells } from '../models/Cells'
import { DeadCell } from './DeadCell';
import { LiveCell } from './LiveCell';

interface BoardProps {
    cells : Cells;
}

export const Board : React.FC<BoardProps> = (props) => {
    const [cells, setCells] = useState(props.cells);
    return(
        <table>
            <tbody>
           { 
                cells.cellMap.map((row, indexRow) => 
                <tr key={indexRow}>
                    { 
                        row.map((isCellAlive, indexColumn) => 
                            <td key={indexRow.toString() + indexColumn.toString()}>
                                {isCellAlive ? <LiveCell /> : <DeadCell />}
                            </td>
                    )}
                </tr>
            )}     
            </tbody>      
        </table>
    );
}