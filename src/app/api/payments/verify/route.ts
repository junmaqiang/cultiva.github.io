import { NextRequest, NextResponse } from 'next/server';

// 验证支付状态
export async function GET(request: NextRequest) {
  const paymentIntentId = request.nextUrl.searchParams.get('payment_intent');

  if (!paymentIntentId) {
    return NextResponse.json(
      { error: 'Payment intent ID is required' },
      { status: 400 }
    );
  }

  try {
    // TODO: 集成真实的 Stripe API
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    // const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    // 模拟支付验证
    const mockPaymentIntent = {
      id: paymentIntentId,
      status: 'succeeded',
      amount_received: 0,
      currency: 'usd',
      created: Date.now()
    };

    return NextResponse.json({
      success: true,
      status: mockPaymentIntent.status,
      paymentIntent: mockPaymentIntent
    });

  } catch (error) {
    console.error('Verify payment error:', error);
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
