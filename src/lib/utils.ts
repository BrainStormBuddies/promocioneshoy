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
  const startDateObj = new Date(startDate);

  if (!endDate || endDate === startDate) {
    return formatDate(startDate);
  }

  const endDateObj = new Date(endDate);

  // Check if same year and month
  const sameYear = startDateObj.getFullYear() === endDateObj.getFullYear();
  const sameMonth = startDateObj.getMonth() === endDateObj.getMonth();

  if (sameYear && sameMonth) {
    // Same month and year: "06 al 08 de octubre de 2025"
    const startDay = startDateObj.getDate();
    const endDay = endDateObj.getDate();
    const month = endDateObj.toLocaleDateString("es-ES", { month: "long" });
    const year = endDateObj.getFullYear();

    return `${startDay} ${
      separator === "hasta" ? "al" : "-"
    } ${endDay} de ${month} de ${year}`;
  } else if (sameYear) {
    // Same year, different month: "25 de octubre al 3 de noviembre de 2025"
    const startDay = startDateObj.getDate();
    const startMonth = startDateObj.toLocaleDateString("es-ES", {
      month: "long",
    });
    const endDay = endDateObj.getDate();
    const endMonth = endDateObj.toLocaleDateString("es-ES", { month: "long" });
    const year = endDateObj.getFullYear();

    return `${startDay} de ${startMonth} ${
      separator === "hasta" ? "al" : "-"
    } ${endDay} de ${endMonth} de ${year}`;
  } else {
    // Different years: use full format for both dates
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    return `${formattedStartDate} ${separator} ${formattedEndDate}`;
  }
}
