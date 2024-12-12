"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LeaveDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Please enter a valid email.";
    if (!formData.phone.match(/^05\d{8}$/))
      newErrors.phone = "Please enter a valid Israeli phone number.";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      console.log("SUCCEED");
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form.");

      setSuccess(true);
      setFormData({ fullname: "", phone: "", email: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
      {success && <p className="text-green-600">Details submitted successfully!</p>}

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="fullname" className="text-right">
          Full Name
        </Label>
        <Input
          id="fullname"
          placeholder="Full Name"
          className="col-span-3"
          value={formData.fullname}
          onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
        />
        {errors.fullname && <p className="col-span-4 text-red-600">{errors.fullname}</p>}
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="text-right">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="example@example.com"
          className="col-span-3"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="col-span-4 text-red-600">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="phone" className="text-right">
          Phone
        </Label>
        <Input
          id="phone"
          placeholder="050..."
          className="col-span-3"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        {errors.phone && <p className="col-span-4 text-red-600">{errors.phone}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default LeaveDetailsForm;
