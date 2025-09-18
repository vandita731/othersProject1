import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-blue-100">
            <div className="mx-auto w-full max-w-7xl">
                <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-5">
                    <br />
                    <h1 className="text-center text-6xl text-[#0d47a1]">
                        Welcome to NextGen
                    </h1>
                    <br />
                    <h2 className="text-center text-2xl">
                        <br />
                        We create high-quality, domain-specific datasets designed to train
                        and fine-tune LLMs, ML, DL, and Transformer models, accelerating
                        innovation in Artificial Intelligence.
                        <br />
                    </h2>
                </aside>

                {/* Bigger Circle Logo */}
                <div className="grid place-items-center sm:mt-5">
                    <img
                        className="w-80 h-80 rounded-full  object-contain"
                        src="/logo_img.jpg"
                        alt="NextGen Logo"
                    />
                </div>

                <h1 className="text-center text-2xl py-10 font-medium text-[#0d47a1]">
                    Powering the Future of AI with Next-Generation Datasets
                </h1>
            </div>
        </div>
    );
}
