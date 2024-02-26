## Стек

```yaml
stack:
	- DB:  'SQLite3'  # Multiple tables per data source (ALPR, axle count, class, RFID, etc.)
	- API: 'Directus' # REST/GraphQL API layer (access level, write & read data into DB)
	- UI:  'DataGrid' # Reports with dynamic columns (from columns of joined DB tables)
```

#### DB: общая структура основных таблиц<br/>(источники: ALPR, axle count, class, RFID, etc.)

```yaml
tables:
	- id
	- timestamp # по этому полю будет происходить "full join" таблиц (с динамическим параметром "tolerance")
	- col_X     # Различные для каждого источника аттрибуты:
	- ...
	- col_N     # ('alpr', 'axle_count', 'class', 'rfid', etc.)
	- img_path  # Путь до картинок
	            # ? D каком виде предоставляются картинки, как они привязываются к записям в таблице?
```

#### API: основной функционал

```yaml
api:
	- Запись/Вывод данныхх из базы.
	- Объединение таблиц по timestamp и формирование итоговой таблицы.
	- Контроль доступа
```