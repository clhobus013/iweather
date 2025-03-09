import { render, screen } from "@testing-library/react-native"
import { NextDays } from "@components/NextDays"
import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
    it("should be render day", () => {
        render(
            <NextDays
                data={[
                    { day: '09/03', min: '20c', max: '25c', weather: 'Ensolarado', icon: clearDay },
                    { day: '10/03', min: '21c', max: '26c', weather: 'Ceu limpo', icon: clearDay },
                    { day: '11/03', min: '22c', max: '27c', weather: 'Ensolarado', icon: clearDay },
                    { day: '12/03', min: '23c', max: '28c', weather: 'Nublado', icon: clearDay },
                    { day: '13/03', min: '24c', max: '29c', weather: 'Ensolarado', icon: clearDay },
                ]}            
            />
        );

        expect(screen.getByText('11/03')).toBeTruthy();
    });
});