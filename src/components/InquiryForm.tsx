import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface FormState {
  buyer_name: string;
  company: string;
  contact: string;
  message: string;
}

const empty: FormState = { buyer_name: '', company: '', contact: '', message: '' };

const InquiryForm = () => {
  const [form, setForm] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const { error } = await supabase.from('inquiries').insert([form]);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setForm(empty);
    }
    setSubmitting(false);
  };

  if (success) {
    return (
      <div className="rounded-xl border border-status-green/30 bg-status-green/10 p-6 text-center space-y-2">
        <p className="text-status-green font-semibold">Inquiry sent!</p>
        <p className="text-sm text-muted-foreground">We'll be in touch via email or WeChat shortly.</p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-2 text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Name</label>
          <input
            name="buyer_name"
            value={form.buyer_name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Company</label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            placeholder="Company name"
            className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Email or WeChat ID</label>
        <input
          name="contact"
          value={form.contact}
          onChange={handleChange}
          required
          placeholder="email@company.com or WeChat ID"
          className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Products you're interested in, quantities, any other details..."
          className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-input text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-status-red">Failed to submit: {error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-2.5 bg-accent text-accent-foreground font-medium rounded-lg text-sm hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150"
      >
        {submitting ? 'Sending…' : 'Send Inquiry'}
      </button>
    </form>
  );
};

export default InquiryForm;
