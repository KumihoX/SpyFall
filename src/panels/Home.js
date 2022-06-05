import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, List } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Список локаций</PanelHeader>
		{fetchedUser &&
		<Group>
			<List>
				<Cell>
					База террористов
				</Cell>
				<Cell>
					Банк
				</Cell>
				<Cell>
					Больница
				</Cell>
				<Cell>
					Воинская часть
				</Cell>
				<Cell>
					Войско крестоносцев
				</Cell>
				<Cell>
					Казино
				</Cell>
				<Cell>
					Киностудия
				</Cell>
				<Cell>
					Корпоративная вечеринка
				</Cell>
				<Cell>
					Овощебаза
				</Cell>
				<Cell>
					Океанский лайнер
				</Cell>
				<Cell>
					Орбитальная станция
				</Cell>
				<Cell>
					Отель
				</Cell>
				<Cell>
					Партизанский отряд
				</Cell>
				<Cell>
					Пассажирский поезд
				</Cell>
				<Cell>
					Пиратский корабль
				</Cell>
				<Cell>
					Пляж
				</Cell>
				<Cell>
					Подводная лодка
				</Cell>
				<Cell>
					Полицейский участок
				</Cell>
				<Cell>
					Полярная станция
				</Cell>
				<Cell>
					Посольство
				</Cell>
				<Cell>
					Ресторан
				</Cell>
				<Cell>
					Самолет
				</Cell>
				<Cell>
					Спа-салон
				</Cell>
				<Cell>
					Станция 
				</Cell>
				<Cell>
					Станция техобслуживания
				</Cell>
				<Cell>
					Супермаркет
				</Cell>
				<Cell>
					Театр 
				</Cell>
				<Cell>
					Университет 
				</Cell>
				<Cell>
					Церковь 
				</Cell>
				<Cell>
					Цирк-шапито 
				</Cell>
				<Cell>
					Школа 
				</Cell>
			</List>
		</Group>}
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
