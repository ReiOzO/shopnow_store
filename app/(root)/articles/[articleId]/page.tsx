import { getArticleDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const ArticleDetails = async ({
    params,
}: {
    params: { articleId: string };
}) => {
    let articleDetails = null;
    try {
        // Lấy chi tiết bài viết từ API
        articleDetails = await getArticleDetails(params.articleId);
    } catch (error) {
        console.error("Error fetching article details:", error);
        // Xử lý lỗi khi không lấy được dữ liệu (ví dụ: hiển thị thông báo lỗi hoặc fallback UI)
    }

    // Kiểm tra xem có dữ liệu không trước khi render
    if (!articleDetails) {
        return <div>Không tìm thấy bài viết này.</div>;
    }

    return (
        <div className="px-10 py-5 flex flex-col items-center gap-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full">
                {articleDetails.image && (
                    <div className="flex-shrink-0 w-full md:w-1/2">
                        <Image
                            src={articleDetails.image}
                            width={1500}
                            height={1000}
                            alt="collection"
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                )}
                <div className="md:w-1/2 text-center md:text-left">
                    <p className="text-heading3-bold text-grey-2 mb-4">{articleDetails.title}</p>
                    <p className="text-body-normal text-grey-2 text-justify">{articleDetails.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;

export const dynamic = "force-dynamic";
