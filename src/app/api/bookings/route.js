// app/api/booking/route.js
import { collections, connect } from "@/lib/dbConntect";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { sendBookingEmail } from "@/lib/sendBookingEmail";

export async function POST(request) {
  try {
    const bookingData = await request.json();
    const db = connect(collections.Bookings);

    const result = await db.insertOne({
      ...bookingData,
      createdAt: new Date(),
    });
    try {
      await sendBookingEmail({
        to: bookingData.email,
        bookingData,
      });
    } catch (emailError) {
      console.error("Email failed:", emailError);
      // DO NOT throw
    }

    return NextResponse.json(
      { success: true, id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    const db = connect(collections.Bookings);
    const bookings = await db.find({ email }).toArray();

    return NextResponse.json({ bookings });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Booking ID is required" },
        { status: 400 }
      );
    }

    const db = connect(collections.Bookings);

    const result = await db.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, deletedId: id }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
