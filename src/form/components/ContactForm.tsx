import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { actions } from "astro:actions";
import { X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ContactFormCardProps {
  subTitle: string;
  buttonText: string;
  placeHolder: string;
  message: string;
  description: string;
  label: string;
  form: any;
}

const handleConfetti = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti({
      ...defaults,
      colors: ["#42C337", "#00A2F5"],
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      colors: ["#42C337", "#00A2F5"],
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};

export function ContactFormCard({
  subTitle,
  buttonText,
  placeHolder,
  message,
  description,
  label,
  form,
}: ContactFormCardProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [showMessage, setShowMessage] = useState(false);
  const [showDuplicatedMessage, setShowDuplicatedMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getTheme = () => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme as "light" | "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    setTheme(getTheme());

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Funcionalidad para el envío del formulario al action de Astro
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const messageText = formData.get("message") as string;

    try {
      const data = await actions.contactForm({
        email,
        message: messageText,
      });

      if (data.data?.duplicated) {
        setShowDuplicatedMessage(true);
        setTimeout(() => setShowDuplicatedMessage(false), 5000);
        return;
      }
      if (data.data?.error) {
        setShowErrorMessage(true);
        setTimeout(() => setShowErrorMessage(false), 5000);
        return;
      }
      if (data.data?.success) {
        handleConfetti();
        setShowMessage(true);
        form.reset();
        setTimeout(() => setShowMessage(false), 10000);
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const gradientColor = theme === "dark" ? "#00A2F570" : "#00A2F515";
  return (
    <Card className="w-full border-none p-0 shadow-none">
      <MagicCard
        gradientColor={gradientColor}
        gradientSize={350}
        gradientFrom="#42C337"
        gradientTo="#00A2F5"
        className="py-10 rounded-md"
      >
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">{subTitle}</CardTitle>
          <CardDescription className="text-md">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <p className="text-sm opacity-50">{label}</p>
              <Input
                id="email"
                type="email"
                name="email"
                className="mb-3 mt-0.5"
                placeholder={placeHolder}
                required
                disabled={isSubmitting}
              />
              <Textarea
                id="message"
                name="message"
                className="mb-5 mt-0.5"
                placeholder={message}
                disabled={isSubmitting}
              />

              <RainbowButton type="submit" disabled={isSubmitting}>
                <span className="text-white dark:text-black">
                  {isSubmitting ? "Enviando..." : buttonText}
                </span>
              </RainbowButton>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          {showMessage && (
            <div className="mt-1 text-sm opacity-60">{form.success}</div>
          )}
          {showDuplicatedMessage && (
            <div className="flex items-center text-destructive">
              <X className="size-4 lg:size-6" />
              <div className="mt-1 text-sm opacity-60">{form.duplicate}</div>
            </div>
          )}
          {showErrorMessage && (
            <div className="flex items-center text-destructive">
              <div className="mt-1 text-sm opacity-60">{form.error}</div>
            </div>
          )}
        </CardFooter>
      </MagicCard>
    </Card>
  );
}
