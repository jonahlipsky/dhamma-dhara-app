# Database Schema

## `item`

| column_name | data_type | details  |
| ----------- | --------- | -------- |
| name        | string    | not null |

## `location`
| column_name  | data_type | details  |
| ------------ | --------- | -------- |
| name         | string    | not null |
| svg_id       | string    | not null | 

## `item_location`
| column_name | data_type | details           |
| ----------- | --------- | ----------------- |
| item_id     | integer   | not null, indexed |
| location_id | integer   | not null, indexed |