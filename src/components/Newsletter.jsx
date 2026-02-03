import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

/**
 * Newsletter Component
 * Email subscription section for marketing
 */
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // Simulate API call - replace with actual backend integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Integrate with backend newsletter API
      console.log("Newsletter subscription:", email);

      setStatus("success");
      setMessage(
        "Thanks for subscribing! Check your inbox for a welcome surprise.",
      );
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 mb-6">
            <Mail className="w-8 h-8 text-yellow-400" />
          </div>

          {/* Content */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Subscribe to our newsletter and be the first to know about new
            releases, exclusive offers, and style inspiration.
          </p>

          {/* Form */}
          {status === "success" ? (
            <div className="flex items-center justify-center gap-3 text-green-400">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">{message}</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter your email"
                  className={`w-full px-5 py-4 text-white bg-white/10 border rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all ${
                    status === "error" ? "border-red-500" : "border-white/20"
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Error Message */}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-400">{message}</p>
          )}

          {/* Privacy Note */}
          <p className="mt-6 text-sm text-gray-500">
            By subscribing, you agree to our{" "}
            <a
              href="/privacy"
              className="text-gray-400 underline hover:text-white"
            >
              Privacy Policy
            </a>
            . Unsubscribe anytime.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Early Access",
              description: "Be first to shop new releases",
            },
            {
              title: "Exclusive Deals",
              description: "Members-only discounts & offers",
            },
            {
              title: "Style Tips",
              description: "Curated looks & trending styles",
            },
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
