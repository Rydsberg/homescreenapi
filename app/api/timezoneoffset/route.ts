export async function GET(req: Request) {
  const timezoneName = new URL(req.url).searchParams.get('tz') ?? 'Europe/Stockholm';
  if (!timezoneName) {
    return Response.json({ error: "Missing timezone name" }, { status: 400 });
  }
  const date = Intl.DateTimeFormat([], { timeZone: timezoneName, timeZoneName: "shortOffset" });
  return Response.json({ offset: +date.format(new Date()).split(' ')[1].slice(3) });
}

export const dynamic = 'force-dynamic'