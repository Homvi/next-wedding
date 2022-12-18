import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image';

function MyCarousel(props) {
    var items = [
        {
            src: "/assets/img/eszter.jpg",
            width: 1365,
            height: 2048,
            name: "Honvédő Eszter - fotó",
        },
        {
            width: 764,
            height: 1021,
            src: "/assets/img/bestMan.jpg",
            name: "Pap Ferenc - vőfély",
        },
        {
            width: 750,
            height: 500,
            src: "/assets/img/band.jpg",
            name: "Zé Klub Zenekar - zene",
        },
        {
            width: 5520,
            height: 3680,
            src: "/assets/img/photo.jpg",
            name: "Zengő Ferenc - fotó",
        },
        {
            width: 5184,
            height: 3456,
            src: "/assets/img/video.jpeg",
            name: "KuriMedia - videó",
        },
        {
            width: 990,
            height: 660,
            src: "/assets/img/sokoro.jpg",
            name: "Sokoró Fogadó - lakodalmas helyszín",
        },
        {
            width: 1800,
            height: 1200,
            src: "/assets/img/sokoroHouse.jpg",
            name: "Sokoró Fogadó - lakodalmas helyszín",
        },
        {
            width: 1920,
            height: 1080,
            src: "/assets/img/luxcode.png",
            name: "Luxcode - webfejlesztés",
        },
    ]

    return (
        <Carousel
            navButtonsAlwaysVisible={false}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <div className='relative flex align-center justify-center flex-col max-w-[500px] min-h-[60vh] mx-auto'>
            <div className="flex justify-center luthier-bold-italic text-lg align-center">
                <h2 className='text-center p-1 h-10'>{props.item.name}</h2>
            </div>
            <div className="image-container justify-center flex m-2 h-[400px]">
                <Image objectFit='contain' alt={props.item.name} className={props.item.height >= props.item.width ? ' border-red-400' : "  border-blue-700"} height={props.item.height} width={props.item.width} src={props.item.src} />
            </div>
        </div>
    )
}

export default MyCarousel;