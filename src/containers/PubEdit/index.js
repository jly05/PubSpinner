import React, { useState } from 'react'
import {
    Typography,
    IconButton,
    TextField,
    Paper,
    Fab,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import TickIcon from '@material-ui/icons/Check'
import CrossIcon from '@material-ui/icons/Clear'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        border: '0.5px',
        height: 80,
    },
    subtitle: {
        display: 'inline-block',
        marginRight: '1rem',
    },
}))

const PubEdit = ({
    id,
    name,
    index,
    editingId,
    setEditingId,
    handleEdit,
    handleDelete,
    disabled,
}) => {
    const classes = useStyles()

    const [value, setValue] = useState(name)

    const onEdit = () => {
        setEditingId(id)
    }

    const onEditSave = () => {
        handleEdit(id, value)
        setEditingId(null)
    }

    const onEditCancel = () => {
        setValue(name)
        setEditingId(null)
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onDelete = () => {
        handleDelete(id)
    }

    if (editingId === id) {
        return (
            <Paper elevation={1} className={classes.root}>
                <div>
                    <Typography
                        variant="subtitle1"
                        className={classes.subtitle}
                    >{`${index + 1}.`}</Typography>
                    <TextField
                        variant="filled"
                        value={value}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <IconButton onClick={onEditSave}>
                        <TickIcon />
                    </IconButton>
                    <IconButton onClick={onEditCancel}>
                        <CrossIcon />
                    </IconButton>
                </div>
            </Paper>
        )
    } else {
        return (
            <Paper elevation={1} className={classes.root}>
                <div>
                    <Typography
                        variant="subtitle1"
                        className={classes.subtitle}
                    >{`${index + 1}.`}</Typography>
                    <Typography variant="h6" className="inline-block">
                        {name}
                    </Typography>
                </div>
                <div>
                    <IconButton onClick={onEdit} disabled={disabled}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={onDelete} disabled={disabled}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </Paper>
        )
    }
}

const PubAddButton = ({ handleAdd, disabled }) => {
    const classes = useStyles()

    return (
        <Paper elevation={1} className={classes.root}>
            <div className="flex items-center justify-center w-full">
                <Fab onClick={handleAdd} size="small" disabled={disabled}>
                    <AddIcon />
                </Fab>
            </div>
        </Paper>
    )
}

export { PubEdit, PubAddButton }
