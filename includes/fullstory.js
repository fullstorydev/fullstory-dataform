const elementDefinitionsUniqueColumns = [
  "id",
  "name",
  "description",
  "version",
  "state",
  "created_time",
  "created_by",
  "modified_time",
  "modified_by",
  "updated_time",
];

const eventDefinitionsUniqueColumns = [
  "id",
  "name",
  "description",
  "version",
  "state",
  "created_time",
  "created_by",
  "modified_time",
  "modified_by",
];

const eventsUniqueColumns = [
  "event_id",
  //"event_time",
  //"processed_time",
  //"updated_time",
  "device_id",
  "session_id",
  "view_id",
  "event_type",
  "event_properties",
  "source_type",
  "source_properties",
];

const pageDefinitonsUniqueColumns = [
  "id",
  "fs_link_id",
  "name",
  "description",
  "is_user_defined",
  "state",
  "created_time",
  "created_by",
  "modified_time",
  "modified_by",
];

const sessionsUniqueColumns = [
  "session_device_pk",
  "user_fk", // Unclear if this should be included
  "device_id",
  "session_id",
  "start_time",
  "end_time",
  "updated_time",
  "last_source_type",
  "last_email",
  "last_display_name",
  "last_user_agent",
  "last_device_type",
  "last_browser",
  "last_operating_system",
  "last_browser_version",
  "last_ip_address",
  "last_country",
  "last_region",
  "last_city",
  "last_lat_long",
];

const usersUniqueColumns = [
  "user_pk",
  "updated_time",
  "last_email",
  "last_display_name",
  "last_user_agent",
  "last_device_type",
  "last_operating_system",
  "last_browser",
  "last_browser_version",
  "last_ip_address",
  "last_country",
  "last_region",
  "last_city",
  "last_lat_long",
];

const minEventTime = "1900-01-01 00:00:00";

const eventTypes = [
  "background",
  "change",
  "click",
  "consent",
  "console_message",
  "copy",
  "crash",
  "cumulative_layout_shift",
  "custom",
  "element_seen",
  "exception",
  "first_input_delay",
  "form_abandon",
  "highlight",
  "identify",
  "keyboard_close",
  "keyboard_open",
  "load",
  "low_memory",
  "mouse_thrash",
  "navigate",
  "page_properties",
  "paste",
  "pinch_gesture",
  "request",
];

const replayHost = "app.fullstory.com";

function eventTotalsColumns() {
  return `${eventTypes.map(eventType => `base.total_${eventType}_events`).join(',\n')}`;
}

module.exports = {
  eventsUniqueColumns,
  eventTypes,
  minEventTime,
  replayHost,
  eventTotalsColumns,
};
