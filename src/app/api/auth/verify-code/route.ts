import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// 模拟用户会话存储（生产环境应使用数据库）
const sessions = new Map<string, { email: string; createdAt: number }>();

export async function POST(request: NextRequest) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: 'Email and code are required' },
        { status: 400 }
      );
    }

    // 验证码校验（简化版本，临时会话token）
    const sessionToken = crypto.randomBytes(32).toString('hex');
    const sessionExpiry = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7天

    // 存储会话
    sessions.set(sessionToken, {
      email,
      createdAt: Date.now()
    });

    // 创建响应
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        email,
        isGuest: true
      }
    });

    // 设置 HTTP-only Cookie
    response.cookies.set('session_token', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: sessionExpiry,
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Verify code error:', error);
    return NextResponse.json(
      { error: 'Failed to verify code' },
      { status: 500 }
    );
  }
}

// 获取当前会话
export async function GET(request: NextRequest) {
  const sessionToken = request.cookies.get('session_token')?.value;

  if (!sessionToken) {
    return NextResponse.json({ user: null });
  }

  const session = sessions.get(sessionToken);

  if (!session) {
    return NextResponse.json({ user: null });
  }

  // 检查会话是否过期（7天）
  if (Date.now() - session.createdAt > 7 * 24 * 60 * 60 * 1000) {
    sessions.delete(sessionToken);
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({
    user: {
      email: session.email,
      isGuest: true
    }
  });
}

// 登出
export async function DELETE(request: NextRequest) {
  const sessionToken = request.cookies.get('session_token')?.value;

  if (sessionToken) {
    sessions.delete(sessionToken);
  }

  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully'
  });

  response.cookies.delete('session_token');

  return response;
}
