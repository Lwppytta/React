import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {

    let data = new Date().getFullYear()

    let component: ReactNode;
    const { usuario } = useContext(AuthContext)

    if (usuario.token !== '') {
        component = (
            <div className="flex justify-center bg-violet-600 bg-gradient-to-t from-[#00000001] to-[#00000063] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Generation | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={40} weight='bold' />
                        <InstagramLogo size={40} weight='bold' />
                        <FacebookLogo size={40} weight='bold' />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Footer