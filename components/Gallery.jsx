import { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import Modal from './Modal';

//disable right clicking

export default function MasonryImageList() {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [tempSrc, setTempSrc] = useState('')
    const [tempHeight, setTempHeight] = useState(3680)
    const [tempWidth, setTempWidth] = useState(5520)

    const geImage = (src, width, height) => {
        setTempSrc(src)
        setTempWidth(width)
        setTempHeight(height)
        setIsModalVisible(true);
    }

    const handleModalClose = () => {
        setTempSrc("")
        setIsModalVisible(false)
    }


    return (
        <>

            <div className="relative">
                <Box sx={{ width: "100%", height: "100%", }}>
                    <ImageList variant="masonry" cols={3} gap={8} className="p-3">
                        {itemData.map((item, index) => (
                            <ImageListItem key={`${item.img}_${index}`}>
                                <Image
                                    width={item.width}
                                    height={item.height}
                                    sizes="29vw"
                                    onClick={() => geImage(item.img, item.width, item.height)}
                                    className='hover:opacity-75 hover:cursor-pointer'
                                    src={item.img}
                                    srcSet={item.img}
                                    alt={item.title}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </div>
            <Modal closeModal={() => handleModalClose()} visible={isModalVisible} height={tempHeight} width={tempWidth} src={tempSrc} />
        </>
    );
}

const itemData = [
    {
        img: "/images/wedding (1).jpg",
        title: '1',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (2).jpg',
        title: '2',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (3).jpg',
        title: '3',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (4).jpg',
        title: '4',
        width: 3442,
        height: 5163
    },
    {
        img: '/images/wedding (5).jpg',
        title: '5',
        width: 3378,
        height: 5067
    },
    {
        img: '/images/wedding (6).jpg',
        title: '6',
        width: 2560,
        height: 1707
    },
    {
        img: '/images/wedding (7).jpg',
        title: '7',
        width: 3196,
        height: 4794
    },
    {
        img: '/images/wedding (8).jpg',
        title: '8',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (9).jpg',
        title: '9',
        width: 1707,
        height: 2560
    },
    {
        img: '/images/wedding (10).jpg',
        title: '10',
        width: 1707,
        height: 2560
    },
    {
        img: '/images/wedding (11).jpg',
        title: '11',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (12).jpg',
        title: '12',
        width: 1964,
        height: 2755
    },
    {
        img: '/images/wedding (13).jpg',
        title: '13',
        width: 1707,
        height: 2560
    },
    {
        img: "/images/wedding (14).jpg",
        title: '14',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (15).jpg',
        title: '15',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (16).jpg',
        title: '16',
        width: 3495,
        height: 5027
    },
    {
        img: '/images/wedding (17).jpg',
        title: '17',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (18).jpg',
        title: '18',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (19).jpg',
        title: '19',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (20).jpg',
        title: '20',
        width: 5568,
        height: 3712
    },
    {
        img: '/images/wedding (21).jpg',
        title: '21',
        width: 5568,
        height: 3712
    },
    {
        img: '/images/wedding (22).jpg',
        title: '22',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (23).jpg',
        title: '23',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (24).jpg',
        title: '24',
        width: 3712,
        height: 5568
    },
    {
        img: '/images/wedding (25).jpg',
        title: '25',
        width: 1614,
        height: 2421
    },
    {
        img: '/images/wedding (26).jpg',
        title: '26',
        width: 5568,
        height: 3712
    },
];
