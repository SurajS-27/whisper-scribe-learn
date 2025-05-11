
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <ToggleGroup type="single" value={theme} onValueChange={(value) => {
      if (value) setTheme(value as "light" | "dark" | "system");
    }}>
      <ToggleGroupItem value="light" aria-label="Light mode">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center">
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Light</p>
          </TooltipContent>
        </Tooltip>
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark mode">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center">
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Dark</p>
          </TooltipContent>
        </Tooltip>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function ThemeToggleSimple() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
