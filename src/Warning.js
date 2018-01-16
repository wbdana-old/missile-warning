import React from 'react'
import { Header } from 'semantic-ui-react'

class Warning extends React.Component {

    componentDidMount(){
        setTimeout(() => {
            window.location.reload()
        }, 5000)
    }

    render() {
        return(
            <div className='warning' id='Warning'>
                <Header size='large'>*REAL* MISSILE WARNING SENT. PROCEED TO COVER. THIS MESSAGE WILL UNNECESSARILY SELF DESTRUCT IN 5 SECONDS.</Header>
            </div>
        )
    }
}

export default Warning