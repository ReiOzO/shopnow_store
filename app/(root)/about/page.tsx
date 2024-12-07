import Articles from "@/components/Articles";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Image src="/banner.jpg" alt="banner" width={2000} height={1000} className="w-screen" />
            <Articles />
        </>
    );
}

export const dynamic = "force-dynamic";
