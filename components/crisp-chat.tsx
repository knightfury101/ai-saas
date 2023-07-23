"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("9380c9ad-c3d1-452e-b8b2-c6d80ec507bc")
    }, [])

    return null
}