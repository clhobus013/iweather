import { Day } from "@components/Day";

import clearDay from "@assets/clear_day.svg";
import { render, screen } from "@testing-library/react-native";

describe("Component: Day", () => {
    it("should be render day", () => {
        render(
            <Day
                data={{
                    day: '10/03',
                    min: '20c',
                    max: '25c',
                    weather: 'Ensolarado',
                    icon: clearDay
                }}
            />
        );

        expect(screen.getByText('10/03')).toBeTruthy();        
    });
});