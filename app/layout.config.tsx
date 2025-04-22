import { HeaderPro } from "@/components/landing/header-pro";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Flame } from "lucide-react";

import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <div className="flex items-center">
                <Image
                    src="/logo.svg"
                    alt="codesnippetui Logo"
                    width={24}
                    height={24}
                    className="mr-2 hidden dark:block"
                />
            <Flame className="mr-2 h-5 w-5 text-green-600" />
                <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-black dark:text-white">
                    CodeSnippetUI
                </span>
            </div>
        ),
    },
    links: [
        {
            text: "Pricing",
            url: "/pricing",
        },
        {
            text: "Templates",
            url: "https://codesnippetui.pro/templates?utm_source=codesnippetui.com&utm_medium=header",
        },
        {
            type: "custom",
            children: <HeaderPro />,
        },
    ],
};
