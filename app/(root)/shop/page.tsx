import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Shop() {
    return (
        <div className="shop-container">
            <div className="main-content">
                <Collections />
                <ProductList />
            </div>
        </div>
    );
}

export const dynamic = "force-dynamic";
