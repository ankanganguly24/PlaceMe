"use client";

import footer1 from "@/public/footer1.svg";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="mt-4 flex items-center justify-around  bg-primary py-2 pl-2 text-white">
                    <div className="flex gap-2">
                        <a href="https://www.instagram.com/inspiriaindia/?hl=en">
                            {" "}
                            <FaInstagramSquare size={35} />{" "}
                        </a>
                        <a href="https://www.facebook.com/inspiriaindia">
                            {" "}
                            <FaFacebook size={35} />{" "}
                        </a>
                    </div>
                    <a href="https://www.inspiria.edu.in/">
                        <Image
                            className="pointer-events-none"
                            src={footer1.src}
                            alt="mission"
                            width={150}
                            height={150}
                            priority
                        />
                    </a>
                    <Link
                        href="/signin"
                        className="rounded-md border-2 border-yellow-500 p-4  transition duration-400 ease-in-out hover:bg-yellow-200 hover:text-black"
                    >
                        Signin for our job posting
                    </Link>
                </div>
            </footer>
        </>
    );
};

export default Footer;
