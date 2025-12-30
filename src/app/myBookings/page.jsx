"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Container from "@/components/common/Container";

const MyBookingsPage = () => {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);

  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    if (!session?.user?.email) return;

    fetch(`/api/bookings?email=${session.user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data.bookings || []);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, [session]);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return "badge-success";
      case "completed":
        return "badge-info";
      case "cancelled":
        return "badge-error";
      case "pending":
      default:
        return "badge-warning";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
        return "✓";
      case "completed":
        return "✓✓";
      case "cancelled":
        return "✗";
      case "pending":
      default:
        return "⏳";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (status === "loading") {
    return (
      <Container className="px-4 py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="loading loading-spinner loading-lg text-primary"></div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="px-4 py-8">
      {/* Header Section */}
      <div className="mb-8 mt-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Bookings
            </h1>
            <p className="text-base-content/70 mt-1">
              Manage and track your service bookings
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {["pending", "confirmed", "completed", "cancelled"].map((status) => {
            const count = bookings.filter(
              (b) => b.status?.toLowerCase() === status
            ).length;
            return (
              <div
                key={status}
                className="bg-base-200 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-secondary">{count}</div>
                <div className="text-sm capitalize text-base-content/70">
                  {status}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bookings List */}
      {bookings.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-base-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-12 h-12 text-base-content/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">No bookings found</h3>
          <p className="text-base-content/70 mb-6">
            You have not made any bookings yet.
          </p>
          <button className="btn btn-primary">Browse Services</button>
        </div>
      ) : (
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-base-300"
            >
              <div className="card-body p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Main Info */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <h3 className="text-lg font-semibold text-base-content">
                        {booking.serviceTitle}
                      </h3>
                      <div
                        className={`badge ${getStatusColor(
                          booking.status
                        )} gap-1`}
                      >
                        <span>{getStatusIcon(booking.status)}</span>
                        <span className="capitalize">
                          {booking.status || "pending"}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-base-content/70">
                          {formatDate(booking.preferredDate)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-base-content/70">
                          {formatTime(booking.preferredTime)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-base-content/70">
                          {booking.serviceArea}, {booking.district}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          />
                        </svg>
                        <span className="font-semibold text-primary">
                          ৳{booking.cost?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 lg:flex-col lg:w-auto">
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="btn btn-outline btn-sm"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View Details
                    </button>

                    {booking.status?.toLowerCase() !== "cancelled" &&
                      booking.status?.toLowerCase() !== "completed" && (
                        <button className="btn btn-error btn-outline btn-sm">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          Cancel
                        </button>
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Booking Details</h3>
              <button
                onClick={() => setSelectedBooking(null)}
                className="btn btn-sm btn-circle btn-ghost"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-base-content/70">
                    Service
                  </label>
                  <p className="font-semibold">
                    {selectedBooking.serviceTitle}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-base-content/70">
                    Status
                  </label>
                  <div
                    className={`badge ${getStatusColor(
                      selectedBooking.status
                    )} mt-1`}
                  >
                    {getStatusIcon(selectedBooking.status)}{" "}
                    {selectedBooking.status || "pending"}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-base-content/70">
                    Date & Time
                  </label>
                  <p className="font-semibold">
                    {formatDate(selectedBooking.preferredDate)} at{" "}
                    {formatTime(selectedBooking.preferredTime)}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-base-content/70">
                    Total Cost
                  </label>
                  <p className="font-semibold text-primary">
                    ৳{selectedBooking.cost?.toLocaleString()}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-base-content/70">
                    Location
                  </label>
                  <p className="font-semibold">{selectedBooking.address}</p>
                  <p className="text-sm text-base-content/70">
                    {selectedBooking.serviceArea}, {selectedBooking.district},{" "}
                    {selectedBooking.region}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-base-content/70">
                    Contact
                  </label>
                  <p className="font-semibold">{selectedBooking.name}</p>
                  <p className="text-sm text-base-content/70">
                    {selectedBooking.phone}
                  </p>
                  <p className="text-sm text-base-content/70">
                    {selectedBooking.email}
                  </p>
                </div>
              </div>

              {selectedBooking.notes && (
                <div>
                  <label className="text-sm font-medium text-base-content/70">
                    Notes
                  </label>
                  <p className="bg-base-200 p-3 rounded-lg mt-1">
                    {selectedBooking.notes}
                  </p>
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-base-content/70">
                  Booked At
                </label>
                <p className="text-sm">
                  {new Date(selectedBooking.bookedAt).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="modal-action">
              <button
                onClick={() => setSelectedBooking(null)}
                className="btn btn-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default MyBookingsPage;
