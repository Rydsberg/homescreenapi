import { BaseAPI, BASE_PATH, Configuration, LocationsApi, StopAreasApi } from "./typescript-fetch-client";

class API extends BaseAPI {
  token() {
    return this.request({
      headers: {
        Authorization: `Basic ${process.env.VT_AUTHKEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      path: "/token",
      body: "grant_type=client_credentials",
    });
  }
}

async function getToken() {
  const resp = await new API(new Configuration({ basePath: "https://ext-api.vasttrafik.se" })).token();
  const json = await resp.json();
  return `Bearer ${json.access_token}`;
}

export async function GET() {
  const accessToken = await getToken();

  const api = new StopAreasApi(new Configuration({ accessToken }));

  const data = await api.stopAreasStopAreaGidDeparturesGet({
    stopAreaGid: "9021014017122000",
    timeSpanInMinutes: 1439,
  });

  const items = data.results?.map(item => ({
    direction: item.serviceJourney?.direction,
    line: item.serviceJourney?.line?.designation,
    background: item.serviceJourney?.line?.backgroundColor,
    wheelchair: item.serviceJourney?.line?.isWheelchairAccessible,
    time: item.plannedTime,
    platform: item.stopPoint.platform,
    estimatedTime: item.estimatedTime,
  }));

  return Response.json(items);
}
