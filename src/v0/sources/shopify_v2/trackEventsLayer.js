const get = require('get-value');
const {
  RUDDER_ECOM_MAP,
  NO_OPERATION_SUCCESS,
  SHOPIFY_TO_RUDDER_ECOM_EVENTS_MAP,
  INTEGRATION,
  SHOPIFY_NON_ECOM_TRACK_MAP,
  MAPPING_CATEGORIES,
  ECOM_MAPPING_JSON,
  lineItemsMappingJSON,
  LINE_ITEM_EXCLUSION_FIELDS,
} = require('./config');
const { idResolutionLayer } = require('./identityResolutionLayer');
const { enrichPayload } = require('./enrichmentLayer');
const Message = require('../message');
const { EventType } = require('../../../constants');
const stats = require('../../../util/stats');
const {
  createPropertiesForEcomEvent,
  getProductsListFromLineItems,
  extractEmailFromPayload,
} = require('./commonUtils');
const {
  removeUndefinedAndNullValues,
  constructPayload,
  extractCustomFields,
} = require('../../util');

const trackLayer = {
  getProductsListFromLineItems(lineItems) {
    if (!lineItems || lineItems.length === 0) {
      return [];
    }
    const products = [];
    lineItems.forEach((lineItem) => {
      const product = constructPayload(lineItem, lineItemsMappingJSON);
      extractCustomFields(lineItem, product, 'root', LINE_ITEM_EXCLUSION_FIELDS);
      products.push(product);
    });
    return products;
  },

  createPropertiesForEcomEvent(message, shopifyTopic) {
    const mappedPayload = constructPayload(
      message,
      ECOM_MAPPING_JSON[RUDDER_ECOM_MAP[shopifyTopic].name],
    );
    // extractCustomFields(message, mappedPayload, 'root', PROPERTIES_MAPPING_EXCLUSION_FIELDS);
    if (RUDDER_ECOM_MAP[shopifyTopic].lineItems) {
      const { line_items: lineItems } = message;
      const productsList = getProductsListFromLineItems(lineItems);
      mappedPayload.products = productsList;
    }

    return mappedPayload;
  },

  /**
   * This function creates the ecom event specific payload through mapping jsons
   * @param {*} message
   * @param {*} shopifyTopic
   * @returns mapped payload for an ecom event
   */
  ecomPayloadBuilder(event, shopifyTopic) {
    const message = new Message(INTEGRATION);
    message.setEventType(EventType.TRACK);
    message.setEventName(RUDDER_ECOM_MAP[shopifyTopic].event);

    let properties = createPropertiesForEcomEvent(event, shopifyTopic);
    properties = removeUndefinedAndNullValues(properties);
    message.properties = properties;
    if (event.updated_at) {
      // converting shopify updated_at timestamp to rudder timestamp format
      message.setTimestamp(new Date(event.updated_at).toISOString());
    }
    enrichPayload.setExtraNonEcomProperties(message, event, shopifyTopic);
    return message;
  },

  /**
   * This function builds the payload for general track events i.e. non-ecom events
   * @param {*} event
   * @param {*} shopifyTopic
   * @returns
   */
  trackPayloadBuilder(event, shopifyTopic) {
    const message = new Message(INTEGRATION);
    message.setEventType(EventType.TRACK);
    message.setEventName(SHOPIFY_NON_ECOM_TRACK_MAP[shopifyTopic]);
    const excludedKeys = [
      'type',
      'event',
      'line_items',
      'customer',
      'shipping_address',
      'billing_address',
    ];
    const properties = Object.keys(event).reduce((result, key) => {
      if (!excludedKeys.includes(key)) {
        // eslint-disable-next-line no-param-reassign
        result[key] = event[key];
      }
      return result;
    }, {});

    message.properties = { ...message.properties, ...properties };
    // eslint-disable-next-line camelcase
    const { line_items: lineItems } = event;
    const productsList = getProductsListFromLineItems(lineItems); // mapping of line_items will be done here
    message.setProperty('properties.products', productsList);
    return message;
  },

  /**
   * It checks if the event is valid or not based on previous cartItems
   * @param {*} inputEvent
   * @returns true if event is valid else false
   */
  // isValidCartEvent(newCartItems, prevCartItems) {
  //   return !(prevCartItems === newCartItems);
  // },

  // async updateCartItemsInRedis(cartToken, newCartItemsHash, metricMetadata) {
  //   const value = ['itemsHash', newCartItemsHash];
  //   try {
  //     stats.increment('shopify_redis_calls', {
  //       type: 'set',
  //       field: 'itemsHash',
  //       ...metricMetadata,
  //     });
  //     await RedisDB.setVal(`${cartToken}`, value);
  //   } catch (e) {
  //     logger.debug(`{{SHOPIFY::}} itemsHash set call Failed due redis error ${e}`);
  //     stats.increment('shopify_redis_failures', {
  //       type: 'set',
  //       ...metricMetadata,
  //     });
  //   }
  // },

  // /**
  //  * This function checks for duplicate cart update event by checking the lineItems hash of previous cart update event
  //  * and comapre it with the received lineItems hash.
  //  * Also if redis is down or there is no lineItems hash for the given cartToken we be default take it as a valid cart update event
  //  * @param {*} inputEvent
  //  * @param {*} metricMetadata
  //  * @returns boolean
  //  */
  // async checkAndUpdateCartItems(inputEvent, redisData, metricMetadata) {
  //   const cartToken = inputEvent.token || inputEvent.id;
  //   const itemsHash = redisData?.itemsHash;
  //   if (itemsHash) {
  //     const newCartItemsHash = getHashLineItems(inputEvent);
  //     const isCartValid = this.isValidCartEvent(newCartItemsHash, itemsHash);
  //     if (!isCartValid) {
  //       return false;
  //     }
  //     await this.updateCartItemsInRedis(cartToken, newCartItemsHash, metricMetadata);
  //   } else {
  //     const { created_at, updated_at } = inputEvent;
  //     const timeDifference = Date.parse(updated_at) - Date.parse(created_at);
  //     const isTimeWithinThreshold = timeDifference < maxTimeToIdentifyRSGeneratedCall;
  //     const isLineItemsEmpty = inputEvent?.line_items?.length === 0;

  //     if (isTimeWithinThreshold && isLineItemsEmpty) {
  //       return false;
  //     }
  //   }
  //   return true;
  // },

  /**
   * This function will update the cart state in redis
   * @param {*} updatedCartState
   * @param {*} cart_token
   */
  // async updateCartState(updatedCartState, cart_token) {
  //   await RedisDB.setVal(`${cart_token}`, updatedCartState);
  // },
  /**
   * This function return the updated event name for carts_update event based on previous cart state
   * And updates the state of cart in redis as well
   * @param {*} event
   * @param {*} redisData
   */
  // checkForProductAddedOrRemovedAndUpdate(event, redisData) {
  //   const { productsListInfo } = redisData;
  //   /*
  //   productsListInfo = {
  //     `productId+variantId` : quantity
  //   }
  //   */
  //   let productsListInfoFromInput;
  //   event?.line_items.forEach(product => {
  //     const key = `${product.productId} + ${product.variantId}`;
  //     const valFromPayload = product.quantity;
  //     const prevVal = productsListInfo?.[key];
  //     if (prevVal > valFromPayload) { }
  //   })
  // },

  /**
   * This function handles the event from shopify side which is mapped to rudder ecom event based upon the contents of payload.
   * @param {*} event
   * @param {*} eventName
   * @param {*} redisData
   * @returns the updated name of the payload
   */
  getUpdatedEventName(event, eventName, redisData) {
    let updatedEventName;

    // if (eventName === 'carts_update') {
    //   return NO_OPERATION_SUCCESS
    //   // this.checkForProductAddedOrRemovedAndUpdate(event, redisData);
    //   // return 'carts_update';
    // }
    /* This function will check for cart_update if its is due Product Added or Product Removed and
      for checkout_update which step is completed or started
    */

    if (eventName === 'checkouts_update') {
      if (event.completed_at) {
        updatedEventName = 'checkout_step_completed';
      } else if (!event.gateway) {
        updatedEventName = 'payment_info_entered';
      }
      updatedEventName = 'checkout_step_viewed';
    }

    return updatedEventName;
  },

  async processTrackEvent(event, eventName, redisData, metricMetadata) {
    let updatedEventName = eventName;
    let payload;
    if (SHOPIFY_TO_RUDDER_ECOM_EVENTS_MAP.includes(eventName)) {
      if (eventName === 'carts_update') {
        return NO_OPERATION_SUCCESS;
        // const isValidEvent = await this.checkAndUpdateCartItems(event, redisData, metricMetadata);
        // if (!isValidEvent) {
        //   return NO_OPERATION_SUCCESS;
        // }
      }
      updatedEventName = this.getUpdatedEventName(event, eventName, redisData);
    }
    if (Object.keys(RUDDER_ECOM_MAP).includes(updatedEventName)) {
      payload = this.ecomPayloadBuilder(event, updatedEventName);
    } else if (Object.keys(SHOPIFY_NON_ECOM_TRACK_MAP).includes(updatedEventName)) {
      payload = this.trackPayloadBuilder(event, updatedEventName);
    } else {
      stats.increment('invalid_shopify_event', {
        event: eventName,
        ...metricMetadata,
      });
      return NO_OPERATION_SUCCESS;
    }
    if (!get(payload, 'traits.email')) {
      const email = extractEmailFromPayload(event);
      if (email) {
        payload.setProperty('traits.email', email);
      }
    }
    // Map Customer details if present customer,ship_Add,bill,userId
    if (event.customer) {
      payload.setPropertiesV2(event.customer, MAPPING_CATEGORIES[EventType.IDENTIFY]);
    }
    if (event.shipping_address) {
      payload.setProperty('traits.shippingAddress', event.shipping_address);
    }
    if (event.billing_address) {
      payload.setProperty('traits.billingAddress', event.billing_address);
    }
    if (!payload.userId && event.user_id) {
      payload.setProperty('userId', event.user_id);
    }
    payload = idResolutionLayer.resolveId(payload, redisData, eventName);
    return payload;
  },
};
module.exports = { trackLayer };
