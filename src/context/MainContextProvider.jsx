import React, { createContext } from 'react'
import { galleryCategories, galleryImages } from '../data/GalleryData';
import { reportArr } from '../data/ReportData';
import { partners } from '../data/PartnerData';
import { workerArr } from '../data/WorkerData';
import { bannerSwiperData } from '../data/BannerData';

export const MainContext = createContext();

function MainContextProvider({children}) {
  return (
    <MainContext.Provider value={{bannerSwiperData,galleryCategories, galleryImages, partners, reportArr, workerArr}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider
