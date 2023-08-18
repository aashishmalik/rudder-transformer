const tracksConfig = {
    input: {
        destination: {
            Config: {
                jsonPaths: " testMap.nestedMap, testArray, context.ctestMap.cnestedMap"
            }
        },
        message: {
            anonymousId: "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
            channel: "web",
            context: {
                app: {
                    build: "1.0.0",
                    name: "RudderLabs JavaScript SDK",
                    namespace: "com.rudderlabs.javascript",
                    version: "1.0.5"
                },
                ip: "0.0.0.0",
                library: {
                    name: "RudderLabs JavaScript SDK",
                    version: "1.0.5"
                },
                locale: "en-GB",
                os: {
                    name: "",
                    version: ""
                },
                screen: {
                    density: 2
                },
                traits: {
                    city: "Disney",
                    country: "USA",
                    email: "mickey@disney.com",
                    firstname: "Mickey"
                },
                ctestMap: {
                    cnestedMap: {
                        n1: "context nested prop 1"
                    }
                },
                userAgent:
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
            },
            event: "groups",
            integrations: {
                All: true,
                RS: {
                    options: {
                        skipTracksTable: true,
                        skipReservedKeywordsEscaping: true,
                        useBlendoCasing: true
                    }
                },
                SNOWFLAKE: {
                    options: {
                        skipTracksTable: true,
                        useBlendoCasing: true,
                        jsonPaths: ["tMap"]
                    }
                },
                S3_DATALAKE: {
                    options: {
                        skipReservedKeywordsEscaping: true
                    }
                },
                BQ: {
                    options: {
                        jsonPaths: ["tMap"]
                    }
                }
            },
            messageId: "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
            originalTimestamp: "2020-01-24T06:29:02.364Z",
            properties: {
                currency: "USD",
                revenue: 50,
                "path to $1,000,000": "None",
                "9omega": true,
                camelCase123Key: "camel case",
                testMap: {
                    nestedMap: {
                        n1: "nested prop 1"
                    }
                },
                tMap: {
                    t1: 10,
                    t2: 20
                },
                testArray: ["This is", "an", "array"]
            },
            receivedAt: "2020-01-24T11:59:02.403+05:30",
            request_ip: "[::1]:53708",
            sentAt: "2020-01-24T06:29:02.364Z",
            timestamp: "2020-01-24T11:59:02.403+05:30",
            type: "track",
            userId: "9bb5d4c2-a7aa-4a36-9efb-dd2b1aec5d33"
        },
        request: {
            query: {
                whSchemaVersion: "v1"
            }
        }
    },
    output: {
        default: [
            {
                "data": {
                    "anonymous_id": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
                    "channel": "web",
                    "context_app_build": "1.0.0",
                    "context_app_name": "RudderLabs JavaScript SDK",
                    "context_app_namespace": "com.rudderlabs.javascript",
                    "context_app_version": "1.0.5",
                    "context_ctest_map_cnested_map_n_1": "context nested prop 1",
                    "context_ip": "0.0.0.0",
                    "context_library_name": "RudderLabs JavaScript SDK",
                    "context_library_version": "1.0.5",
                    "context_locale": "en-GB",
                    "context_passed_ip": "0.0.0.0",
                    "context_request_ip": "[::1]:53708",
                    "context_screen_density": 2,
                    "context_traits_city": "Disney",
                    "context_traits_country": "USA",
                    "context_traits_email": "mickey@disney.com",
                    "context_traits_firstname": "Mickey",
                    "context_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "event": "groups",
                    "event_text": "groups",
                    "id": "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
                    "original_timestamp": "2020-01-24T06:29:02.364Z",
                    "received_at": "2020-01-24T06:29:02.403Z",
                    "sent_at": "2020-01-24T06:29:02.364Z",
                    "timestamp": "2020-01-24T06:29:02.403Z",
                    "user_id": "9bb5d4c2-a7aa-4a36-9efb-dd2b1aec5d33"
                },
                "metadata": {
                    "columns": {
                        "anonymous_id": "string",
                        "channel": "string",
                        "context_app_build": "string",
                        "context_app_name": "string",
                        "context_app_namespace": "string",
                        "context_app_version": "string",
                        "context_ctest_map_cnested_map_n_1": "string",
                        "context_ip": "string",
                        "context_library_name": "string",
                        "context_library_version": "string",
                        "context_locale": "string",
                        "context_passed_ip": "string",
                        "context_request_ip": "string",
                        "context_screen_density": "int",
                        "context_traits_city": "string",
                        "context_traits_country": "string",
                        "context_traits_email": "string",
                        "context_traits_firstname": "string",
                        "context_user_agent": "string",
                        "event": "string",
                        "event_text": "string",
                        "id": "string",
                        "original_timestamp": "datetime",
                        "received_at": "datetime",
                        "sent_at": "datetime",
                        "timestamp": "datetime",
                        "user_id": "string",
                        "uuid_ts": "datetime"
                    },
                    "receivedAt": "2020-01-24T11:59:02.403+05:30",
                    "table": "tracks"
                }
            },
            {
                "data": {
                    "_9_omega": true,
                    "anonymous_id": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
                    "camel_case_123_key": "camel case",
                    "channel": "web",
                    "context_app_build": "1.0.0",
                    "context_app_name": "RudderLabs JavaScript SDK",
                    "context_app_namespace": "com.rudderlabs.javascript",
                    "context_app_version": "1.0.5",
                    "context_ctest_map_cnested_map_n_1": "context nested prop 1",
                    "context_ip": "0.0.0.0",
                    "context_library_name": "RudderLabs JavaScript SDK",
                    "context_library_version": "1.0.5",
                    "context_locale": "en-GB",
                    "context_passed_ip": "0.0.0.0",
                    "context_request_ip": "[::1]:53708",
                    "context_screen_density": 2,
                    "context_traits_city": "Disney",
                    "context_traits_country": "USA",
                    "context_traits_email": "mickey@disney.com",
                    "context_traits_firstname": "Mickey",
                    "context_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "currency": "USD",
                    "event": "groups",
                    "event_text": "groups",
                    "id": "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
                    "original_timestamp": "2020-01-24T06:29:02.364Z",
                    "path_to_1_000_000": "None",
                    "received_at": "2020-01-24T06:29:02.403Z",
                    "revenue": 50,
                    "sent_at": "2020-01-24T06:29:02.364Z",
                    "t_map_t_1": 10,
                    "t_map_t_2": 20,
                    "test_array": [
                        "This is",
                        "an",
                        "array"
                    ],
                    "test_map_nested_map_n_1": "nested prop 1",
                    "timestamp": "2020-01-24T06:29:02.403Z",
                    "user_id": "9bb5d4c2-a7aa-4a36-9efb-dd2b1aec5d33"
                },
                "metadata": {
                    "columns": {
                        "_9_omega": "boolean",
                        "anonymous_id": "string",
                        "camel_case_123_key": "string",
                        "channel": "string",
                        "context_app_build": "string",
                        "context_app_name": "string",
                        "context_app_namespace": "string",
                        "context_app_version": "string",
                        "context_ctest_map_cnested_map_n_1": "string",
                        "context_ip": "string",
                        "context_library_name": "string",
                        "context_library_version": "string",
                        "context_locale": "string",
                        "context_passed_ip": "string",
                        "context_request_ip": "string",
                        "context_screen_density": "int",
                        "context_traits_city": "string",
                        "context_traits_country": "string",
                        "context_traits_email": "string",
                        "context_traits_firstname": "string",
                        "context_user_agent": "string",
                        "currency": "string",
                        "event": "string",
                        "event_text": "string",
                        "id": "string",
                        "original_timestamp": "datetime",
                        "path_to_1_000_000": "string",
                        "received_at": "datetime",
                        "revenue": "int",
                        "sent_at": "datetime",
                        "t_map_t_1": "int",
                        "t_map_t_2": "int",
                        "test_array": "string",
                        "test_map_nested_map_n_1": "string",
                        "timestamp": "datetime",
                        "user_id": "string",
                        "uuid_ts": "datetime"
                    },
                    "receivedAt": "2020-01-24T11:59:02.403+05:30",
                    "table": "_groups"
                }
            }
        ],
        rs: [
            {
                "data": {
                    "_9omega": true,
                    "anonymous_id": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
                    "camelcase123key": "camel case",
                    "channel": "web",
                    "context_app_build": "1.0.0",
                    "context_app_name": "RudderLabs JavaScript SDK",
                    "context_app_namespace": "com.rudderlabs.javascript",
                    "context_app_version": "1.0.5",
                    "context_ctestmap_cnestedmap": "{\"n1\":\"context nested prop 1\"}",
                    "context_ip": "0.0.0.0",
                    "context_library_name": "RudderLabs JavaScript SDK",
                    "context_library_version": "1.0.5",
                    "context_locale": "en-GB",
                    "context_passed_ip": "0.0.0.0",
                    "context_request_ip": "[::1]:53708",
                    "context_screen_density": 2,
                    "context_traits_city": "Disney",
                    "context_traits_country": "USA",
                    "context_traits_email": "mickey@disney.com",
                    "context_traits_firstname": "Mickey",
                    "context_useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "currency": "USD",
                    "event": "groups",
                    "event_text": "groups",
                    "id": "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
                    "original_timestamp": "2020-01-24T06:29:02.364Z",
                    "path_to_$1_000_000": "None",
                    "received_at": "2020-01-24T06:29:02.403Z",
                    "revenue": 50,
                    "sent_at": "2020-01-24T06:29:02.364Z",
                    "testarray": "[\"This is\",\"an\",\"array\"]",
                    "testmap_nestedmap": "{\"n1\":\"nested prop 1\"}",
                    "timestamp": "2020-01-24T06:29:02.403Z",
                    "tmap_t1": 10,
                    "tmap_t2": 20,
                    "user_id": "9bb5d4c2-a7aa-4a36-9efb-dd2b1aec5d33"
                },
                "metadata": {
                    "columns": {
                        "_9omega": "boolean",
                        "anonymous_id": "string",
                        "camelcase123key": "string",
                        "channel": "string",
                        "context_app_build": "string",
                        "context_app_name": "string",
                        "context_app_namespace": "string",
                        "context_app_version": "string",
                        "context_ctestmap_cnestedmap": "json",
                        "context_ip": "string",
                        "context_library_name": "string",
                        "context_library_version": "string",
                        "context_locale": "string",
                        "context_passed_ip": "string",
                        "context_request_ip": "string",
                        "context_screen_density": "int",
                        "context_traits_city": "string",
                        "context_traits_country": "string",
                        "context_traits_email": "string",
                        "context_traits_firstname": "string",
                        "context_useragent": "string",
                        "currency": "string",
                        "event": "string",
                        "event_text": "string",
                        "id": "string",
                        "original_timestamp": "datetime",
                        "path_to_$1_000_000": "string",
                        "received_at": "datetime",
                        "revenue": "int",
                        "sent_at": "datetime",
                        "testarray": "json",
                        "testmap_nestedmap": "json",
                        "timestamp": "datetime",
                        "tmap_t1": "int",
                        "tmap_t2": "int",
                        "user_id": "string",
                        "uuid_ts": "datetime"
                    },
                    "receivedAt": "2020-01-24T11:59:02.403+05:30",
                    "table": "groups"
                }
            }
        ],
        snowflake: [
            {
                "data": {
                    "ANONYMOUS_ID": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
                    "CAMELCASE123KEY": "camel case",
                    "CHANNEL": "web",
                    "CONTEXT_APP_BUILD": "1.0.0",
                    "CONTEXT_APP_NAME": "RudderLabs JavaScript SDK",
                    "CONTEXT_APP_NAMESPACE": "com.rudderlabs.javascript",
                    "CONTEXT_APP_VERSION": "1.0.5",
                    "CONTEXT_CTESTMAP_CNESTEDMAP": "{\"n1\":\"context nested prop 1\"}",
                    "CONTEXT_IP": "0.0.0.0",
                    "CONTEXT_LIBRARY_NAME": "RudderLabs JavaScript SDK",
                    "CONTEXT_LIBRARY_VERSION": "1.0.5",
                    "CONTEXT_LOCALE": "en-GB",
                    "CONTEXT_PASSED_IP": "0.0.0.0",
                    "CONTEXT_REQUEST_IP": "[::1]:53708",
                    "CONTEXT_SCREEN_DENSITY": 2,
                    "CONTEXT_TRAITS_CITY": "Disney",
                    "CONTEXT_TRAITS_COUNTRY": "USA",
                    "CONTEXT_TRAITS_EMAIL": "mickey@disney.com",
                    "CONTEXT_TRAITS_FIRSTNAME": "Mickey",
                    "CONTEXT_USERAGENT": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "CURRENCY": "USD",
                    "EVENT": "groups",
                    "EVENT_TEXT": "groups",
                    "ID": "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
                    "ORIGINAL_TIMESTAMP": "2020-01-24T06:29:02.364Z",
                    "PATH_TO_$1_000_000": "None",
                    "RECEIVED_AT": "2020-01-24T06:29:02.403Z",
                    "REVENUE": 50,
                    "SENT_AT": "2020-01-24T06:29:02.364Z",
                    "TESTARRAY": "[\"This is\",\"an\",\"array\"]",
                    "TESTMAP_NESTEDMAP": "{\"n1\":\"nested prop 1\"}",
                    "TIMESTAMP": "2020-01-24T06:29:02.403Z",
                    "TMAP": "{\"t1\":10,\"t2\":20}",
                    "USER_ID": "9bb5d4c2-a7aa-4a36-9efb-dd2b1aec5d33",
                    "_9OMEGA": true
                },
                "metadata": {
                    "columns": {
                        "ANONYMOUS_ID": "string",
                        "CAMELCASE123KEY": "string",
                        "CHANNEL": "string",
                        "CONTEXT_APP_BUILD": "string",
                        "CONTEXT_APP_NAME": "string",
                        "CONTEXT_APP_NAMESPACE": "string",
                        "CONTEXT_APP_VERSION": "string",
                        "CONTEXT_CTESTMAP_CNESTEDMAP": "json",
                        "CONTEXT_IP": "string",
                        "CONTEXT_LIBRARY_NAME": "string",
                        "CONTEXT_LIBRARY_VERSION": "string",
                        "CONTEXT_LOCALE": "string",
                        "CONTEXT_PASSED_IP": "string",
                        "CONTEXT_REQUEST_IP": "string",
                        "CONTEXT_SCREEN_DENSITY": "int",
                        "CONTEXT_TRAITS_CITY": "string",
                        "CONTEXT_TRAITS_COUNTRY": "string",
                        "CONTEXT_TRAITS_EMAIL": "string",
                        "CONTEXT_TRAITS_FIRSTNAME": "string",
                        "CONTEXT_USERAGENT": "string",
                        "CURRENCY": "string",
                        "EVENT": "string",
                        "EVENT_TEXT": "string",
                        "ID": "string",
                        "ORIGINAL_TIMESTAMP": "datetime",
                        "PATH_TO_$1_000_000": "string",
                        "RECEIVED_AT": "datetime",
                        "REVENUE": "int",
                        "SENT_AT": "datetime",
                        "TESTARRAY": "json",
                        "TESTMAP_NESTEDMAP": "json",
                        "TIMESTAMP": "datetime",
                        "TMAP": "json",
                        "USER_ID": "string",
                        "UUID_TS": "datetime",
                        "_9OMEGA": "boolean"
                    },
                    "receivedAt": "2020-01-24T11:59:02.403+05:30",
                    "table": "_GROUPS"
                }
            }
        ],
        s3_datalake: [
            {
                "data": {
                    "anonymous_id": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
                    "channel": "web",
                    "context_app_build": "1.0.0",
                    "context_app_name": "RudderLabs JavaScript SDK",
                    "context_app_namespace": "com.rudderlabs.javascript",
                    "context_app_version": "1.0.5",
                    "context_ctest_map_cnested_map_n_1": "context nested prop 1",
                    "context_ip": "0.0.0.0",
                    "context_library_name": "RudderLabs JavaScript SDK",
                    "context_library_version": "1.0.5",
                    "context_locale": "en-GB",
                    "context_passed_ip": "0.0.0.0",
                    "context_request_ip": "[::1]:53708",
                    "context_screen_density": 2,
                    "context_traits_city": "Disney",
                    "context_traits_country": "USA",
                    "context_traits_email": "mickey@disney.com",
                    "context_traits_firstname": "Mickey",
                    "context_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "event": "groups",
                    "event_text": "groups",
                    "id": "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
                    "original_timestamp": "2020-01-24T06:29:02.364Z",
                    "received_at": "2020-01-24T06:29:02.403Z",
                    "sent_at": "2020-01-24T06:29:02.364Z",
                    "timestamp": "2020-01-24T06:29:02.403Z",
                    "user_id": "9bb5d4c2-a7aa-4a36-9efb-dd2b1aec5d33"
                },
                "metadata": {
                    "columns": {
                        "anonymous_id": "string",
                        "channel": "string",
                        "context_app_build": "string",
                        "context_app_name": "string",
                        "context_app_namespace": "string",
                        "context_app_version": "string",
                        "context_ctest_map_cnested_map_n_1": "string",
                        "context_ip": "string",
                        "context_library_name": "string",
                        "context_library_version": "string",
                        "context_locale": "string",
                        "context_passed_ip": "string",
                        "context_request_ip": "string",
                        "context_screen_density": "int",
                        "context_traits_city": "string",
                        "context_traits_country": "string",
                        "context_traits_email": "string",
                        "context_traits_firstname": "string",
                        "context_user_agent": "string",
                        "event": "string",
                        "event_text": "string",
                        "id": "string",
                        "original_timestamp": "datetime",
                        "received_at": "datetime",
                        "sent_at": "datetime",
                        "timestamp": "datetime",
                        "user_id": "string",
                        "uuid_ts": "datetime"
                    },
                    "receivedAt": "2020-01-24T11:59:02.403+05:30",
                    "table": "tracks"
                }
            },
            {
                "data": {
                    "_9_omega": true,
                    "anonymous_id": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
                    "camel_case_123_key": "camel case",
                    "channel": "web",
                    "context_app_build": "1.0.0",
                    "context_app_name": "RudderLabs JavaScript SDK",
                    "context_app_namespace": "com.rudderlabs.javascript",
                    "context_app_version": "1.0.5",
                    "context_ctest_map_cnested_map_n_1": "context nested prop 1",
                    "context_ip": "0.0.0.0",
                    "context_library_name": "RudderLabs JavaScript SDK",
                    "context_library_version": "1.0.5",
                    "context_locale": "en-GB",
                    "context_passed_ip": "0.0.0.0",
                    "context_request_ip": "[::1]:53708",
                    "context_screen_density": 2,
                    "context_traits_city": "Disney",
                    "context_traits_country": "USA",
                    "context_traits_email": "mickey@disney.com",
                    "context_traits_firstname": "Mickey",
                    "context_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "currency": "USD",
                    "event": "groups",
                    "event_text": "groups",
                    "id": "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
                    "original_timestamp": "2020-01-24T06:29:02.364Z",
                    "path_to_1_000_000": "None",
                    "received_at": "2020-01-24T06:29:02.403Z",
                    "revenue": 50,
                    "sent_at": "2020-01-24T06:29:02.364Z",
                    "t_map_t_1": 10,
                    "t_map_t_2": 20,
                    "test_array": [
                        "This is",
                        "an",
                        "array"
                    ],
                    "test_map_nested_map_n_1": "nested prop 1",
                    "timestamp": "2020-01-24T06:29:02.403Z",
                    "user_id": "9bb5d4c2-a7aa-4a36-9efb-dd2b1aec5d33"
                },
                "metadata": {
                    "columns": {
                        "_9_omega": "boolean",
                        "anonymous_id": "string",
                        "camel_case_123_key": "string",
                        "channel": "string",
                        "context_app_build": "string",
                        "context_app_name": "string",
                        "context_app_namespace": "string",
                        "context_app_version": "string",
                        "context_ctest_map_cnested_map_n_1": "string",
                        "context_ip": "string",
                        "context_library_name": "string",
                        "context_library_version": "string",
                        "context_locale": "string",
                        "context_passed_ip": "string",
                        "context_request_ip": "string",
                        "context_screen_density": "int",
                        "context_traits_city": "string",
                        "context_traits_country": "string",
                        "context_traits_email": "string",
                        "context_traits_firstname": "string",
                        "context_user_agent": "string",
                        "currency": "string",
                        "event": "string",
                        "event_text": "string",
                        "id": "string",
                        "original_timestamp": "datetime",
                        "path_to_1_000_000": "string",
                        "received_at": "datetime",
                        "revenue": "int",
                        "sent_at": "datetime",
                        "t_map_t_1": "int",
                        "t_map_t_2": "int",
                        "test_array": "string",
                        "test_map_nested_map_n_1": "string",
                        "timestamp": "datetime",
                        "user_id": "string",
                        "uuid_ts": "datetime"
                    },
                    "receivedAt": "2020-01-24T11:59:02.403+05:30",
                    "table": "groups"
                }
            }
        ],
        bq: [
            {
                "data": {
                    "anonymous_id": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
                    "channel": "web",
                    "context_app_build": "1.0.0",
                    "context_app_name": "RudderLabs JavaScript SDK",
                    "context_app_namespace": "com.rudderlabs.javascript",
                    "context_app_version": "1.0.5",
                    "context_ctest_map_cnested_map": "{\"n1\":\"context nested prop 1\"}",
                    "context_ip": "0.0.0.0",
                    "context_library_name": "RudderLabs JavaScript SDK",
                    "context_library_version": "1.0.5",
                    "context_locale": "en-GB",
                    "context_passed_ip": "0.0.0.0",
                    "context_request_ip": "[::1]:53708",
                    "context_screen_density": 2,
                    "context_traits_city": "Disney",
                    "context_traits_country": "USA",
                    "context_traits_email": "mickey@disney.com",
                    "context_traits_firstname": "Mickey",
                    "context_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "event": "groups",
                    "event_text": "groups",
                    "id": "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
                    "original_timestamp": "2020-01-24T06:29:02.364Z",
                    "received_at": "2020-01-24T06:29:02.403Z",
                    "sent_at": "2020-01-24T06:29:02.364Z",
                    "timestamp": "2020-01-24T06:29:02.403Z",
                    "user_id": "9bb5d4c2-a7aa-4a36-9efb-dd2b1aec5d33"
                },
                "metadata": {
                    "columns": {
                        "anonymous_id": "string",
                        "channel": "string",
                        "context_app_build": "string",
                        "context_app_name": "string",
                        "context_app_namespace": "string",
                        "context_app_version": "string",
                        "context_ctest_map_cnested_map": "string",
                        "context_ip": "string",
                        "context_library_name": "string",
                        "context_library_version": "string",
                        "context_locale": "string",
                        "context_passed_ip": "string",
                        "context_request_ip": "string",
                        "context_screen_density": "int",
                        "context_traits_city": "string",
                        "context_traits_country": "string",
                        "context_traits_email": "string",
                        "context_traits_firstname": "string",
                        "context_user_agent": "string",
                        "event": "string",
                        "event_text": "string",
                        "id": "string",
                        "loaded_at": "datetime",
                        "original_timestamp": "datetime",
                        "received_at": "datetime",
                        "sent_at": "datetime",
                        "timestamp": "datetime",
                        "user_id": "string",
                        "uuid_ts": "datetime"
                    },
                    "receivedAt": "2020-01-24T11:59:02.403+05:30",
                    "table": "tracks"
                }
            },
            {
                "data": {
                    "_9_omega": true,
                    "anonymous_id": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
                    "camel_case_123_key": "camel case",
                    "channel": "web",
                    "context_app_build": "1.0.0",
                    "context_app_name": "RudderLabs JavaScript SDK",
                    "context_app_namespace": "com.rudderlabs.javascript",
                    "context_app_version": "1.0.5",
                    "context_ctest_map_cnested_map": "{\"n1\":\"context nested prop 1\"}",
                    "context_ip": "0.0.0.0",
                    "context_library_name": "RudderLabs JavaScript SDK",
                    "context_library_version": "1.0.5",
                    "context_locale": "en-GB",
                    "context_passed_ip": "0.0.0.0",
                    "context_request_ip": "[::1]:53708",
                    "context_screen_density": 2,
                    "context_traits_city": "Disney",
                    "context_traits_country": "USA",
                    "context_traits_email": "mickey@disney.com",
                    "context_traits_firstname": "Mickey",
                    "context_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
                    "currency": "USD",
                    "event": "groups",
                    "event_text": "groups",
                    "id": "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
                    "original_timestamp": "2020-01-24T06:29:02.364Z",
                    "path_to_1_000_000": "None",
                    "received_at": "2020-01-24T06:29:02.403Z",
                    "revenue": 50,
                    "sent_at": "2020-01-24T06:29:02.364Z",
                    "t_map": "{\"t1\":10,\"t2\":20}",
                    "test_array": "[\"This is\",\"an\",\"array\"]",
                    "test_map_nested_map": "{\"n1\":\"nested prop 1\"}",
                    "timestamp": "2020-01-24T06:29:02.403Z",
                    "user_id": "9bb5d4c2-a7aa-4a36-9efb-dd2b1aec5d33"
                },
                "metadata": {
                    "columns": {
                        "_9_omega": "boolean",
                        "anonymous_id": "string",
                        "camel_case_123_key": "string",
                        "channel": "string",
                        "context_app_build": "string",
                        "context_app_name": "string",
                        "context_app_namespace": "string",
                        "context_app_version": "string",
                        "context_ctest_map_cnested_map": "string",
                        "context_ip": "string",
                        "context_library_name": "string",
                        "context_library_version": "string",
                        "context_locale": "string",
                        "context_passed_ip": "string",
                        "context_request_ip": "string",
                        "context_screen_density": "int",
                        "context_traits_city": "string",
                        "context_traits_country": "string",
                        "context_traits_email": "string",
                        "context_traits_firstname": "string",
                        "context_user_agent": "string",
                        "currency": "string",
                        "event": "string",
                        "event_text": "string",
                        "id": "string",
                        "loaded_at": "datetime",
                        "original_timestamp": "datetime",
                        "path_to_1_000_000": "string",
                        "received_at": "datetime",
                        "revenue": "int",
                        "sent_at": "datetime",
                        "t_map": "string",
                        "test_array": "string",
                        "test_map_nested_map": "string",
                        "timestamp": "datetime",
                        "user_id": "string",
                        "uuid_ts": "datetime"
                    },
                    "receivedAt": "2020-01-24T11:59:02.403+05:30",
                    "table": "_groups"
                }
            }
        ],
    }
}

module.exports = {tracksConfig}
