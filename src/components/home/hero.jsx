"use client";

import Item1 from "@/public/item1.png";
import { Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";

const categories = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "IT",
        value: "it",
    },
    {
        label: "Marketing & Sales",
        value: "marketing",
    },
    {
        label: "Finance",
        value: "finance",
    },
    {
        label: "Human Resources",
        value: "hr",
    },
    {
        label: "Customer Service",
        value: "customer",
    },
    {
        label: "Graphic Design",
        value: "design",
    },
    {
        label: "Hospitality & Healthcare",
        value: "healthcare",
    },
    {
        label: "Others",
        value: "others",
    },
];

const types = [
    {
        label: "Full Time",
        value: "full-time",
    },
    {
        label: "Part Time",
        value: "part-time",
    },
    {
        label: "Internship",
        value: "internship",
    },
];

const departments = [
    {
        label: "BCA",
        value: "bca",
    },
    {
        label: "BBA",
        value: "bba",
    },
    {
        label: "BSC",
        value: "bsc",
    },
    {
        label: "BID",
        value: "bid",
    },
];

function Hero() {
    return (
        <section>
            <div className="flex items-center justify-evenly gap-6">
                <div className="flex w-full max-w-lg flex-col gap-5 ">
                    <p className="text-center text-4xl font-bold">
                        Find your next job <br />
                        from{" "}
                        <span className="bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                            here
                        </span>
                        .
                    </p>

                    <div className="flex  gap-3 ">
                        <Select items={categories} label="Category" size="sm">
                            {(category) => (
                                <SelectItem
                                    key={category.value}
                                    value={category.value}
                                >
                                    {category.label}
                                </SelectItem>
                            )}
                        </Select>

                        <Select items={types} label="Type" size="sm">
                            {(type) => (
                                <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                </SelectItem>
                            )}
                        </Select>

                        <Select
                            items={departments}
                            label="Department"
                            size="sm"
                        >
                            {(dept) => (
                                <SelectItem key={dept.value} value={dept.value}>
                                    {dept.label}
                                </SelectItem>
                            )}
                        </Select>
                    </div>
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
    );
}

export default Hero;
