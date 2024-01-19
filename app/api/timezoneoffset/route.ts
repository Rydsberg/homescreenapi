export async function GET(req: Request) {
  const timezoneName = new URL(req.url).searchParams.get('tz');
  if (!timezoneName) {
    return Response.json({ error: "Missing timezone name" }, { status: 400 });
  }
  const date = Intl.DateTimeFormat([], { timeZone: timezoneName, timeZoneName: "shortOffset" });
  return Response.json({ offset: +date.format(new Date()).split(' ')[1].slice(3) });
}
