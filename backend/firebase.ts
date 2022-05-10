import admin from "firebase-admin";
import serviceAccount from "./.serviceKey.json";

export const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any)
});