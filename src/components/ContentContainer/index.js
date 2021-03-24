import React from 'react';

const styles = {
    container: {
        maxWidth: 1200,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto'
    }
}

const ContentContainer = ({children}) => <div style={styles.container}>{children}</div>

export default ContentContainer;