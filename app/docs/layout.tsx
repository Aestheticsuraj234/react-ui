import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import type { ReactNode } from "react";
import { baseOptions } from "../layout.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template:
            "%s | codesnippetui - Free UI Components to build beautiful websites",
        default: "codesnippetui - Free UI Components to build beautiful websites",
    },
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            tree={source.pageTree}
            {...baseOptions}
            sidebar={{
                defaultOpenLevel: 1,
                banner: (
                    <div className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 p-2 rounded-md text-xs py-1">
                        Upgraded to TailwindCSS 4.0. If you have any issues,
                        reach out!
                    </div>
                ),
            }}
        >
            {children}
        </DocsLayout>
    );
}
