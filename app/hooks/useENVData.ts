
import CeremonyDataType from "@/types/ceremonyData.type";
import { useEffect, useState } from "react";


const leftName = process.env.NEXT_PUBLIC_LEFT_DISPLAY_NAME || "name"
const rightName = process.env.NEXT_PUBLIC_RIGHT_DISPLAY_NAME || "name"
const ceremonyDateString = process.env.NEXT_PUBLIC_CEREMONY_DATE || "2025-01-01"
const ceremonyHost = process.env.NEXT_PUBLIC_CEREMONY_HOST || ""
const ceremonyHallName = process.env.NEXT_PUBLIC_CEREMONY_HALL_NAME || "Hall name"
const cta_link_1 = process.env.NEXT_PUBLIC_CTA_LINK_1ST || ""
const cta_logo_1 = process.env.NEXT_PUBLIC_CTA_LOGO_1ST || ""
const cta_link_2 = process.env.NEXT_PUBLIC_CTA_LINK_2ND || ""
const cta_logo_2 = process.env.NEXT_PUBLIC_CTA_LOGO_2ND || ""
const cta_link_3 = process.env.NEXT_PUBLIC_CTA_LINK_3RD || ""
const cta_logo_3 = process.env.NEXT_PUBLIC_CTA_LOGO_3RD || ""
const cta_link_4 = process.env.NEXT_PUBLIC_CTA_LINK_4TH || ""
const cta_logo_4 = process.env.NEXT_PUBLIC_CTA_LOGO_4TH || ""
const useENVData = () => {
    
    const [data, setData] = useState<CeremonyDataType | null>(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const res = {
            names: [leftName, rightName],
            ceremonyDateString,
            ceremonyHost,
            ceremonyHallName,
            cta_link: [cta_link_1, cta_link_2, cta_link_3, cta_link_4],
            cta_logo: [cta_logo_1, cta_logo_2, cta_logo_3, cta_logo_4]
        } as CeremonyDataType;
        setData(res)
    setIsLoading(false)
      return () => {
        
    setIsLoading(false)
      }
    }, [])
    
    
    
    
    return { data, isLoading, error }
}

export default useENVData;