import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const EPITAPH = "I told my kids the treasure was buried with me. Good luck, archaeologists.";

function assertSingleLine(text: string): void {
  if (text.trim().length === 0 || text.includes("\n") || text.includes("\r")) {
    throw new Error("Epitaph must be one non-empty line.");
  }
}

function writeEpitaph(): void {
  assertSingleLine(EPITAPH);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, Buffer.from(EPITAPH, "utf8"));
}

writeEpitaph();
