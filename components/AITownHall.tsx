import React, { useState, useRef, useEffect } from 'react';
import { askVetAI } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';
import Button from './Button';
import { Send, Bot, User, Sparkles, AlertCircle } from 'lucide-react';

const AITownHall: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm the Fndly Care Assistant. How can I help you with your pet today? (I can provide general advice on diet, behavior, and care.)" }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status === LoadingState.LOADING) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setStatus(LoadingState.LOADING);

    const aiResponse = await askVetAI(userText);

    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setStatus(LoadingState.SUCCESS);
  };

  return (
    <section id="ai-help" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-brand-teal mr-2" />
            <span className="text-brand-teal font-bold text-sm uppercase tracking-wide">AI Pet Assistant</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Quick Answers for Pet Parents
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got a quick question about kibble, grooming, or puppy behavior? Ask our AI assistant below.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
           {/* Disclaimer Banner */}
           <div className="bg-orange-50 p-3 border-b border-orange-100 flex items-start gap-3">
             <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
             <p className="text-xs text-orange-800">
               <strong>Note:</strong> This AI provides general information only. It cannot diagnose medical conditions. In case of emergency, please visit a clinic immediately.
             </p>
           </div>

          {/* Chat History */}
          <div className="h-96 overflow-y-auto p-6 space-y-6 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-gray-200 ml-3' : 'bg-brand-teal mr-3'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-gray-600" /> : <Bot size={16} className="text-white" />}
                  </div>
                  <div className={`p-4 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-teal text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {status === LoadingState.LOADING && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2 bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm ml-11">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <form onSubmit={handleSubmit} className="flex items-center space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: How often should I bathe my puppy?"
                className="flex-1 border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal py-3 px-4 shadow-sm border"
              />
              <Button type="submit" disabled={status === LoadingState.LOADING} className="p-3 bg-brand-teal">
                <Send size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITownHall;