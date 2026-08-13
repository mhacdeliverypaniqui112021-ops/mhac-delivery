MHAC DELIVERY - CUSTOMER INTERFACE UPDATE

This package is based on the current MHAC DELIVERY project files.

CUSTOMER APP CHANGES:
- Removes the large FOOD DELIVERY hero from the opening customer screen.
- Shows MHAC DELIVERY header/logo.
- Shows DELIVERY RATE immediately below the header.
- Shows ADMIN APP and RIDER APP buttons.
- Shows CHOOSE STORE with Jollibee, McDonald's, Local Food, Mang Inasal and KFC.
- Clicking a store opens its complete menu.
- Food/add-ons can be selected and added to cart.
- Maximum 2 stores and automatic +P5 for the second store.
- Keeps GPS and automatic road-distance/delivery-fee calculation.
- Keeps checkout/order creation and tracking flow.

MENU MANAGER:
- admin-menu.html remains included and is not shown on the customer opening screen.

DEPLOYMENT:
1. Extract this ZIP.
2. Upload/replace the files in your GitHub repository root.
3. Keep logo.png in the same folder as index.html.
4. Commit the changes.
5. Open GitHub Pages and refresh the site. If an old page appears, hard-refresh the browser or clear site cache.

IMPORTANT:
The current order/admin/rider data flow is still browser-local/demo storage. A true customer-phone -> admin-device -> rider-phone live system requires a shared online database (Firebase/Firestore) as the next production step.
