"use client";

import Footer from "@/src/components/global/footer/footer";
import NavbarHome from "@/src/components/global/navbar/navbar-home";
import ProfileFetch from "@/src/components/profile/profile-fetch";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

function Page() {
    const year = [
        {
            label: "1st Semester",
            value: "1st Semester",
        },
        {
            label: "2nd Semester",
            value: "2nd Semester",
        },
        {
            label: "3rd Semester",
            value: "3rd Semester",
        },
        {
            label: "4rth Semester",
            value: "4rth Semester",
        },
        {
            label: "5th Semester",
            value: "5th Semester",
        },
        {
            label: "6th Semester",
            value: "6th Semester",
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

    return (
        <>
            <NavbarHome />
            <section className="flex  bg-slate-200 p-5 py-10">
                <div className="container max-w-4xl space-y-8 p-0 2xl:max-w-6xl">
                    <div className="space-y-2">
                        <p className="text-4xl font-bold md:text-5xl">
                            Settings
                        </p>
                        <p className="text-sm text-gray-400 md:text-base">
                            Manage your account
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Input type="Text" label="" placeholder="First Name" />

                        <Input type="Text" label="" placeholder="Last Name" />
                    </div>
                    <div>
                        <Input type="Text" label="" placeholder="Short Bio" />
                    </div>
                    <div className="flex gap-3">
                        <Select items={year} label="Select Year" size="sm">
                            {(year) => (
                                <SelectItem key={year.value} value={year.value}>
                                    {year.label}
                                </SelectItem>
                            )}
                        </Select>

                        <Select
                            items={departments}
                            label="Select Department"
                            size="sm"
                        >
                            {(dept) => (
                                <SelectItem key={dept.value} value={dept.value}>
                                    {dept.label}
                                </SelectItem>
                            )}
                        </Select>
                    </div>
                    <div className="flex gap-3">
                        <ProfileFetch />
                        <Button>Save</Button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Page;
