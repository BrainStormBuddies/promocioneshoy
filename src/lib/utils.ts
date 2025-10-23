import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatPeriod(
  startDate: string,
  endDate?: string,
  separator: string = "hasta"
): string {
  const formattedStartDate = formatDate(startDate);

  if (!endDate || endDate === startDate) {
    return formattedStartDate;
  }

  const formattedEndDate = formatDate(endDate);
  return `${formattedStartDate} ${separator} ${formattedEndDate}`;
}
