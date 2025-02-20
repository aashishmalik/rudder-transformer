export const data = [
	{
		"name": "facebook_offline_conversions",
		"description": "Test 0",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"channel": "web",
							"context": {
								"traits": {
									"age": 23,
									"email": "adc@test.com",
									"firstname": "Test",
									"birthday": "2022-05-13T12:51:01.470Z"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"
							},
							"event": "Product Searched",
							"originalTimestamp": "2020-09-22T14:42:44.724Z",
							"timestamp": "2022-09-22T20:12:44.757+05:30",
							"userId": "user@1"
						},
						"destination": {
							"Config": {
								"accessToken": "ABC..."
							}
						},
						"metadata": {
							"secret": {
								"access_token": "ABC"
							}
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
						"metadata": {
							"secret": {
								"access_token": "ABC"
							}
						},
						"statusCode": 400,
						"error": "Message Type is not present. Aborting message.",
						"statTags": {
							"errorCategory": "dataValidation",
							"errorType": "instrumentation",
							"destType": "FACEBOOK_OFFLINE_CONVERSIONS",
							"module": "destination",
							"implementation": "native",
							"feature": "processor"
						}
					}
				]
			}
		}
	},
	{
		"name": "facebook_offline_conversions",
		"description": "Test 1",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"channel": "web",
							"context": {
								"traits": {
									"age": 23,
									"email": "adc@test.com",
									"firstname": "Test",
									"birthday": "2022-05-13T12:51:01.470Z"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36"
							},
							"event": "Product Searched",
							"type": "identify",
							"originalTimestamp": "2020-09-22T14:42:44.724Z",
							"timestamp": "2022-09-22T20:12:44.757+05:30",
							"userId": "user@1"
						},
						"destination": {
							"Config": {
								"accessToken": "ABC..."
							}
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
						"statusCode": 400,
						"error": "Message type identify not supported.",
						"statTags": {
							"errorCategory": "dataValidation",
							"errorType": "instrumentation",
							"destType": "FACEBOOK_OFFLINE_CONVERSIONS",
							"module": "destination",
							"implementation": "native",
							"feature": "processor"
						}
					}
				]
			}
		}
	},
	{
		"name": "facebook_offline_conversions",
		"description": "Test 2",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.1.2"
								},
								"traits": {
									"abc": "1234"
								},
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.1.2"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"page": {
									"path": "/tests/html/ecomm_test.html",
									"referrer": "http://0.0.0.0:1112/tests/html/",
									"search": "",
									"title": "Fb Offline Conversion Ecommerce Test",
									"url": "http://0.0.0.0:1112/tests/html/ecomm_test.html"
								}
							},
							"type": "track",
							"messageId": "9116b734-7e6b-4497-ab51-c16744d4487e",
							"originalTimestamp": "2022-09-21T12:05:19.394Z",
							"userId": "user@1",
							"event": "product searched",
							"properties": {
								"order_id": "5241735",
								"value": 31.98,
								"revenue": 31.98,
								"shipping": 4,
								"coupon": "APPARELSALE",
								"currency": "GBP",
								"products": [
									{
										"id": "product-bacon-jam",
										"category": "Merch",
										"brand": ""
									},
									{
										"id": "product-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									},
									{
										"id": "offer-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									}
								]
							}
						},
						"destination": {
							"Config": {
								"accessToken": "ABC...",
								"valueFieldIdentifier": "properties.price",
								"eventsToStandard": [
									{
										"from": "Product Searched",
										"to": "Search"
									},
									{
										"to": "ViewContent",
										"from": "Product Viewed"
									},
									{
										"to": "AddToCart",
										"from": "Cart Checkout"
									},
									{
										"to": "AddPaymentInfo",
										"from": "Card Details Added"
									},
									{
										"to": "Lead",
										"from": "Order Completed"
									},
									{
										"to": "CompleteRegistration",
										"from": "Signup"
									},
									{
										"to": "AddToWishlist",
										"from": "Button Clicked"
									}
								],
								"eventsToIds": [
									{
										"from": "Search",
										"to": "582603376981640"
									},
									{
										"from": "Search",
										"to": "506289934669334"
									},
									{
										"from": "ViewContent",
										"to": "1166826033904512"
									},
									{
										"from": "AddToCart",
										"to": "1148872185708962"
									},
									{
										"from": "CompleteRegistration",
										"to": "597443908839411"
									},
									{
										"from": "Lead",
										"to": "1024592094903800"
									},
									{
										"from": "AddToWishlist",
										"to": "506289934669334"
									}
								]
							}
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
						"statusCode": 400,
						"error": "Please Map Your Standard Events With Event Set Ids",
						"statTags": {
							"errorCategory": "dataValidation",
							"errorType": "configuration",
							"destType": "FACEBOOK_OFFLINE_CONVERSIONS",
							"module": "destination",
							"implementation": "native",
							"feature": "processor"
						}
					}
				]
			}
		}
	},
	{
		"name": "facebook_offline_conversions",
		"description": "Test 3",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.1.2"
								},
								"traits": {
									"abc": "1234"
								},
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.1.2"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"page": {
									"path": "/tests/html/ecomm_test.html",
									"referrer": "http://0.0.0.0:1112/tests/html/",
									"search": "",
									"title": "Fb Offline Conversion Ecommerce Test",
									"url": "http://0.0.0.0:1112/tests/html/ecomm_test.html"
								}
							},
							"type": "track",
							"messageId": "9116b734-7e6b-4497-ab51-c16744d4487e",
							"originalTimestamp": "2022-09-21T12:05:19.394Z",
							"userId": "user@1",
							"event": "Button Clicked",
							"properties": {
								"order_id": "5241735",
								"value": 31.98,
								"revenue": 31.98,
								"shipping": 4,
								"coupon": "APPARELSALE",
								"currency": "GBP",
								"products": [
									{
										"id": "product-bacon-jam",
										"category": "Merch",
										"brand": ""
									},
									{
										"id": "product-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									},
									{
										"id": "offer-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									}
								]
							}
						},
						"destination": {
							"Config": {
								"accessToken": "ABC...",
								"valueFieldIdentifier": "properties.price",
								"eventsToStandard": [
									{
										"from": "Product Searched",
										"to": "Search"
									},
									{
										"to": "ViewContent",
										"from": "Product Viewed"
									},
									{
										"to": "AddToCart",
										"from": "Cart Checkout"
									},
									{
										"to": "AddPaymentInfo",
										"from": "Card Details Added"
									},
									{
										"to": "Lead",
										"from": "Order Completed"
									},
									{
										"to": "CompleteRegistration",
										"from": "Signup"
									},
									{
										"to": "AddToWishlist",
										"from": "Button Clicked"
									}
								],
								"eventsToIds": [
									{
										"from": "Search",
										"to": "582603376981640"
									},
									{
										"from": "Search",
										"to": "506289934669334"
									},
									{
										"from": "ViewContent",
										"to": "1166826033904512"
									},
									{
										"from": "AddToCart",
										"to": "1148872185708962"
									},
									{
										"from": "CompleteRegistration",
										"to": "597443908839411"
									},
									{
										"from": "Lead",
										"to": "1024592094903800"
									}
								]
							}
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
						"statusCode": 400,
						"error": "Please Map Your Standard Events With Event Set Ids",
						"statTags": {
							"errorCategory": "dataValidation",
							"errorType": "configuration",
							"destType": "FACEBOOK_OFFLINE_CONVERSIONS",
							"module": "destination",
							"implementation": "native",
							"feature": "processor"
						}
					}
				]
			}
		}
	},
	{
		"name": "facebook_offline_conversions",
		"description": "Test 4",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.1.2"
								},
								"traits": {
									"email": "test@rudderstack.com"
								},
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.1.2"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"page": {
									"path": "/tests/html/ecomm_test.html",
									"referrer": "http://0.0.0.0:1112/tests/html/",
									"search": "",
									"title": "Fb Offline Conversion Ecommerce Test",
									"url": "http://0.0.0.0:1112/tests/html/ecomm_test.html"
								}
							},
							"type": "track",
							"messageId": "9116b734-7e6b-4497-ab51-c16744d4487e",
							"originalTimestamp": "2022-09-21T12:05:19.394Z",
							"userId": "user@1",
							"event": "Product Viewed",
							"properties": {
								"order_id": "5241735",
								"value": 31.98,
								"revenue": 31.98,
								"shipping": 4,
								"coupon": "APPARELSALE",
								"currency": "GBP",
								"products": [
									{
										"id": "product-bacon-jam",
										"category": "Merch",
										"brand": ""
									},
									{
										"id": "product-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									},
									{
										"id": "offer-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									}
								]
							}
						},
						"destination": {
							"Config": {
								"accessToken": "ABC...",
								"valueFieldIdentifier": "properties.price",
								"eventsToStandard": [
									{
										"from": "Product Searched",
										"to": "Search"
									},
									{
										"to": "ViewContent",
										"from": "Product Viewed"
									},
									{
										"to": "AddToCart",
										"from": "Cart Checkout"
									},
									{
										"to": "AddPaymentInfo",
										"from": "Card Details Added"
									},
									{
										"to": "Lead",
										"from": "Order Completed"
									},
									{
										"to": "CompleteRegistration",
										"from": "Signup"
									},
									{
										"to": "AddToWishlist",
										"from": "Button Clicked"
									}
								],
								"eventsToIds": [
									{
										"from": "Search",
										"to": "582603376981640"
									},
									{
										"from": "Search",
										"to": "506289934669334"
									},
									{
										"from": "ViewContent",
										"to": "1166826033904512"
									},
									{
										"from": "AddToCart",
										"to": "1148872185708962"
									},
									{
										"from": "CompleteRegistration",
										"to": "597443908839411"
									},
									{
										"from": "Lead",
										"to": "1024592094903800"
									}
								],
								"isHashRequired": true
							}
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
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/1166826033904512/events?upload_tag=rudderstack&data=%5B%7B%22match_keys%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%5D%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22order_id%22%3A%225241735%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Product%20Viewed%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22email%22%3A%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%225241735%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22ViewContent%22%2C%22content_type%22%3A%22product%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					}
				]
			}
		}
	},
	{
		"name": "facebook_offline_conversions",
		"description": "Test 5",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.1.2"
								},
								"traits": {
									"email": "test@rudderstack.com"
								},
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.1.2"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"page": {
									"path": "/tests/html/ecomm_test.html",
									"referrer": "http://0.0.0.0:1112/tests/html/",
									"search": "",
									"title": "Fb Offline Conversion Ecommerce Test",
									"url": "http://0.0.0.0:1112/tests/html/ecomm_test.html"
								}
							},
							"type": "track",
							"messageId": "9116b734-7e6b-4497-ab51-c16744d4487e",
							"originalTimestamp": "2022-09-21T12:05:19.394Z",
							"userId": "user@1",
							"event": "Product Searched",
							"properties": {
								"order_id": "5241735",
								"value": 31.98,
								"revenue": 31.98,
								"shipping": 4,
								"coupon": "APPARELSALE",
								"currency": "GBP",
								"products": [
									{
										"id": "product-bacon-jam",
										"category": "Merch",
										"brand": ""
									},
									{
										"id": "product-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									},
									{
										"id": "offer-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									}
								]
							}
						},
						"destination": {
							"Config": {
								"accessToken": "ABC...",
								"valueFieldIdentifier": "properties.price",
								"eventsToStandard": [
									{
										"from": "Product Searched",
										"to": "Search"
									},
									{
										"to": "ViewContent",
										"from": "Product Viewed"
									},
									{
										"to": "AddToCart",
										"from": "Cart Checkout"
									},
									{
										"to": "AddPaymentInfo",
										"from": "Card Details Added"
									},
									{
										"to": "Lead",
										"from": "Order Completed"
									},
									{
										"to": "CompleteRegistration",
										"from": "Signup"
									},
									{
										"to": "AddToWishlist",
										"from": "Button Clicked"
									}
								],
								"eventsToIds": [
									{
										"from": "Search",
										"to": "582603376981640"
									},
									{
										"from": "Search",
										"to": "506289934669334"
									},
									{
										"from": "ViewContent",
										"to": "1166826033904512"
									},
									{
										"from": "AddToCart",
										"to": "1148872185708962"
									},
									{
										"from": "CompleteRegistration",
										"to": "597443908839411"
									},
									{
										"from": "Lead",
										"to": "1024592094903800"
									}
								],
								"isHashRequired": true
							}
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
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/582603376981640/events?upload_tag=rudderstack&data=%5B%7B%22match_keys%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%5D%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22order_id%22%3A%225241735%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Product%20Searched%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22email%22%3A%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%225241735%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22Search%22%2C%22content_type%22%3A%22product%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					},
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/506289934669334/events?upload_tag=rudderstack&data=%5B%7B%22match_keys%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%5D%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22order_id%22%3A%225241735%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Product%20Searched%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22email%22%3A%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%225241735%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22Search%22%2C%22content_type%22%3A%22product%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					}
				]
			}
		}
	},
	{
		"name": "facebook_offline_conversions",
		"description": "Test 6",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.1.2"
								},
								"traits": {
									"email": "test@rudderstack.com"
								},
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.1.2"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"page": {
									"path": "/tests/html/ecomm_test.html",
									"referrer": "http://0.0.0.0:1112/tests/html/",
									"search": "",
									"title": "Fb Offline Conversion Ecommerce Test",
									"url": "http://0.0.0.0:1112/tests/html/ecomm_test.html"
								}
							},
							"type": "track",
							"messageId": "9116b734-7e6b-4497-ab51-c16744d4487e",
							"originalTimestamp": "2022-09-21T12:05:19.394Z",
							"userId": "user@1",
							"event": "Product Searched",
							"properties": {
								"order_id": "5241735",
								"value": 31.98,
								"revenue": 31.98,
								"shipping": 4,
								"coupon": "APPARELSALE",
								"currency": "GBP",
								"products": [
									{
										"id": "product-bacon-jam",
										"category": "Merch",
										"brand": ""
									},
									{
										"id": "product-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									},
									{
										"id": "offer-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									}
								]
							}
						},
						"destination": {
							"Config": {
								"accessToken": "ABC...",
								"valueFieldIdentifier": "properties.price",
								"eventsToStandard": [
									{
										"from": "Product Searched",
										"to": "Search"
									},
									{
										"to": "ViewContent",
										"from": "Product Searched"
									},
									{
										"to": "AddToCart",
										"from": "Cart Checkout"
									},
									{
										"to": "AddPaymentInfo",
										"from": "Card Details Added"
									},
									{
										"to": "Lead",
										"from": "Order Completed"
									},
									{
										"to": "CompleteRegistration",
										"from": "Signup"
									},
									{
										"to": "AddToWishlist",
										"from": "Button Clicked"
									}
								],
								"eventsToIds": [
									{
										"from": "Search",
										"to": "582603376981640"
									},
									{
										"from": "Search",
										"to": "506289934669334"
									},
									{
										"from": "ViewContent",
										"to": "1166826033904512"
									},
									{
										"from": "AddToCart",
										"to": "1148872185708962"
									},
									{
										"from": "CompleteRegistration",
										"to": "597443908839411"
									},
									{
										"from": "Lead",
										"to": "1024592094903800"
									}
								],
								"isHashRequired": true
							}
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
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/582603376981640/events?upload_tag=rudderstack&data=%5B%7B%22match_keys%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%5D%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22order_id%22%3A%225241735%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Product%20Searched%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22email%22%3A%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%225241735%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22ViewContent%22%2C%22content_type%22%3A%22product%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					},
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/506289934669334/events?upload_tag=rudderstack&data=%5B%7B%22match_keys%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%5D%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22order_id%22%3A%225241735%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Product%20Searched%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22email%22%3A%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%225241735%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22ViewContent%22%2C%22content_type%22%3A%22product%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					},
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/1166826033904512/events?upload_tag=rudderstack&data=%5B%7B%22match_keys%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%5D%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22order_id%22%3A%225241735%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Product%20Searched%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22email%22%3A%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%225241735%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22ViewContent%22%2C%22content_type%22%3A%22product%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					}
				]
			}
		}
	},
	{
		"name": "facebook_offline_conversions",
		"description": "Test 7",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.1.2"
								},
								"traits": {
									"email": "test@rudderstack.com"
								},
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.1.2"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"page": {
									"path": "/tests/html/ecomm_test.html",
									"referrer": "http://0.0.0.0:1112/tests/html/",
									"search": "",
									"title": "Fb Offline Conversion Ecommerce Test",
									"url": "http://0.0.0.0:1112/tests/html/ecomm_test.html"
								}
							},
							"type": "track",
							"messageId": "9116b734-7e6b-4497-ab51-c16744d4487e",
							"originalTimestamp": "2022-09-21T12:05:19.394Z",
							"userId": "user@1",
							"event": "Product Searched",
							"properties": {
								"upload_tag": "test campaign",
								"order_id": "5241735",
								"value": 31.98,
								"revenue": 31.98,
								"shipping": 4,
								"coupon": "APPARELSALE",
								"currency": "GBP",
								"products": [
									{
										"id": "product-bacon-jam",
										"category": "Merch",
										"brand": ""
									},
									{
										"id": "product-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									},
									{
										"id": "offer-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									}
								]
							}
						},
						"destination": {
							"Config": {
								"accessToken": "ABC...",
								"valueFieldIdentifier": "properties.price",
								"eventsToStandard": [
									{
										"from": "Product Searched",
										"to": "Search"
									},
									{
										"to": "ViewContent",
										"from": "Product Searched"
									},
									{
										"to": "AddToCart",
										"from": "Cart Checkout"
									},
									{
										"to": "AddPaymentInfo",
										"from": "Card Details Added"
									},
									{
										"to": "Lead",
										"from": "Order Completed"
									},
									{
										"to": "CompleteRegistration",
										"from": "Signup"
									},
									{
										"to": "AddToWishlist",
										"from": "Button Clicked"
									}
								],
								"eventsToIds": [
									{
										"from": "Search",
										"to": "582603376981640"
									},
									{
										"from": "Search",
										"to": "506289934669334"
									},
									{
										"from": "ViewContent",
										"to": "1166826033904512"
									},
									{
										"from": "AddToCart",
										"to": "1148872185708962"
									},
									{
										"from": "CompleteRegistration",
										"to": "597443908839411"
									},
									{
										"from": "Lead",
										"to": "1024592094903800"
									}
								],
								"isHashRequired": true
							}
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
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/582603376981640/events?upload_tag=test campaign&data=%5B%7B%22match_keys%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%5D%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22order_id%22%3A%225241735%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Product%20Searched%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22email%22%3A%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%225241735%22%2C%22upload_tag%22%3A%22test%20campaign%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22ViewContent%22%2C%22content_type%22%3A%22product%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					},
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/506289934669334/events?upload_tag=test campaign&data=%5B%7B%22match_keys%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%5D%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22order_id%22%3A%225241735%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Product%20Searched%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22email%22%3A%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%225241735%22%2C%22upload_tag%22%3A%22test%20campaign%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22ViewContent%22%2C%22content_type%22%3A%22product%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					},
					{
						"output": {
							"version": "1",
							"type": "REST",
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/1166826033904512/events?upload_tag=test campaign&data=%5B%7B%22match_keys%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%5D%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22order_id%22%3A%225241735%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Product%20Searched%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22GBP%22%2C%22value%22%3A31.98%2C%22email%22%3A%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%225241735%22%2C%22upload_tag%22%3A%22test%20campaign%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22ViewContent%22%2C%22content_type%22%3A%22product%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					}
				]
			}
		}
	},
	{
		"name": "facebook_offline_conversions",
		"description": "Test 8",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.1.2"
								},
								"traits": {
									"email": "test@rudderstack.com",
									"birthday": "2005-01-01T23:28:56.782Z",
									"firstName": "test",
									"name": "test rudderlabs",
									"address": {
										"city": "kalkata",
										"state": "west bangal",
										"country": "india",
										"zip": "123456"
									},
									"phone": "9886775586",
									"gender": "male"
								},
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.1.2"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"page": {
									"path": "/tests/html/ecomm_test.html",
									"referrer": "http://0.0.0.0:1112/tests/html/",
									"search": "",
									"title": "Fb Offline Conversion Ecommerce Test",
									"url": "http://0.0.0.0:1112/tests/html/ecomm_test.html"
								},
								"device": {
									"advertisingId": "apple@123"
								}
							},
							"type": "track",
							"messageId": "9116b734-7e6b-4497-ab51-c16744d4487e",
							"originalTimestamp": "2022-09-21T12:05:19.394Z",
							"userId": "user@1",
							"event": "Cart Checkout",
							"properties": {
								"upload_tag": "test campaign",
								"order_id": "485893487985894998",
								"value": 100,
								"revenue": 31.98,
								"shipping": 4,
								"coupon": "APPARELSALE",
								"currency": "IND",
								"products": [
									{
										"id": "product-bacon-jam",
										"category": "Merch",
										"brand": ""
									},
									{
										"id": "product-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									},
									{
										"id": "offer-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									}
								]
							}
						},
						"destination": {
							"Config": {
								"accessToken": "ABC...",
								"valueFieldIdentifier": "properties.price",
								"eventsToStandard": [
									{
										"from": "Product Searched",
										"to": "Search"
									},
									{
										"to": "ViewContent",
										"from": "Product Searched"
									},
									{
										"to": "AddToCart",
										"from": "Cart Checkout"
									},
									{
										"to": "AddPaymentInfo",
										"from": "Card Details Added"
									},
									{
										"to": "Lead",
										"from": "Order Completed"
									},
									{
										"to": "CompleteRegistration",
										"from": "Signup"
									},
									{
										"to": "AddToWishlist",
										"from": "Button Clicked"
									}
								],
								"eventsToIds": [
									{
										"from": "Search",
										"to": "582603376981640"
									},
									{
										"from": "Search",
										"to": "506289934669334"
									},
									{
										"from": "ViewContent",
										"to": "1166826033904512"
									},
									{
										"from": "AddToCart",
										"to": "1148872185708962"
									},
									{
										"from": "CompleteRegistration",
										"to": "597443908839411"
									},
									{
										"from": "Lead",
										"to": "1024592094903800"
									}
								],
								"isHashRequired": true
							}
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
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/1148872185708962/events?upload_tag=test campaign&data=%5B%7B%22match_keys%22%3A%7B%22doby%22%3A%22f388bc7cd953b951ffdf8e06275d94946dc52f03ed96536497fbe534469d38d6%22%2C%22dobm%22%3A%22f388bc7cd953b951ffdf8e06275d94946dc52f03ed96536497fbe534469d38d6%22%2C%22dobd%22%3A%22f388bc7cd953b951ffdf8e06275d94946dc52f03ed96536497fbe534469d38d6%22%2C%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%5D%2C%22phone%22%3A%5B%2274a39482392f83119041d571d5dace439d315faea8214fe8e815c00261b80615%22%5D%2C%22gen%22%3A%220d248e82c62c9386878327d491c762a002152d42ab2c391a31c44d9f62675ddf%22%2C%22fn%22%3A%229f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08%22%2C%22ct%22%3A%22375aba919c30870659093b7ddcf6045ff7a8624dd4dba49ced8981bd4d0666e0%22%2C%22zip%22%3A%5B%228d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92%22%5D%2C%22madid%22%3A%22c20fa16907343eef642d10f0bdb81bf629e6aaf6c906f26eabda079ca9e5ab67%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22ln%22%3A%22dcf000c2386fb76d22cefc0d118a8511bb75999019cd373df52044bccd1bd251%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22IND%22%2C%22value%22%3A100%2C%22order_id%22%3A%22485893487985894998%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Cart%20Checkout%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22IND%22%2C%22value%22%3A100%2C%22email%22%3A%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%2C%22phone%22%3A%2274a39482392f83119041d571d5dace439d315faea8214fe8e815c00261b80615%22%2C%22gen%22%3A%220d248e82c62c9386878327d491c762a002152d42ab2c391a31c44d9f62675ddf%22%2C%22fn%22%3A%229f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08%22%2C%22ct%22%3A%22375aba919c30870659093b7ddcf6045ff7a8624dd4dba49ced8981bd4d0666e0%22%2C%22zip%22%3A%228d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92%22%2C%22madid%22%3A%22c20fa16907343eef642d10f0bdb81bf629e6aaf6c906f26eabda079ca9e5ab67%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%22485893487985894998%22%2C%22upload_tag%22%3A%22test%20campaign%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22ln%22%3A%22dcf000c2386fb76d22cefc0d118a8511bb75999019cd373df52044bccd1bd251%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22AddToCart%22%2C%22content_type%22%3A%22product%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					}
				]
			}
		}
	},
	{
		"name": "facebook_offline_conversions",
		"description": "Test 9",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.1.2"
								},
								"traits": {
									"email": "test@rudderstack.com",
									"birthday": "2005-01-01T23:28:56.782Z",
									"firstName": "test",
									"name": "test rudderlabs",
									"address": {
										"city": "kalkata",
										"state": "west bangal",
										"country": "india",
										"zip": "123456"
									},
									"phone": "9886775586",
									"gender": "male"
								},
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.1.2"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"page": {
									"path": "/tests/html/ecomm_test.html",
									"referrer": "http://0.0.0.0:1112/tests/html/",
									"search": "",
									"title": "Fb Offline Conversion Ecommerce Test",
									"url": "http://0.0.0.0:1112/tests/html/ecomm_test.html"
								},
								"device": {
									"advertisingId": "apple@123"
								}
							},
							"type": "track",
							"messageId": "9116b734-7e6b-4497-ab51-c16744d4487e",
							"originalTimestamp": "2022-09-21T12:05:19.394Z",
							"userId": "user@1",
							"event": "Cart Checkout",
							"properties": {
								"upload_tag": "test campaign",
								"order_id": "485893487985894998",
								"value": 100,
								"revenue": 31.98,
								"shipping": 4,
								"coupon": "APPARELSALE",
								"currency": "IND",
								"products": [
									{
										"id": "product-bacon-jam",
										"category": "Merch",
										"brand": ""
									},
									{
										"id": "product-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									},
									{
										"id": "offer-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									}
								]
							}
						},
						"destination": {
							"Config": {
								"accessToken": "ABC...",
								"valueFieldIdentifier": "properties.price",
								"eventsToStandard": [
									{
										"from": "Product Searched",
										"to": "Search"
									},
									{
										"to": "ViewContent",
										"from": "Product Searched"
									},
									{
										"to": "AddToCart",
										"from": "Cart Checkout"
									},
									{
										"to": "AddPaymentInfo",
										"from": "Card Details Added"
									},
									{
										"to": "Lead",
										"from": "Order Completed"
									},
									{
										"to": "CompleteRegistration",
										"from": "Signup"
									},
									{
										"to": "AddToWishlist",
										"from": "Button Clicked"
									}
								],
								"eventsToIds": [
									{
										"from": "Search",
										"to": "582603376981640"
									},
									{
										"from": "Search",
										"to": "506289934669334"
									},
									{
										"from": "ViewContent",
										"to": "1166826033904512"
									},
									{
										"from": "AddToCart",
										"to": "1148872185708962"
									},
									{
										"from": "CompleteRegistration",
										"to": "597443908839411"
									},
									{
										"from": "Lead",
										"to": "1024592094903800"
									}
								],
								"isHashRequired": false
							}
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
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/1148872185708962/events?upload_tag=test campaign&data=%5B%7B%22match_keys%22%3A%7B%22doby%22%3A%22f388bc7cd953b951ffdf8e06275d94946dc52f03ed96536497fbe534469d38d6%22%2C%22dobm%22%3A%22f388bc7cd953b951ffdf8e06275d94946dc52f03ed96536497fbe534469d38d6%22%2C%22dobd%22%3A%22f388bc7cd953b951ffdf8e06275d94946dc52f03ed96536497fbe534469d38d6%22%2C%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%22test%40rudderstack.com%22%5D%2C%22phone%22%3A%5B%229886775586%22%5D%2C%22gen%22%3A%22male%22%2C%22fn%22%3A%22test%22%2C%22ct%22%3A%22kalkata%22%2C%22zip%22%3A%5B%22123456%22%5D%2C%22madid%22%3A%22apple%40123%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22ln%22%3A%22rudderlabs%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22IND%22%2C%22value%22%3A100%2C%22order_id%22%3A%22485893487985894998%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Cart%20Checkout%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22IND%22%2C%22value%22%3A100%2C%22email%22%3A%22test%40rudderstack.com%22%2C%22phone%22%3A%229886775586%22%2C%22gen%22%3A%22male%22%2C%22fn%22%3A%22test%22%2C%22ct%22%3A%22kalkata%22%2C%22zip%22%3A%22123456%22%2C%22madid%22%3A%22apple%40123%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%22485893487985894998%22%2C%22upload_tag%22%3A%22test%20campaign%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22ln%22%3A%22rudderlabs%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22AddToCart%22%2C%22content_type%22%3A%22product%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					}
				]
			}
		}
	},
	{
		"name": "facebook_offline_conversions",
		"description": "Test 10",
		"feature": "processor",
		"module": "destination",
		"version": "v0",
		"input": {
			"request": {
				"body": [
					{
						"message": {
							"channel": "web",
							"context": {
								"app": {
									"build": "1.0.0",
									"name": "RudderLabs JavaScript SDK",
									"namespace": "com.rudderlabs.javascript",
									"version": "1.1.2"
								},
								"traits": {
									"email": "test@rudderstack.com",
									"birthday": "2005-01-01T23:28:56.782Z",
									"firstName": "test",
									"name": "test rudderlabs",
									"address": {
										"city": "kalkata",
										"state": "west bangal",
										"country": "india",
										"zip": "123456"
									},
									"phone": "9886775586",
									"gender": "male"
								},
								"library": {
									"name": "RudderLabs JavaScript SDK",
									"version": "1.1.2"
								},
								"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
								"locale": "en-GB",
								"os": {
									"name": "",
									"version": ""
								},
								"screen": {
									"density": 2
								},
								"page": {
									"path": "/tests/html/ecomm_test.html",
									"referrer": "http://0.0.0.0:1112/tests/html/",
									"search": "",
									"title": "Fb Offline Conversion Ecommerce Test",
									"url": "http://0.0.0.0:1112/tests/html/ecomm_test.html"
								},
								"device": {
									"advertisingId": "apple@123"
								}
							},
							"integrations": {
								"FacebookOfflineConversions": {
									"contentType": "e-commerce"
								}
							},
							"type": "track",
							"messageId": "9116b734-7e6b-4497-ab51-c16744d4487e",
							"originalTimestamp": "2022-09-21T12:05:19.394Z",
							"userId": "user@1",
							"event": "Cart Checkout",
							"properties": {
								"upload_tag": "test campaign",
								"order_id": "485893487985894998",
								"value": 100,
								"revenue": 31.98,
								"shipping": 4,
								"coupon": "APPARELSALE",
								"currency": "IND",
								"products": [
									{
										"id": "product-bacon-jam",
										"category": "Merch",
										"brand": ""
									},
									{
										"id": "product-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									},
									{
										"id": "offer-t-shirt",
										"category": "Merch",
										"brand": "Levis"
									}
								]
							}
						},
						"destination": {
							"Config": {
								"accessToken": "ABC...",
								"valueFieldIdentifier": "properties.price",
								"eventsToStandard": [
									{
										"from": "Product Searched",
										"to": "Search"
									},
									{
										"to": "ViewContent",
										"from": "Product Searched"
									},
									{
										"to": "AddToCart",
										"from": "Cart Checkout"
									},
									{
										"to": "AddPaymentInfo",
										"from": "Card Details Added"
									},
									{
										"to": "Lead",
										"from": "Order Completed"
									},
									{
										"to": "CompleteRegistration",
										"from": "Signup"
									},
									{
										"to": "AddToWishlist",
										"from": "Button Clicked"
									}
								],
								"eventsToIds": [
									{
										"from": "Search",
										"to": "582603376981640"
									},
									{
										"from": "Search",
										"to": "506289934669334"
									},
									{
										"from": "ViewContent",
										"to": "1166826033904512"
									},
									{
										"from": "AddToCart",
										"to": "1148872185708962"
									},
									{
										"from": "CompleteRegistration",
										"to": "597443908839411"
									},
									{
										"from": "Lead",
										"to": "1024592094903800"
									}
								],
								"categoryToContent": [
									{
										"from": "",
										"to": ""
									}
								],
								"isHashRequired": true
							}
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
							"method": "POST",
							"endpoint": "https://graph.facebook.com/v16.0/1148872185708962/events?upload_tag=test campaign&data=%5B%7B%22match_keys%22%3A%7B%22doby%22%3A%22f388bc7cd953b951ffdf8e06275d94946dc52f03ed96536497fbe534469d38d6%22%2C%22dobm%22%3A%22f388bc7cd953b951ffdf8e06275d94946dc52f03ed96536497fbe534469d38d6%22%2C%22dobd%22%3A%22f388bc7cd953b951ffdf8e06275d94946dc52f03ed96536497fbe534469d38d6%22%2C%22extern_id%22%3A%22user%401%22%2C%22email%22%3A%5B%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%5D%2C%22phone%22%3A%5B%2274a39482392f83119041d571d5dace439d315faea8214fe8e815c00261b80615%22%5D%2C%22gen%22%3A%220d248e82c62c9386878327d491c762a002152d42ab2c391a31c44d9f62675ddf%22%2C%22fn%22%3A%229f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08%22%2C%22ct%22%3A%22375aba919c30870659093b7ddcf6045ff7a8624dd4dba49ced8981bd4d0666e0%22%2C%22zip%22%3A%5B%228d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92%22%5D%2C%22madid%22%3A%22c20fa16907343eef642d10f0bdb81bf629e6aaf6c906f26eabda079ca9e5ab67%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22ln%22%3A%22dcf000c2386fb76d22cefc0d118a8511bb75999019cd373df52044bccd1bd251%22%7D%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22IND%22%2C%22value%22%3A100%2C%22order_id%22%3A%22485893487985894998%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22quantity%22%3A1%2C%22brand%22%3A%22Levis%22%2C%22category%22%3A%22Merch%22%7D%5D%2C%22custom_data%22%3A%7B%22extern_id%22%3A%22user%401%22%2C%22event_name%22%3A%22Cart%20Checkout%22%2C%22event_time%22%3A1663761919%2C%22currency%22%3A%22IND%22%2C%22value%22%3A100%2C%22email%22%3A%221c5e54849f5c711ce38fa60716fbbe44bff478f9ca250897b39cdfc2438cd1bd%22%2C%22phone%22%3A%2274a39482392f83119041d571d5dace439d315faea8214fe8e815c00261b80615%22%2C%22gen%22%3A%220d248e82c62c9386878327d491c762a002152d42ab2c391a31c44d9f62675ddf%22%2C%22fn%22%3A%229f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08%22%2C%22ct%22%3A%22375aba919c30870659093b7ddcf6045ff7a8624dd4dba49ced8981bd4d0666e0%22%2C%22zip%22%3A%228d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92%22%2C%22madid%22%3A%22c20fa16907343eef642d10f0bdb81bf629e6aaf6c906f26eabda079ca9e5ab67%22%2C%22contents%22%3A%5B%7B%22id%22%3A%22product-bacon-jam%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22%22%7D%2C%7B%22id%22%3A%22product-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%2C%7B%22id%22%3A%22offer-t-shirt%22%2C%22category%22%3A%22Merch%22%2C%22brand%22%3A%22Levis%22%7D%5D%2C%22order_id%22%3A%22485893487985894998%22%2C%22upload_tag%22%3A%22test%20campaign%22%2C%22client_user_agent%22%3A%22Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_15_3)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F83.0.4103.97%20Safari%2F537.36%22%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22ln%22%3A%22dcf000c2386fb76d22cefc0d118a8511bb75999019cd373df52044bccd1bd251%22%2C%22shipping%22%3A4%2C%22coupon%22%3A%22APPARELSALE%22%7D%2C%22event_source_url%22%3A%22http%3A%2F%2F0.0.0.0%3A1112%2Ftests%2Fhtml%2Fecomm_test.html%22%2C%22event_name%22%3A%22AddToCart%22%2C%22content_type%22%3A%22e-commerce%22%7D%5D&access_token=ABC...",
							"headers": {},
							"params": {},
							"body": {
								"JSON": {},
								"JSON_ARRAY": {},
								"XML": {},
								"FORM": {}
							},
							"files": {},
							"userId": ""
						},
						"statusCode": 200
					}
				]
			}
		}
	}
]