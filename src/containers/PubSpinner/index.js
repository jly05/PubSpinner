import React, { useState } from 'react'
import { useLocalStorage } from 'hooks'
import { PubSelector } from 'containers'
import { Spinner } from 'components'

const PubSpinner = () => {
    const [pubs, setPubs] = useLocalStorage('pubs', {
        1: 'Pub 1',
        2: 'Pub 2',
        3: 'Pub 3',
        4: 'Pub 4',
        5: 'Pub 5',
        6: 'Pub 6',
    })

    const [isSpinning, setSpinning] = useState(false)
    const [editingId, setEditingId] = useState(null)

    return (
        <>
            <Spinner
                pubs={pubs}
                isSpinning={isSpinning}
                setSpinning={setSpinning}
                isEditing={!!editingId}
            />
            <PubSelector
                pubs={pubs}
                setPubs={setPubs}
                isSpinning={isSpinning}
                editingId={editingId}
                setEditingId={setEditingId}
            />
        </>
    )
}

export default PubSpinner
