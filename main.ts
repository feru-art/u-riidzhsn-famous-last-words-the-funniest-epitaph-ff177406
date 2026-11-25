// Entry for the famous-last-words epitaph bounty.
//
// The program emits one carved line: a confession that sends the
// speaker's children, and every later archaeologist, digging for a
// treasure that was never buried with the body.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const confession: string = "I told my kids the treasure was buried with me.";
const sendOff: string = "Good luck, archaeologists.";

function composeEpitaph(): string {
  return [confession, sendOff].join(" ");
}

function withinCharacterGate(text: string): boolean {
  const characterCount: number = [...text].length;
  return characterCount >= 1 && characterCount <= 150;
}

function carriesWords(text: string): boolean {
  return text.trim().length > 0;
}

function staysOnOneLine(text: string): boolean {
  return !text.includes("\n") && !text.includes("\r");
}

function checkEpitaph(text: string): void {
  if (!withinCharacterGate(text)) {
    throw new Error("epitaph length outside the 1-150 character gate");
  }
  if (!carriesWords(text)) {
    throw new Error("epitaph must not be only white space");
  }
  if (!staysOnOneLine(text)) {
    throw new Error("epitaph must stay on one line");
  }
}

function emitEpitaph(text: string): void {
  const outputPath: string = "/output/entry.txt";
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, text, "utf8");
}

const epitaph: string = composeEpitaph();
checkEpitaph(epitaph);
emitEpitaph(epitaph);
