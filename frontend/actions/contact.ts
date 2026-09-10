"use server";

import { prisma } from "@/lib/prisma";

export async function sendMessage(formData: FormData) {
    try {
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim().toLowerCase();
        const message = String(formData.get("message") ?? "").trim();

        // Basit bir doğrulama
        if (!name || !email || !message || name.length > 100 || message.length > 5000) {
            return { success: false, error: "Lütfen tüm alanları doldurun." };
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return { success: false, error: "Geçerli bir e-posta adresi girin." };
        }

        await prisma.message.create({
            data: {
                name,
                email,
                message,
            },
        });

        return { success: true };
    } catch (error) {
        console.error("Mesaj kaydetme hatası:", error);
        return { success: false, error: "Sunucu tarafında bir hata oluştu." };
    }
}