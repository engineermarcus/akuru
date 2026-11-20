import "dotenv/config";
// Every setting is: process.env.NAME || "value". Booleans and numbers are resolved in main/config.js.

// --- ACCOUNT ---
export const session = process.env.SESSION || "";
export const phone = process.env.PHONE || "";
export const prefix = process.env.PREFIX || "%";

// --- STATUS ---
export const autoViewStatus = process.env.AUTO_VIEW_STATUS || "true";
export const autoReactStatus = process.env.AUTO_REACT_STATUS || "true";
export const autoPostStatus = process.env.AUTO_POST_STATUS || "false";
export const statusEmojis = ["🔥","✨","⚡","🥰","👏","🌟","💯","😍","🎉","🤩","🙌","💎","🌸","🚀","😎","🫡","🤍","🧡","💛","💙","💜","💫","👑","🌈","💐","🥳","🪄","🦋","🎈","🌺","🌹","🕊️","🍹","🎯","🏆","💃","🕺","🍿"];

// --- RECOVERY ---
export const antiDelete = process.env.ANTI_DELETE || "true";
export const antiViewOnce = process.env.ANTI_VIEW_ONCE || "true";

// --- SERVERS ---
export const previewPort = process.env.PREVIEW_PORT || "5050";
export const pairSiteUrl = process.env.PAIR_SITE_URL || "http://127.0.0.1:3000";

// --- GROUPS ---
export const antiLink = process.env.ANTI_LINK || "true";
export const antiLinkWarns = process.env.ANTI_LINK_WARNS || "1";
export const welcome = process.env.WELCOME || "true";
export const goodbye = process.env.GOODBYE || "false";

// Optional custom messages. Leave empty ("") to use the built-in default.
// Placeholders: @user (member being welcomed/removed), @group (group name), @count (member count)
// Turn the feature off completely with WELCOME="false" / GOODBYE="false" above.
// A per-group message set with %setwelcome / %setgoodbye still overrides these.
export const welcomeMessage = process.env.WELCOME_MESSAGE || "Welcome, I, I hope you had a pleasant moment. Well, this is a beginning";
export const goodbyeMessage = process.env.GOODBYE_MESSAGE || "";
