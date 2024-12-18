"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LeaveDetailsFormProps {
  buttonText: string;
  loadingButtonText: string;
  successText: string;
}

const LeaveDetailsForm = ({
  buttonText,
  successText,
  loadingButtonText,
}: LeaveDetailsFormProps) => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    option: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullname.trim()) newErrors.fullname = "נדרש שם מלא";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "אנא מלא כתובת אימייל תקינה";
    if (!formData.phone.match(/^05\d{8}$/))
      newErrors.phone = "אנא מלא מספר טלפון תקין";
    if (!formData.option) newErrors.option = "אנא בחר סוג שירות";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form.");

      setSuccess(true);
      setFormData({ fullname: "", phone: "", email: "", option: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
      {success && <p className="text-green-600">{successText}</p>}
      <div className="grid grid-cols-4 items-center gap-2">
        <Label htmlFor="fullname">שם מלא</Label>
        <Input
          id="fullname"
          placeholder="ישראל ישראלי"
          className="col-span-3"
          value={formData.fullname}
          onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
        />
        {errors.fullname && <p className="col-span-4 text-red-600">{errors.fullname}</p>}
      </div>

      <div className="grid grid-cols-4 items-center gap-2">
        <Label htmlFor="email">אימייל</Label>
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

      <div className="grid grid-cols-4 items-center gap-2">
        <Label htmlFor="phone">טלפון</Label>
        <Input
          id="phone"
          type="text"
          placeholder="********05"
          className="col-span-3"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        {errors.phone && <p className="col-span-4 text-red-600">{errors.phone}</p>}
      </div>

      <div className="grid grid-cols-4 items-center gap-2">
        <Label htmlFor="option">סוג שירות</Label>
        <Select
          onValueChange={(value) => setFormData({ ...formData, option: value })}
          value={formData.option}
          dir="rtl"
        >
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="בחר שירות" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">מחלקת פיתוח אתרים</SelectItem>
            <SelectItem value="option2">מחלקת עיצוב</SelectItem>
            <SelectItem value="option3">מחלקת שיווק</SelectItem>
          </SelectContent>
        </Select>
        {errors.option && <p className="col-span-4 text-red-600">{errors.option}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? loadingButtonText : buttonText}
      </Button>
    </form>
  );
};

export default LeaveDetailsForm;
