import { ListItem } from '@material-ui/core';
import React from 'react'
import { List,  ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import {db} from './firebase';
// don't import db,,,,import {db} because that is what was exported
function Todo(props) {
    return (
    <List classname='todo__list'>
            <ListItem>
                <ListItemText primary={props.task.task} />///first task is object and the second task is text i.e elemen 
            </ListItem>
            <DeleteIcon onClick={event=> db.collection('data').doc(props.task.id).delete()} />
        </List>

        // {/* <li>{props.text}</li> */}
    );
}

export default Todo
