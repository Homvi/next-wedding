import { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import Modal from "./Modal";

//disable right clicking

export default function MasonryImageList() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [tempSrc, setTempSrc] = useState("");
    const [tempHeight, setTempHeight] = useState(3680);
    const [tempWidth, setTempWidth] = useState(5520);

    const geImage = (src, width, height) => {
        setTempSrc(src);
        setTempWidth(width);
        setTempHeight(height);
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setTempSrc("");
        setIsModalVisible(false);
    };

    return (
        <>
            <div className="relative mb-5">
                <Box sx={{ width: "100%", height: "100%" }}>
                    <ImageList variant="masonry" cols={3} gap={8} className="p-3">
                        {itemData.map((item, index) => (
                            <ImageListItem key={`${item.img}_${index}`}>
                                <Image
                                    width={item.width}
                                    height={item.height}
                                    sizes="29vw"
                                    onClick={() => geImage(item.img, item.width, item.height)}
                                    className="hover:opacity-75 hover:cursor-pointer"
                                    src={item.img}
                                    srcSet={item.img}
                                    alt={item.title}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </div>
            <Modal
                closeModal={() => handleModalClose()}
                visible={isModalVisible}
                height={tempHeight}
                width={tempWidth}
                src={tempSrc}
            />
        </>
    );
}

const itemData = [
    { img: '/images/img (1).jpg', title: '1', width: 1366, height: 2048 },
    { img: '/images/img (2).jpg', title: '2', width: 1365, height: 2048 },
    { img: '/images/img (3).jpg', title: '3', width: 1365, height: 2048 },
    { img: '/images/img (4).jpg', title: '4', width: 1365, height: 2048 },
    { img: '/images/img (5).jpg', title: '5', width: 1365, height: 2048 },
    { img: '/images/img (6).jpg', title: '6', width: 1365, height: 2048 },
    { img: '/images/img (7).jpg', title: '7', width: 1365, height: 2048 },
    { img: '/images/img (8).jpg', title: '8', width: 1365, height: 2048 },
    { img: '/images/img (9).jpg', title: '9', width: 1365, height: 2048 },
    {
      img: '/images/img (10).jpg',
      title: '10',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (11).jpg',
      title: '11',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (12).jpg',
      title: '12',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (13).jpg',
      title: '13',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (14).jpg',
      title: '14',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (15).jpg',
      title: '15',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (16).jpg',
      title: '16',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (17).jpg',
      title: '17',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (18).jpg',
      title: '18',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (19).jpg',
      title: '19',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (20).jpg',
      title: '20',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (21).jpg',
      title: '21',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (22).jpg',
      title: '22',
      width: 2048,
      height: 1366
    },
    {
      img: '/images/img (23).jpg',
      title: '23',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (24).jpg',
      title: '24',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (25).jpg',
      title: '25',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (26).jpg',
      title: '26',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (27).jpg',
      title: '27',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (28).jpg',
      title: '28',
      width: 1460,
      height: 2048
    },
    {
      img: '/images/img (29).jpg',
      title: '29',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (30).jpg',
      title: '30',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (31).jpg',
      title: '31',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (32).jpg',
      title: '32',
      width: 1424,
      height: 2048
    },
    {
      img: '/images/img (33).jpg',
      title: '33',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (34).jpg',
      title: '34',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (35).jpg',
      title: '35',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (36).jpg',
      title: '36',
      width: 2048,
      height: 1365
    },
    {
      img: '/images/img (37).jpg',
      title: '37',
      width: 2048,
      height: 1365
    },
    {
      img: '/images/img (38).jpg',
      title: '38',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (39).jpg',
      title: '39',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (40).jpg',
      title: '40',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (41).jpg',
      title: '41',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (42).jpg',
      title: '42',
      width: 2048,
      height: 1365
    },
    {
      img: '/images/img (43).jpg',
      title: '43',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (44).jpg',
      title: '44',
      width: 2048,
      height: 1365
    },
    {
      img: '/images/img (45).jpg',
      title: '45',
      width: 2048,
      height: 1365
    },
    {
      img: '/images/img (46).jpg',
      title: '46',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (47).jpg',
      title: '47',
      width: 2048,
      height: 1365
    },
    {
      img: '/images/img (48).jpg',
      title: '48',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (49).jpg',
      title: '49',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (50).jpg',
      title: '50',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (51).jpg',
      title: '51',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (52).jpg',
      title: '52',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (53).jpg',
      title: '53',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (54).jpg',
      title: '54',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (55).jpg',
      title: '55',
      width: 1366,
      height: 2048
    },
    {
      img: '/images/img (56).jpg',
      title: '56',
      width: 2048,
      height: 1365
    },
    {
      img: '/images/img (57).jpg',
      title: '57',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (58).jpg',
      title: '58',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (59).jpg',
      title: '59',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (60).jpg',
      title: '60',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (61).jpg',
      title: '61',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (62).jpg',
      title: '62',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (63).jpg',
      title: '63',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (64).jpg',
      title: '64',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (65).jpg',
      title: '65',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (66).jpg',
      title: '66',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (67).jpg',
      title: '67',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (68).jpg',
      title: '68',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (69).jpg',
      title: '69',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (70).jpg',
      title: '70',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (71).jpg',
      title: '71',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (72).jpg',
      title: '72',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (73).jpg',
      title: '73',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (74).jpg',
      title: '74',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (75).jpg',
      title: '75',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (76).jpg',
      title: '76',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (77).jpg',
      title: '77',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (78).jpg',
      title: '78',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (79).jpg',
      title: '79',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (80).jpg',
      title: '80',
      width: 1365,
      height: 2048
    },
    {
      img: '/images/img (81).jpg',
      title: '81',
      width: 1365,
      height: 2048
    }
  ]
