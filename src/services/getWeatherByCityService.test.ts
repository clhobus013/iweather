import { mockWeatherAPIResponse } from "@__tests__/mocks/mockWeatherAPIResponse";
import { api } from "./api";
import { getWeatherByCityService } from "./getWeatherByCityService";

describe("Service: getWeatherByCityService", () => {
  it("should return weather api data formated", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse});

    const response = await getWeatherByCityService({ latitude: 123, longitude: 456 });

    expect(response).toHaveProperty("today");
  })
});