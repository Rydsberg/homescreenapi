import quotes from "./quotes";

export function GET() {
  const now = new Date();
  const day = Math.floor(now.getTime() / 8.64e7);
  const dayMonth = `${now.getDate()}/${now.getMonth() + 1}`;
  let quote = quotes[day % quotes.length];

  switch (dayMonth) {
    case "4/4":
      quote = "May the fourth be with you!";
      break;
    case "7/4":
      quote = "Grattis Maja!";
      break;
    case "24/12":
      quote = "God jul!";
      break;
    case "1/1":
      quote = "Gott nytt år!";
      break;
    case "14/3":
      quote = "3,14159265358979...";
      break;
    case "23/11":
      quote = "0 1 1 2 3 5 8 13 21 34...";
      break;
  }

  return new Response(quote);
}

export const dynamic = 'force-dynamic'