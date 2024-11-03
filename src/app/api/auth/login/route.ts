import axios from 'axios';
import { NextResponse } from 'next/server';
import { LoginRequestBody, DjangoAuthResponse } from '@/lib/authType';

export async function POST(request: Request) {
    const { username, password }: LoginRequestBody = await request.json();

    try {
        const serverRresponse = await axios.post(`${process.env.DJANGO_SERVER_URL}/users/login/`, { username, password });

        if (serverRresponse.status !== 200) {
            return NextResponse.json({ error: 'External Server error' },{ status: serverRresponse.status });
        }

        const { access, refresh }: DjangoAuthResponse = await serverRresponse.data;

        const response = NextResponse.json({ message: 'Login successful' },{ status: serverRresponse.status });

        response.cookies.set('accessToken', access, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge:2332800,
        });

        response.cookies.set('refreshToken', refresh, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge:2592000,
        });

        return response;

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal Server error' }, { status: 500 });
    }
}
