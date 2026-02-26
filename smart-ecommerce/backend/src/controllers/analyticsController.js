import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';

// @desc    Get sales analytics
// @route   GET /api/analytics
// @access  Private/Admin
const getAnalytics = asyncHandler(async (req, res) => {
    // Aggregate sales data per month
    const salesData = await Order.aggregate([
        { $match: { isPaid: true } },
        {
            $group: {
                _id: { $dateToString: { format: '%Y-%m', date: '$paidAt' } },
                totalSales: { $sum: '$totalPrice' },
                ordersCount: { $sum: 1 },
            },
        },
        { $sort: { _id: 1 } },
    ]);

    const totalRevenue = salesData.reduce((acc, item) => acc + item.totalSales, 0);

    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Product.countDocuments();

    res.json({
        totalRevenue,
        totalUsers,
        totalOrders,
        totalProducts,
        salesData,
    });
});

export { getAnalytics };
