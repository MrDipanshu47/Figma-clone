import React from 'react';

function Main() {
    return (
        <main className="text-center lg:text-left   overflow-auto bg-black ">
            <div className="lg:ml-32 2xl:pl-20">
                <h1 className="text-4xl md:text-5xl mb-8 sm:mb-16 max-h-[700px] text-stone-100">
                    The <span className="text-red-500">Sovereign</span>
                    <br /> Network for
                    <br />
                    <span className="text-red-500">Onchain</span> Creations
                </h1>
                <div className="mt-[24px] flex items-center gap-x-6 lg:justify-start justify-center lg:mb-0 mb-8">
                    <a
                        className="max-w-32 px-8 py-4 flex justify-center items-center border-[.5px] border-solid border-white bg-[#a56262] hover:bg-[#d67474] shadow-[2px_4px_0px_0px_rgba(255,255,255)]"
                        href="https://modularium.art/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-md text-slate-100">MODULARIUM</span>
                    </a>
                    <a
                        className="max-w-32 px-8 py-4 flex justify-center items-center border-[.5px] border-solid border-white bg-[#000000] text-slate-100 hover:bg-[#1E1E1E] shadow-[2px_4px_0px_0px_rgba(255,255,255)]"
                        href="https://bridge.forma.art/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-md">BRIDGE</span>
                    </a>
                </div>

                <div className="lg:mr-32 xl:mr-24 2xl:pr-20 flex items-center  ">
                    <img
                        src="./img/Masks.png"
                        alt="Masks"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg ml-auto"
                    />
                </div>

            </div>
            <div class="border-t border-gray-300 my-0.3"></div>
        </main>
    );
}

export default Main;
