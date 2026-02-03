import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle, Sparkles, Gift, Zap } from "lucide-react";

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
    <section className="py-20 sm:py-28 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-500/20 mb-8 animate-bounce-in">
            <Mail className="w-10 h-10 text-amber-400" />
          </div>

          {/* Content */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-slide-up">
            Stay in the <span className="text-amber-400">Loop</span>
          </h2>
          <p className="text-lg text-neutral-400 mb-10 max-w-lg mx-auto animate-slide-up stagger-1" style={{ animationFillMode: 'backwards' }}>
            Subscribe to our newsletter and be the first to know about new
            releases, exclusive offers, and style inspiration.
          </p>

          {/* Form */}
          {status === "success" ? (
            <div className="flex items-center justify-center gap-3 p-6 bg-green-500/20 rounded-2xl border border-green-500/30 animate-scale-in">
              <CheckCircle className="w-7 h-7 text-green-400" />
              <span className="text-lg font-medium text-green-400">{message}</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-slide-up stagger-2"
              style={{ animationFillMode: 'backwards' }}
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
                  className={`w-full px-6 py-4 text-white bg-white/10 border-2 rounded-xl placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all ${
                    status === "error" ? "border-rose-500" : "border-white/10"
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-neutral-900 font-bold rounded-xl hover:bg-amber-400 transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-amber-500/30"
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
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Error Message */}
          {status === "error" && (
            <p className="mt-4 text-sm text-rose-400 animate-fade-in">{message}</p>
          )}

          {/* Privacy Note */}
          <p className="mt-8 text-sm text-neutral-500">
            By subscribing, you agree to our{" "}
            <a
              href="/privacy"
              className="text-neutral-400 underline hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </a>
            . Unsubscribe anytime.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Zap,
              title: "Early Access",
              description: "Be first to shop new releases",
              color: "amber",
            },
            {
              icon: Gift,
              title: "Exclusive Deals",
              description: "Members-only discounts & offers",
              color: "rose",
            },
            {
              icon: Sparkles,
              title: "Style Tips",
              description: "Curated looks & trending styles",
              color: "blue",
            },
          ].map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                benefit.color === 'amber' ? 'bg-amber-500/20 text-amber-400' :
                benefit.color === 'rose' ? 'bg-rose-500/20 text-rose-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-neutral-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
