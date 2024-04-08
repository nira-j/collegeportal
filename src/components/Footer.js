import React from 'react';

const styles={
    content:{
        height:'60px',
        'background-color': 'lightgray',
        textAlign:'center',
        paddingTop:'10px'
    }
}

export default function Footer(){
    return(
        <div className='footer' style={styles.content}>
            This website belongs to XYZ college, place, India © Copyright 2024. All Rights Reserved.
        </div>
    );
}