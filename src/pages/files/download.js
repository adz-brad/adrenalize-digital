import React from 'react'

const Downloads = () => {
    return(
        <div>
            <a className="border-2 m-4 p-4 font-bold text-lg" href="https://github.com/brad-adrenalize/adrenalize-digital/raw/main/files/jax-guitar-images.zip" download>
                Download Jax Guitar Images
            </a>
            <a className="border-2 m-4 p-4 font-bold text-lg" href="https://github.com/brad-adrenalize/adrenalize-digital/raw/main/files/jaxsnax185x6.svg" download>
                Download Jax Snax 18.5" x 6" SVG
            </a>
            <a className="border-2 m-4 p-4 font-bold text-lg" href="https://github.com/brad-adrenalize/adrenalize-digital/raw/main/files/jaxsnax16x6.svg" download>
            Download Jax Snax 16" x 6" SVG
            </a>
        </div>
    )
}

export default Downloads