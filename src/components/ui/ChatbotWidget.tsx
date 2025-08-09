'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import Button from './Button';

// Placeholder component for Phase 2 WebSocket integration
export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // TODO: Phase 2 - Integrate with WebSocket connection to NestJS backend
    console.log('Message to be sent to AI:', message);
    setMessage('');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-2xl"
          variant="primary"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-40 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Coming soon in Phase 2!</p>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Hi! I'm your AI assistant. I'll be able to help you learn more about Aswath's work and experience once Phase 2 is complete.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    For now, feel free to explore the portfolio and use the contact form to get in touch!
                  </p>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message... (Phase 2)"
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                  disabled
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  disabled
                  className="px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}