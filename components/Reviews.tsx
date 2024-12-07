"use client";

import { useState } from "react";

type ReviewType = {
    userName: string;
    rating: number;
    comment: string;
};

const Review = () => {
    const [reviews, setReviews] = useState<ReviewType[]>([
        { userName: "John Doe", rating: 4, comment: "Sản phẩm rất tốt!" },
        { userName: "Jane Doe", rating: 5, comment: "Chất lượng tuyệt vời!" }
    ]);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [hoveredRating, setHoveredRating] = useState(0); // Dùng để hiển thị hover sao

    const handleSubmit = () => {
        if (rating && comment) {
            const newReview = { userName: "User", rating, comment };
            setReviews([...reviews, newReview]);
            setRating(0);
            setComment("");
        }
    };

    return (
        <div className="review-section w-full bg-gray-100 p-6 rounded-lg">
            <h3 className="text-heading3-bold mb-4">Đánh giá sản phẩm</h3>
            <div className="flex items-center gap-4 mb-4">
                <span className="text-lg font-semibold">Đánh giá của bạn:</span>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`cursor-pointer text-4xl ${rating >= star || hoveredRating >= star ? "text-yellow-500" : "text-gray-300"}`}
                            onClick={() => setRating(star)}  // Chọn rating khi click vào sao
                            onMouseEnter={() => setHoveredRating(star)}  // Khi hover vào sao
                            onMouseLeave={() => setHoveredRating(0)}  // Khi bỏ hover khỏi sao
                        >
                            ★
                        </span>
                    ))}
                </div>
            </div>
            <textarea
                className="w-full p-3 border rounded-lg mb-4"
                placeholder="Viết bình luận của bạn..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg"
                onClick={handleSubmit}
            >
                Gửi đánh giá
            </button>

            <div className="mt-8">
                <h4 className="text-heading4-bold">Các đánh giá khác:</h4>
                <div className="mt-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="border-b-2 pb-4 mb-4">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">{review.userName}</span>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`text-yellow-500 ${review.rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="mt-2">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;
