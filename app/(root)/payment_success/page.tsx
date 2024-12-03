"use client"

import useCart from "@/lib/hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
    const cart = useCart();

    useEffect(() => {
        cart.clearCart();
    }, []);

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-5">
            <div className="w-full max-w-4xl">
                <Image
                    src="/payments3.jpg"
                    alt="banner"
                    width={1000}
                    height={500}
                    className="w-full h-auto object-cover"
                />
            </div>
            <p className="text-heading4-bold text-red-1">Thanh toán thành công</p>
            <p>Cảm ơn bạn đã mua hàng</p>
            <Link
                href="/"
                className="p-4 border text-base-bold hover:bg-black hover:text-white"
            >
                Tiếp tục mua hàng
            </Link>
        </div>
    );
};

export default SuccessfulPayment;

export const dynamic = "force-dynamic";