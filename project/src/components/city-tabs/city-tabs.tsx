import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../store/offers-process/offers-process';
import { getSelectedCity } from '../../store/offers-process/offers-process-selectors';
import { Cities } from '../../const';
import cn from 'classnames';

function CityTabs(): JSX.Element {
  const selectedCity = useAppSelector(getSelectedCity);
  const dispatch = useAppDispatch();

  const onChangeCity = (city: typeof Cities[number]) => {
    dispatch(setCity({ targetCity: city }));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((city) => {
            const isActive = city === selectedCity;
            return (
              <li className="locations__item" key={city}>
                <a
                  onClick={(event) => {
                    event.preventDefault();
                    onChangeCity(city);
                  }}
                  className={cn('locations__item-link tabs__item', {
                    'tabs__item--active': isActive,
                  })}
                  href="/#"
                >
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default memo(CityTabs);
