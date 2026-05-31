import { NextRequest, NextResponse } from 'next/server';

// 创建 Stripe 支付意向
export async function POST(request: NextRequest) {
  try {
    const { amount, currency, items, customerEmail } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // TODO: 集成真实的 Stripe API
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: Math.round(amount * 100), // 转换为分
    //   currency: currency || 'usd',
    //   metadata: { items: JSON.stringify(items) },
    //   receipt_email: customerEmail,
    // });

    // 模拟支付意向创建
    const mockPaymentIntent = {
      id: `pi_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`,
      amount: Math.round(amount * 100),
      currency: currency || 'usd',
      status: 'requires_payment_method',
      created: Date.now()
    };

    console.log('[DEV] Mock Payment Intent created:', mockPaymentIntent);

    // 开发环境下返回模拟数据
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.json({
        success: true,
        clientSecret: mockPaymentIntent.client_secret,
        paymentIntentId: mockPaymentIntent.id,
        amount: mockPaymentIntent.amount,
        currency: mockPaymentIntent.currency
      });
    }

    return NextResponse.json({
      success: true,
      clientSecret: mockPaymentIntent.client_secret,
      paymentIntentId: mockPaymentIntent.id
    });

  } catch (error) {
    console.error('Create payment intent error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}
