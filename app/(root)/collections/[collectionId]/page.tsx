import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
    params,
}: {
    params: { collectionId: string };
}) => {
    let collectionDetails = null;
    try {
        // Lấy chi tiết bộ sưu tập từ API
        collectionDetails = await getCollectionDetails(params.collectionId);
    } catch (error) {
        console.error("Error fetching collection details:", error);
        // Xử lý lỗi khi không lấy được dữ liệu (ví dụ: hiển thị thông báo lỗi hoặc fallback UI)
    }

    // Kiểm tra xem có dữ liệu không trước khi render
    if (!collectionDetails) {
        return <div>Không tìm thấy bộ sưu tập này.</div>;
    }

    return (
        <div className="px-10 py-5 flex flex-col items-center gap-8">
            {collectionDetails.image && (
                <Image
                    src={collectionDetails.image}
                    width={1500}
                    height={1000}
                    alt="collection"
                    className="w-full h-[400px] object-cover rounded-xl"
                />
            )}
            <p className="text-heading3-bold text-grey-2">{collectionDetails.title}</p>
            <p className="text-body-normal text-grey-2 text-center max-w-[900px]">{collectionDetails.description}</p>
            <div className="flex flex-wrap gap-16 justify-center">
                {collectionDetails.products && collectionDetails.products.length > 0 ? (
                    collectionDetails.products.map((product: ProductType) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p>Không có sản phẩm trong bộ sưu tập này.</p>
                )}
            </div>
        </div>
    );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";
