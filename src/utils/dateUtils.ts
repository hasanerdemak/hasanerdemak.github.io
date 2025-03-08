export const formatDateRange = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  return `${start.toLocaleDateString("en-US", options)} - ${
    endDate ? end.toLocaleDateString("en-US", options) : "Present"
  }`;
};
