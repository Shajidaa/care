"use server";
import { collections, connect } from "@/lib/dbConntect";

export const handleBooking = async (bookingData) => {
  try {
    const bookingCollection = connect(collections.Bookings);
    const result = await bookingCollection.insertOne(bookingData);
    return { success: result.acknowledged, message: "Booking Successful!" };
  } catch (error) {
    return { success: false, message: "Database Error" };
  }
};
