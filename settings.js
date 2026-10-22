import "dotenv/config";
// Every setting is: process.env.NAME || "value". Booleans and numbers are resolved in main/config.js.

// --- ACCOUNT ---
export const session = process.env.SESSION || "1a651f9c01ad1943fb883ba0a52ab154";
export const phone = process.env.PHONE || "";
export const prefix = process.env.PREFIX || "$";

// --- STATUS ---
export const autoViewStatus = process.env.AUTO_VIEW_STATUS || "true";
export const autoReactStatus = process.env.AUTO_REACT_STATUS || "true";
export const autoPostStatus = process.env.AUTO_POST_STATUS || "false";
export const statusEmojis = ["💚","❤️","🔥","✨","⚡","🥰","👏","🌟","💯","😍","🎉","🤩","🙌","💎","🌸","🚀","😎","🫡","🤍","🧡","💛","💙","💜","💫","👑","🌈","💐","🥳","🪄","🦋","🎈","🌺","🌹","🕊️","🍹","🎯","🏆","💃","🕺","🍿"];

// --- RECOVERY ---
export const antiDelete = process.env.ANTI_DELETE || "true";
export const antiViewOnce = process.env.ANTI_VIEW_ONCE || "true";

// --- SERVERS ---
export const previewPort = process.env.PREVIEW_PORT || "5050";
export const pairSiteUrl = process.env.PAIR_SITE_URL || "http://209.159.148.190:3000";

// --- GROUPS ---
export const antiLink = process.env.ANTI_LINK || "true";
export const antiLinkWarns = process.env.ANTI_LINK_WARNS || "3";
export const welcome = process.env.WELCOME || "true";
export const goodbye = process.env.GOODBYE || "true";

// Optional custom messages. Leave empty ("") to use the built-in default.
// Placeholders: @user (member being welcomed/removed), @group (group name), @count (member count)
// Turn the feature off completely with WELCOME="false" / GOODBYE="false" above.
// A per-group message set with %setwelcome / %setgoodbye still overrides these.
export const welcomeMessage = process.env.WELCOME_MESSAGE || "";
export const goodbyeMessage = process.env.GOODBYE_MESSAGE || "";
