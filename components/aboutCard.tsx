import { url } from 'inspector'
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
        { img: disney, name: 'Disney World App', sub: 'App automação dos parques Disney', link: '#'}, 
        { img: milaMoura, name: 'Mila Moura', sub: 'Divulgação de marca pessoal da Mila Moura', link: ''}, 
        { img: prespontoSite, name: 'Pres Ponto - Site', sub: 'Divulgação do ateliê de costura Prés ponto', link: ''},
        { img: grupow, name: 'Grupo W', sub: 'Divulgação de eventos do Grupo W', link: ''},
        { img: jedigital, name: 'Je Digital Art', sub: 'Captação de clientes da Agência Je Digital Art', link: ''},
        { img: recon, name: 'Recon - App', sub: 'Aplicativo para Android e IOS da catedral da reconciliação', link: ''},
        { img: vendas, name: 'Venda Seu Carro', sub: 'Site e sistema de venda de carros', link: ''},
        { img: presponto, name: 'Presponto - App', sub: 'Aplicativo de atendimento do ateliê Pres ponto', link: ''},
    ]
    return(
        <div className="grid items-center grid-flow-row grid-cols-2">
            {
            imagesCard.map((index) =>
                <a 
                 key={index.name}
                 href={index.link}
                 target='_blank'
                 className="flex flex-col items-center text-center justify-end bg-cover bg-center w-[170px] h-[147px] my-6 mx-3" 
                 rel="noreferrer"
                >
                <Image
                 width={543}
                 height={285} 
                 alt={index.name} 
                 src={index.img} 
                 className='-z-20 w-full h-full'
                />

                <div className="flex flex-col -mt-16">
                    <h2>{index.name}</h2>
                    <p className='text-xs px-1'>{index.sub}</p>
                    </div>
                </a>
        )}
        </div>
    )
}