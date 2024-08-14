import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { slug } = params;
    return NextResponse.json({
        "success": true,
        "data": {
            "title": "Hello World",
            "body": "Lorem ipsum dolor sit amet, consecrate dip"
        },
    })
}