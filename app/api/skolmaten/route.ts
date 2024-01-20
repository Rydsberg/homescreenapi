import { getMenu } from "./api";

function getWeek(date: Date) {
  var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)).getTime();
  return Math.ceil(((d.getTime() - yearStart) / 86400000 + 1) / 7);
}
const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get("id") ?? "6561775671574528";
  if (!id) {
    return Response.json({ error: "Missing school id" }, { status: 400 });
  }
  const now = new Date();
  const { days } = (await getMenu(+id, now.getFullYear(), getWeek(now))).menu.weeks[0];
  const data = days.map(day => {
    const isoDateStrForDay = `${day.year}-${day.month}-${day.day}`;
    const date = new Date(isoDateStrForDay);
    return {
      title: weekdays[date.getDay() - 1],
      subtitle: `${day.day}/${day.month}`,
      text: day.meals.map(meal => meal.value).join("\n"),
    };
  });
  return Response.json(data);
}

export type SkolmatenType = { title: string; subtitle: string; text: string }[];

export const dynamic = "force-dynamic";
