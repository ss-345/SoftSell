import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const HomePage = () => {
  const steps = [
    {
      title: "Step 1: Upload License",
      icon: "⬆️",
      description:
        "Provide details of the licenses you want to sell. Our platform supports a wide range of software types.",
    },
    {
      title: "Step 2: Get Valuation",
      icon: "💰",
      description:
        "Receive a fair market estimate based on current demand and value. No hidden costs involved.",
    },
    {
      title: "Step 3: Get Paid",
      icon: "💳",
      description:
        "Accept the offer and receive payment quickly through your preferred method.",
    },
  ];
  const Advantage = [
    {
      icon: "⚡",
      title: "Fast Transactions",
      text: "Get your software licenses sold in record time. We ensure a quick and easy process without delays.",
    },
    {
      icon: "🔒",
      title: "Secure Process",
      text: "Your data and transactions are fully protected. We follow top-notch security practices.",
    },
    {
      icon: "💼",
      title: "Business Friendly",
      text: "Ideal for businesses with excess software inventory. Streamline asset liquidation with ease.",
    },
    {
      icon: "📞",
      title: "Dedicated Support",
      text: "Our support team is always available to guide you. Get personalized assistance at every step.",
    },
  ];
  const reviews = [
    {
      name: "Jane Doe",
      role: "IT Manager",
      company: "TechCorp",
      quote:
        "SoftSell helped us liquidate unused licenses quickly. Highly recommend!",
    },
    {
      name: "John Smith",
      role: "Procurement Head",
      company: "BizTech",
      quote:
        "A seamless experience with real cash value. Excellent support team!",
    },
  ];
  const licenseOptions = [
    { value: "", label: "Select License Type" },
    { value: "os", label: "Operating System" },
    { value: "productivity", label: "Productivity Suite" },
    { value: "antivirus", label: "Antivirus" },
    { value: "design", label: "Design Software" },
  ];
  const inputFields = [
    { type: "text", placeholder: "Name", name: "name" },
    { type: "email", placeholder: "Email", name: "email" },
    { type: "text", placeholder: "Company", name: "company" },
  ];
  const [showChat, setShowChat] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "bot",
      text: "Hello! Welcome to SoftSell. We're here to help you turn your unused software licenses into cash. How can I assist you today?",
    },
  ]);

  const [userMessage, setUserMessage] = useState("");
  const chatContainerRef = useRef(null);

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    const newMessage = { sender: "user", text: userMessage };
    setChatHistory((prev) => [...prev, newMessage]);

    // Extended mock responses
    const faqs = {
      "how do i sell my license":
        "Just click 'Sell My Licenses', fill in the form, and we’ll handle the rest!",
      "how fast do i get paid":
        "Once your license is verified, payment is usually processed within 24-48 hours.",
      "is this secure":
        "Yes! We use top-grade encryption and secure payment gateways.",
      "what types of licenses do you accept":
        "We support OS, productivity tools, antivirus, and design software licenses.",
      "how do i get a valuation for my license":
        "To get a valuation, just provide details of the software you're selling, and we’ll estimate its value.",
      "do you accept expired licenses":
        "We currently only accept valid and active licenses. Expired licenses cannot be sold.",
      "can i sell multiple licenses at once":
        "Yes! You can sell as many licenses as you like. Just fill out the form for each one.",
      "how do i track my sale":
        "After submitting your license, you’ll receive email updates on its status, including valuation and payment details.",
      "is there a commission fee":
        "There are no hidden fees. We take a small, transparent commission from each sale.",
      "what if my license is not accepted":
        "In rare cases, we may not be able to accept a license. You will be notified, and no charges will apply.",
      "do you support all countries":
        "We currently support most countries, but some regions might have restrictions. Check our FAQs for more details.",
    };

    const lowerCaseInput = userMessage.toLowerCase().trim();
    const matchedResponse =
      Object.entries(faqs).find(([q]) => lowerCaseInput.includes(q))?.[1] ||
      "I'm here to help! Could you please rephrase or ask a different question?";

    const botReply = { sender: "bot", text: matchedResponse };

    // Simulate response delay
    setTimeout(() => {
      setChatHistory((prev) => [...prev, botReply]);
    }, 1000);

    setUserMessage(""); // Clear input
  };
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);
  return (
    <div className="font-sans text-gray-800 relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-300 py-20 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Turn Unused Software into Cash
          </motion.h1>
          <motion.p
            className="text-lg mb-6 font-semibold text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="font-bold text-3xl text-blue-600 cursor-pointer transition-transform duration-200 hover:text-blue-800">
              SoftSell
            </span>
            helps individuals and businesses convert surplus software licenses
            into real money—quickly, securely, and with complete transparency.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 cursor-pointer"
          >
            Sell My Licenses
          </motion.button>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-2xl font-bold mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="bg-blue-100 p-6 rounded-lg shadow-md w-64 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 font-semibold">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {Advantage.map((item, i) => (
            <motion.div
              key={item.text}
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h2 className="font-bold text-xl mb-2">{item.title}</h2>
              <p className="text-gray-600 font-semibold">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-2xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="bg-blue-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="italic mb-4">“{review.quote}”</p>
              <p className="font-semibold">
                {review.name}, {review.role} at {review.company}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8 font-semibold">
            Have questions or want to sell your licenses? Drop us a message—we’d
            love to help!
          </p>
          <form className="grid gap-5 text-left">
            {inputFields.map((field, index) => (
              <motion.input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
            <motion.select
              required
              className="p-4 rounded-lg border border-gray-300 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {licenseOptions.map((license) => (
                <option key={license.value} value={license.value}>
                  {license.label}
                </option>
              ))}
            </motion.select>
            <motion.textarea
              rows="4"
              placeholder="Message"
              required
              className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </section>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setShowChat(true)}
        className="font-semibold fixed bottom-6 right-6 z-50 bg-blue-600 text-gray-800 p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
        aria-label="Open Chat"
      >
        💬
      </button>
      {/* Chat Modal */}
      {showChat && (
        <div className="fixed right-0 bottom-0 w-full md:w-1/4 h-[60vh] md:h-[75vh] bg-white shadow-2xl border-l z-50 flex flex-col">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <span className="font-semibold">AI Chat Assistant</span>
            <button
              onClick={() => setShowChat(false)}
              className="text-white hover:text-gray-200 text-xl hover:cursor-pointer transition-transform transition-colors duration-300 hover:scale-110"
              aria-label="Close Chat"
            >
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div
            className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50"
            ref={chatContainerRef}
          >
            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[90%] ${
                  msg.sender === "user"
                    ? "bg-blue-100 self-end ml-auto text-right"
                    : "bg-gray-200 self-start mr-auto"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-l-lg focus:outline-none"
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
