"use client";

import Item1 from "@/public/item1.png";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";

function Hero() {
    return (
        <>
            <section>
                <div className="flex items-center justify-evenly gap-6 bg-slate-200">
                    <div className="flex w-full max-w-lg flex-col gap-5 ">
                        <p className="text-center text-4xl font-bold">
                            Find your next job <br />
                            from{" "}
                            <span className="bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                                here
                            </span>
                            .
                        </p>

                        <div className="mb-6 flex w-full flex-wrap gap-4 md:mb-0 md:flex-nowrap">
                            <Input
                                type="text"
                                variant="underlined"
                                label="Search"
                                placeholder="Enter your preference job title"
                            />
                        </div>
                        <Button color="primary" variant="ghost" size="md">
                            Find
                        </Button>
                    </div>

                    <Image
                        className="pointer-events-none pt-3"
                        src={Item1.src}
                        alt="Picture"
                        width={400}
                        height={400}
                        priority
                    />
                </div>
            </section>
        </>
    );
}

export default Hero;
