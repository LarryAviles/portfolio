import { languages } from "@/i18n/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";

interface LanguagePickerProps {
  currentLang: string;
  languageLabel: string;
}

export function LanguagePicker({ currentLang, languageLabel }: LanguagePickerProps) {
  const handleLanguageChange = (newLang: string) => {
    const currentPath = window.location.pathname;
    
    // Eliminar el prefijo de idioma actual si existe
    const pathWithoutLang = currentPath.replace(/^\/(es|en)/, '') || '/';
    
    // Construir la nueva URL
    const newPath = newLang === 'es' 
      ? pathWithoutLang 
      : `/${newLang}${pathWithoutLang}`;
    
    window.location.href = newPath;
  };

  return (
    <Select value={currentLang} onValueChange={handleLanguageChange} >
      <SelectTrigger aria-label={languageLabel}>
        <Languages />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="es">
          {languages.es}
        </SelectItem>
        <SelectItem value="en">
          {languages.en}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
