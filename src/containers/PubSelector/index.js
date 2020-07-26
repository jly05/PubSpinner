import React from 'react'
import { Typography, Card, Grid, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { v4 as uuidv4 } from 'uuid'
import { PubEdit, PubAddButton } from 'containers'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '1em',
    },
}))

const PubSelector = ({
    pubs,
    setPubs,
    isSpinning,
    editingId,
    setEditingId,
}) => {
    const classes = useStyles()

    const addPub = () => {
        let id = uuidv4()
        setPubs({ ...pubs, [id]: '' })
        setEditingId(id)
    }

    const removePub = (id) => {
        let n = { ...pubs }
        delete n[id]
        setPubs(n)
    }

    const editPub = (id, name) => {
        setPubs({ ...pubs, [id]: name })
    }

    return (
        <Card className="flex flex-col p-8">
            <Typography variant="h5">Pubs</Typography>
            <Typography variant="caption" color="textSecondary" gutterBottom>
                Enter your options - You can select up to 6 pubs
            </Typography>
            <Divider />
            <Grid container className={classes.root} spacing={2}>
                {Object.keys(pubs).map((id, index) => (
                    <Grid key={id} item xs={12} md={6}>
                        <PubEdit
                            id={id}
                            index={index}
                            name={pubs[id]}
                            editingId={editingId}
                            setEditingId={setEditingId}
                            handleEdit={editPub}
                            handleDelete={removePub}
                            disabled={isSpinning}
                        />
                    </Grid>
                ))}
                {Object.keys(pubs).length < 6 && (
                    <Grid item xs={12} md={6}>
                        <PubAddButton
                            handleAdd={addPub}
                            disabled={isSpinning}
                        />
                    </Grid>
                )}
            </Grid>
        </Card>
    )
}

export default PubSelector
