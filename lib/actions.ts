"use server";

import { z } from "zod";
import {prisma} from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Validasi data
const ContactSchema = z.object({
    name: z.string().min(6),
    phone: z.string().min(12)
});


// Simpan data
export const saveContact = async (prevState: any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedFields.success){
        return{
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    
    // simpan ke database
    try {
        await prisma.contact.create({
            data: {
                name: validatedFields.data.name,
                phone: validatedFields.data.phone
            }
        })
    } catch (error) {
        return {message: "Failed to create contact"}
    }

    revalidatePath("/contacts");
    redirect("/contacts");
};

// Ubah data
export const updateContact = async (id:string, prevState: any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedFields.success){
        return{
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    
    // ubah data yang ada di database
    try {
        await prisma.contact.update({
            data: {
                name: validatedFields.data.name,
                phone: validatedFields.data.phone
            },
            where: {id}
        })
    } catch (error) {
        return {message: "Failed to update contact"}
    }

    revalidatePath("/contacts");
    redirect("/contacts");
};

// Hapus data
export const deleteContact = async (id:string) => {
    // hapus data yang ada di database
    try {
        await prisma.contact.delete({
            where: {id}
        });
    } catch (error) {
        console.error("deleteContact error:", error);
        return {message: "Failed to delete contact"}
    }

    revalidatePath("/contacts");
}
