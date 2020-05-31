# Database Schema

## `item`
| column_name | data_type | details  |
| ----------- | --------- | -------- |
| center_id   | integer   | not null |
| name        | string    | not null |

## `location`
| column_name  | data_type | details  |
| ------------ | --------- | -------- |
| center_id    | integer   | not null |
| name         | string    | not null |
| svg_id       | string    | not null |
| parent_id    | integer   |          | 

## `item_location`
| column_name | data_type | details           |
| ----------- | --------- | ----------------- |
| center_id    | integer  | not null          |
| item_id     | integer   | not null, indexed |
| location_id | integer   | not null, indexed |

## `docs`
| column_name  | data_type | details  |
| ------------ | --------- | -------- |
| center_id    | integer   | not null |
| title        | string    | not null |
| doc_url      | string    | not null |

## `item_docs`
| column_name  | data_type | details  |
| ------------ | --------- | -------- |
| center_id    | integer   | not null |
| item_id      | integer   | not null |
| doc_id       | integer   | not null |

## `videos`
| column_name  | data_type | details  |
| ------------ | --------- | -------- |
| center_id    | integer   | not null |
| title        | string    | not null |
| video_url    | string    | not null |

## `item_videos`
| column_name  | data_type | details  |
| ------------ | --------- | -------- |
| center_id    | integer   | not null |
| item_id      | integer   | not null |
| video_id     | integer   | not null |

## `user`
| column_name  | data_type | details  |
| ------------ | --------- | -------- |
| center_id    | integer   | not null |
| login        | string    | not null |
| password     | string    |          |
| admin        | integer   |          |
| superadmin   | integer   |          |

## `center`
| column_name  | data_type | details  |
| ------------ | --------- | -------- |
| name         | string    | not null |