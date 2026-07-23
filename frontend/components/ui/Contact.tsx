"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { sendMessage } from "@/actions/contact";

export default function Contact() {
    const [isPending, setIsPending] = useState(false);
    const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);

    async function clientAction(formData: FormData) {
        setIsPending(true);
        setStatus(null);

        // Server Action fonksiyonumuzu çağırıyoruz
        const result = await sendMessage(formData);

        setStatus(result);
        setIsPending(false);

        // Eğer başarılıysa formu temizleyebiliriz
        if (result.success) {
            const form = document.getElementById("contactForm") as HTMLFormElement;
            if (form) form.reset();
        }
    }

    return (
        <section id="contact" className="max-w-4xl mx-auto px-8 py-24 min-h-screen flex flex-col justify-center text-center">
            <div className="space-y-4 mb-12">
                <p className="text-blue-500 font-mono text-sm">05. Sırada Ne Var?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">İletişime Geçin</h2>
                <p className="text-slate-400 text-md max-w-lg mx-auto">
                    Yeni fırsatlara, işbirliklerine veya sadece tanışmak için atacağınız mesajlara her zaman açığım. Formu doldurarak bana doğrudan ulaşabilirsiniz!
                </p>
            </div>

            <div className="bg-[#0d1117] border border-slate-800 rounded-2xl p-8 max-w-xl mx-auto w-full shadow-xl">
                {/* onSubmit yerine action özelliğini kullanıyoruz */}
                <form id="contactForm" action={clientAction} className="space-y-6 text-left">
                    <div>
                        <label className="block text-slate-300 text-sm font-mono mb-2" htmlFor="name">Ad Soyad</label>
                        <input
                            type="text"
                            id="name"
                            name="name" // name özelliği Form verisi almak için şart
                            placeholder="Adınızı yazın"
                            className="w-full bg-[#161b22] border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-slate-300 text-sm font-mono mb-2" htmlFor="email">E-posta Adresi</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-posta adresinizi girin"
                            className="w-full bg-[#161b22] border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-slate-300 text-sm font-mono mb-2" htmlFor="message">Mesajınız</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Mesajınızı buraya yazabilirsiniz..."
                            className="w-full bg-[#161b22] border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                            required
                        ></textarea>
                    </div>

                    {/* Durum Mesajları */}
                    {status?.error && (
                        <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-md border border-red-900/50">
                            {status.error}
                        </div>
                    )}
                    {status?.success && (
                        <div className="text-green-400 text-sm bg-green-900/20 p-3 rounded-md border border-green-900/50">
                            Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-800 disabled:text-slate-400 text-white py-6 rounded-lg text-md font-medium transition-colors"
                    >
                        {isPending ? "Gönderiliyor..." : "Mesaj Gönder"}
                    </Button>
                </form>
            </div>
        </section>
    );
}