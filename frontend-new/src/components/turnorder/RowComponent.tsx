import * as React from 'react';
import {Fragment} from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {OrderColumnComponent} from "./OrderColumnComponent";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import {TurnOrderCharacter} from "../../models/TurnOrderCharacter";
import {useAppDispatch} from "../../store/hook";
import {addCharacter} from "../../store/turnorder/turnorderSlice";

interface Props {
    character: TurnOrderCharacter
}

export const RowComponent = ({character}: Props) => {

    const [open, setOpen] = React.useState(false);
    const dispatch = useAppDispatch()

    const openClickHander = () => {
        if (character.description === "" || character.description === "0") {
            setOpen(false)
        } else {
            setOpen(!open)
        }
    }

    const iconButton = () => {
        if (character.description === "" || character.description === "0") {
            return ""
        } else {
            return <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => openClickHander()}>
                {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </IconButton>
        }
    }

    return (
        <Fragment>
            <TableRow data-id={character.id} key={character.id} sx={{'& > *': {borderBottom: 'unset'}}}>
                <TableCell>
                    {iconButton()}
                </TableCell>
                <TableCell component="th" scope="row">
                    <OrderColumnComponent textValue={character.name}
                                          textPlaceHolder="Name"
                                          character={character}/>
                </TableCell>
                <TableCell align="right">
                    <OrderColumnComponent textValue={character.initiative.toString()}
                                          textPlaceHolder="Initiative"
                                          character={character}/>
                </TableCell>
                <TableCell align="right">
                    <OrderColumnComponent textValue={character.ac} textPlaceHolder="Armor Class"
                                          character={character}/>
                </TableCell>
                <TableCell align="right">
                    <OrderColumnComponent textValue={character.hp} textPlaceHolder="Health"
                                          character={character}/>
                </TableCell>
                <TableCell align="right">
                    <OrderColumnComponent textValue={character.comment} textPlaceHolder="Comment"
                                          character={character}/>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/*{ character.description.map((row) => (*/}
                                    {/*    <TableRow key={historyRow.date}>*/}
                                    {/*        <TableCell component="th" scope="row">*/}
                                    {/*            {historyRow.date}*/}
                                    {/*        </TableCell>*/}
                                    {/*        <TableCell>{historyRow.customerId}</TableCell>*/}
                                    {/*        <TableCell align="right">{historyRow.amount}</TableCell>*/}
                                    {/*        <TableCell align="right">*/}
                                    {/*            test*/}
                                    {/*        </TableCell>*/}
                                    {/*    </TableRow>*/}
                                    {/*)) }*/}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}