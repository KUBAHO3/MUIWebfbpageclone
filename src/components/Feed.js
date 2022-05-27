import { Box } from '@mui/material';
import Posts from './Posts';
import React from 'react'

function Feed() {
    

    return (
        <Box flex={4} p={2} >
            <Posts
            title="Kubaho Linne Heaven"
            subheader="September 14, 2016"
            image="https://rcb.rw/IMG/arton27.jpg?1619670817"
                alt="Kigali Convention center"
                description="Rwanda Convention Bureau is a member of the Africa chapter of the International Congress and Convention Association (ICCA).
                RCB provides advice, guidance and support to international event planners and buyers, incentive,
                association and convention organizers through every stage of planning and implementation."
            />
            <Posts
            title="Komezudufashe Arsene Thierry"
            subheader="May 16, 2006"
            image="https://rushyashya.net/wp-content/uploads/2016/11/4578.jpg"
                alt="Makuza peace plaza"
                description="Set in Kigali, near Belgian Peacekeepers Memorial, Kigali City Tower and Kandt House Natural History Museum, Makuza Peace Plaza features free WiFi, and guests can enjoy a bar and a terrace. The accommodation features a hot tub. Each unit is fully fitted with a washing machine, a flat-screen TV, a sofa and desk."
            />
            <Posts
            title="Umutesi Liliane"
            subheader="October 21, 2020"
            image="https://www.newtimes.co.rw/sites/default/files/2018/kigali-city-tower.sam.jpg"
                alt="Kigali City tower"
                description="Kigali City Tower is a mixed use high rise office and retail building located in Kigali, the capital of Rwanda. The complex consists of a 20-storey tower, the tallest in the country, a four-story commercial center and a car park block, with space divided between leased office space and retail outlets."
            />
            <Posts
            title="Ishimwe Henriette"
            subheader="November 20, 2010"
            image="https://www.ktpress.rw/wp-content/uploads/2019/03/best-in-buidings.jpg"
                alt="bpr rwanda building"
                description="BPR Bank Rwanda PLC, formerly Banque Populaire du Rwanda SA, is a commercial bank in Rwanda. The bank is licensed by the National Bank of Rwanda, the central bank and national banking regulator."
            />
            <Posts
            title="Nzeyimana Juste Abel"
            subheader="March o9, 2008"
            image="https://images.adsttc.com/media/images/6158/2d6a/f91c/81a0/2300/00ee/slideshow/shutterstock_1206074506.jpg?1633168704"
                alt="Rubangura plaza"
                description="BPR Bank Rwanda PLC, formerly Banque Populaire du Rwanda SA, is a commercial bank in Rwanda. The bank is licensed by the National Bank of Rwanda, the central bank and national banking regulator."
            />
        </Box>
    )
}
export default Feed;
