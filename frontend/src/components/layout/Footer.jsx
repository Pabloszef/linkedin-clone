import React from 'react'

const Footer = () => {
    return (
        <footer className="py-6 xl:px-32 lg:px-12 md:px-8 md:py-0 bg-secondary text-black w-[97%] sm:w-[97%] mr-0 ml-3 xl:ml-5 sm:mr-0
        md:w-[98%] md:ml-[10px]
         shadow-md fixed bottom-3 rounded-md">
            <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground
                md:text-left">
                    Build by{" "}
                    <a
                        href="https://github.com/Pabloszef"
                        target="_blank"
                        className="font-medium underline underline-offset-4"
                    >
                        Pablo
                    </a>
                    . The source code is available on{" "}
                    <a
                        href="https://github.com/Pabloszef/linkedin-clone"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    .
                </p>
                <p className="text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Stack Studio. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
export default Footer