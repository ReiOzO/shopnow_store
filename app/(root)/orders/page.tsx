'use client';

import { useEffect, useState } from "react";
import { getOrders } from "@/lib/actions/actions";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";

const Orders = () => {
    const { userId } = useAuth(); // Lấy userId từ Clerk
    const [orders, setOrders] = useState<OrderType[]>([]); // State lưu danh sách đơn hàng
    const [loading, setLoading] = useState<boolean>(true); // State để quản lý trạng thái loading
    const [error, setError] = useState<string | null>(null); // State để lưu lỗi nếu có

    // Sử dụng useEffect để gọi API khi component render
    useEffect(() => {
        if (userId) {
            const fetchOrders = async () => {
                try {
                    const fetchedOrders = await getOrders(userId);
                    setOrders(fetchedOrders);
                } catch (err) {
                    setError("Failed to load orders.");
                } finally {
                    setLoading(false);
                }
            };

            fetchOrders();
        }
    }, [userId]);

    // Xử lý trạng thái loading và error
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="px-10 py-5 max-sm:px-3">
            <p className="text-heading3-bold my-10">Lịch sử mua hàng:</p>
            {!orders.length && <p className="text-body-bold my-5">Bạn không có lịch sử mua hàng nào.</p>}

            <div className="flex flex-col gap-10">
                {orders.map((order: OrderType) => (
                    <div key={order._id} className="flex flex-col gap-8 p-4 hover:bg-grey-1">
                        <div className="flex gap-20 max-md:flex-col max-md:gap-3">
                            <p className="text-base-bold">Order ID: {order._id}</p>
                            <p className="text-base-bold">
                                Tổng số tiền:{" "}
                                {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(order.totalAmount)}
                            </p>
                        </div>

                        <div className="flex flex-col gap-5">
                            {order.products.map((orderItem: OrderItemType) => (
                                <div key={orderItem.product._id} className="flex gap-4">
                                    <Image
                                        src={orderItem.product.media[0]}
                                        alt={orderItem.product.title}
                                        width={100}
                                        height={100}
                                        className="w-32 h-32 object-cover rounded-lg"
                                    />
                                    <div className="flex flex-col justify-between">
                                        <p className="text-small-medium">
                                            Title: <span className="text-small-bold">{orderItem.product.title}</span>
                                        </p>
                                        {orderItem.color && (
                                            <p className="text-small-medium">
                                                Color: <span className="text-small-bold">{orderItem.color}</span>
                                            </p>
                                        )}
                                        {orderItem.size && (
                                            <p className="text-small-medium">
                                                Size: <span className="text-small-bold">{orderItem.size}</span>
                                            </p>
                                        )}
                                        <p className="text-small-medium">
                                            Price:{" "}
                                            <span className="text-small-bold">
                                                {new Intl.NumberFormat('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(orderItem.product.price)}
                                            </span>
                                        </p>
                                        <p className="text-small-medium">
                                            Quantity: <span className="text-small-bold">{orderItem.quantity}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;

export const dynamic = "force-dynamic";

