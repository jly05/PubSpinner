import React, { useState } from 'react'
import { Card, Button, Typography } from '@material-ui/core'
import { sleep } from 'utils'

const Spinner = ({ pubs, isSpinning, setSpinning, isEditing }) => {
    const [current, setCurrent] = useState(null)

    const handleSpin = async () => {
        setSpinning(true)

        let pList = Object.values(pubs)
        let x = 0
        let next = current

        while (x < 20) {
            next = getNextPub(pList, next)
            setCurrent(next)
            await sleep(100)
            x++
        }

        setSpinning(false)
    }

    const getNextPub = (p, lastPub) => {
        let len = p.length

        if (len === 1) return p[0]

        // Pick a random pub
        let num = Math.floor(Math.random() * len)

        // Don't let the next pub be the same as the last
        if (p[num] === lastPub) {
            return getNextPub(p, lastPub)
        } else {
            return p[num]
        }
    }

    return (
        <Card className="flex items-center justify-center py-24 mb-8">
            <div className="flex flex-col justify-center items-center">
                {current && (
                    <Typography variant="h5" gutterBottom className="mb-8">
                        {current}
                    </Typography>
                )}
                {!isSpinning && (
                    <>
                        <Typography variant="h5" gutterBottom>
                            Click spin to pick a pub
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isEditing}
                            onClick={handleSpin}
                        >
                            Spin
                        </Button>
                    </>
                )}
            </div>
        </Card>
    )
}

export default Spinner
