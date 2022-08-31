import React, {useState} from 'react'
import PersonalForm from '../../components/Form/PersonalForm.component'
import './CreatorPage.styles.css'
import Menu from '../../components/Menu/Menu'
import LoadSculpts from '../../components/Creator/LoadSculpts'
import { Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Alert from '../../components/Form/Alert'
import NoMobile from '../NoMobile'

const CreatorPage = () => {
    const { auth, cargando } = useAuth()
    const [alerta, setAlerta] = useState({})

    if(cargando) return 'Cargando...'

    const { msg } = alerta
    return(
        <div className='creatorContainer infoen3d htmlData'>
             {/* <Alert alert={alerta}/> */}
             {/* {msg && <Alert alert={alerta}/>} */}

            <NoMobile />
            <Menu />
            <PersonalForm />
            {/* {auth._id ? (<div>
                <LoadSculpts />

            </div>) : <div></div>} */}
            <Outlet/>

        </div>
    )
}

export default CreatorPage