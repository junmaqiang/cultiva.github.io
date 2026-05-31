import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// 模拟验证码存储（生产环境应使用 Redis 或数据库）
const verificationCodes = new Map<string, { code: string; expiresAt: number }>();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // 生成6位验证码
    const code = crypto.randomInt(100000, 999999).toString();
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5分钟后过期

    // 存储验证码
    verificationCodes.set(email, { code, expiresAt });

    // 清理过期验证码
    for (const [key, value] of verificationCodes.entries()) {
      if (value.expiresAt < Date.now()) {
        verificationCodes.delete(key);
      }
    }

    // TODO: 集成真实的邮件发送服务
    // 例如：SendGrid, AWS SES, Resend, Nodemailer 等
    console.log(`[DEV] Verification code for ${email}: ${code}`);

    // 在开发环境下，直接返回验证码以便测试
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.json({
        success: true,
        message: 'Verification code sent (check console in development)',
        devCode: code // 仅开发环境
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Verification code sent to your email'
    });
  } catch (error) {
    console.error('Send verification code error:', error);
    return NextResponse.json(
      { error: 'Failed to send verification code' },
      { status: 500 }
    );
  }
}
