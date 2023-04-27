import React from 'react'
import Pin from './Pin'

function PinterestLayout() {
    return (
    <div style={styles.pin_container}>
        <Pin size='small'/>
        <Pin size='medium'/>
        <Pin size='large'/>
        <Pin size='small'/>
        <Pin size='medium'/>
        <Pin size='large'/>
        <Pin size='small'/>
        <Pin size='large'/>
        <Pin size='medium'/>
        <Pin size='large'/>
        <Pin size='small'/>
        <Pin size='medium'/>
        <Pin size='large'/>
        <Pin size='medium'/>
        <Pin size='small'/>
        <Pin size='small'/>

    </div>
)
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '100vw',
        height : '100vh',
        backgroundColor: 'black',
        postition: 'absolute',
        left: '50%',
        transfrm : 'translateX(-50%)',
        display : 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows : '10px',
        justifyContent : 'center'
    }
}

export default PinterestLayout