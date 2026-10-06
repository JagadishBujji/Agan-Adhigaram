const DEFAULT_DELIVERY_CHARGE = 50; // for India, used when admin has not set the charge

// old orders have the logistic name stored as key
const LEGACY_LOGISTICS = {
  stcourier: {
    name: "ST Courier",
    tracking_url: "https://stcourier.com/track/shipment",
  },
  indiapost: {
    name: "India Post",
    tracking_url:
      "https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx",
  },
};

// delivery charge set by admin (app/meta), default is used when it is missing or invalid
function getDeliveryCharge(meta) {
  const charge = meta ? meta.delivery_charge : undefined;
  return typeof charge === "number" && Number.isFinite(charge) && charge >= 0
    ? charge
    : DEFAULT_DELIVERY_CHARGE;
}

// returns null when the order is not dispatched with logistics details
function getLogisticsDetails(logistics) {
  if (!logistics || !logistics.name) {
    return null;
  }
  const legacy = LEGACY_LOGISTICS[logistics.name];
  const trackingUrl = logistics.tracking_url || (legacy && legacy.tracking_url);

  return {
    name: legacy ? legacy.name : logistics.name,
    number: logistics.number || "",
    trackingUrl: /^https?:\/\//i.test(trackingUrl || "") ? trackingUrl : "",
  };
}

export { DEFAULT_DELIVERY_CHARGE, getDeliveryCharge, getLogisticsDetails };
