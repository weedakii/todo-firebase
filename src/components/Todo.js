import { Avatar, Button, List, ListItem, Box, ListItemAvatar, ListItemText, Modal } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React, { useState } from 'react'
import db from './firebase'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

function Todo({todo}) {
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')

    const updating = () => {
        db.collection('todos').doc(todo.id).set({
            todo: input
        }, {merge: true})
        setOpen(false)
    }
    return (
        <>
            <Modal open={open} onClose={e => setOpen(false)}>
                <Box sx={style}>
                    <h2>edit me</h2>
                    <input placeholder={todo.todo} value={input} onChange={
                        e => setInput(e.target.value)
                    }/>
                    <Button variant="contained" onClick={updating}>Update</Button>
                </Box>
            </Modal>
            <List key={todo.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{bgcolor: deepPurple[500]}}>W</Avatar>
                    </ListItemAvatar>
                    <ListItemText  primary={todo.todo} secondary={new Date().toLocaleTimeString()}/> 
                    <Button variant="contained" color="success" onClick={
                        e => setOpen(true)
                    }>Edit</Button>
                    <Button variant="contained" color="error" onClick={
                        e => db.collection('todos').doc(todo.id).delete()
                    }>Del</Button>
                </ListItem>
            </List>
        </>
    )
}

export default Todo
