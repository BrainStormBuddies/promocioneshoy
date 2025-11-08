import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const monthNames = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export function formatDate(dateString: string | null): string {
  if (!dateString) {
    return "";
  }
  const day = dateString.split("-")[2];
  const month = dateString.split("-")[1];
  const year = dateString.split("-")[0];
  return `${parseInt(day)} de ${monthNames[parseInt(month) - 1]} de ${year}`;
}

export function formatPeriod(
  startDate: string,
  endDate?: string,
  separator: string = "hasta"
): string {
  if (!endDate || endDate === startDate) {
    return formatDate(startDate);
  }

  // Check if same year and month
  const sameYear = startDate.split("-")[0] === endDate.split("-")[0];
  const sameMonth = startDate.split("-")[1] === endDate.split("-")[1];

  if (sameYear && sameMonth) {
    // Same month and year: "06 al 08 de octubre de 2025"
    const startDay = startDate.split("-")[2];
    const endDay = endDate.split("-")[2];
    const month = endDate.split("-")[1];

    const year = endDate.split("-")[0];
    return `${startDay} ${separator === "hasta" ? "al" : "-"} ${endDay} de ${
      monthNames[parseInt(month) - 1]
    } de ${year}`;
  } else if (sameYear) {
    // Same year, different month: "25 de octubre al 3 de noviembre de 2025"
    const startDay = startDate.split("-")[2];
    const startMonth = startDate.split("-")[1];
    const startMonthName = monthNames[parseInt(startMonth) - 1];
    const endDay = endDate.split("-")[2];
    const endMonth = endDate.split("-")[1];
    const endMonthName = monthNames[parseInt(endMonth) - 1];
    const year = endDate.split("-")[0];

    return `${startDay} de ${startMonthName} ${
      separator === "hasta" ? "al" : "-"
    } ${endDay} de ${endMonthName} de ${year}`;
  } else {
    // Different years: use full format for both dates
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    return `${formattedStartDate} ${separator} ${formattedEndDate}`;
  }
}
