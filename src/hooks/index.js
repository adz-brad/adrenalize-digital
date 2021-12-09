import { useLayoutEffect, useState } from 'react'

const isBrowser = typeof window !== "undefined"

const useWindowWidth = () => {
    const [ width, setWidth ] = useState(0)    
    useLayoutEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        updateWidth()
        return () => window.removeEventListener('resize', updateWidth)
    }, []);
    return width;
};

const useWindowHeight = () => {
    const [ height, setHeight ] = useState(0)    
    useLayoutEffect(() => {
        const updateHeight = () => {
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize', updateHeight)
        updateHeight()
        return () => window.removeEventListener('resize', updateHeight)
    }, []);
    return height;
};

export { useWindowHeight, useWindowWidth, isBrowser }