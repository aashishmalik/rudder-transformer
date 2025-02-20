export const data = [
	{
		"name": "kissmetrics",
		"description": "Test 0",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"destination": {
							"Config": {
								"apiKey": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"prefixProperties": true,
								"useNativeSDK": false
							},
							"DestinationDefinition": {
								"DisplayName": "Kiss Metrics",
								"ID": "1WhbSZ6uA3H5ChVifHpfL2H6sie",
								"Name": "KISSMETRICS"
							},
							"Enabled": true,
							"ID": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"Name": "Kiss Metrics",
							"Transformations": []
						},
						"message": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.0.5"
								},
								"ip": "0.0.0.0",
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.0.5"
								},
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"traits": {},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
							},
							"integrations": {
								"All": true
							},
							"messageId": "dd266c67-9199-4a52-ba32-f46ddde67312",
							"originalTimestamp": "2020-01-24T06:29:02.358Z",
							"properties": {
								"path": "/tests/html/index2.html",
								"referrer": "",
								"search": "",
								"title": "",
								"url": "http://localhost/tests/html/index2.html"
							},
							"receivedAt": "2020-01-24T11:59:02.403+05:30",
							"request_ip": "[::1]:53708",
							"sentAt": "2020-01-24T06:29:02.359Z",
							"timestamp": "2020-01-24T11:59:02.402+05:30",
							"type": "page",
							"userId": ""
						},
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 1,
							"messageId": "dd266c67-9199-4a52-ba32-f46ddde67312",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						}
					}
				]
			}
		},
		"output": {
			"response": {
				"status": 200,
				"body": [
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "GET",
							"endpoint": "https://trk.kissmetrics.com/e",
							"headers": {},
							"params": {
								"Page-path": "/tests/html/index2.html",
								"Page-referrer": "",
								"Page-search": "",
								"Page-title": "",
								"Page-url": "http://localhost/tests/html/index2.html",
								"_k": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"_p": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
								"_n": "Loaded a Page",
								"_t": "1579847342",
								"_d": 1
							},
							"body": {
								"JSON": {},
								"XML": {},
								"JSON_ARRAY": {},
								"FORM": {}
							},
							"files": {},
							"userId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"statusCode": 200
						},
						"statusCode": 200,
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 1,
							"messageId": "dd266c67-9199-4a52-ba32-f46ddde67312",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						}
					}
				]
			}
		}
	},
	{
		"name": "kissmetrics",
		"description": "Test 1",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"destination": {
							"Config": {
								"apiKey": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"prefixProperties": true,
								"useNativeSDK": false
							},
							"DestinationDefinition": {
								"DisplayName": "Kiss Metrics",
								"ID": "1WhbSZ6uA3H5ChVifHpfL2H6sie",
								"Name": "KISSMETRICS"
							},
							"Enabled": true,
							"ID": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"Name": "Kiss Metrics",
							"Transformations": []
						},
						"message": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.0.5"
								},
								"ip": "0.0.0.0",
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.0.5"
								},
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"traits": {
									"city": "Disney",
									"country": "USA",
									"email": "mickey@disney.com",
									"firstname": "Mickey"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
							},
							"integrations": {
								"All": true
							},
							"traits": {
								"city": "Disney-1",
								"country": "India",
								"email": "sayan@disney.com",
								"firstname": "Sayan"
							},
							"messageId": "2536eda4-d638-4c93-8014-8ffe3f083214",
							"originalTimestamp": "2020-01-24T06:29:02.362Z",
							"receivedAt": "2020-01-24T11:59:02.403+05:30",
							"request_ip": "[::1]:53709",
							"sentAt": "2020-01-24T06:29:02.363Z",
							"timestamp": "2020-01-24T11:59:02.402+05:30",
							"type": "identify",
							"userId": ""
						},
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 2,
							"messageId": "2536eda4-d638-4c93-8014-8ffe3f083214",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						}
					}
				]
			}
		},
		"output": {
			"response": {
				"status": 200,
				"body": [
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "GET",
							"endpoint": "https://trk.kissmetrics.com/s",
							"headers": {},
							"params": {
								"city": "Disney-1",
								"country": "India",
								"email": "sayan@disney.com",
								"firstname": "Sayan",
								"_k": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"_p": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
								"_t": "1579847342",
								"_d": 1
							},
							"body": {
								"JSON": {},
								"XML": {},
								"JSON_ARRAY": {},
								"FORM": {}
							},
							"files": {},
							"userId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"statusCode": 200
						},
						"statusCode": 200,
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 2,
							"messageId": "2536eda4-d638-4c93-8014-8ffe3f083214",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						}
					}
				]
			}
		}
	},
	{
		"name": "kissmetrics",
		"description": "Test 2",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"destination": {
							"Config": {
								"apiKey": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"prefixProperties": true,
								"useNativeSDK": false
							},
							"DestinationDefinition": {
								"DisplayName": "Kiss Metrics",
								"ID": "1WhbSZ6uA3H5ChVifHpfL2H6sie",
								"Name": "KISSMETRICS"
							},
							"Enabled": true,
							"ID": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"Name": "Kiss Metrics",
							"Transformations": []
						},
						"message": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.0.5"
								},
								"ip": "0.0.0.0",
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.0.5"
								},
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"traits": {
									"city": "Disney",
									"country": "USA",
									"email": "mickey@disney.com",
									"firstname": "Mickey"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
							},
							"integrations": {
								"All": true
							},
							"messageId": "2536eda4-d638-4c93-8014-8ffe3f083214",
							"originalTimestamp": "2020-01-24T06:29:02.362Z",
							"receivedAt": "2020-01-24T11:59:02.403+05:30",
							"request_ip": "[::1]:53709",
							"sentAt": "2020-01-24T06:29:02.363Z",
							"timestamp": "2020-01-24T11:59:02.402+05:30",
							"type": "identify",
							"userId": ""
						},
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 2,
							"messageId": "2536eda4-d638-4c93-8014-8ffe3f083214",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						}
					}
				]
			}
		},
		"output": {
			"response": {
				"status": 200,
				"body": [
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "GET",
							"endpoint": "https://trk.kissmetrics.com/s",
							"headers": {},
							"params": {
								"city": "Disney",
								"country": "USA",
								"email": "mickey@disney.com",
								"firstname": "Mickey",
								"_k": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"_p": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
								"_t": "1579847342",
								"_d": 1
							},
							"body": {
								"JSON": {},
								"XML": {},
								"JSON_ARRAY": {},
								"FORM": {}
							},
							"files": {},
							"userId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"statusCode": 200
						},
						"statusCode": 200,
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 2,
							"messageId": "2536eda4-d638-4c93-8014-8ffe3f083214",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						}
					}
				]
			}
		}
	},
	{
		"name": "kissmetrics",
		"description": "Test 3",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"destination": {
							"Config": {
								"apiKey": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"prefixProperties": true,
								"useNativeSDK": false
							},
							"DestinationDefinition": {
								"DisplayName": "Kiss Metrics",
								"ID": "1WhbSZ6uA3H5ChVifHpfL2H6sie",
								"Name": "KISSMETRICS"
							},
							"Enabled": true,
							"ID": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"Name": "Kiss Metrics",
							"Transformations": []
						},
						"message": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.0.5"
								},
								"ip": "0.0.0.0",
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.0.5"
								},
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"traits": {
									"city": "Disney",
									"country": "USA",
									"email": "mickey@disney.com",
									"firstname": "Mickey"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
							},
							"event": "test revenue kissmetrics",
							"integrations": {
								"All": true
							},
							"messageId": "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
							"originalTimestamp": "2020-01-24T06:29:02.364Z",
							"properties": {
								"currency": "USD",
								"revenue": 50
							},
							"receivedAt": "2020-01-24T11:59:02.403+05:30",
							"request_ip": "[::1]:53710",
							"sentAt": "2020-01-24T06:29:02.364Z",
							"timestamp": "2020-01-24T11:59:02.403+05:30",
							"type": "track",
							"userId": ""
						},
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 3,
							"messageId": "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						}
					}
				]
			}
		},
		"output": {
			"response": {
				"status": 200,
				"body": [
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "GET",
							"endpoint": "https://trk.kissmetrics.com/e",
							"headers": {},
							"params": {
								"test revenue kissmetrics-currency": "USD",
								"test revenue kissmetrics - revenue": 50,
								"Billing Amount": 50,
								"_k": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"_p": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
								"_n": "test revenue kissmetrics",
								"_t": "1579847342",
								"_d": 1
							},
							"body": {
								"JSON": {},
								"XML": {},
								"JSON_ARRAY": {},
								"FORM": {}
							},
							"files": {},
							"userId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"statusCode": 200
						},
						"statusCode": 200,
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 3,
							"messageId": "a6a0ad5a-bd26-4f19-8f75-38484e580fc7",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						}
					}
				]
			}
		}
	},
	{
		"name": "kissmetrics",
		"description": "Test 4",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"destination": {
							"Config": {
								"apiKey": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"prefixProperties": true,
								"useNativeSDK": false
							},
							"DestinationDefinition": {
								"DisplayName": "Kiss Metrics",
								"ID": "1WhbSZ6uA3H5ChVifHpfL2H6sie",
								"Name": "KISSMETRICS"
							},
							"Enabled": true,
							"ID": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"Name": "Kiss Metrics",
							"Transformations": []
						},
						"message": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.0.5"
								},
								"ip": "0.0.0.0",
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.0.5"
								},
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"traits": {
									"city": "Disney",
									"country": "USA",
									"email": "mickey@disney.com",
									"firstname": "Mickey"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
							},
							"integrations": {
								"All": true
							},
							"messageId": "79313729-7fe5-4204-963a-dc46f4205e4e",
							"originalTimestamp": "2020-01-24T06:29:02.366Z",
							"previousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"receivedAt": "2020-01-24T11:59:02.403+05:30",
							"request_ip": "[::1]:53711",
							"sentAt": "2020-01-24T06:29:02.366Z",
							"timestamp": "2020-01-24T11:59:02.403+05:30",
							"type": "alias",
							"userId": "1234abc"
						},
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 4,
							"messageId": "79313729-7fe5-4204-963a-dc46f4205e4e",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						}
					}
				]
			}
		},
		"output": {
			"response": {
				"status": 200,
				"body": [
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "GET",
							"endpoint": "https://trk.kissmetrics.com/a",
							"headers": {},
							"params": {
								"_k": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"_p": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
								"_n": "1234abc"
							},
							"body": {
								"JSON": {},
								"XML": {},
								"JSON_ARRAY": {},
								"FORM": {}
							},
							"files": {},
							"userId": "1234abc",
							"statusCode": 200
						},
						"statusCode": 200,
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 4,
							"messageId": "79313729-7fe5-4204-963a-dc46f4205e4e",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						}
					}
				]
			}
		}
	},
	{
		"name": "kissmetrics",
		"description": "Test 5",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"destination": {
							"Config": {
								"apiKey": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"prefixProperties": true,
								"useNativeSDK": false
							},
							"DestinationDefinition": {
								"DisplayName": "Kiss Metrics",
								"ID": "1WhbSZ6uA3H5ChVifHpfL2H6sie",
								"Name": "KISSMETRICS"
							},
							"Enabled": true,
							"ID": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"Name": "Kiss Metrics",
							"Transformations": []
						},
						"message": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.0.5"
								},
								"ip": "0.0.0.0",
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.0.5"
								},
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"traits": {
									"city": "Disney",
									"country": "USA",
									"email": "mickey@disney.com",
									"firstname": "Mickey"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
							},
							"event": "KM Order Completed",
							"integrations": {
								"All": true
							},
							"messageId": "aa5f5e44-8756-40ad-ad1e-b0d3b9fa710a",
							"originalTimestamp": "2020-01-24T06:29:02.367Z",
							"properties": {
								"affiliation": "Google Store",
								"checkout_id": "fksdjfsdjfisjf9sdfjsd9f",
								"coupon": "hasbros",
								"currency": "USD",
								"discount": 2.5,
								"order_id": "50314b8e9bcf000000000000",
								"products": [
									{
										"category": "Games",
										"image_url": "https:///www.example.com/product/path.jpg",
										"name": "Monopoly: 3rd Edition",
										"price": 19,
										"product_id": "507f1f77bcf86cd799439011",
										"quantity": 1,
										"sku": "45790-32",
										"url": "https://www.example.com/product/path"
									},
									{
										"category": "Games",
										"name": "Uno Card Game",
										"price": 3,
										"product_id": "505bd76785ebb509fc183733",
										"quantity": 2,
										"sku": "46493-32"
									}
								],
								"revenue": 25,
								"shipping": 3,
								"subtotal": 22.5,
								"tax": 2,
								"total": 27.5
							},
							"receivedAt": "2020-01-24T11:59:02.403+05:30",
							"request_ip": "[::1]:53712",
							"sentAt": "2020-01-24T06:29:02.368Z",
							"timestamp": "2020-01-24T11:59:02.402+05:30",
							"type": "track",
							"userId": ""
						},
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 5,
							"messageId": "aa5f5e44-8756-40ad-ad1e-b0d3b9fa710a",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						}
					}
				]
			}
		},
		"output": {
			"response": {
				"status": 200,
				"body": [
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "GET",
							"endpoint": "https://trk.kissmetrics.com/e",
							"headers": {},
							"params": {
								"KM Order Completed-affiliation": "Google Store",
								"KM Order Completed-checkout_id": "fksdjfsdjfisjf9sdfjsd9f",
								"KM Order Completed-coupon": "hasbros",
								"KM Order Completed-currency": "USD",
								"KM Order Completed-discount": 2.5,
								"KM Order Completed-order_id": "50314b8e9bcf000000000000",
								"KM Order Completed - revenue": 25,
								"Billing Amount": 25,
								"KM Order Completed-shipping": 3,
								"KM Order Completed-subtotal": 22.5,
								"KM Order Completed-tax": 2,
								"KM Order Completed-total": 27.5,
								"_k": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"_p": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
								"_n": "KM Order Completed",
								"_t": "1579847342",
								"_d": 1
							},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"statusCode": 200
						},
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 5,
							"messageId": "aa5f5e44-8756-40ad-ad1e-b0d3b9fa710a",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						},
						"statusCode": 200
					},
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "GET",
							"endpoint": "https://trk.kissmetrics.com/s",
							"headers": {},
							"params": {
								"KM Order Completed-category": "Games",
								"KM Order Completed-image_url": "https:///www.example.com/product/path.jpg",
								"KM Order Completed-name": "Monopoly: 3rd Edition",
								"KM Order Completed-price": 19,
								"KM Order Completed-product_id": "507f1f77bcf86cd799439011",
								"KM Order Completed-quantity": 1,
								"KM Order Completed-sku": "45790-32",
								"KM Order Completed-url": "https://www.example.com/product/path",
								"_k": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"_p": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca"
							},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"statusCode": 200
						},
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 5,
							"messageId": "aa5f5e44-8756-40ad-ad1e-b0d3b9fa710a",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						},
						"statusCode": 200
					},
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "GET",
							"endpoint": "https://trk.kissmetrics.com/s",
							"headers": {},
							"params": {
								"KM Order Completed-category": "Games",
								"KM Order Completed-name": "Uno Card Game",
								"KM Order Completed-price": 3,
								"KM Order Completed-product_id": "505bd76785ebb509fc183733",
								"KM Order Completed-quantity": 2,
								"KM Order Completed-sku": "46493-32",
								"_k": "9432f11f70f8ce386f5110c8c924b3ec4f825256",
								"_p": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca"
							},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"statusCode": 200
						},
						"metadata": {
							"anonymousId": "e6ab2c5e-2cda-44a9-a962-e2f67df78bca",
							"destinationId": "1WhcOCGgj9asZu850HvugU2C3Aq",
							"destinationType": "KISSMETRICS",
							"jobId": 5,
							"messageId": "aa5f5e44-8756-40ad-ad1e-b0d3b9fa710a",
							"sourceId": "1WjrlZIy1d41MCceOrFbDVPnOPY"
						},
						"statusCode": 200
					}
				]
			}
		}
	}
]