import { formatDistance } from "date-fns";

export const dateFormat = (date: string) => {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true
  })
};