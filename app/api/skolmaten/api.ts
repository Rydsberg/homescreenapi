interface MealAttributes {
  attributes: string[];
  value: string;
}

// interface Meal {
//   meals: MealAttributes[];
//   month: number;
//   day: number;
//   year: number;
// }

interface NormalDay {
  meals: MealAttributes[];
  year: number;
  month: number;
  day: number;
}

interface NoMenuDay {
  reason: string;
  year: number;
  month: number;
  day: number;
}

type Day = NormalDay | NoMenuDay;

interface Station {
  name: string;
  district: District;
  imageURL: string;
  location: Location;
  urlName: string;
  id: number;
}

interface District {
  province: {
    urlName: string;
    id: number;
    name: string;
  };
  urlName: string;
  id: number;
  name: string;
}

interface Location {
  latitude: number;
  longitude: number;
}

interface Bulletin {
  text: string;
  id: number;
}

interface MenuResponse {
  menu: {
    isFeedbackAllowed: boolean;
    weeks: {
      days: Day[];
      weekOfYear: number;
      year: number;
    }[];
    station: Station;
  };
  id: number;
  bulletins: Bulletin[];
}

const entrypoint: string = "https://skolmaten.se/api/4/";
const headers: Record<string, string> = {
  "client-token": "lzsjjh3l5o4pnz265tqy",
  "client-version-token": "p1ksed0ntpvhqd54ktzn",
  "api-version": "4.0",
  locale: "sv_SE",
};

/**
 * Get menu for a school
 * @param {string} id The school id
 * @param {number} year The requested year
 * @param {number} week The requested week
 * @returns A structured response containing menu information
 */
export async function getMenu(id: string, year: number, week: number): Promise<MenuResponse> {
  const url: string = `${entrypoint}menu/?station=${id}&year=${year}&weekOfYear=${week}&count=1&attributes=false`;
  const response: Response = await fetch(url, {
    headers: headers,
  });

  if (!response.ok) {
    throw new Error(`${response.status}: ${JSON.stringify(await response.json())}`);
  }

  const data: MenuResponse = await response.json();
  return data;
}

/**
 * Get a sorted list of stations
 * @returns A sorted list of stations based on station names
 */
export async function getStations(): Promise<{ id: number; name: string; collection: string }[]> {
  const url: string = `${entrypoint}stations/index/`;
  const response: Response = await fetch(url, {
    headers: headers,
  });

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  const json: { n: string; s: { i: number; n: string }[] }[] = await response.json();
  const stationList: { id: number; name: string; collection: string }[] = [];

  for (const collection of json) {
    for (const station of collection.s) {
      stationList.push({ id: station.i, name: station.n, collection: collection.n });
    }
  }

  return stationList.sort((a, b) => (a.name > b.name ? 1 : -1));
}
