"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const MyBookingsPage = () => {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  console.log("bookings", bookings);

  useEffect(() => {
    if (!session?.user?.email) return;

    fetch(`/api/bookings?email=${session.user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data.bookings));
  }, [session]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((b) => (
          <div key={b._id}>
            <p>{b.service}</p>
            <p>{b.date}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBookingsPage;
