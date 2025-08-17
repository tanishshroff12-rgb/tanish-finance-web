"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BUSINESS_SECTORS } from "@/lib/sectors";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  location: z.string().min(2, "Enter your city or area"),
  sector: z.enum(BUSINESS_SECTORS),
  sectorOther: z.string().optional(),
  password: z.string().min(8, "Min 8 characters"),
}).refine(d => (d.sector === "Other" ? (d.sectorOther && d.sectorOther.length >= 2) : true), {
  message: "Please specify your sector",
  path: ["sectorOther"],
});
type FormValues = z.infer<typeof schema>;

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) });
  const sector = watch("sector");

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    if (res.ok) {
      window.location.href = "/thank-you";
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-3xl font-semibold mb-6">Create your account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6 rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input {...register("name")} className="mt-1 w-full rounded-xl border border-black/15 bg-cream px-3 py-2" />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" {...register("email")} className="mt-1 w-full rounded-xl border border-black/15 bg-cream px-3 py-2" />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input placeholder="City / Area" {...register("location")} className="mt-1 w-full rounded-xl border border-black/15 bg-cream px-3 py-2" />
          {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Business sector</label>
          <select {...register("sector")} className="mt-1 w-full rounded-xl border border-black/15 bg-cream px-3 py-2">
            {BUSINESS_SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.sector && <p className="text-red-600 text-sm mt-1">{errors.sector.message}</p>}
        </div>
        {sector === "Other" && (
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Tell us your sector</label>
            <input {...register("sectorOther")} className="mt-1 w-full rounded-xl border border-black/15 bg-cream px-3 py-2" />
            {errors.sectorOther && <p className="text-red-600 text-sm mt-1">{errors.sectorOther.message}</p>}
          </div>
        )}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Password</label>
          <input type="password" {...register("password")} className="mt-1 w-full rounded-xl border border-black/15 bg-cream px-3 py-2" />
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <div className="md:col-span-2">
          <button disabled={loading} className="w-full rounded-xl bg-ink px-4 py-3 text-cream shadow-soft disabled:opacity-60">
            {loading ? "Creating account..." : "Create account"}
          </button>
        </div>
      </form>
    </div>
  );
}
