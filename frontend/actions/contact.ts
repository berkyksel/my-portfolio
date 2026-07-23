"use server";

import { prisma } from "@/lib/prisma";

export async function sendMessage(formData: FormData) {
    try {
        // Formdan gelen verileri alıyoruz
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        // Basit bir doğrulama
        if (!name || !email || !message) {
            return { success: false, error: "Lütfen tüm alanları doldurun." };
        }

        // Prisma ile veritabanına kayıt yapıyoruz
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