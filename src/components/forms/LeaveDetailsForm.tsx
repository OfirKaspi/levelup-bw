"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const LeaveDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    option: "",
    newsletter: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [responseError, setResponseError] = useState<string | null>(null);

  const data = {
    _id: "1",
    header: "נעים להכיר!",
    desc: "השאירו פרטים לשיחת ייעוץ בחינם - תספרו לנו מה העסק שלכם צריך ותקבלו טיפים שתוכלו ליישם מיד",
    buttonText: "לחץ כאן לשליחה",
    loadingButtonText: "שולח...",
    success: {
      header: "הפרטים התקבלו בהצלחה!",
      desc: "תודה על הפנייה 🙌 אחד מאנשי הצוות שלנו יצור איתך קשר תוך 24 שעות.",
    }    
  };

  const { buttonText, desc, header, loadingButtonText, success } = data;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) newErrors.fullName = "נדרש שם מלא";
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
    setResponseError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result?.message || "Unknown error");

      setIsSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        option: "",
        newsletter: true,
      });
    } catch (error) {
      console.error(error);
      setResponseError("אופס, משהו קרה. אנא נסה שנית.");
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <DialogHeader>
          <DialogTitle className="text-green-700 text-2xl">
            {success.header}
          </DialogTitle>
          <DialogDescription className="text-gray-700 text-lg">
            {success.desc}
          </DialogDescription>
        </DialogHeader>
      </div>
    );
  }

  return (
    <>
      <DialogHeader className="relative">
        <DialogTitle>{header}</DialogTitle>
        <DialogDescription>{desc}</DialogDescription>
      </DialogHeader>

      <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
        {responseError && <p className="text-red-600">{responseError}</p>}

        <div className="grid grid-cols-4 items-center gap-2">
          <Label htmlFor="fullName">שם מלא</Label>
          <Input
            id="fullName"
            placeholder="ישראל ישראלי"
            className="col-span-3"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
          {errors.fullName && (
            <p className="col-span-4 text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div className="grid grid-cols-4 items-center gap-2">
          <Label htmlFor="email">אימייל</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@example.com"
            className="col-span-3"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="col-span-4 text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="grid grid-cols-4 items-center gap-2">
          <Label htmlFor="phone">טלפון</Label>
          <Input
            id="phone"
            type="text"
            placeholder="********05"
            className="col-span-3"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          {errors.phone && (
            <p className="col-span-4 text-red-600">{errors.phone}</p>
          )}
        </div>

        <div className="grid grid-cols-4 items-center gap-2">
          <Label htmlFor="option">סוג שירות</Label>
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, option: value })
            }
            value={formData.option}
            dir="rtl"
          >
            <SelectTrigger className="col-span-3">
              <SelectValue placeholder="בחר שירות" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="פיתוח אתרים">מחלקת פיתוח אתרים</SelectItem>
              <SelectItem value="עיצוב">מחלקת עיצוב</SelectItem>
              <SelectItem value="שיווק">מחלקת שיווק</SelectItem>
            </SelectContent>
          </Select>
          {errors.option && (
            <p className="col-span-4 text-red-600">{errors.option}</p>
          )}
        </div>

        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Checkbox
            id="newsletter"
            checked={formData.newsletter}
            onChange={(e) =>
              setFormData({ ...formData, newsletter: e.target.checked })
            }
          />
          <Label htmlFor="newsletter">
            קבל עדכונים והצעות מהסוכנות שלנו ישירות למייל
          </Label>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? loadingButtonText : buttonText}
        </Button>
      </form>
    </>
  );
};

export default LeaveDetailsForm;