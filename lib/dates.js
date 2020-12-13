import { format } from "date-fns";

export function postDate(dateString) {
  return format(new Date(dateString), "MMMM dd, yyyy");
}
