import Image from 'next/image'
import {
    disney,
    milaMoura,
    prespontoSite,
    presponto,
    vendas,
    recon,
    jedigital,
    grupow,
} from './images'

export default function AboutCard(){
    const imagesCard = [
        { img: disney }, 
        { img: milaMoura}, 
        { img: prespontoSite},
        { img: grupow},
        { img: jedigital},
        { img: recon},
        { img: vendas},
        { img: presponto},
    ]
    return(
        <div className="grid w-screen justify-between grid-flow-row grid-cols-2 gap-12">
            <button className="flex flex-col items-center text-center justify-end bg-vendas bg-cover bg-center w-[170px] h-[147px]">
                <h2>Venda Seu Carro</h2>
                <p className='text-xs px-1'>Site e sistema de venda de carros</p>
            </button>

            <button className="flex flex-col items-center text-center justify-end bg-disney bg-cover bg-center w-[170px] h-[147px]">
                <h2>Disney World App</h2>
                <p className='text-xs px-1'>App automação dos parques Disney</p>
            </button>

            <button className="flex flex-col items-center text-center justify-end bg-grupow bg-cover bg-center w-[170px] h-[147px]">
                <h2>Grupo W</h2>
                <p className='text-xs px-1'>Divulgação de eventos do Grupo W</p>
            </button>
            
            <button className="flex flex-col items-center text-center justify-end bg-jedigital bg-cover bg-center w-[170px] h-[147px]">
                <h2>Je Digital Art</h2>
                <p className='text-xs px-1'>Captação de clientes da Agência Je Digital Art</p>
            </button>

            <button className="flex flex-col items-center text-center justify-end bg-recon bg-cover bg-center w-[170px] h-[147px]">
                <h2>Recon - App</h2>
                <p className='text-xs px-1'>Aplicativo para Android e IOS da catedral da reconciliação</p>
            </button>

            <button className="flex flex-col items-center text-center justify-end bg-presponto bg-cover bg-center w-[170px] h-[147px]">
                <h2>Pres Ponto - Site</h2>
                <p className='text-xs px-1'>Aplicativo de atendimento do ateliê Pres ponto</p>
            </button>

            <button className="flex flex-col items-center text-center justify-end bg-mila bg-cover bg-center w-[170px] h-[147px]">
                <h2>Mila Moura</h2>
                <p className='text-xs px-1'>Divulgação de marca pessoal da Mila Moura</p>
            </button>
            
            <button className="flex flex-col items-center text-center justify-end bg-prespontoSite bg-cover bg-center w-[170px] h-[147px]">
                <h2>Pres Ponto</h2>
                <p className='text-xs px-1'>Divulgação do ateliê de costura Prés ponto</p>
            </button>
        </div>
    )
}