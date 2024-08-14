import {NextResponse} from "next/server";

export async function GET(req) {
    return NextResponse.json({
        "success": true,
        "data": {
            "title": "Hello World",
            "body": "Lorem ipsum dolor sit amet, consectetur adip"
        },
    })
}

export async function POST(req) {
    const body = await req.json();
    return NextResponse.json({
        "success": true,
        "data": body,
    })
}

export async function PUT(req) {
    const body = await req.json();
    return NextResponse.json({
        "success": true,
        "data": body,
    })
}

export async function DELETE(req) {
    const body = await req.json();
    return NextResponse.json({
        "success": true,
        "data": body,
    })
}